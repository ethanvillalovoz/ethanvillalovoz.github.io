# Design Contract

This document records the interaction and presentation rules that keep new pages consistent with the established portfolio. It is a maintenance reference, not a mandate to redesign existing work.

## Identity

- Home is the visual source of truth. Preserve its 800px container, organization marks, and signature link animations. The introduction reads name, location, then profile links with brand marks; the biography and contact sentence follow underneath. No section-navigation row.
- The introduction uses a 104px square portrait on desktop and an 80px portrait on mobile, with a subtle 2px corner radius. On desktop it aligns with the name, location, and profile-link group. The biography and contact run across the full content width underneath. The portrait's right edge aligns with the publication section's right content margin.
- Reference influence: Wenlong Huang, Kaifeng Zhang, and Keunhong Park informed the publication presentation and academic hierarchy. Ethan's copy, photo, typography, themes, and interactions are retained; no reference code or media was reused.
- Use the system Helvetica/Arial stack throughout, with the name at 28px, section headings at 22px, and publication titles at 18px. Use the light/dark color tokens in `src/app/globals.css`.
- The homepage uses a monochrome palette: white (#FFFFFF) in light mode and neutral charcoal (#171717) in dark mode, with neutral text, dividers, focus rings, and selection colors. No decorative background gradient. Keep vertical overscroll disabled to preserve the existing scroll behavior.
- The reference is the black-and-white contrast of the MIT mark supplied by the user; retain Ethan’s own lowercase e identity and all existing layout, typography, content, and interactions. Company marks and publication figures keep their original colors.
- New visitors follow their system color preference. An explicit manual choice is remembered; toggling back to the system’s current appearance resumes automatic following.
- Pointer-initiated theme changes use a 200ms page crossfade and a subtle sun/moon transition where View Transitions are supported. Keyboard activation, reduced motion, and unsupported browsers switch immediately; preserve layout and scroll position.
- Browser favicons and sharing images always use the same white lowercase e on a black circle, with transparent corners. They do not change with system appearance or the website theme. Use static metadata and the matching root ICO; no runtime favicon switching. Keep `/favicon.ico` synchronized for direct PDFs and other files that do not have HTML metadata.
- Sharing uses the circular 96px icon for compact Apple previews, a separate 180px touch icon, and a 512px X summary icon. Platforms control their own card layout and caching.
- Keep the interface quiet. Add visual variation only when it improves comprehension.

## Links And Controls

- Underlines indicate links. Non-interactive emphasis uses weight or color instead.
- Text-link underlines draw from left to right on hover, keyboard focus, or active press; reveal the fixed-thickness line without scaling it, and keep the same text-to-line spacing across links. Ethan’s author credit retains its deliberate persistent underline.
- Hover-only behavior must be gated by `@media (hover: hover) and (pointer: fine)` so taps do not leave sticky states.
- Interactive controls need visible `:focus-visible` treatment and accurate, action-oriented accessible names.
- The theme control uses a 44px target. Profile and resource links use compact marks, a 24px line or minimum height, and space between actions; X uses its recognizable mark without a repeated label.
- Internal navigation stays in the current tab. External resources and documents may open in a new tab when visitors are likely to compare them with the portfolio.

## Motion

- Motion must explain state, provide feedback, or preserve spatial continuity. Do not animate solely to decorate a frequently used interaction.
- Use `--motion-fast` for press and color feedback and `--motion-standard` for media or underline transitions.
- Prefer `transform` and `opacity`; avoid animating layout properties.
- Press feedback is subtle: controls scale no lower than `0.96`.
- Page-entry fades are an intentional part of the current identity. Keep homepage fade durations at or below 350ms and stagger steps at or below 50ms. Do not add new entrance systems elsewhere.
- Every animation and transition must collapse under `prefers-reduced-motion`.

## Work And Research

- Publication images and titles link to the primary paper destination. Authors and resources retain their individual destinations.
- Keep project imagery technically informative. Prefer interfaces, evaluation figures, system behavior, and real demonstrations over decorative graphics.
- Show only available resources, ordered Website, Paper, arXiv, Code, Video. Paper opens a PDF; arXiv opens its abstract page.
- Do not create unofficial project pages for coauthored papers.
- Experience and Teaching share 16px/24px institution headings and 14px/20px role/date text. Use 2px from institution to first role, 16px between roles, and 20px between institutions. Teaching courses follow their role with a 6px gap.
- Dividers appear only between publications. The footer contains copyright and Back to top, with no divider. Back to top restores focus to the page start and scrolls smoothly, or instantly when reduced motion is requested.

## Content

- Prefer concrete technical nouns and evidence over broad claims.
- Preserve publication titles, author order, venues, dates, and contribution language exactly as supported by source material.

## Review Checklist

Before publishing a visible change:

1. Check the affected homepage sections at desktop and mobile widths.
2. Test keyboard focus, touch behavior, theme switching, and the primary interaction.
3. Verify light, dark, and reduced-motion modes.
4. Check for clipping, horizontal scrolling, sticky hover states, layout shift, and missing media.
5. Run `npm run check` and confirm there are no relevant browser console errors.
