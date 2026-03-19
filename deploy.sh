#!/usr/bin/env bash
# =============================================================================
#  Vextor Website — Deploy with Cloudflare Tunnel
#  Runs the production build locally at port 3005, then exposes it via
#  Cloudflare Tunnel (no Nginx, no open firewall ports needed).
#
#  Usage
#  ─────
#  Quick tunnel (temporary *.trycloudflare.com URL — great for testing):
#    sudo bash deploy.sh
#
#  Named tunnel (your own domain, permanent):
#    sudo TUNNEL_NAME=vextor TUNNEL_DOMAIN=vextor.in bash deploy.sh
#    (You must have already run: cloudflared tunnel login)
#
#  Redeploy after a code change:
#    sudo bash deploy.sh
# =============================================================================

set -euo pipefail

# ── Colour helpers ────────────────────────────────────────────────────────────
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
CYAN='\033[0;36m'; BOLD='\033[1m'; RESET='\033[0m'
info()    { echo -e "${CYAN}[INFO]${RESET}  $*"; }
success() { echo -e "${GREEN}[OK]${RESET}    $*"; }
warn()    { echo -e "${YELLOW}[WARN]${RESET}  $*"; }
error()   { echo -e "${RED}[ERROR]${RESET} $*"; exit 1; }

# ── Configuration ─────────────────────────────────────────────────────────────
APP_PORT="${APP_PORT:-3005}"               # local port the app runs on
NODE_VERSION="${NODE_VERSION:-20}"         # Node.js LTS major version
PNPM_VERSION="${PNPM_VERSION:-9}"          # pnpm major version
PM2_APP_NAME="${PM2_APP_NAME:-vextor}"     # PM2 process name

# Cloudflare Tunnel options
TUNNEL_NAME="${TUNNEL_NAME:-}"            # leave blank → quick tunnel (trycloudflare.com)
TUNNEL_DOMAIN="${TUNNEL_DOMAIN:-}"        # e.g. vextor.in (only for named tunnels)

[[ "$EUID" -ne 0 ]] && error "Please run as root: sudo bash deploy.sh"
command -v apt-get &>/dev/null || error "This script requires apt-get (Ubuntu/Debian only)."

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo -e "\n${BOLD}╔════════════════════════════════════════════╗${RESET}"
echo -e "${BOLD}║   Vextor — Cloudflare Tunnel Deployment     ║${RESET}"
echo -e "${BOLD}╚════════════════════════════════════════════╝${RESET}\n"
info "App port    : ${APP_PORT}"
info "Tunnel type : ${TUNNEL_NAME:-quick (trycloudflare.com)}"
[[ -n "$TUNNEL_DOMAIN" ]] && info "Domain      : ${TUNNEL_DOMAIN}"
echo ""

# ─────────────────────────────────────────────────────────────────────────────
# STEP 1 — System packages
# ─────────────────────────────────────────────────────────────────────────────
info "Updating package index…"
apt-get update -qq
apt-get install -y -q curl git

success "System packages ready."

# ─────────────────────────────────────────────────────────────────────────────
# STEP 2 — Node.js
# ─────────────────────────────────────────────────────────────────────────────
if ! command -v node &>/dev/null || \
   [[ "$(node -e 'process.stdout.write(process.version.split(".")[0].slice(1))')" -lt "$NODE_VERSION" ]]; then
  info "Installing Node.js ${NODE_VERSION} LTS…"
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
# STEP 4 — PM2 (process manager — keeps the app alive across reboots)
# ─────────────────────────────────────────────────────────────────────────────
if ! command -v pm2 &>/dev/null; then
  info "Installing PM2…"
  npm install -g pm2 --quiet
  success "PM2 $(pm2 -v) installed."
else
  success "PM2 $(pm2 -v) already present."
fi

# ─────────────────────────────────────────────────────────────────────────────
# STEP 5 — Cloudflared
# ─────────────────────────────────────────────────────────────────────────────
if ! command -v cloudflared &>/dev/null; then
  info "Installing cloudflared…"
  ARCH="$(dpkg --print-architecture)"   # amd64 or arm64
  curl -fsSL "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-${ARCH}.deb" \
    -o /tmp/cloudflared.deb
  dpkg -i /tmp/cloudflared.deb
  rm /tmp/cloudflared.deb
  success "cloudflared $(cloudflared --version | head -1) installed."
else
  success "cloudflared already present."
fi

# ─────────────────────────────────────────────────────────────────────────────
# STEP 6 — Build the app
# ─────────────────────────────────────────────────────────────────────────────
info "Installing workspace dependencies…"
cd "$SCRIPT_DIR"
pnpm install --frozen-lockfile

info "Building for production…"
PORT="$APP_PORT" BASE_PATH=/ pnpm --filter @workspace/vextor-website run build

BUILD_DIR="$SCRIPT_DIR/artifacts/vextor-website/dist/public"
[[ -d "$BUILD_DIR" ]] || error "Build output not found at ${BUILD_DIR}"
success "Build complete."

# ─────────────────────────────────────────────────────────────────────────────
# STEP 7 — Serve the production build with vite preview via PM2
#           vite preview serves the dist/public/ folder at the given port
# ─────────────────────────────────────────────────────────────────────────────
info "Starting / restarting the app with PM2 on port ${APP_PORT}…"

# Stop any previous instance gracefully
pm2 delete "$PM2_APP_NAME" 2>/dev/null || true

