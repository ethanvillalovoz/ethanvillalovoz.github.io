# Contributing

Thanks for taking a look. This is primarily a personal portfolio, but focused fixes and improvements are welcome.

## Local Setup

```bash
git clone https://github.com/ethanvillalovoz/ethanvillalovoz.github.io.git
cd ethanvillalovoz.github.io
nvm use
npm ci
npm run dev
```

Node.js 22 is selected by `.nvmrc` and CI; the package minimum is 20.9.

## Good Contributions

- Accessibility and keyboard-navigation fixes
- Responsive layout fixes
- Broken route, image, metadata, or document corrections
- Small performance and maintainability improvements
- Documentation corrections
- Dependency updates that pass the full verification suite

Content changes should remain evidence-backed. Preserve publication author order, venues, dates, and links.

The homepage is intentionally locked. Changes to its copy, order, spacing, typography, or interactions should only be made when the issue explicitly targets that surface.

## Before Opening A Pull Request

Run:

```bash
npm ci
npm run check
npm audit
```

For visible changes, inspect the homepage from introduction through footer at desktop and mobile sizes, in both themes. Check legacy redirects, keyboard focus, theme switching, copy feedback, image loading, and horizontal overflow. Include screenshots in the pull request. Work and Research are legacy redirects, not active pages.

See [the design contract](docs/DESIGN.md) for accepted behavior and [Design QA](design-qa.md) for the review checklist. For sitemap changes, run `npx next-sitemap` before `npm run check` so validation sees the regenerated output.

## Pull Request Scope

- Keep each pull request focused.
- Explain the user-visible behavior being preserved or changed.
- Do not commit `.next/`, local environment files, or unrelated generated output.
- Do not add unused images, personal documents, or copied templates without attribution and a clear public route.
- Update README or architecture documentation when routes, scripts, dependencies, or content sources change.

Security issues should be reported privately according to [SECURITY.md](SECURITY.md), not through a public issue.
