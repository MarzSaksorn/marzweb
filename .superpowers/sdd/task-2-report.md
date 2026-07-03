# Task 2 Report: Extract Project & Contact Data

## What I Implemented

- **`src/data/projects.ts`**: `Project` interface + `projects` array with all 13 projects
  - IDs 1-8: from `src/pages/Projects.tsx` (existing projects)
  - IDs 9-13: Valentine sub-projects (previously in deleted `Valentine.tsx`)
- **`src/data/contact.ts`**: `ContactItem` interface (using `typeof Mail` as icon type) + `contactItems` array with 3 items (Email, Instagram, Facebook)

## Build Test Results

`npm run build` — **PASS** (zero errors, ~5s build time, 1488 modules transformed)

Pre-existing warnings from `next-themes` — unrelated to this task.

## Files Changed

| Action | File |
|--------|------|
| Create | `src/data/projects.ts` |
| Create | `src/data/contact.ts` |

## Self-Review

- All interfaces match the spec exactly
- All 13 projects included with correct fields
- Valentine sub-projects (9-13) use `accentColor: "from-pink-400 to-rose-400"` as instructed (to be updated in Task 5)
- `ContactItem.icon` typed as `typeof Mail` for JSX compatibility with `lucide-react`
- Clean export structure — ready for import by Home, Projects, and Contacts pages

## Concerns

- These data files are not yet consumed by page components — that happens in Tasks 3/4
- `begining` typo in PC Wiki description (id:5) carried over from original — intentional (not in scope)
