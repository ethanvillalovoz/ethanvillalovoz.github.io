# Ethan Villalovoz’s portfolio

[![CI](https://github.com/ethanvillalovoz/ethanvillalovoz.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/ethanvillalovoz/ethanvillalovoz.github.io/actions/workflows/ci.yml)

Source for [ethanvillalovoz.com](https://ethanvillalovoz.com), Ethan’s personal computer science and research portfolio. The single-page site introduces his interests, experience, publications, and teaching.

## What’s on the site

- A short introduction, portrait, profile links, CV, and copyable email address.
- Experience entries with concise descriptions and linked technologies.
- Publications with original paper figures, authors, venues, summaries, and available resources. Figures are static and nonclickable.
- Teaching history, including a thumbnail linking to the Gaussian quadratic form walkthrough.
- Light/dark themes, shared animated link underlines, visible keyboard focus, and reduced-motion fallbacks.

The site uses a narrow reading column, self-hosted Inter, and neutral colors. The silver favicon also supplies the compact social-preview imagery.

## Run locally

Use Node.js 22, as specified in [.nvmrc](.nvmrc) and CI. The package minimum is Node.js 20.9.

```bash
git clone https://github.com/ethanvillalovoz/ethanvillalovoz.github.io.git
cd ethanvillalovoz.github.io
nvm use
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). No API keys or environment variables are required for the portfolio.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run validate` | Check required files, content assets, retired paths, and sitemap entries |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Generate Next.js route types and run TypeScript |
| `npm run build` | Build the site and regenerate sitemap/robots files |
| `npm start` | Serve the production build locally |
| `npm run check` | Run validation, lint, typecheck, and production build |

## Routes

| URL | Destination |
| --- | --- |
| `/` or `/#top` | Introduction and contact links |
| `/#experience` | Experience, descriptions, and technologies |
| `/#publications` | Publications and paper resources |
| `/#teaching` | Teaching and tutorial link |

These anchors belong to one homepage, not separate pages. Legacy `/research/`, `/writing/`, `/work/`, `/projects/`, `/publications/`, `/DreamWorlds/`, and `/gaussian-splatting-physics/` paths redirect to `/#publications`; `/teaching/` redirects to `/#teaching`. Rules are in [next.config.ts](next.config.ts).

## Where to edit

| File or directory | Owns |
| --- | --- |
| [src/components/HomePageClient.tsx](src/components/HomePageClient.tsx) | Intro, profile links, experience records, section order, footer |
| [src/data/research.ts](src/data/research.ts) | Publications, authors, resources, and teaching records |
| [src/data/site.ts](src/data/site.ts) | Canonical identity and sharing metadata constants |
| [src/components/TeachingSection.tsx](src/components/TeachingSection.tsx) | Teaching layout and tutorial preview |
| [src/app/globals.css](src/app/globals.css) | Typography, spacing, themes, responsive layout, and interaction styles |
| [src/app/layout.tsx](src/app/layout.tsx), [src/app/page.tsx](src/app/page.tsx) | Font/provider setup, metadata, structured data, and homepage entry |
| [public/images/](public/images/) | Portrait, paper figures, organization marks, tutorial poster, and favicon assets |
| [public/data/](public/data/) | Public CV, résumé, and paper files |
| [next-sitemap.config.js](next-sitemap.config.js) | Canonical sitemap and representative image entries |
| [scripts/validate-repository.mjs](scripts/validate-repository.mjs) | Repository integrity checks |

## Stack and deployment

Next.js 16 App Router, React 19, TypeScript, plain CSS, `next-themes`, and `react-icons`. Exact dependency resolutions are in `package-lock.json`. The site does not use Tailwind or a general-purpose animation library.

Vercel serves the custom domain. `npm run build` runs Next.js and then `next-sitemap`, generating `public/sitemap.xml` and `public/robots.txt`. The repository name does not mean this Next.js application is a GitHub Pages static export. GitHub Actions runs `npm run check` on pushes to `main`, pull requests, and manual dispatches.

Before publishing, run the checks and review any visible changes on desktop and mobile in both themes. A successful push alone does not verify deployment; confirm the deployed revision and live result.

## Documentation

- [Architecture](docs/ARCHITECTURE.md): components, content, image delivery, and metadata.
- [Design contract](docs/DESIGN.md): the accepted appearance and interactions.
- [Customization](docs/CUSTOMIZATION.md): how to maintain content and assets.
- [Publication media](docs/PUBLICATION_MEDIA.md): current figure provenance and historical experiments.
- [Design QA](design-qa.md): latest audit scope and repeatable checks.

Older `*_PREVIEW.md`, `REFINEMENT_CHECKPOINT.md`, and `EMIL_APPLICATION.md` notes record experiments, including rejected features. They are historical records, not the current feature inventory. Some checkpoints and evidence folders referenced there exist only in the original local workspace.

## Contributing and rights

Focused fixes are welcome; see [CONTRIBUTING.md](CONTRIBUTING.md). Report security issues using [SECURITY.md](SECURITY.md).

Original site code is [MIT licensed](LICENSE). Papers, photographs, figures, fonts, organization marks, and personal artwork have separate terms; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). This repository is a personal portfolio, not a collection of freely reusable research or identity assets.
