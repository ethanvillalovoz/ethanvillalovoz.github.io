# Customization Guide

This repository can be adapted into a compact technical or academic portfolio without changing its information architecture.

## Identity And Metadata

Update `src/app/layout.tsx` for:

- Name and site description
- Canonical domain
- Favicons and compact social metadata
- Open Graph and X metadata
- Person and website JSON-LD

Update `src/data/site.ts` first when changing the name, canonical URL, profile image, or social profiles. Route metadata and structured data reuse those values to avoid drift.

Also update `CNAME`, `next-sitemap.config.js`, and deployment settings when changing domains.

## Homepage

The homepage experience lives in `src/components/HomePageClient.tsx`. It contains:

- Short technical introduction
- Location and contact method
- Profile links
- Selected prior experience
- Three selected Work entries

Keep this page selective. It should introduce the person and create clear paths into deeper evidence, not reproduce a resume.

## Work

Edit `src/data/work.ts` to add or reorder entries. Items are displayed newest first and support these kinds:

- `Writing`
- `Research`
- `Project`

Every entry needs a title, destination, month/year, kind, concise description, image, and useful alt text.

Writing should follow the same card model as research and projects. Define published essay metadata in `src/data/writing.ts`, add the article under `src/app/(secondary)/writing/`, and reuse that metadata in Work. Do not publish placeholder entries.

## Writing

The Writing index is intentionally text-first: title, date, and one-sentence summary. Individual essays use a focused reading column, optional contents navigation, technical figures or tables, explicit limitations, and a citation block when appropriate.

## Research

Edit `src/data/research.ts` for publications and teaching.

For publications, preserve:

- Published author order
- Accurate venue and year
- Primary paper URL
- Local PDF or BibTeX links when distribution is appropriate
- Plain-language summary
- Descriptive figure alt text

Do not imply first authorship, lead authorship, acceptance, or awards unless the source record supports the claim.

## Static Project Pages

Active standalone pages live under `public/`:

```text
public/scenariolens/
public/metricdrive/
```

Add a rewrite in `next.config.ts` when exposing a new static page at a clean route. Keep local assets relative to the page folder and include a README describing the route, files, and attribution.

## Documents And Images

```text
public/data/     Resume, CV, papers, and research artifacts
public/images/   Identity, organization, and active Work images
```

The public resume and CV are built from the separate [LaTeX Resume + Academic CV repository](https://github.com/ethanvillalovoz/latex-resume-template). Keep their PDF metadata, visible content, links, and website copies synchronized when publishing an update.

Only keep assets used by an active route, README, metadata record, or document link. Update `THIRD_PARTY_NOTICES.md` when adding third-party templates, fonts, icons, or media.

Use descriptive filenames and alt text. Images rendered by Next.js should declare their intrinsic dimensions and an accurate `sizes` value. Static microsite images should include numeric `width` and `height`, use `loading="lazy"` when below the first viewport, and prefer WebP derivatives over multi-megabyte source captures.

## Validation

Before publishing:

```bash
npm run check
npm audit
```

Then inspect Home, Writing, Work, Research, all active microsites, legacy redirects, and the 404 page at desktop and mobile sizes. Check keyboard focus, theme switching, horizontal overflow, broken images, and console errors.
