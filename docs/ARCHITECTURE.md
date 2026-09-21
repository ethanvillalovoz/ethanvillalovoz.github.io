# Architecture

This repository is a small Next.js App Router site for a focused academic and technical portfolio.

## Application Routes

```text
src/app/
  layout.tsx                  Global metadata, structured data, and providers
  page.tsx                    Server entry and canonical metadata for Home
```

The homepage's rendered experience lives in `src/components/HomePageClient.tsx`. Keeping the client component behind a server route allows page-level metadata without changing the locked homepage markup or interactions.

The single homepage presents introduction, publications, Experience, teaching, and a compact footer in that order. `TeachingSection.tsx` preserves the grouped teaching layout. `OrganizationLink.tsx` and `TextLink.tsx` share underline behavior, while `PublicationResources.tsx` orders and labels the available paper resources.

## Content Sources

```text
src/data/research.ts   Publication authorship, resources, and teaching history
src/data/site.ts       Canonical site identity, URL, profile image, and social profiles
```


Publication records retain author order, venue, primary URLs, local PDFs, and available supporting resources. Teaching is a section of the homepage.

## Styling

The shared visual system is defined in `src/app/globals.css` and uses:

- A system Helvetica/Arial stack throughout, without downloaded web fonts
- CSS custom properties for light and dark themes
- A 800px homepage container with 24px side padding shared by the introduction and sections
- Responsive publication rows with 250px media on desktop
- Shared text links with glyph-aligned animated underlines, including wrapped lines
- Reduced-motion fallbacks

`next-themes` stores the selected theme. Tailwind and Framer Motion are not part of the current stack.

Legacy `/research/`, `/writing/`, `/work/`, `/projects/`, `/publications/`, `/teaching/`, `/DreamWorlds/`, and `/gaussian-splatting-physics/` paths redirect to `/#publications`, except `/teaching/`, which redirects to `/#teaching`.

## Metadata And Discovery

- `src/app/layout.tsx` owns global metadata, compact social metadata, favicons, and website JSON-LD.
- Home publishes `ProfilePage` and `Person` structured data without changing its rendered design.
- Home also publishes publication collection structured data from `src/data/publication-schema.ts`.
- Home defines the canonical URL; retired routes are excluded from the sitemap.
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
