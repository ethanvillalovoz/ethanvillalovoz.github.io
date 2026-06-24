# Customization Guide

This repository can be used as a personal academic or technical portfolio template. The goal is to keep the public site easy to adapt without requiring a redesign.

## Personal Metadata

Update global metadata in `src/app/layout.tsx`:

- Name and title
- Site description
- Canonical URL
- Open Graph metadata
- JSON-LD structured data

Update `CNAME`, `vercel.json`, and `next-sitemap.config.js` when changing the production domain.

## Main Pages

Use `src/data/` for repeatable content:

- `src/data/projects.ts` for project cards
- `src/data/publications.ts` for publications and preprints
- `src/data/teaching.ts` for teaching entries

Use `src/app/page.tsx` for home-page narrative content such as the hero, short bio, news, experience highlights, and education.

## Assets

Place reusable site images in:

```text
public/images/
```

Place papers, resumes, CVs, and research artifacts in:

```text
public/data/
```

Keep filenames stable when they are linked from resumes, CVs, GitHub READMEs, or external profiles.

## Project Microsites

Standalone project pages live under `public/data/<project>/`. Add a rewrite in `next.config.ts` when a microsite should be available at a clean route.

Example:

```ts
{
  source: "/my-project/",
  destination: "/data/my_project/index.html",
}
```

When adding a microsite, include a local `README.md` that explains the route, source files, asset folders, and template attribution.

## Validation Checklist

Before publishing changes:

```bash
npm run check
```

Then inspect the important routes locally:

- `/`
- `/publications/`
- `/projects/`
- `/teaching/`
- Any project microsite routes

Check for console errors, broken images, broken internal links, stale PDFs, and text that wraps awkwardly on mobile.
