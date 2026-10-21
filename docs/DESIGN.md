# Design contract

## Homepage without a decorative scene — October 21, 2026

Ethan requested removal of the greenhouse and robot timeline experiment. The introduction now leads directly into Experience, using the existing section spacing. Neither theme renders a decorative scene or a drawing robot.

The homepage order is introduction, experience, publications, teaching, and footer. Neutral accents, the silver favicon, portrait, tutorial thumbnail, and checkmark email confirmation remain the baseline. All other content and interactions are unchanged.

The removed greenhouse and robot experiments are preserved in local checkpoints outside the repository. The earlier greenhouse was published in commit `708d3a9449eea80091211709c85837a4b8870950`; that historical state is no longer the current design.

## Retained tutorial preview — October 20, 2026

After reviewing the three-reference experiment, Ethan chose to keep only the
compact thumbnail beside the Gaussian quadratic form tutorial. The phrase marker
and animated schematics were removed; the original static, nonclickable paper
figures and plain intro text are restored exactly from the checkpoint. All other
baseline design decisions remain unchanged. Ethan approved publication of the
retained tutorial preview after a final desktop/mobile check. See [THREE-REFERENCE-PREVIEW.md](THREE-REFERENCE-PREVIEW.md)
for the checkpoint and poster provenance.

## Accepted UX refinements — October 20, 2026

Following Ethan's visual review, publications use compact rows inspired by Juntao
Ren and Kaifeng Zhang: a 180px static figure on the left and the existing title,
authors, venue, summary, and resource links grouped on the right. Below 692px,
figures stack above the text to retain reading space. The 644px reading column,
Inter typography, colors, media styling, and link interactions stay unchanged.
The visible Paper label is PDF; data keys and destinations are unchanged.
Email retains its copy behavior and now shows a small copy icon beside the address.
All other design decisions below remain the baseline. Ethan approved final
verification and publication of these refinements.

The pre-preview state is commit `9a08ea5fed10e2e2ed59ee17e8a45a5dbddf534c`.
A complete tracked-source archive and verification notes are saved outside the repo
in the chat workspace's `outputs/ux-text-first-preview/` directory.
The intermediate text-first preview is separately checkpointed in
`outputs/ux-compact-publications-preview/`.

The subsequent compact-row state is checkpointed in `outputs/ux-resources-preview/`.
The retained additions are a verified CS 8803 tutorial link labeled “Gaussian
quadratic form walkthrough” and the existing copy-email control in the footer.
The simplified BODE-GEN thumbnail experiment was removed; the original paper
figure is restored within the accepted compact layout. No unverified recordings
were added to the other teaching entries.

## Direction

Ethan's research portfolio uses a quiet reading column inspired by Emil Kowalski's homepage and essays. Preserve Ethan's biography, photograph, publications, author order, resource destinations, organization marks, and existing theme behavior. This direction was explicitly requested on October 10, 2026 and supersedes the earlier 800px layout contract.

## Reference and influence ledger

