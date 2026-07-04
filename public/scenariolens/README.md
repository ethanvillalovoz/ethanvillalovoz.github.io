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
The Explorer also embeds a public-safe case-diagnostics slice from the local
100-scenario heading-aware lane-selection study: top improvements, regressions,
and fallback-heavy cases, with raw Waymo records and derived packets excluded.
The diagnostics panel links to the public heading-aware debug casebook, while
local SVG overlays and per-case manifests remain ignored under `data/processed/`.
The report rail also links to the heading-aware replay candidate plan,
heading-aware replay prototype, expanded lane-continuation topology gap audit,
expanded terminal-neighborhood audit, expanded terminal replay gate, and
expanded terminal selector experiment, calibration, and visual casebook,
plus the 200-scenario continuation/terminal-selector scale-up and selector
transfer/error/route-context validation, connecting those cases to public-safe
selector stability and topology coverage checks.

Generated files:

- `index.html`: static dashboard shell.
- `styles.css`: dashboard visual system.
- `app.js`: filtering, sorting, and detail-panel interactions.
- `scenarios.json`: ranked dashboard payload.
- `assets/*.svg`: trajectory views referenced by `scenarios.json`.
- `assets/scenariolens-explorer.png`: README screenshot of the dashboard.
- `assets/scenariolens-demo.gif`: short README demo loop showing filtering,
  trajectory inspection, and baseline comparison.
- The evidence band, baseline-failure card, and heading-aware case diagnostics
  are code-native UI backed by `scenarios.json`.

The explorer also links to
[`docs/reports/waymo_motion_case_study.md`](https://github.com/ethanvillalovoz/scenariolens/blob/main/docs/reports/waymo_motion_case_study.md)
as the public-safe summary of the local real Waymo Motion smoke test.
The first viewport links to the failure study, cross-shard stability study,
shard expansion plan, map/signal context study, real lane-aware cross-shard
diagnostic, context-joined failure study, context evaluation set,
context eval debug casebook, context replay candidate plan, context open-loop
replay prototype, context route/intent audit, lane-link continuation prototype,
lane-continuation validation study, lane-continuation candidate plan,
lane-continuation replay prototype, lane-continuation route diagnostics,
lane-continuation branch-selection diagnostic, motion-context branch replay,
branch rollout gate, route-context guard, guard calibration, branch coverage
audit, expanded branch coverage and guard validation, expanded topology gap
audit, expanded terminal neighborhood audit, expanded terminal replay gate,
expanded terminal selector, expanded terminal selector calibration, expanded
terminal selector visual casebook, the 200-scenario continuation study,
200-scenario topology audit, 200-scenario selector calibration, 200-scenario
selector transfer validation, 200-scenario selector error audit, 200-scenario
selector route/context audit, 200-scenario selector visual casebook, topology
gap audit, terminal neighborhood audit, terminal replay gate, terminal
selector, baseline-debug casebook,
replay candidate plan, open-loop
replay prototype, map-match audit, heading-aware lane-selection study,
heading-aware debug casebook,
heading-aware replay candidate plan, heading-aware replay prototype, and
portfolio packet plus data provenance so reviewers can jump from the product
surface to the evidence behind it.

Regenerate with:

```bash
scenariolens dashboard-data \
  --output docs/demo/scenarios.json \
  --assets-dir docs/demo/assets \
  --lane-selection-manifest data/processed/waymo_lane_selection_study/manifest.json
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
- public-safe heading-aware lane-selection case diagnostics when a study
  manifest is available,
- public report and debug-casebook links for the heading-aware diagnostics,
- Waymo metadata credibility fields such as SDC presence, prediction targets,
  and objects of interest when available,
- taxonomy tags,
- explanation reasons,
- SVG asset paths,
- basic track metadata.

The payload is deterministic and does not include timestamps, so it can be
checked into git and reviewed in pull requests.
