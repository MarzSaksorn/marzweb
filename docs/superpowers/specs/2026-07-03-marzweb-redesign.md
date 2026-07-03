# Marzweb Redesign — Design Spec

**Date:** 2026-07-03
**Status:** Draft

---

## Design Read

Developer portfolio for recruiter/peer audience. Professional, performant, pastel purple accent. CSS-only motion. Bento-grid homepage.

---

## Three Dials

| Dial | Value | Rationale |
|------|-------|-----------|
| DESIGN_VARIANCE | 6 | Asymmetric bento on homepage, standard grid elsewhere |
| MOTION_INTENSITY | 3 | CSS transitions only, no JS animation libs |
| VISUAL_DENSITY | 4 | Generous spacing, clean editorial feel |

---

## Design Tokens

### Color Palette

| Token | Light | Dark |
|-------|-------|------|
| Background | `#FAFAF9` | `#1C1C1E` |
| Surface | `#FFFFFF` | `#2C2C2E` |
| Border | `#E4E4E7` | `#3A3A3C` |
| Foreground | `#1C1C1E` | `#F5F5F0` |
| Accent (purple) | `#A78BFA` | `#C4B5FD` |
| Accent soft | `#F0ECFF` | `#2E2459` |
| Muted | `#787774` | `#A1A1AA` |
| Destructive | `#EF4444` | `#F87171` |

### Radius Scale

| Element | Radius |
|---------|--------|
| Cards | 8px |
| Buttons | 6px |
| Inputs | 4px |
| Tags/pills | 9999px |

### Typography

- **Sans:** Geist (headings, body, UI)
- **Mono:** Geist Mono (code, metadata)
- Heading: `tracking-tight`, `leading-tight`
- Body: `leading-relaxed`, `max-w-[65ch]`

---

## Layout Architecture

### Homepage (Bento Grid)

```
┌──────────────────────────────────────────────┐
│  Hero — name, tagline, CTA                   │
├───────────────────┬──────────────────────────┤
│  Featured Project │  Currently Working On    │
│  (large tile)     │  (status card)           │
├────────┬──────────┴──────────┬───────────────┤
│ About  │  Tech/Tools         │  GitHub Stats │
│  me     │  (icon grid)       │  (widget)     │
└────────┴─────────────────────┴───────────────┘
```

### Pages

| Route | Layout | Content |
|-------|--------|---------|
| `/` | Bento grid | Hero + featured + about + tech |
| `/projects` | Filterable grid (1→2→3 col) | All projects with search + tag filter |
| `/projects/:slug` | Full-width detail | Hero, description, tech, screenshots |
| `/contacts` | Card list | Email, Instagram, Facebook + collab card |

### Sidebar

- Fixed left 64px on desktop, slide-in drawer on mobile
- Nav: Home, My Projects, My Contacts
- Footer: old design link, theme toggle
- Active item: pastel purple left border + soft bg
- No JS animation libraries

---

## Component Specs

### Cards
- `border`, `bg-surface`, `rounded-[8px]`
- Hover: `-translate-y-[1px]`, subtle border color shift
- `transition-all duration-200`

### Buttons
- Primary: `bg-[#A78BFA]` → hover `bg-[#8B6FE8]`, white text
- Secondary/outline: border variant
- `active:scale-[0.98]` press feedback

### Tags
- `rounded-full`, `text-xs`, 10% accent bg, accent text
- First tag renders as card badge (gradient accent bar)

### Input
- Clean border, purple focus ring (`ring-[#A78BFA]`)
- Search icon positioned absolute left

### Project Detail Page (Phase 3)
- Hero section: project image, title, tags, status badge
- Full description section
- Tech stack list with icons (lucide-react)
- GitHub + Demo buttons
- Screenshots gallery (if available)
- Back to projects link

---

## Motion

All CSS-only, no JS animation libraries:
- Card entry: `@keyframes fadeUp` (opacity 0→1, y 12→0)
- Card hover: `transition-all duration-200`
- Button press: `active:scale-[0.98]`
- Sidebar: `transition-transform duration-300 ease-in-out`
- Theme toggle: instant swap (no transition on `class` change)

---

## Dark Mode

- Class-based via next-themes (existing)
- Tokens swap under `.dark` selector
- Respects `prefers-color-scheme` with manual toggle override

---

## Phased Delivery

### Phase 1 (Now — Design Polish)
- Update CSS variables to new token system
- Redesign homepage bento grid
- Polish project cards (new colors, consistent radius)
- Update navigation and sidebar colors
- Dark/light mode parity
- Remove Valentine page, merge data into main projects

### Phase 2 (Later — Backend)
- Supabase/Postgres backend
- Admin panel for CRUD

### Phase 3 (Later — Detail Pages)
- `/projects/:slug` routes
- Full project content, screenshots gallery

---

## File Changes

### Update
- `src/index.css` — replace HSL variables with new pastel purple tokens
- `src/pages/Home.tsx` — bento grid layout
- `src/pages/Projects.tsx` — new colors, merged Valentine data
- `src/pages/Contacts.tsx` — color update
- `src/components/Sidebar.tsx` — color update
- `tailwind.config.js` — update color tokens

### Keep
- `src/components/ui/` — shadcn components (update colors via CSS vars)
- `src/components/ThemeProvider.tsx` — unchanged
- `src/lib/utils.ts` — unchanged
- `src/App.tsx` — unchanged (routes already updated)

### Added (Phase 1)
- `src/data/projects.ts` — extracted project data (done)
