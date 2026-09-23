# Hung-Hsun Han — Portfolio

Personal portfolio website for Hung-Hsun Han (韓汯勳), an Enterprise AI Engineer focused on Agentic AI, RAG, Computer Vision, and cloud AI infrastructure.

Live at: `https://hunghsun.github.io`

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, static export)
- TypeScript
- Tailwind CSS
- Framer Motion (scroll/entrance animations)
- lucide-react (icons)

The site is fully statically exported (`output: "export"`) so it can be hosted on GitHub Pages with no server runtime.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

This produces a static site in the `out/` directory (including `index.html`), ready to be served by any static host.

## Deployment

Deployment is fully automated via GitHub Actions (`.github/workflows/deploy.yml`):

1. Push to `main`
2. GitHub Actions installs dependencies, lints, and runs `npm run build`
3. The static `out/` directory is uploaded as a Pages artifact
4. GitHub Pages deploys it automatically

No manual deployment steps are required. A `public/.nojekyll` file is included so GitHub Pages serves the exported `_next/` assets correctly.

## Folder Structure

```text
app/                  Next.js App Router entry (layout, page, global styles)
components/           UI components (Hero, Projects, ArchitectureDiagram, etc.)
data/                 Typed content data (projects, experience, expertise, tech stack, ...)
public/               Static assets (favicon, OG image, .nojekyll)
.github/workflows/    CI/CD pipeline for GitHub Pages deployment
```

All page content (projects, experience, technologies, expertise, principles, stories) is data-driven from the `data/` directory rather than hardcoded inside components.