pm2 start bash \
  --name "$PM2_APP_NAME" \
  -- -c "cd '$SCRIPT_DIR/artifacts/vextor-website' && PORT=$APP_PORT BASE_PATH=/ pnpm run serve"

# Save the PM2 process list so it survives reboots
pm2 save

# Ensure PM2 starts on boot (outputs a command — run it if not already set up)
STARTUP_CMD="$(pm2 startup | tail -1)"
if [[ "$STARTUP_CMD" == sudo* ]]; then
  eval "$STARTUP_CMD"
fi

success "App is running at http://127.0.0.1:${APP_PORT}"

# ─────────────────────────────────────────────────────────────────────────────
# STEP 8 — Cloudflare Tunnel
# ─────────────────────────────────────────────────────────────────────────────
# Stop any previous tunnel PM2 process
pm2 delete "cf-tunnel" 2>/dev/null || true

if [[ -z "$TUNNEL_NAME" ]]; then
  # ── Quick tunnel — no Cloudflare account needed ──────────────────────────
  info "Starting quick Cloudflare Tunnel (trycloudflare.com)…"
  warn "Quick tunnels are temporary. Use TUNNEL_NAME + TUNNEL_DOMAIN for a permanent URL."

  # Run cloudflared in PM2, write its URL to a log so we can display it
  pm2 start cloudflared \
    --name "cf-tunnel" \
    --log "$SCRIPT_DIR/.cf-tunnel.log" \
    -- tunnel --url "http://127.0.0.1:${APP_PORT}"

  pm2 save

  info "Waiting for tunnel URL (up to 15 s)…"
  for i in $(seq 1 15); do
    TUNNEL_URL="$(grep -oP 'https://[a-z0-9\-]+\.trycloudflare\.com' "$SCRIPT_DIR/.cf-tunnel.log" 2>/dev/null | head -1 || true)"
    [[ -n "$TUNNEL_URL" ]] && break
    sleep 1
  done

else
  # ── Named tunnel — permanent domain ──────────────────────────────────────
  [[ -z "$TUNNEL_DOMAIN" ]] && error "Set TUNNEL_DOMAIN when using a named tunnel (e.g. TUNNEL_DOMAIN=vextor.in)"

  info "Setting up named Cloudflare Tunnel: ${TUNNEL_NAME}…"

  # Create tunnel if it doesn't exist yet
  if ! cloudflared tunnel list 2>/dev/null | grep -q "$TUNNEL_NAME"; then
    info "Creating new tunnel '${TUNNEL_NAME}'…"
    cloudflared tunnel create "$TUNNEL_NAME"
  else
    info "Tunnel '${TUNNEL_NAME}' already exists — reusing."
  fi

  # Write the tunnel config
  TUNNEL_ID="$(cloudflared tunnel list | awk "/$TUNNEL_NAME/ {print \$1}")"
  CF_CONFIG_DIR="${HOME}/.cloudflared"
  mkdir -p "$CF_CONFIG_DIR"

  cat > "$CF_CONFIG_DIR/config.yml" <<CONFIG
tunnel: ${TUNNEL_ID}
credentials-file: ${CF_CONFIG_DIR}/${TUNNEL_ID}.json

ingress:
  - hostname: ${TUNNEL_DOMAIN}
    service: http://127.0.0.1:${APP_PORT}
  - hostname: www.${TUNNEL_DOMAIN}
    service: http://127.0.0.1:${APP_PORT}
  - service: http_status:404
CONFIG

  # Route the domain through the tunnel
  cloudflared tunnel route dns "$TUNNEL_NAME" "$TUNNEL_DOMAIN"      2>/dev/null || true
  cloudflared tunnel route dns "$TUNNEL_NAME" "www.${TUNNEL_DOMAIN}" 2>/dev/null || true

  pm2 start cloudflared \
    --name "cf-tunnel" \
    -- tunnel run "$TUNNEL_NAME"

  pm2 save
  TUNNEL_URL="https://${TUNNEL_DOMAIN}"
fi

# ─────────────────────────────────────────────────────────────────────────────
# Done
# ─────────────────────────────────────────────────────────────────────────────
echo ""
echo -e "${GREEN}${BOLD}╔══════════════════════════════════════════════╗${RESET}"
echo -e "${GREEN}${BOLD}║   Deployment complete!                        ║${RESET}"
echo -e "${GREEN}${BOLD}╚══════════════════════════════════════════════╝${RESET}"
echo ""
echo -e "  Local app  : ${CYAN}http://127.0.0.1:${APP_PORT}${RESET}"
if [[ -n "${TUNNEL_URL:-}" ]]; then
  echo -e "  Public URL : ${CYAN}${TUNNEL_URL}${RESET}"
else
  warn "Could not detect tunnel URL automatically. Check logs: pm2 logs cf-tunnel"
fi
echo ""
echo -e "  Useful commands:"
echo -e "    ${BOLD}pm2 list${RESET}              — see running processes"
echo -e "    ${BOLD}pm2 logs ${PM2_APP_NAME}${RESET}      — app logs"
echo -e "    ${BOLD}pm2 logs cf-tunnel${RESET}    — tunnel logs"
echo -e "    ${BOLD}pm2 restart ${PM2_APP_NAME}${RESET}   — restart app"
echo -e "    ${BOLD}sudo bash deploy.sh${RESET}   — full redeploy after code changes"
echo ""
