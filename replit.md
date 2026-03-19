# Workspace

## Overview

pnpm workspace monorepo. Pure static React website — no backend, no database.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9

## Artifacts

### `artifacts/vextor-website` (`@workspace/vextor-website`)

Vextor marketing website — a modern, animated single-page app with dark/light mode.

- **Tech Stack**: React 18 + Vite, Tailwind CSS v4, Framer Motion, Lucide React
- **Design**: Glassmorphism, Bento Grids, Electric Cyan (#00F2FF) + Deep Space Blue (#0A192F) + Ashoka Gold (#FF9933)
- **Typography**: Sora (headlines), Inter (body) via Google Fonts
- **Pages**:
  - **Home**: Hero with letter-stagger animation, SVG grid background, before/after comparison slider, Bento grid solutions
  - **Services**: Workflow automation flowchart, parallax phone mockup, infrastructure status dashboard
  - **SME Advantage / Pricing**: Cost comparison table, countdown timer to August 15, 2047
  - **Contact**: 3-step smart quote form with WhatsApp lead generation
- **Features**: Floating WhatsApp button, scroll-triggered reveal animations, dark/light mode toggle, mobile-first responsive
- **India branding**: CSS tricolor `IndiaFlag` component used in Footer and PricingPage (no emoji dependency)

## Structure

```text
workspace/
├── artifacts/
│   └── vextor-website/     # Static React + Vite SPA
├── scripts/                # Utility scripts
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, scripts)
├── tsconfig.base.json      # Shared TS options
├── tsconfig.json           # Root TS config (no project references)
└── package.json            # Root package
```

## Key Notes

- **Fully static** — no Express server, no PostgreSQL, no Drizzle ORM, no API client
- `pnpm run build` — runs typecheck then builds the Vite SPA
- `pnpm run typecheck` — runs TS checks across all packages
- Vite dev server requires `PORT` and `BASE_PATH` env vars (set in workflow command)
- `scripts/post-merge.sh` — only runs `pnpm install --frozen-lockfile`
