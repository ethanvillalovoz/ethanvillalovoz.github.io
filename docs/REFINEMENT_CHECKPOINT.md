# October 10 refinement pass

> Historical experiment record. Statements about “current,” “local only,” deployment, or available controls below refer to that pass, not today’s site. See [DESIGN.md](DESIGN.md) and [ARCHITECTURE.md](ARCHITECTURE.md) for the accepted implementation. Local checkpoint/evidence paths may not be available in another clone.

## Current decision
The EV footer mark and research note were removed at Ethan’s request. This includes the note’s publication link, route, example component, image, styles, and sitemap entry. The email feedback, theme reveal, and enlarged-text refinements remain. The rest of this document records the earlier experiment; note-related details below are historical. Removed note files were archived outside the repository in this chat’s outputs/removed-research-note folder.

## Recovery
Accepted homepage is checkpoint `cf97090d90f39c26e7aa899b03985c85fd57b7e6`. Local only; origin remains bb04377. Save subsequent work before restoring files from that commit. No deployment authorized in this pass.

## Brief and evidence ledger
Preserve homepage reading width, hierarchy, static publication figures and existing content. Refine existing email/theme interactions; honor browser text size. Add an original EV footer mark. Add one optional coauthor research note at /notes/bode-gen/, reached through a publication resource link.

Research note purpose: let a reader understand how prompt search uses tests, examine a genuine prompt pair, and try the rule behind that exact task. Continuous reading, no carousel or mandatory controls. This is a coauthor explanation of a public preprint, not an official standalone project site or new scientific result.

Source: https://arxiv.org/html/2512.15076v1 and corresponding PDF, accessed 2026-10-10. Version v1, December 17 2025. Credit all six authors in original order. Method: §3.2 and Figure 1. Setup: §4.1. Comparison: Figure 8, multiply / HumanEval+ 97. Qualitative selection: §4.4 (15 cases from those with largest improvement). Limitations: §5. No individual contribution attribution inferred.

Assets: method PNG downloaded unchanged from arXiv's v1 HTML asset ICSE_BO_figure.png. Prompt text transcribed from Figure 8; line wrapping adapted for screen reading. The source paper is CC BY-SA 4.0. Note and adapted comparison attributed and licensed accordingly. Existing homepage figures unchanged.

Runnable example: original hand-written JavaScript implementation of the task's stated rule, with the four input/output examples in Figure 8. This does not execute BODE-GEN, query an LLM, reproduce generated code, or establish improvement. Integer inputs restricted to safe integers; negative values handled by magnitude before extracting units digits. No invented benchmark curves.

Influence ledger: Emil's text/feedback transitions and interruption handling → in-place copy feedback; clip-path examples → short theme reveal; relative units → larger browser text settings; craft/personal details → original EV mark; Building an Animation Course and technical essays → continuous prose, original inline figure, inspectable comparison and small runnable example. No copied identity, logo or article prose.

Conditional media: no verified BODE-GEN research video is present in the site's assets or paper. Unrelated/private project recordings are not evidence for this note. Video feature omitted pending a relevant authentic asset.

## Verification
- `npm run check`: repository validation, ESLint, TypeScript, production build and sitemap generation pass.
- Browser: email copy displays success in place; theme pointer and keyboard changes work; Research note opens internally; back-to-publications navigation works.
- Live example: (148, 412) → 16; (19, 28) → 72; (2020, 1851) → 0; (14, -15) → 20. Empty and unsafe-integer values rejected.
- Responsive: 320px viewport with root text temporarily doubled to 32px. Fixed date and organization wrapping; both homepage and note have document width 320px. Temporary text override removed afterward. Browser viewport override reset.
- Note image loads; browser title, description and canonical verified. No browser error logs observed during the checks.
- Publication preflight's four static index.html metadata warnings are not applicable to App Router output: runtime metadata is present. Provenance/rights manually recorded above and in THIRD_PARTY_NOTICES.md.
- Fast repeated pointer events can be coalesced during the browser's View Transition snapshot phase. Normal toggles and keyboard toggles verified; do not claim every rapid click was captured. Reduced-motion fallback reviewed in code, not exercised through an OS preference change.
- Existing publication thumbnails remain noninteractive and caption-free. The note's original figure has its own source attribution.

Final working changes remain local for review; checkpoint commit is preserved. No push or deployment performed.
