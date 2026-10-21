# Design QA

## Current baseline

Use [docs/DESIGN.md](docs/DESIGN.md) as the current design contract. The site is a single reading column with Inter, neutral themes, compact publication rows, a tutorial preview, and static day/evening robot greenhouse illustrations. Historical preview notes are not acceptance criteria.

## Latest visual audit — October 20, 2026

Audited the published greenhouse baseline at `708d3a9449eea80091211709c85837a4b8870950`, before this documentation update. No source changes were needed from that visual pass.

- Inspected introduction, experience, publications, teaching, and footer in light and dark themes, using desktop, tablet, and narrow responsive viewports.
- Compared shared underline geometry and representative rendered hover states, including the wrapped tutorial title.
- Checked image loading, layout overflow, keyboard focus, Back to top, theme changes, and email feedback.
- Verified all 41 unique homepage link destinations through successful HTTP responses or browser follow-up for automated-request exceptions.
- `npm run check` passed validation, lint, TypeScript, build, and sitemap generation.

Limits: responsive browser viewports were used, not a physical phone or a fresh cross-browser matrix. Reduced-motion/coarse-pointer paths were reviewed in source. Independent clipboard paste read-back was masked by the browser tool. The audit does not establish that every possible device, gesture, or external destination behavior is defect-free.

## Repeatable review

1. Run `npm run check` and `git diff --check`.
2. Inspect all homepage sections at desktop, tablet, and 390px/320px phone widths in both themes.
3. Compare fonts, heading hierarchy, section/row gaps, and underlines at actual rendered sizes; do not rely on shared CSS alone.
4. Check long titles and course names, dates, technologies, image loading, and horizontal overflow.
5. Exercise keyboard focus, theme changes in both directions, rapid toggles, email feedback, and Back to top. Where available, test reduced motion and touch on a real device.
6. Verify figures and greenhouse remain static/nonclickable; tutorial and resource links retain their destinations.
7. Check affected legacy redirects, metadata, browser errors, and the 404 page.
8. Record what was tested and any tool/device limitations. Before claiming deployment parity, verify the deployed revision and live assets.

The in-app browser may scale requested viewports slightly; record its actual CSS width when documenting exact breakpoint coverage. A prior passing audit is evidence for that revision, not automatic approval of later changes.
