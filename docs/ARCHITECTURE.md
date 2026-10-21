# Architecture

A single-page Next.js App Router portfolio, served on Vercel. The homepage order is introduction, experience, publications, teaching, and footer.

## Rendering and content

- `src/app/layout.tsx` loads Inter through `next/font/google`, installs the theme provider, and defines global metadata and structured data.
- `src/app/page.tsx` is the server entry for the homepage and its metadata.
- `src/components/HomePageClient.tsx` renders the homepage. Its local arrays hold experience entries, technology destinations, and visible profile links; the intro is also defined here.
- `src/data/research.ts` holds publication and teaching records. `src/data/publication-schema.ts` derives publication JSON-LD.
- `src/data/site.ts` holds canonical identity, social-profile metadata, and sharing-image constants. Visible profile links in `HomePageClient.tsx` must be kept in sync when relevant.
- `TeachingSection.tsx` renders grouped teaching entries and the tutorial thumbnail. `ResearchMedia.tsx`, `PublicationAuthors.tsx`, and `PublicationResources.tsx` render publication rows.

The homepage has `top`, `experience`, `publications`, and `teaching` anchors. Legacy paths redirect through `next.config.ts`; there are no active Work, Research, or tutorial-detail pages in this application.

## Styling and interaction

`src/app/globals.css` defines the shared visual system:

- Self-hosted Inter with adjusted fallback metrics.
- A 692px outer container with 24px side padding, yielding a 644px reading column.
- Publication rows with 180px figures and a 24px gap; below 692px figures stack above text.
- Shared link underlines, visible focus, neutral light/dark variables, and reduced-motion rules.

`TextLink`, `OrganizationLink`, and `AnimatedLabel` use shared link styles. `CopyEmail` manages clipboard feedback; `Hint` supplies accessible hints. `ThemeToggle` coordinates the theme and interruptible circular reveal. `Portrait` supplies the existing fine-pointer response. No page-entry animation or interactive publication figures are mounted.

Some retained components and assets come from earlier experiments and are not rendered by the homepage. Their presence is not evidence of an active feature. See [Design](DESIGN.md) for the current contract and the explicitly historical preview notes for context.

## Image delivery

- Portrait and publication figures use `next/image` with `unoptimized`, preserving the existing source bytes rather than adding delivery compression.
- The tutorial poster is displayed in a 16:9 frame; it links directly to YouTube without embedding a player.
- Organization marks and favicon assets remain separate from research media.

All visible image slots reserve dimensions. The first publication figure loads eagerly; the second is lazy-loaded. See [Publication media](PUBLICATION_MEDIA.md) for original sources and dimensions.

## Metadata and deployment

Global and homepage metadata include canonical, Open Graph, X, Person/ProfilePage, and publication structured data. The silver favicon supplies compact sharing imagery; it does not change with theme.

`next-sitemap.config.js` generates the homepage sitemap entry with the portrait and current publication figures. Anchor sections are not separate sitemap routes. Retired routes are excluded. This project uses `next-sitemap` after the build, not an App Router `sitemap.ts` route.

Vercel serves the Next.js application. The checked-in CI workflow validates it; it does not itself configure the Vercel integration. Domain or hosting changes require checking the hosting settings as well as repository files.

## Verification

`npm run check` runs repository validation, ESLint, route-type generation, TypeScript, the production build, and sitemap generation. The validator checks required assets, retired paths, stale template markers, and sitemap membership. It is not a visual or end-to-end browser test.

Use [Design QA](../design-qa.md) for the browser checks that complement CI.
