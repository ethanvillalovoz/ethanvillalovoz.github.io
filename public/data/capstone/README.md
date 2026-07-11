# Knowledge Graph RAG Assistant Microsite

This folder contains the standalone project page for the Washington State University senior design project built with HackerEarth.

## Route

The microsite is served from:

```text
/rag/
```

The route is configured through `next.config.ts` and maps to:

```text
public/data/capstone/index.html
```

## Contents

```text
index.html          Static project page
static/css/         Bulma and project-specific page styles
static/images/      Logos and web-optimized project figures
static/data/        Project paper PDF
```

## Editing Notes

- Keep asset paths relative to this folder so the page works through the Next.js rewrite.
- Update figure alt text when replacing screenshots or diagrams.
- Keep numeric image dimensions and lazy decoding on below-the-fold figures.
- Export descriptive WebP derivatives instead of committing source-resolution captures.
- Keep external links using `target="_blank"` and `rel="noopener noreferrer"`.
- The page bundles its styles and media; the only external runtime embed is the YouTube demo.
- Validate the page locally at `/rag/` after changes.

## Attribution

The page is adapted from the [NeRFies website template](https://github.com/nerfies/nerfies.github.io). Project content and artifacts belong to the ACME10-HE-RAGApp team.
