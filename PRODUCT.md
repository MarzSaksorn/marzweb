# Product

## Register

brand

## Users

Recruiters, engineering peers, and collaborators visiting a personal portfolio. Their context: evaluating the developer's craft, project breadth, and design taste. Primary task: quickly scan projects, assess technical range, and form a hiring/collaboration impression.

## Product Purpose

A personal portfolio and project archive showcasing Saksorn's cloud/DevOps engineering journey from ground zero. Success looks like: visitors immediately understand the developer's skill range, can browse/filter projects, and leave with a clear sense of the person behind the code.

## Brand Personality

Approachable, deliberate, technical-but-warm. 3 words: **crisp, purple, personal**. Tone is confident without arrogance — the work speaks.

## Anti-references

- Old pink/rose/magenta palette (pre-redesign). Read as immature, unfocused.
- Heavy JS animation libraries on a portfolio (Framer Motion, GSAP). Performance over flash.
- Generic SaaS templates (big numbers, gradient text, side-stripe borders, section eyebrows).
- "AI-made" tells: ghost cards (border + large shadow), excessive border-radius, identical card grids, gradient text decorations.

## Design Principles

- **Performance before flourish.** CSS-only motion, no JS animation libraries. If it can't be done with transitions and transforms, it doesn't ship.
- **Data-driven surfaces.** Projects, contacts, and content come from static data modules — pages consume data, not inline arrays.
- **Bento not boxes.** Homepage uses an asymmetric bento grid. Interior pages use standard 1→2→3 column grids. Cards are purposeful, never a lazy default.
- **Editorial breathing room.** Generous whitespace, typographic contrast, max-width prose. The site feels open, not cramped.
- **Identity through palette.** Pastel purple accent (`#A78BFA` / `#C4B5FD`) is the singular signature color. No competing accent.

## Accessibility & Inclusion

- WCAG AA contrast minimums (body ≥4.5:1, large text ≥3:1).
- Dark/light mode parity — tokens swap correctly in both themes.
- Reduced motion via `prefers-reduced-motion`.
- Semantic HTML, proper heading hierarchy, descriptive link text.
