# Task 1 Report — Design Tokens

## What was implemented

Replaced the pink-based HSL CSS variable palette with a pastel purple RGB palette across `:root` and `.dark` in `src/index.css`. Added three gradient utility classes using the new purple scale (`#A78BFA` → `#8B6FE8` → `#C4B5FD`).

## Additional change beyond brief

The brief's CSS uses plain RGB triplets (e.g. `--background: 250 250 249`), but `tailwind.config.js` referenced colors via `hsl(var(--...))`. Since the values are now RGB, all `hsl()` calls in the Tailwind config were updated to `rgb()`. Without this, Tailwind would emit invalid CSS (`hsl(250 250 249)` is not a valid HSL value). The `borderRadius` section was already correct and required no changes.

## Build output

```
vite v5.4.21 building for production...
✓ 1488 modules transformed.
✓ built in 5.08s
```

Zero errors. Two benign Rollup warnings about `/*#__PURE__*/` annotations in `next-themes` — pre-existing, unrelated.

## Files changed

| File | Change |
|---|---|
| `src/index.css` | Replaced entire file — new RGB palette + gradient utilities |
| `tailwind.config.js` | Changed `hsl(var(...))` → `rgb(var(...))` in all 16 color references (borderRadius verified, already correct) |

## Self-review findings

- The new palette is a pastel purple variant of the standard shadcn/ui neutral/zinc structure, keeping the same variable names so all existing Tailwind classes (`bg-background`, `border-border`, etc.) work without component changes.
- Gradient utility class names (`text-gradient`, `bg-gradient-primary`, `border-gradient`) preserved from original — only hex values changed.
- Dark mode values are inverted properly (light backgrounds in root, dark backgrounds in `.dark`).

## Issues or concerns

- The `next-themes` Rollup warnings are pre-existing and cosmetic — no action needed.
- LF→CRLF warning from Git is cosmetic on Windows.
