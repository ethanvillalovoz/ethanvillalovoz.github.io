# Ethan Villalovoz Portfolio

[![CI](https://github.com/ethanvillalovoz/ethanvillalovoz.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/ethanvillalovoz/ethanvillalovoz.github.io/actions/workflows/ci.yml)

Personal portfolio and research website for [ethanvillalovoz.com](https://ethanvillalovoz.com). The site presents a single page with an introduction, publications, experience, and teaching.

## Public Routes

| Route | Purpose |
| --- | --- |
| `/` | Introduction, contact links, publications, experience, and teaching |
| `/#publications` | Publications and paper resources |
| `/#experience` | Prior roles and dates |
| `/#teaching` | Teaching history |
| `/research/` | Compatibility redirect to `/#publications` |

Legacy `/writing/`, `/work/`, `/projects/`, `/publications/`, and `/teaching/` URLs redirect to the current information architecture.

## Design And Content Model

The homepage is intentionally compact. It offers enough context to understand Ethan's current work, then points visitors toward deeper evidence.

The homepage is the canonical destination for publications and teaching.

## Stack

- Next.js App Router
- React and TypeScript
- Plain CSS with light and dark themes
- `next-themes`
- `next-sitemap`
- Vercel

## Discovery And Performance

- Canonical, Open Graph, and X metadata
- `ProfilePage`, `Person`, and publication collection JSON-LD
- XML sitemap coverage for every public route and its representative images
- Responsive `next/image` delivery for portfolio and research media
- Explicit image dimensions and lazy decoding for below-the-fold publication figures
- Compact favicon-based sharing for the homepage

## Local Development

Requirements:

- Node.js 20.9 or newer
- npm

The tested local and CI runtime is recorded in `.nvmrc`:

```bash
nvm use
```

```bash
git clone https://github.com/ethanvillalovoz/ethanvillalovoz.github.io.git
cd ethanvillalovoz.github.io
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev        # Start the local development server
npm run validate   # Check routes, assets, sitemap, and repository invariants
npm run lint       # Run ESLint
npm run typecheck  # Generate Next.js route types and run TypeScript
npm run build      # Build the site and regenerate sitemap files
npm run check      # Run validation, lint, typecheck, and production build
```

## Repository Structure

```text
src/app/
  page.tsx                    Home metadata and server entry

src/components/
  HomePageClient.tsx          Homepage introduction, publications, and experience
  TeachingSection.tsx         Grouped teaching history
  ThemeToggle.tsx             Light/dark theme control

src/data/
  site.ts                     Canonical identity and metadata constants
  research.ts                 Publications and teaching records
  publication-schema.ts       Publication structured data

public/
  data/                       Resume, CV, papers, and project evidence
  images/                     Identity, organization, and active project images
  visuals/                    Archived design screenshot

scripts/
  validate-repository.mjs     Repository integrity checks
```

See [Architecture](docs/ARCHITECTURE.md), [Design Contract](docs/DESIGN.md), and [Customization](docs/CUSTOMIZATION.md) for implementation details.

## Deployment

Vercel is the intended deployment target. The production command is:

```bash
npm run build
```

The build runs Next.js and then generates `robots.txt` and `sitemap.xml` for `https://ethanvillalovoz.com`.

## Contributing

Focused bug fixes, accessibility improvements, and documentation corrections are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. Security reports should follow [SECURITY.md](SECURITY.md).

## License

The site code is available under the [MIT License](LICENSE). Research papers, project media, and organization marks may have separate terms; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
