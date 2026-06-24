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
static/css/         Bulma-based page styles
static/images/      Logos and project figures
static/data/        Project paper PDF
static/js/          Template support scripts retained with the static page
```

## Editing Notes

- Keep asset paths relative to this folder so the page works through the Next.js rewrite.
- Update figure alt text when replacing screenshots or diagrams.
- Keep external links using `target="_blank"` and `rel="noopener noreferrer"`.
- Validate the page locally at `/rag/` after changes.

## Attribution

The page is adapted from the [NeRFies website template](https://github.com/nerfies/nerfies.github.io). Project content and artifacts belong to the ACME10-HE-RAGApp team.
