#!/usr/bin/env bash
# =============================================================================
#  Vextor Website — Ubuntu Deployment Script
#  Tested on: Ubuntu 22.04 LTS / 24.04 LTS
#  What it does:
#    1. Installs Node.js 20 LTS, pnpm, and Nginx (if missing)
#    2. Builds the production bundle
#    3. Copies static files to /var/www/vextor
#    4. Writes an Nginx site config with:
#         - SPA fallback routing  (so /about, /privacy, /terms work)
#         - Long-term caching for hashed assets
#         - No-cache for index.html
#         - Gzip compression
#         - Security headers
#    5. Enables the site and reloads Nginx
#    6. Optionally runs Certbot for a free HTTPS certificate
# =============================================================================

set -euo pipefail

# ── Colour helpers ────────────────────────────────────────────────────────────
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
CYAN='\033[0;36m'; BOLD='\033[1m'; RESET='\033[0m'
info()    { echo -e "${CYAN}[INFO]${RESET}  $*"; }
success() { echo -e "${GREEN}[OK]${RESET}    $*"; }
warn()    { echo -e "${YELLOW}[WARN]${RESET}  $*"; }
error()   { echo -e "${RED}[ERROR]${RESET} $*"; exit 1; }

# ── Configuration — edit these before running ─────────────────────────────────
DOMAIN="${DOMAIN:-vextor.in}"            # your domain (or server IP for testing)
WWW_ROOT="/var/www/vextor"               # where static files will live
NGINX_CONF="/etc/nginx/sites-available/vextor"
NGINX_LINK="/etc/nginx/sites-enabled/vextor"
NODE_VERSION="20"                        # Node.js LTS major version
PNPM_VERSION="9"                         # pnpm major version
ENABLE_HTTPS="${ENABLE_HTTPS:-false}"    # set to "true" to auto-run Certbot
CERTBOT_EMAIL="${CERTBOT_EMAIL:-}"       # required if ENABLE_HTTPS=true

# ── Guard: must be run as root ────────────────────────────────────────────────
[[ "$EUID" -ne 0 ]] && error "Please run as root: sudo bash deploy.sh"

# ── Detect Ubuntu ────────────────────────────────────────────────────────────
command -v apt-get &>/dev/null || error "This script requires apt-get (Ubuntu/Debian only)."

echo -e "\n${BOLD}╔══════════════════════════════════════════╗${RESET}"
echo -e "${BOLD}║   Vextor Website — Production Deployment  ║${RESET}"
echo -e "${BOLD}╚══════════════════════════════════════════╝${RESET}\n"

info "Domain   : ${DOMAIN}"
info "Web root : ${WWW_ROOT}"
info "HTTPS    : ${ENABLE_HTTPS}"
echo ""

# ─────────────────────────────────────────────────────────────────────────────
# STEP 1 — System packages
# ─────────────────────────────────────────────────────────────────────────────
info "Updating package index…"
apt-get update -qq

info "Installing dependencies (curl, git, nginx, certbot)…"
apt-get install -y -q curl git nginx certbot python3-certbot-nginx

success "System packages ready."

# ─────────────────────────────────────────────────────────────────────────────
# STEP 2 — Node.js
# ─────────────────────────────────────────────────────────────────────────────
if ! command -v node &>/dev/null || [[ "$(node -e 'process.stdout.write(process.version.split(".")[0].slice(1))')" -lt "$NODE_VERSION" ]]; then
  info "Installing Node.js ${NODE_VERSION} LTS via NodeSource…"
  curl -fsSL "https://deb.nodesource.com/setup_${NODE_VERSION}.x" | bash -
  apt-get install -y -q nodejs
  success "Node.js $(node -v) installed."
else
  success "Node.js $(node -v) already present."
fi

# ─────────────────────────────────────────────────────────────────────────────
# STEP 3 — pnpm
# ─────────────────────────────────────────────────────────────────────────────
if ! command -v pnpm &>/dev/null; then
  info "Installing pnpm ${PNPM_VERSION}…"
  npm install -g "pnpm@${PNPM_VERSION}" --quiet
  success "pnpm $(pnpm -v) installed."
else
  success "pnpm $(pnpm -v) already present."
fi

# ─────────────────────────────────────────────────────────────────────────────
# STEP 4 — Build
# ─────────────────────────────────────────────────────────────────────────────
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
info "Installing workspace dependencies…"
cd "$SCRIPT_DIR"
pnpm install --frozen-lockfile

info "Building Vextor website for production…"
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/vextor-website run build

BUILD_DIR="$SCRIPT_DIR/artifacts/vextor-website/dist/public"
[[ -d "$BUILD_DIR" ]] || error "Build output not found at $BUILD_DIR — build may have failed."
success "Build complete. Output: $BUILD_DIR"

