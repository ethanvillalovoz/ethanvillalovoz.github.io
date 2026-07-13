# ScenarioLens Portfolio Mirror

This directory contains the static ScenarioLens explorer published at [ethanvillalovoz.com/scenariolens](https://ethanvillalovoz.com/scenariolens/).

The authoritative project, reports, generation commands, and data-provenance documentation live in the [ScenarioLens repository](https://github.com/ethanvillalovoz/scenariolens). This folder is a deployment mirror, not a second source tree.

## Files

- `index.html`: accessible dashboard shell and project metadata
- `styles.css`: project-specific visual system
- `app.js`: filtering, ranking, and detail interactions
- `run.json`: public-safe full-corpus run summary and report navigation
- `scenarios.json`: public-safe scenario payload
- `evidence_index.json`: public evidence catalog
- `selector_decisions.json`: terminal-selector decision atlas
- `assets/`: trajectory diagrams, case cards, and social-preview media

## Updating The Mirror

1. Regenerate the demo in the ScenarioLens repository.
2. Run the mirror command with the ScenarioLens commit that produced the artifacts:

   ```bash
   npm run sync:scenariolens -- \
     --source /path/to/scenariolens/docs/demo \
     --ref <scenario-lens-commit>
   ```

3. Run `npm run check` from the portfolio root.
4. Verify `/scenariolens/` at desktop and mobile sizes.

The sync command copies the full operational Explorer, preserves this route's
canonical and social metadata, and pins repository-only report links to the
provided commit. Do not edit mirrored product files independently.

Do not copy raw Waymo records, private artifacts, or ignored processed data into this public mirror.
