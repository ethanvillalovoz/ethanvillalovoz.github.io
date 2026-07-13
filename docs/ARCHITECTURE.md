# Architecture

This repository is a small Next.js App Router site with a separate static layer for research artifacts and two standalone research previews.

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
    rag/page.tsx              Knowledge Graph RAG project case study
```

The homepage's rendered experience lives in `src/components/HomePageClient.tsx`. Keeping the client component behind a server route allows page-level metadata without changing the locked homepage markup or interactions.

The secondary route group adds navigation and a footer to Writing, Work, Research, and the RAG case study without adding either element to Home.

## Content Sources

```text
src/data/work.ts       Reverse-chronological Writing, Research, and Project entries
src/data/writing.ts    Published essay titles, dates, summaries, and imagery
src/data/research.ts   Publication authorship, resources, and teaching history
src/data/site.ts       Canonical site identity, URL, profile image, and social profiles
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

Standalone research previews remain static so their interactive presentation can evolve independently of the portfolio shell.

| Public route | Static source |
| --- | --- |
| `/scenariolens/` | `public/scenariolens/index.html` |
| `/metricdrive/` | `public/metricdrive/index.html` |

Rewrites in `next.config.ts` expose those pages at clean URLs. Static assets use relative paths so each microsite can be tested in isolation.

## Native Project Case Study

`/rag/` is implemented at `src/app/(secondary)/rag/page.tsx`. It uses the shared portfolio shell, responsive image delivery, theme tokens, and interaction language. Archival evidence for the page lives under `public/data/capstone/`, including the final report, the report's system architecture figure, and an original prototype capture.

Legacy `/projects/`, `/publications/`, `/teaching/`, `/DreamWorlds/`, and `/gaussian-splatting-physics/` paths redirect to active pages.

## Metadata And Discovery

- `src/app/layout.tsx` owns global metadata, compact social metadata, favicons, and website JSON-LD.
- Home publishes `ProfilePage` and `Person` structured data without changing its rendered design.
- Writing, Work, Research, the technical essay, the RAG case study, and each microsite publish page-appropriate structured data.
- Home, Writing, Work, Research, and the RAG case study define canonical URLs at the route level.
- Static research previews define their own canonical and social metadata in HTML.
- `next-sitemap.config.js` generates `public/sitemap.xml` with representative image entries and `public/robots.txt` after a production build.

## Image Delivery

Next.js routes use responsive image generation with an additional high-quality setting for technical figures and screenshots. The RAG page uses a direct crop of the final report's architecture figure and a WebP prototype capture; the report remains the archival source.

## Quality Gates

`npm run check` runs:

1. Repository and asset validation
2. ESLint
3. Next.js route type generation and TypeScript
4. Production build and sitemap generation

`scripts/validate-repository.mjs` verifies required routes, forbidden legacy paths, Work images, microsite asset references, stale template markers, and sitemap membership.