# ─────────────────────────────────────────────────────────────────────────────
# STEP 5 — Deploy static files
# ─────────────────────────────────────────────────────────────────────────────
info "Deploying to ${WWW_ROOT}…"
mkdir -p "$WWW_ROOT"
# rsync keeps permissions and deletes stale files from previous deploys
rsync -a --delete "$BUILD_DIR/" "$WWW_ROOT/"
chown -R www-data:www-data "$WWW_ROOT"
chmod -R 755 "$WWW_ROOT"
success "Files deployed to ${WWW_ROOT}."

# ─────────────────────────────────────────────────────────────────────────────
# STEP 6 — Nginx configuration
# ─────────────────────────────────────────────────────────────────────────────
info "Writing Nginx config: ${NGINX_CONF}…"

cat > "$NGINX_CONF" <<NGINX
# Vextor Website — generated by deploy.sh
# Static SPA served with Nginx

# Redirect bare IP / HTTP → HTTPS (or www) when SSL is active
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN} www.${DOMAIN};

    # Used by Certbot for the ACME challenge
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    # All other traffic: serve the app (Certbot will rewrite this to 301 redirect)
    location / {
        root ${WWW_ROOT};
        index index.html;

        # SPA fallback — all client-side routes (e.g. /about, /privacy) resolve to index.html
        try_files \$uri \$uri/ /index.html =404;
    }

    # ── Cache headers ──────────────────────────────────────────────────────
    # Hashed assets (JS/CSS chunks) — cache forever, they change only when content changes
    location ~* ^/assets/ {
        root ${WWW_ROOT};
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;
    }

    # index.html — never cache so new deploys are picked up immediately
    location = /index.html {
        root ${WWW_ROOT};
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires "0";
    }

    # Static root assets (favicon, logo, opengraph) — short cache
    location ~* \.(svg|png|jpg|jpeg|webp|ico|gif)$ {
        root ${WWW_ROOT};
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
        access_log off;
    }

    # ── Security headers ───────────────────────────────────────────────────
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # ── Gzip compression ───────────────────────────────────────────────────
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_min_length 256;
    gzip_types
        text/plain text/css text/xml application/json
        application/javascript application/xml+rss
        application/atom+xml image/svg+xml
        font/truetype font/opentype application/vnd.ms-fontobject;
}
NGINX

# Enable the site
ln -sf "$NGINX_CONF" "$NGINX_LINK"

# Remove the default Nginx page if it's still enabled
[[ -L /etc/nginx/sites-enabled/default ]] && rm /etc/nginx/sites-enabled/default && warn "Removed default Nginx site."

# Test config before reloading
nginx -t || error "Nginx config test failed — check ${NGINX_CONF} for syntax errors."
systemctl reload nginx
success "Nginx configured and reloaded."

# ─────────────────────────────────────────────────────────────────────────────
# STEP 7 — Optional HTTPS via Certbot
# ─────────────────────────────────────────────────────────────────────────────
if [[ "$ENABLE_HTTPS" == "true" ]]; then
  [[ -z "$CERTBOT_EMAIL" ]] && error "Set CERTBOT_EMAIL before running with ENABLE_HTTPS=true"
  info "Requesting Let's Encrypt certificate for ${DOMAIN}…"
  certbot --nginx \
    --non-interactive \
    --agree-tos \
    --email "$CERTBOT_EMAIL" \
    --domains "${DOMAIN},www.${DOMAIN}" \
    --redirect
  success "HTTPS enabled for ${DOMAIN}."

  # Auto-renew via cron (certbot installs its own timer on Ubuntu 22+ but add as backup)
  (crontab -l 2>/dev/null; echo "0 3 * * * certbot renew --quiet --post-hook 'systemctl reload nginx'") | sort -u | crontab -
  info "Auto-renewal cron added."
fi

# ─────────────────────────────────────────────────────────────────────────────
# Done
# ─────────────────────────────────────────────────────────────────────────────
echo ""
echo -e "${GREEN}${BOLD}╔══════════════════════════════════════════════╗${RESET}"
echo -e "${GREEN}${BOLD}║   Deployment complete!                        ║${RESET}"
echo -e "${GREEN}${BOLD}╚══════════════════════════════════════════════╝${RESET}"
echo ""
if [[ "$ENABLE_HTTPS" == "true" ]]; then
  echo -e "  Site live at: ${CYAN}https://${DOMAIN}/${RESET}"
else
  echo -e "  Site live at: ${CYAN}http://${DOMAIN}/${RESET}"
  echo -e "  ${YELLOW}Tip: re-run with ENABLE_HTTPS=true CERTBOT_EMAIL=you@example.com to add HTTPS${RESET}"
fi
echo ""
echo -e "  To redeploy after a code change:"
echo -e "    ${BOLD}sudo bash deploy.sh${RESET}"
echo ""
