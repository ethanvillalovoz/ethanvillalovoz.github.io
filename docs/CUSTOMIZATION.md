# Customization Guide

This repository can be adapted into a compact technical or academic portfolio without changing its information architecture.

## Identity And Metadata

Start with `src/data/site.ts`, then check `src/app/layout.tsx` and `src/app/page.tsx` for:

- Name and site description
- Canonical domain
- Favicons and compact social metadata
- Open Graph and X metadata
- Person and website JSON-LD

Update `src/data/site.ts` first when changing the name, canonical URL, profile image, or social profiles. Route metadata and structured data reuse those values to avoid drift.

Visible profile links and biography are maintained separately in `HomePageClient.tsx`; update them alongside metadata when changing identity.

Also update `CNAME`, `next-sitemap.config.js`, and deployment settings when changing domains.

## Homepage

The homepage experience lives in `src/components/HomePageClient.tsx`. It contains:

- Short technical introduction
- Location and contact method
- Profile links
- Selected prior experience, descriptions, and technology links
- Publications
- Teaching history

Keep this page selective. It should introduce the person and create clear paths into deeper evidence, not reproduce a resume.

## Theme and identity assets

The approved favicon uses the `favicon-silver-v1-*` assets. Check `layout.tsx`, `site.ts`, and `public/favicon.ico` together when replacing it; touch and social-preview sizes have different roles.

## Research

Edit `src/data/research.ts` for publications and teaching.

For publications, preserve:

- Published author order
- Accurate venue and year
- Primary paper URL
- Local PDF or BibTeX links when distribution is appropriate
- Plain-language summary
- Descriptive figure alt text

Publication data keys use `Website`, `Paper`, `arXiv`, `Code`, and `Video`, displayed in that order. The `Paper` key is shown to visitors as `PDF` with matching icons by `PublicationResources.tsx`. GitHub code and YouTube video URLs use their platform logos; other hosts use generic code/video icons. Additional labels (for example, `Dataset` or `Slides`) remain supported with a generic link icon. Add only resources that exist; no placeholders are shown.

Do not imply first authorship, lead authorship, acceptance, or awards unless the source record supports the claim.

## Documents And Images

```text
public/data/     Resume, CV, papers, and research artifacts
public/images/   Identity, organization, and active project images
```

The public resume and CV are built from the separate [LaTeX Resume + Academic CV repository](https://github.com/ethanvillalovoz/latex-resume-template). Keep their PDF metadata, visible content, links, and website copies synchronized when publishing an update.

Prefer assets used by an active route, README, metadata record, or document link. Some older assets are retained for provenance; identify them as historical before considering cleanup. Update `THIRD_PARTY_NOTICES.md` when adding third-party templates, fonts, icons, or media.

Use descriptive filenames and alt text. Images rendered by Next.js should declare their intrinsic dimensions and an accurate `sizes` value. Static microsite images should include numeric `width` and `height`, use `loading="lazy"` when below the first viewport, and prefer WebP derivatives over multi-megabyte source captures.

When changing publication images, also update the representative entries in `next-sitemap.config.js` and corresponding checks in `scripts/validate-repository.mjs`. Regenerate the sitemap before running validation.

## Validation

Before publishing:

```bash
# If sitemap configuration changed, regenerate its checked-in output first:
npx next-sitemap
npm run check
npm audit
```

Then inspect all homepage sections, legacy redirects, and the 404 page at desktop and mobile sizes. Check keyboard focus, theme switching, horizontal overflow, broken images, and console errors.
