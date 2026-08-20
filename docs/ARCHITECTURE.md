# Architecture

This repository is a small Next.js App Router site for a focused academic and technical portfolio.

## Application Routes

```text
src/app/
  layout.tsx                  Global metadata, structured data, and providers
  page.tsx                    Server entry and canonical metadata for Home
  (secondary)/
    layout.tsx                Shared navigation and footer
    writing/page.tsx          Writing index
    writing/*/page.tsx        Long-form technical essays
    research/page.tsx         Publications and teaching
```

The homepage's rendered experience lives in `src/components/HomePageClient.tsx`. Keeping the client component behind a server route allows page-level metadata without changing the locked homepage markup or interactions.

The secondary route group adds navigation and a footer to Writing and Research without adding either element to Home.

## Content Sources

```text
src/data/writing.ts    Published essay titles, dates, summaries, and imagery
src/data/research.ts   Publication authorship, resources, and teaching history
src/data/site.ts       Canonical site identity, URL, profile image, and social profiles
```

Writing metadata is defined once in `writing.ts` and appears in the Writing index. Only complete essays belong on that surface.

Publication records retain author order, venue, primary URLs, local PDFs, and available supporting resources. Teaching remains a compact section of Research instead of a separate top-level page.

## Styling

The shared visual system is defined in `src/app/globals.css` and uses:

- A system Helvetica/Arial stack with no bundled font files
- CSS custom properties for light and dark themes
- A 672px reading column on Home
- A wider, responsive publication layout for Research
- One underline interaction language for text links
- Reduced-motion fallbacks

`next-themes` stores the selected theme. Tailwind and Framer Motion are not part of the current stack.

Legacy `/work/`, `/projects/`, `/publications/`, `/teaching/`, `/DreamWorlds/`, and `/gaussian-splatting-physics/` paths redirect to Research.

## Metadata And Discovery

- `src/app/layout.tsx` owns global metadata, compact social metadata, favicons, and website JSON-LD.
- Home publishes `ProfilePage` and `Person` structured data without changing its rendered design.
- Writing, Research, and the technical essay publish page-appropriate structured data.
- Home, Writing, and Research define canonical URLs at the route level.
- `next-sitemap.config.js` generates `public/sitemap.xml` with representative image entries and `public/robots.txt` after a production build.

## Image Delivery

Next.js routes use responsive image generation with an additional high-quality setting for technical figures and screenshots.

## Quality Gates

`npm run check` runs:

1. Repository and asset validation
2. ESLint
3. Next.js route type generation and TypeScript
4. Production build and sitemap generation

`scripts/validate-repository.mjs` verifies required routes, forbidden retired paths, active content images, stale template markers, and sitemap membership.
