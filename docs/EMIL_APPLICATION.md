# Emil-inspired portfolio detail pass — local preview

> Historical experiment record. Statements about “current,” “local only,” deployment, or available controls below refer to that pass, not today’s site. See [DESIGN.md](DESIGN.md) and [ARCHITECTURE.md](ARCHITECTURE.md) for the accepted implementation. Local checkpoint/evidence paths may not be available in another clone.

**Current state:** Ethan requested removal of the experimental publication controls, illustrations, and captions on October 10. Only the original BODE-GEN method figure and Social Triangles study photo now render, without captions or clickable wrappers. Other page polish remains. The experimental-media descriptions below are historical.


2026-10-10. Builds on the accepted 644px reading layout and Inter typography. Previous accepted source is backed up in the chat workspace at `outputs/accepted-reading-backup/`; GitHub baseline remains bb04377. Nothing committed or published by this pass.

## Review

| Before | After | Why |
| --- | --- | --- |
| Copy confirmation text disappeared before its fade | Text retained through exit; separate polite status announcement | Complete the transition without announcing invisible stale status |
| Feedback timeout elapsed in hidden tabs | Remaining lifetime pauses while hidden | Apply the edge-case discipline from Building a Toast Component |
| Native tooltips had inconsistent timing | Shared hints: 450ms first hover, warm handoff, immediate keyboard access, Escape dismissal | Apply 7 Practical Animation Tips to the two ambiguous actions |
| Entire page faded together | Identity, profile links, and bio arrive over a short 280ms sequence | Try coordinated entry from Train Your Judgement; reading is never blocked |
| Figures were static at scroll entry | One 320ms partial clip/opacity reveal, no hidden initial state | Apply The Magic of Clip Path while retaining a no-JS/reduced-motion fallback |
| Browser chrome followed only OS defaults | Theme-color metadata follows selected page theme | Independently useful detail from Building a Drawer Component; physical Safari confirmation remains manual |
| One image per publication | Original figure/photo and purpose-built explanation; Social Triangles also has its original results plot | Apply the course article’s interactive teaching and illustration approach to verified research |
| Dense BODE-GEN method image was the only explanation | Four-step SVG loop with selected node, text, previous/next/restart | Explain search → prompt rewrite → code/test evaluation → model update, following §3.2 |
| Static robot photograph | Original turtle diagram moves among the four studied formations | Personal visual character grounded in the actual project, with honest conceptual labeling |
| Independent selected-label color changes | Clipped duplicate selection layer | Apply Emil’s clip-path tab mechanism; full keyboard semantics and immediate keyboard changes |

## Source connections

- [Friction as a Feature](https://emilkowal.ski/ui/friction-as-a-feature) and [Developing Taste](https://emilkowal.ski/ui/developing-taste): preserve the accepted baseline and evaluate in context.
- [Agents with Taste](https://emilkowal.ski/ui/agents-with-taste): coherent reading width, typography, focus, input-aware targets, and motion conventions. Uses the downloaded public `emil-design-eng` skill.
- [You Don’t Need Animations](https://emilkowal.ski/ui/you-dont-need-animations): occasional explanatory motion and responsive feedback; no keyboard motion.
- [7 Practical Animation Tips](https://emilkowal.ski/ui/7-practical-animation-tips): hints, press response, strong easing, short timing.
- [Building a Toast Component](https://emilkowal.ski/ui/building-a-toast-component): hidden-tab feedback lifetime and interruptible transitions.
- [The Magic of Clip Path](https://emilkowal.ski/ui/the-magic-of-clip-path): clipped tab selection and one-time figure reveal.
- [Train Your Judgement](https://emilkowal.ski/ui/train-your-judgement): coordinated entry, reversals, purpose-aware duration.
- [Building an Animation Course](https://emilkowal.ski/ui/building-an-animation-course): original illustrations and explanations readers can explore themselves.
- [Building a Drawer Component](https://emilkowal.ski/ui/building-a-drawer-component): input distinctions and browser chrome integration.

## Decisions on the rest of the approved menu

The source audit explicitly described alternatives and conditional features, not 22 simultaneous widgets. The research illustration is the original personal visual, rather than adding a second decorative mascot. The current short theme crossfade remains; a masked name or full-screen theme wipe has no explanatory role here. The tabs place supplemental explanations beside original research without opening an additional drawer or modal. Real video, a runnable model, technical essays, filtering, and asynchronous task notifications need material or functionality this homepage does not currently have. Those were not fabricated to fill the menu. Original results are shown unchanged rather than reconstructed or animated.

## Validation

See the chat's final QA record for rendered checks. Physical phone gestures/browser chrome are not established by desktop viewport emulation. These explanations contain no drag interaction and use native pointer/keyboard buttons, avoiding unverified drawer mechanics.
