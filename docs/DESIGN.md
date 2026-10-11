# Design contract

## Direction

Ethan's research portfolio uses a quiet reading column inspired by Emil Kowalski's homepage and essays. Preserve Ethan's biography, photograph, publications, author order, resource destinations, organization marks, and existing theme behavior. This direction was explicitly requested on October 10, 2026 and supersedes the earlier 800px layout contract.

## Reference and influence ledger

The current upstream [Emil design-engineering skill](https://github.com/emilkowalski/skill/tree/main/skills/emil-design-eng), linked from [Agents with Taste](https://emilkowal.ski/ui/agents-with-taste), informed the implementation. The skill was downloaded and read alongside the rendered reference pages; this is not a claim that every design value below is mandated by that skill.

| Observed reference | Application to Ethan's site | Adaptation |
| --- | --- | --- |
| Emil's homepage and essays have a 644px content column at a 1280px viewport | 644px content inside a 692px outer container with 24px side padding | Fluid column below 692px |
| Homepage header begins around 117px; body is 16px with 26.4px leading | 112px desktop top padding, 16px/1.65 body text | Retain Ethan's portrait, location, and profile links |
| Section titles use restrained 16px medium text and generous section spacing | 16px section headings, 112px desktop section gaps | 64px gaps on phones; 20px name preserves personal identity |
| Essays place figures across the reading column | Full-width, uncropped publication images above metadata and summary | Static images; titles and resources retain their individual links |
| Near-white surface, dark headings, softer body text | Warm near-white, neutral text hierarchy, self-hosted Inter | Inter is an open-source alternative, not Emil's proprietary font |
| Skill emphasizes feedback, interruption, frequency, and accessibility | Retain fast underlines, subtle press feedback, stable copy confirmation, and a theme reveal originating at the theme button | No extra controls or required reading steps |

No reference code, font files, or media were copied from Emil's site. Existing research imagery retains its original attribution.

## Typography and spacing

- Inter is served locally by Next's font loader, with adjusted fallback metrics and `display: swap`.
- Name: 20px/28px, medium. Section headings: 16px/24px, weight 550. Publication titles: 17px/26px, weight 550. Body and summaries: 16px/26.4px. Metadata: 14px.
- Portrait: 72px desktop, 64px mobile, 8px radius. Publication media: full column, 16:10 reserved aspect ratio, contain fit, 10px radius and faint edge.
- Publication entries use 80px separation on desktop and 64px on mobile. Experience and teaching groups use 28px separation. Dates use tabular numerals.
- Paragraphs have 16px separation. Contact has 24px top space. Profile links span the full column beneath the identity row.
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
- Show available resources in Website, Paper, arXiv, Code, Video order. Paper means the PDF; arXiv means the abstract.
- Preserve the approved silver orb favicon and matching static sharing assets. Theme changes do not alter them. The orb is not displayed as an interactive footer element.
- System color preference remains the default; a manual theme choice is remembered with the existing system-following behavior.

## Review rationale

| Before | After | Why |
| --- | --- | --- |
| 752px usable content and large display headings | 644px reading column with small headings | Apply the overall proportions of the reference, beyond button polish |
| One dense biography paragraph | Existing content split into two paragraphs | Give current interests and previous work separate reading beats |
| 250px diagram beside squeezed metadata | Full-width figure followed by metadata, summary, and resources | Make scientific imagery readable and use the essay's media rhythm |
| 48–56px major section spacing | 112px desktop / 64px mobile section spacing | Establish clear pauses without adding dividers or cards |
| System Helvetica stack | Self-hosted Inter | Consistent text rendering and a closer reading texture |

## Before publishing

Check desktop and mobile at 320px and 390px, light/dark appearance, keyboard focus, email feedback, noninteractive figures, image loading, overflow, and browser errors. Run `npm run check` and `git diff --check`. Changes remain local until explicitly approved for publishing.

## Interaction completion (local preview, October 10)

The accepted 644px column, Inter typography, and existing profile/research facts remain the foundation. Publications display only their original, non-clickable figures, with no labels above them, media tabs, interactive walkthroughs, or captions. Those experimental additions were removed at Ethan’s request.

Introduction and research figures render without entry animation. Copy feedback retains text during exit and pauses when the page is hidden. Custom hints support focus, Escape, delayed first hover, and immediate handoff. Theme-color metadata follows the selected theme; the accepted circular theme reveal starts at the theme icon and cleans up when interrupted.
