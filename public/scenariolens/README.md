# ScenarioLens Portfolio Mirror

This directory contains the static ScenarioLens explorer published at [ethanvillalovoz.com/scenariolens](https://ethanvillalovoz.com/scenariolens/).

The authoritative project, reports, generation commands, and data-provenance documentation live in the [ScenarioLens repository](https://github.com/ethanvillalovoz/scenariolens). This folder is a deployment mirror, not a second source tree.

## Files

- `index.html`: accessible dashboard shell and project metadata
- `styles.css`: project-specific visual system
- `app.js`: filtering, ranking, and detail interactions
- `scenarios.json`: public-safe scenario payload
- `evidence_index.json`: public evidence catalog
- `selector_decisions.json`: terminal-selector decision atlas
- `assets/`: trajectory diagrams, case cards, and social-preview media

## Updating The Mirror

1. Regenerate the demo in the ScenarioLens repository.
2. Replace this folder's exported HTML, CSS, JavaScript, JSON, and assets together.
3. Preserve the canonical URL and structured data in `index.html`.
4. Run `npm run check` from the portfolio root.
5. Verify `/scenariolens/` at desktop and mobile sizes.

Do not copy raw Waymo records, private artifacts, or ignored processed data into this public mirror.
