# Contributing

Thanks for taking a look at this portfolio template. This repo is primarily a personal website, but issues and focused improvements are welcome.

## Local Setup

```bash
git clone https://github.com/ethanvillalovoz/ethanvillalovoz.github.io.git
cd ethanvillalovoz.github.io
npm ci
npm run dev
```

## Before Opening A Pull Request

Run the full local check:

```bash
npm run check
```

For smaller changes, at least run:

```bash
npm run lint
npm run typecheck
```

## Contribution Guidelines

- Keep changes focused and easy to review.
- Preserve the four main pages: Home, Publications, Projects, and Teaching.
- Do not remove linked static project pages under `public/data/` unless their links are removed from the site.
- Do not commit `.next/`, `out/`, local environment files, or generated build artifacts outside the intended sitemap files.
- Avoid adding personal documents, placeholder PDFs, or unused images.
- Update `README.md` when setup, routes, or customization steps change.

## Pull Requests

Use the pull request template and include:

- What changed
- Why it changed
- Screenshots for visible UI changes
- Verification commands you ran

## Issues

Bug reports should include the route, browser, viewport size if relevant, and reproduction steps.
