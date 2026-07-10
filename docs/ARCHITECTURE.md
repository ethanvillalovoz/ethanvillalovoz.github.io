# Architecture

This repository is a small Next.js App Router site with a separate static layer for research artifacts and standalone project pages.

## Application Routes

```text
src/app/
  layout.tsx                  Global metadata, structured data, and providers
  page.tsx                    Server entry and canonical metadata for Home
  (secondary)/
    layout.tsx                Shared navigation and footer
    writing/page.tsx          Writing index
    writing/*/page.tsx        Long-form technical essays
    work/page.tsx             Work archive
    research/page.tsx         Publications and teaching
```

The homepage's rendered experience lives in `src/components/HomePageClient.tsx`. Keeping the client component behind a server route allows page-level metadata without changing the locked homepage markup or interactions.

The secondary route group adds navigation and a footer to Writing, Work, and Research without adding either element to Home.

## Content Sources

```text
src/data/work.ts       Reverse-chronological Writing, Research, and Project entries
src/data/writing.ts    Published essay titles, dates, summaries, and imagery
src/data/research.ts   Publication authorship, resources, and teaching history
```

Work is intentionally one mixed feed. Writing metadata is defined once in `writing.ts`, appears in the Writing index, and is reused by `work.ts`. Only complete essays belong in either surface.

Publication records retain author order, venue, primary URLs, local PDFs, and BibTeX resources. Teaching remains a compact section of Research instead of a separate top-level page.

## Styling

The shared visual system is defined in `src/app/globals.css` and uses:

- A system Helvetica/Arial stack with no bundled font files
- CSS custom properties for light and dark themes
- A 672px reading column on Home
- Wider, responsive grids for Work and Research
- One underline interaction language for text links
- Reduced-motion fallbacks

`next-themes` stores the selected theme. Tailwind and Framer Motion are not part of the current stack.

## Static Microsites

Standalone project pages remain static so their project-specific presentation can evolve independently of the portfolio shell.

| Public route | Static source |
| --- | --- |
| `/scenariolens/` | `public/scenariolens/index.html` |
| `/metricdrive/` | `public/metricdrive/index.html` |
| `/rag/` | `public/data/capstone/index.html` |

Rewrites in `next.config.ts` expose those pages at clean URLs. Static assets use relative paths so each microsite can be tested in isolation.

Legacy `/projects/`, `/publications/`, `/teaching/`, `/DreamWorlds/`, and `/gaussian-splatting-physics/` paths redirect to active pages.

## Metadata And Discovery

- `src/app/layout.tsx` owns global metadata, compact social metadata, favicons, and JSON-LD.
- Home, Writing, Work, and Research define canonical URLs at the route level.
- Static microsites define their own canonical and social metadata in HTML.
- `next-sitemap.config.js` generates `public/sitemap.xml` and `public/robots.txt` after a production build.

## Quality Gates

`npm run check` runs:

1. Repository and asset validation
2. ESLint
3. Next.js route type generation and TypeScript
4. Production build and sitemap generation

`scripts/validate-repository.mjs` verifies required routes, forbidden legacy paths, Work images, microsite asset references, stale template markers, and sitemap membership.
