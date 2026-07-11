# MetricDrive Portfolio Mirror

This directory contains the dependency-free MetricDrive research preview published at [ethanvillalovoz.com/metricdrive](https://ethanvillalovoz.com/metricdrive/).

The authoritative implementation and export command live in the [MetricDrive repository](https://github.com/ethanvillalovoz/metricdrive). This folder is the portfolio deployment mirror.

## Files

- `index.html`: explorer shell, canonical metadata, and structured data
- `styles.css`: responsive workbench styles
- `app.js`: scenario selection and metric inspection
- `scenarios.json`: public demo scenarios and preference data
- `assets/`: trajectory diagrams and social-preview media

## Updating The Mirror

1. Regenerate the demo in the MetricDrive repository.
2. Replace the exported files together so code and data stay in sync.
3. Preserve the canonical URL and structured data in `index.html`.
4. Run `npm run check` from the portfolio root.
5. Verify `/metricdrive/` at desktop and mobile sizes.
