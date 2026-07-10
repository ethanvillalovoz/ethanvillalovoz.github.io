# Contributing

Thanks for taking a look. This is primarily a personal portfolio, but focused fixes and improvements are welcome.

## Local Setup

```bash
git clone https://github.com/ethanvillalovoz/ethanvillalovoz.github.io.git
cd ethanvillalovoz.github.io
npm ci
npm run dev
```

Node.js 20.9 or newer is required.

## Good Contributions

- Accessibility and keyboard-navigation fixes
- Responsive layout fixes
- Broken route, image, metadata, or document corrections
- Small performance and maintainability improvements
- Documentation corrections
- Dependency updates that pass the full verification suite

Content changes should remain evidence-backed. Preserve publication author order, venues, dates, and links. Do not add placeholder Writing entries or an empty Writing page.

The homepage is intentionally locked. Changes to its copy, order, spacing, typography, or interactions should only be made when the issue explicitly targets that surface.

## Before Opening A Pull Request

Run:

```bash
npm ci
npm run check
npm audit
```

For visible changes, also test Home, Work, Research, and any affected microsite at desktop and mobile sizes. Include screenshots in the pull request.

## Pull Request Scope

- Keep each pull request focused.
- Explain the user-visible behavior being preserved or changed.
- Do not commit `.next/`, local environment files, or unrelated generated output.
- Do not add unused images, personal documents, or copied templates without attribution and a clear public route.
- Update README or architecture documentation when routes, scripts, dependencies, or content sources change.

Security issues should be reported privately according to [SECURITY.md](SECURITY.md), not through a public issue.
