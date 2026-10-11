# Full refinement preview — October 10, 2026

## Latest user revision
Removed CV/paper preview popovers and the bold-text mask after the whole-site review. CV/Paper remain ordinary direct links; unused preview component, styles, and generated first-page images were removed. A reversible pre-change archive is stored outside the repository at `hey-x20/before-simplification.tar.gz`. Reduced desktop links-to-bio margin from 64px to 40px and intro bottom margin from 112px to 80px; mobile equivalents are 40px to 32px and 64px to 56px. Reading-column width and publication images are unchanged. The sections below are an implementation history, not the current feature inventory.

Removed the entire supplementary publication-control row (Copy citation, Abstract, Explore the method) from both homepage entries at the user's request. Its expandable content is no longer mounted. Paper links, previews, and original thumbnails remain.

## Scope and rollback
User requested trying the full twelve-item menu, then explicitly excluded research video and draggable image comparisons because no source assets exist and requested that publication thumbnails remain untouched. Starting checkpoint: **95450ed**. All changes after it are local only. No deployment or GitHub push authorized.

Included: document previews, citation copying, official abstracts, blurred loading placeholders for document previews and portrait, theme-icon transition, outbound arrows, masked label transitions, a small spring-driven portrait response, an original-paper diagram walkthrough, and a runnable benchmark-task illustration. Video/comparison omitted per user's correction. ResearchMedia.tsx and both original thumbnails are unchanged. No research-note route or EV mark is restored.

## Sources and ownership
This remains Ethan's coauthor portfolio. No new career or individual-contribution claims are added.
- CV preview: first page of existing public/data/EthanVillalovoz-CV.pdf, rendered at 640 × 829. Owned, already publicly distributed by Ethan. No textual changes.
- BODE-GEN preview: first page of https://arxiv.org/pdf/2512.15076, v1 (December 17 2025), 640 × 949. Original coauthored preprint; CC BY-SA 4.0 per arXiv metadata. Abstract transcribed from page 1. BibTeX identifies the arXiv preprint, not the template ACM DOI printed in the source PDF.
- Social Triangles preview: first page of existing IROS PDF in public/data/research, 640 × 829. Existing coauthored paper authorized for this portfolio. Abstract transcribed verbatim, including original wording. Citation preserves authors in paper order and uses IEEE DOI 10.1109/IROS55552.2023.10342372.
- BODE-GEN method image: unmodified Figure 1, downloaded from v1 HTML earlier in this chat. UI highlight rectangles are conceptual annotations of §3.2, explicitly not a live experiment. Adjacent source link and disclosure. No fabricated scientific result or topology.
- Runnable example: original hand-written JavaScript implementation of HumanEval+ 97's stated units-digit rule from Figure 8. Four paper examples are verification cases. It makes no model calls and does not run BODE-GEN; disclosure is adjacent. No copied implementation attribution.

## Influence ledger
Emil's origin-aware popovers → document peeks. Feedback/state transitions → copy-citation confirmation. Accordion exercises → inline official abstracts. Clip-path demonstrations → masked link treatment. Skill's spring guidance → portrait response. Course's interactive explanations → the original-figure walkthrough and inspectable task illustration. These are adaptations, not claims that Emil supplies these exact academic components.

## Implementation boundaries
Preview links retain native PDF navigation; touch input gets ordinary links, keyboard focus gets immediate previews, Escape dismisses. Motion is reduced or bypassed for reduced-motion and keyboard paths. Expandable content is inert while closed. Citations use clipboard writes with a selectable fallback if blocked. Both publication figures remain nonclickable.

## Verification
- `npm run check` and `git diff --check` passed after the final changes.
- Browser: CV and BODE-GEN PDF previews on keyboard focus; Escape dismissal; pointer and keyboard theme toggling; actual copied BODE-GEN citation pasted into a field; both official abstracts; all four method steps and boundary buttons; runnable example and invalid-input feedback; Escape closes the method section and restores focus.
- 320px CSS viewport: no horizontal overflow with method or abstract expanded; closed content is inert. Viewport restored afterward.
- No browser console errors observed. Original ResearchMedia component has no diff.
- Reduced-motion and fine-pointer guards reviewed in code. Physical touch gestures and pointer-hover spring feel were not exercised by browser automation.

## Preview and print follow-up
- Document previews now use interruptible opacity/scale transitions with a 120ms pointer exit, plus an 800ms shared repeat window that skips the initial delay and entry animation. Only one preview can be active. Keyboard, Escape, scroll, and reduced-motion dismissal remain immediate; pending timers are cleaned up.
- Mobile browser theme metadata was already implemented in ThemeToggle. Browser inspection confirmed both tags become #171717 in dark mode and #fdfdfc in light mode; no duplicate implementation was added. Physical mobile browser chrome was not tested.
- Added print-only white background, dark text, compact figures, page-break guidance, and removal of controls/tooltip overlays. Screen layout and publication thumbnails are unchanged. Native print pagination was not visually verified: the in-app browser did not expose a print preview through its print shortcut.
- Verified pointer initial preview and instant repeat entry using native pointer actions, keyboard opening/Escape dismissal, both theme metadata values, and no browser console errors. Full repository checks/build and diff whitespace check passed.

## Paper icon, arrival, and hint experiment
- Paper links use an original folded-corner SVG with a single 280ms lift on fine-pointer hover. Removed their outbound arrows so the new motion replaces the previous effect. Touch, keyboard focus, and reduced motion do not trigger the fold animation.
- IntroArrival preserves the accepted stagger on first visit per tab session, then skips it on reload/return. Session storage is guarded, content remains visible without JavaScript, and keyboard input/reduced-motion changes cancel running motion.
- Theme/email hints have a 140ms pointer-leave grace period; returning cancels dismissal. Corrected the theme tooltip's invisible bridge to cover the gap above it. Escape remains immediate.
- Full repository check/build passed. Browser confirmed first-visit then return-visit on reload, two custom Paper icons with no arrow, fine-pointer animation name and one iteration, keyboard PDF-preview dismissal, and no console errors. The automation's drag primitive generates clicks, so continuous hover across the tooltip gap was not conclusively verified.
