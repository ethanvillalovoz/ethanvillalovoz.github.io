# Gaussian Splatting Physics Microsite

This folder contains the standalone project page for the Gaussian splatting physics project.

## Route

The microsite is served from:

```text
/gaussian-splatting-physics/
```

The route is configured through `next.config.ts` and maps to:

```text
public/data/cgai_dream_worlds/index.html
```

## Contents

```text
index.html             Static project page
static/css/            Bulma-based page styles
static/images/         Images and web media
static/videos/         Demonstration videos
static/interpolation/  Interpolation frames
static/js/             Template support scripts
```

## Editing Notes

- Keep media paths relative to this folder so the page works through the Next.js rewrite.
- Compress large videos before adding them to the repository.
- Validate the page locally at `/gaussian-splatting-physics/` after changes.

## Attribution

The page structure is adapted from the [NeRFies website template](https://github.com/nerfies/nerfies.github.io). Project content and media belong to the project authors.