The current upstream [Emil design-engineering skill](https://github.com/emilkowalski/skill/tree/main/skills/emil-design-eng), linked from [Agents with Taste](https://emilkowal.ski/ui/agents-with-taste), informed the implementation. The skill was downloaded and read alongside the rendered reference pages; this is not a claim that every design value below is mandated by that skill.

| Observed reference | Application to Ethan's site | Adaptation |
| --- | --- | --- |
| Emil's homepage and essays have a 644px content column at a 1280px viewport | 644px content inside a 692px outer container with 24px side padding | Fluid column below 692px |
| Homepage header begins around 117px; body is 16px with 26.4px leading | 112px desktop top padding, 16px/1.65 body text | Retain Ethan's portrait, location, and profile links |
| Section titles use restrained 16px medium text and generous section spacing | 16px section headings, 112px desktop section gaps | 64px gaps on phones; 20px name preserves personal identity |
| Essays use uncropped research figures; Juntao and Kaifeng group publication metadata beside thumbnails | 180px figures beside metadata on desktop, stacked above text below 692px | Static images; titles and resources retain their individual links |
| Near-white surface, dark headings, softer body text | Warm near-white, neutral text hierarchy, self-hosted Inter | Inter is an open-source alternative, not Emil's proprietary font |
| Skill emphasizes feedback, interruption, frequency, and accessibility | Retain fast underlines, subtle press feedback, stable copy confirmation, and a theme reveal originating at the theme button | No extra controls or required reading steps |

No reference code, font files, or media were copied from Emil's site. Existing research imagery retains its original attribution.

## Typography and spacing

- Inter is served locally by Next's font loader, with adjusted fallback metrics and `display: swap`.
- Name: 20px/28px, medium. Section headings: 16px/24px, weight 550. Publication titles: 17px/26px; the linked text renders at weight 500. Body and summaries: 16px/26.4px. Metadata: 14px; technology and tutorial links: 13px.
- Portrait: 72px desktop, 64px mobile, 8px radius. Publication media: 180px desktop, full column below 692px, 16:10 reserved aspect ratio, contain fit, 10px radius and faint edge.
- Publication entries use 80px separation on desktop and 64px on mobile. Experience and teaching groups use 28px separation. Dates use tabular numerals.
- Experience descriptions sit 6px below the role/date block; technology lists sit 6px below descriptions with 10px horizontal gaps and no comma separators.
- Paragraphs have 16px separation. Contact has 24px top space. Profile links span the full column beneath the identity row.
- Retain the existing spacing accepted on October 21: profile links to intro are 56px desktop / 48px mobile; hero to Experience is 80px / 56px; gaps between main sections are 112px / 64px. These are separate layout rules, not a requirement that every gap be equal.
- Light background: #FDFDFC. Main text: #63635E. Heading: #21201C. Muted text: #70706A. Dark colors use the established neutral charcoal palette.

## Interaction contract

- Publication images remain noninteractive. Authors, titles, venues, and resource links keep their existing destinations.
- Underlines belong to links. Ethan's author credit retains its persistent underline.
- Fine-pointer hover draws an underline in 160ms and releases in 100ms. Focus feedback is immediate and includes a visible outline. Wrapped links keep the underline with each text line.
- Standalone profile and resource links have 32px fine-pointer targets and 44px coarse-pointer targets. The theme control is always 44px. Email remains a one-click copy with stable success/failure feedback and a timer that resets on repeated copies.
- Pointer theme changes use a 340ms circular reveal originating at the theme button. Rapid changes are interruptible. Keyboard activation, reduced motion, and unsupported browsers switch immediately.
- Content and publication figures render without an entrance animation. Reduced motion removes nonessential movement. No delayed section reveals or animated static images.
- Back to top restores focus to the page start. Keyboard and reduced-motion scrolling are immediate.

## Content and identity

- Preserve technical claims, titles, author order, venues, dates, and contribution language. Do not invent results or unofficial project pages for coauthored work.
- Show available resources in Website, PDF, arXiv, Code, Video order. The internal Paper resource key displays as PDF; arXiv means the abstract.
- Preserve the approved silver orb favicon and matching static sharing assets. Theme changes do not alter them. The orb is not displayed as an interactive footer element.
- System color preference remains the default; a manual theme choice is remembered with the existing system-following behavior.

## Historical experiments

The October 10 preview documents record earlier alternatives, including full-width publication figures, entry animation, document previews, research controls, and an EV mark. They are not the current design contract. Those rejected features must not be restored merely because they appear in an older note. Local checkpoint tags and evidence folders in those notes may not exist in another clone.

## Before publishing

Check desktop and mobile at 320px and 390px, light/dark appearance, keyboard focus, email feedback, noninteractive figures, image loading, overflow, and browser errors. Run `npm run check` and `git diff --check`. Changes remain local until explicitly approved for publishing.

## Retained interaction details

The accepted 644px column, Inter typography, and existing profile/research facts remain the foundation. Publications display only their original, non-clickable figures, with no labels above them, media tabs, interactive walkthroughs, or captions. Those experimental additions were removed at Ethan’s request.

Introduction and research figures render without entry animation. Copy feedback retains text during exit and pauses when the page is hidden. Custom hints support focus, Escape, delayed first hover, and immediate handoff. Theme-color metadata follows the selected theme; the accepted circular theme reveal starts at the theme icon and cleans up when interrupted.
