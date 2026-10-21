# Design QA

## Current baseline

Use [docs/DESIGN.md](docs/DESIGN.md) as the current design contract. The site is a single reading column with Inter, neutral themes, compact publication rows, and a tutorial preview. Historical preview notes are not acceptance criteria.

## Latest visual audit — October 21, 2026

Audited localhost after removing the greenhouse and robot experiment, against base revision `affe10f77c20837069b97038c71cd590510f3f52`. No further site-code changes were needed. This audit is local; it does not establish deployment parity.

- Visually inspected the introduction, experience, publications, teaching, and footer. Actual CSS widths checked were 906px (desktop, both themes), 776px (tablet, light), 432px (phone, dark), and 323px (narrow phone, light).
- Compared rendered profile, organization, technology, publication title, author, resource, course, and tutorial underlines. All 49 shared underline spans use 3px bottom padding and the same 1.5px underline; wrapped text remains readable.
- Verified the typography hierarchy, shared section headings, role/date styles, supporting-text weights, section margins, row spacing, 6px description-to-technology gap, and 10px technology spacing. Different sizes serve different content roles; uniformity does not mean making every label identical.
- Traversed all 50 homepage interactive controls with Tab and checked visible focus. Tested pointer and keyboard Back to top, email-copy feedback without a layout jump, theme changes in both directions, and rapid double-click toggling; the theme reveal cleaned up afterward.
- Confirmed loaded homepage images, no measured horizontal overflow, WSU logo colors in both themes, and the tutorial thumbnail, YouTube icon, title/arrow wrapping, and duration. No warning/error entries were reported by the browser log query.
- Consulted Emil's applicable design, motion, and mobile guidance. Existing reduced-motion and fine-pointer guards were reviewed in source. Preserved the established theme reveal and wrapping underline implementation; no new motion or features were warranted.
- `npm run check` passed repository validation, lint, TypeScript, production build, and sitemap generation. `git diff --check` passed.

Limits: this was a responsive in-app browser audit, not a physical iPhone/Safari test or exhaustive device matrix. Reduced-motion and coarse-pointer behavior were source-reviewed, not freshly exercised under those settings. Clipboard success feedback was tested without an independent paste read-back. External destinations were not comprehensively rechecked in this pass. The skills are guidance, not 14 automated pass/fail tests; native Expo/Swift, Sonner, library selection, and new-prototype workflows were inapplicable.

## Previous visual audit — October 20, 2026

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
6. Verify publication figures remain static/nonclickable; tutorial and resource links retain their destinations.
7. Check affected legacy redirects, metadata, browser errors, and the 404 page.
8. Record what was tested and any tool/device limitations. Before claiming deployment parity, verify the deployed revision and live assets.

The in-app browser may scale requested viewports slightly; record its actual CSS width when documenting exact breakpoint coverage. A prior passing audit is evidence for that revision, not automatic approval of later changes.
