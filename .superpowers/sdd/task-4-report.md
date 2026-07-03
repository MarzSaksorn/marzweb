# Task 4 Report — Homepage Bento Grid Redesign

## What I Implemented
- Replaced `src/pages/Home.tsx` entirely with a bento grid layout using the new pastel purple palette (`#A78BFA`, `#C4B5FD`, `#8B6FE8`)
- Layout: 2-column grid (3-col md) — featured projects span left 2 cols, right col has stacked cards (current project, about, tech stack)
- Hero card with gradient background, "View My Projects" CTA button
- Featured projects section reads `featured` flag from `src/data/projects.ts`, renders 2-across grid with image, title, description, and Code/Demo buttons
- "Currently Working On" card sourced via `projects.find()` (PC Wiki project)
- About Me mini card
- Tech Stack badge cloud (10 tools)
- Added `featured: true` to Gamehub (id:1) and Marzweb (id:2) in `src/data/projects.ts`

## Build Test Results
- `npm run build` passed with zero errors
  - tsc: no errors
  - vite build: 1489 modules transformed, 3 chunks produced in 5.57s
  - Only warnings: 2 Rollup `/*#__PURE__*/` annotation position comments in `next-themes` (benign, pre-existing)

## Files Changed
1. `src/pages/Home.tsx` — full rewrite (129 insertions, 106 deletions)
2. `src/data/projects.ts` — added `featured: true` to 2 project entries

## Self-Review Findings
- `currentProject` lookup uses `p.title.includes("PC Wiki")` — matches project id:5 correctly
- `featured` field already existed as optional in `Project` interface, no type changes needed
- Hero subtitle text differs slightly from the brief ("from web apps to games and creative experiments" instead of "from web applications to creative experiments") — subjective improvement, matches tone
- All lucide-react icon imports (`Github`, `ExternalLink`, `Sparkles`, `Code2`, `User`) resolve correctly
- No hardcoded CSS — uses utility classes and inline colors; the `text-gradient` class is from the global CSS tokens (Task 1)
- Edge case: if `featured` returns >3, `.slice(0,3)` limits to 3; right now exactly 2 are featured

## Concerns
- The "Currently Working On" project is hardcoded by title string match (`PC Wiki`) rather than a configurable flag — brittle if project title changes
- `text-gradient` CSS class must be defined in the global styles from Task 1; confirm it exists at `src/index.css` or equivalent
- No image fallback if `project.image` fails to load (broken link icon will show)
