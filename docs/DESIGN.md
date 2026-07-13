# Design Contract

This document records the interaction and presentation rules that keep new pages consistent with the established portfolio. It is a maintenance reference, not a mandate to redesign existing work.

## Identity

- Home is the visual source of truth. Preserve its copy hierarchy, 672px column, typography, spacing, organization marks, profile image, and absence of global navigation.
- Secondary pages may use wider containers when their content requires grids, technical figures, or publication metadata.
- Use the system Helvetica/Arial stack and the light/dark color tokens in `src/app/globals.css`.
- Keep the interface quiet. Add visual variation only when it improves comprehension.

## Links And Controls

- Underlines indicate links. Non-interactive emphasis uses weight or color instead.
- Text-link underlines draw from left to right on hover, keyboard focus, or active press; reveal the fixed-thickness line without scaling it, and do not leave it permanently visible.
- Hover-only behavior must be gated by `@media (hover: hover) and (pointer: fine)` so taps do not leave sticky states.
- Interactive controls need visible `:focus-visible` treatment and accurate, action-oriented accessible names.
- Icon controls use a 44px target. Text controls must retain at least a 24px target and comfortable separation from adjacent actions.
- Internal navigation stays in the current tab. External resources and documents may open in a new tab when visitors are likely to compare them with the portfolio.

## Motion

- Motion must explain state, provide feedback, or preserve spatial continuity. Do not animate solely to decorate a frequently used interaction.
- Use `--motion-fast` for press and color feedback and `--motion-standard` for media or underline transitions.
- Prefer `transform` and `opacity`; avoid animating layout properties.
- Press feedback is subtle: controls scale no lower than `0.96`.
- Page-entry fades are an intentional part of the current identity. Keep Home fades at or below 350ms, secondary-page fades at or below 250ms, and stagger steps at or below 50ms. Do not add new entrance systems elsewhere.
- Every animation and transition must collapse under `prefers-reduced-motion`.

## Work And Research

- A project card's image, title, metadata, and description form one primary link when they share a destination.
- Keep project imagery technically informative. Prefer interfaces, evaluation figures, system behavior, and real demonstrations over decorative graphics.
- Preserve separate paper, code, demo, and citation links when a research entry has multiple valid destinations.
- Project pages should lead with an understandable artifact, then explain ownership, architecture, evaluation, edge cases, and limitations.

## Content

- Prefer concrete technical nouns and evidence over broad claims.
- Writing should emerge from completed work: decisions, experiments, failures, tradeoffs, and reusable lessons.
- Preserve publication titles, author order, venues, dates, and contribution language exactly as supported by source material.

## Review Checklist

Before publishing a visible change:

1. Check Home and the affected secondary route at desktop and mobile widths.
2. Test keyboard focus, touch behavior, theme switching, and the primary interaction.
3. Verify light, dark, and reduced-motion modes.
4. Check for clipping, horizontal scrolling, sticky hover states, layout shift, and missing media.
5. Run `npm run check` and confirm there are no relevant browser console errors.
