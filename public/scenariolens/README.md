# Scenario Explorer Demo

This directory contains the static Scenario Explorer dashboard and its data
contract.

Open locally with:

```bash
python3 -m http.server 8000 --directory docs
```

Then visit `http://localhost:8000`. The `docs/index.html` entrypoint redirects
to this explorer.

When GitHub Pages is configured to publish from `main` / `docs`, the repository
root redirects to this explorer through `docs/index.html`.

Generated files:

- `index.html`: static dashboard shell.
- `styles.css`: dashboard visual system.
- `app.js`: filtering, sorting, and detail-panel interactions.
- `scenarios.json`: ranked dashboard payload.
- `assets/*.svg`: trajectory views referenced by `scenarios.json`.
- `assets/scenariolens-explorer.png`: README screenshot of the dashboard.

Regenerate with:

```bash
PYTHONPATH=src python3 -m scenariolens.cli dashboard-data \
  --output docs/demo/scenarios.json \
  --assets-dir docs/demo/assets
```

## Payload Shape

`scenarios.json` uses format `scenariolens.dashboard.v1` and includes:

- dataset summaries,
- available filter values,
- ranked scenarios,
- score totals and component scores,
- metrics used in ranking,
- taxonomy tags,
- explanation reasons,
- SVG asset paths,
- basic track metadata.

The payload is deterministic and does not include timestamps, so it can be
checked into git and reviewed in pull requests.
