# Scenario Explorer Demo

This directory contains the static Scenario Explorer dashboard and its data
contract.

Open locally with:

```bash
python3 -m http.server 8000 --directory docs
```

Then visit `http://localhost:8000`. The `docs/index.html` entrypoint redirects
to this explorer.

The production copy is embedded in Ethan's personal portfolio site at
`https://ethanvillalovoz.com/scenariolens/`.

The demo data is intentionally small: synthetic scenarios plus tiny
Waymo Motion-shaped fixtures. Each scenario includes interaction-risk metrics,
a constant-velocity prediction baseline, and lane-aware comparison fields when
map context is available so the explorer can surface cases where a simple
forecast fails. See
[`docs/data_provenance.md`](https://github.com/ethanvillalovoz/scenariolens/blob/main/docs/data_provenance.md) for the exact data status.
See [`docs/project_strategy.md`](https://github.com/ethanvillalovoz/scenariolens/blob/main/docs/project_strategy.md) for the product goal
and [`docs/architecture.md`](https://github.com/ethanvillalovoz/scenariolens/blob/main/docs/architecture.md) for the data-flow map.

Generated files:

- `index.html`: static dashboard shell.
- `styles.css`: dashboard visual system.
- `app.js`: filtering, sorting, and detail-panel interactions.
- `scenarios.json`: ranked dashboard payload.
- `assets/*.svg`: trajectory views referenced by `scenarios.json`.
- `assets/scenariolens-explorer.png`: README screenshot of the dashboard.
- `assets/scenariolens-demo.gif`: short README demo loop showing filtering,
  trajectory inspection, and baseline comparison.
- The evidence band and baseline-failure card are code-native UI backed by
  `scenarios.json`.

The explorer also links to
[`docs/reports/waymo_motion_case_study.md`](https://github.com/ethanvillalovoz/scenariolens/blob/main/docs/reports/waymo_motion_case_study.md)
as the public-safe summary of the local real Waymo Motion smoke test.
The first viewport links to the failure study, cross-shard stability study,
shard expansion plan, real lane-aware cross-shard diagnostic, baseline-debug
casebook, and portfolio packet so reviewers can jump from the product surface
to the evidence behind it.

Regenerate with:

```bash
scenariolens dashboard-data \
  --output docs/demo/scenarios.json \
  --assets-dir docs/demo/assets
```

## Payload Shape

`scenarios.json` uses format `scenariolens.dashboard.v1` and includes:

- dataset summaries,
- available filter values,
- ranked scenarios,
- score totals and component scores,
- raw and scored-context metrics used in ranking,
- constant-velocity baseline ADE/FDE, miss rate, target source, and failure score,
- lane-aware ADE/FDE, miss rate, FDE improvement, map-used count, and fallback count,
- lane-aware fallback reason summaries,
- Waymo metadata credibility fields such as SDC presence, prediction targets,
  and objects of interest when available,
- taxonomy tags,
- explanation reasons,
- SVG asset paths,
- basic track metadata.

The payload is deterministic and does not include timestamps, so it can be
checked into git and reviewed in pull requests.
