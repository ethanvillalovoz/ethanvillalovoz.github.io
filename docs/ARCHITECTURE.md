# Architecture

This portfolio is a small Next.js App Router site with a static public asset layer for research PDFs, resumes, project images, and standalone project microsites.

## Core App

```text
src/app/
  page.tsx          Home page
  publications/     Publications page
  projects/         Projects page
  teaching/         Teaching page
  layout.tsx        Global metadata, navigation, footer, structured data
  providers.tsx     Theme provider

src/components/
  Navbar.tsx        Responsive navigation and active-route state
  Footer.tsx        Site footer
  ThemeToggle.tsx   Hydration-safe light/dark/system control
  ui/FadeIn.tsx     Shared animation primitives

src/data/
  projects.ts       Project cards
  publications.ts   Publication entries
  teaching.ts       Teaching entries
```

The pages are intentionally thin: they import structured content from `src/data` and focus on rendering. This makes it easier to reuse the website as a template without editing large JSX files.

## Static Microsites

Standalone academic project pages live under `public/data/` and are served through rewrites in `next.config.ts`.

| Public route | Static source |
| --- | --- |
| `/rag/` | `public/data/capstone/index.html` |
| `/gaussian-splatting-physics/` | `public/data/cgai_dream_worlds/index.html` |

These pages intentionally remain static HTML so project artifacts can be preserved close to their original presentation while still living inside the portfolio repo.

## Build And Deployment

The production build is:

```bash
npm run build
```

This runs `next build` and then `next-sitemap`, which generates sitemap and robots files from `next-sitemap.config.js`. Vercel is the intended deployment target.

## Quality Gates

Run the same check locally and in GitHub Actions:

```bash
npm run check
```

That command runs ESLint, TypeScript, and a production build.
