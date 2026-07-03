# Product Requirements Document: Marzweb Redesign

**Product/Feature Name:** Marzweb
**Status:** Draft
**Author:** Saksorn Ngandee (Marz)
**Date Created:** 2026-07-03
**Version:** 1.0

---

## Executive Summary

**One-liner:** A lifetime project showcase portfolio — a modern, responsive website to display Marz's software projects for both personal archiving and public viewing.

**Overview:** Marzweb is a personal portfolio and project archive. The current version (React + Vite + Tailwind) has the right foundation but needs a redesign to feel like a proper, polished portfolio. This PRD covers a full-stack redesign: improved visual hierarchy, better project presentation, a cohesive design system, a backend/CMS for managing project data, project detail pages, and enhanced mobile experience.

**Quick Facts:**
- **Target Users:** Marz (primary — personal project archive) + general public (secondary — visitors seeing the portfolio)
- **Problem Solved:** Current site feels functional but not portfolio-grade; needs visual polish, better project storytelling, and a cohesive identity
- **Key Metric:** Self-satisfaction + project coverage (all projects easily browsable)
- **Target Launch:** No fixed timeline — iterative improvement

---

## Table of Contents

1. [Problem Statement](#problem-statement)
2. [Goals & Objectives](#goals--objectives)
3. [User Personas](#user-personas)
4. [User Stories & Requirements](#user-stories--requirements)
5. [Success Metrics](#success-metrics)
6. [Scope](#scope)
7. [Technical Considerations](#technical-considerations)
8. [Design & UX Requirements](#design--ux-requirements)
9. [Risks & Mitigation](#risks--mitigation)
10. [Open Questions](#open-questions)

---

## Problem Statement

### The Problem

The current Marzweb works but doesn't *feel* like a proper portfolio. It's a functional project archive with a sidebar layout, basic search/filter, and hardcoded data — but the visual presentation, storytelling, and overall polish are not at portfolio quality. The branding, typography, spacing, and project card presentation need significant refinement.

### Current State

- React 18 + Vite + Tailwind CSS + shadcn/ui patterns (solid foundation)
- 4 pages: Home, Projects, Contacts, Valentine
- Responsive sidebar navigation with dark/light theme toggle
- 8 hardcoded projects with search/filter on the Projects page
- Pink/magenta accent color palette with CSS custom properties
- No backend, no CMS, no dynamic data fetching

### Impact

**User Impact (Marz):**
- Hard to quickly showcase projects in a compelling way
- No project detail pages — all info is crammed into cards
- Limited visual differentiation between projects

**User Impact (Visitors):**
- Good first impression but no "wow" factor
- Navigation works but layout feels generic
- Project browsing lacks immersion

### Why Now?

The foundation is solid. The site is already built on modern tools (Vite, React 18, Tailwind, shadcn/ui). What's missing is the design polish and content architecture to make it shine. Doing it now while the codebase is fresh prevents costly refactors later.

---

## Goals & Objectives

### Business Goals (Personal)

1. **Credible portfolio** — Site that I'd happily share with employers, clients, or peers
2. **Project completeness** — Every meaningful project is represented with clear context (what, why, tech, outcome)
3. **Low maintenance** — Simple backend/CMS to add/edit projects without touching code

### User Goals

1. **Marz:** Add/edit projects through a simple admin interface (not editing code); browse my own work history
2. **Visitors:** Understand who Marz is and what they build within 30 seconds; browse projects by category/tech; contact if interested

### Non-Goals

- Blog or content management system
- Analytics or tracking
- Server-side rendering (SSR)

---

## User Personas

### Primary Persona: Marz (Owner)

**Demographics:**
- Age: 20s
- Role: Developer / Creator
- Tech savviness: High
- Location: Thailand

**Behaviors:**
- Builds projects across multiple domains (web apps, games, tools)
- Wants a single place to archive and showcase work
- Updates the site infrequently — needs low-friction updates

**Needs & Motivations:**
- Catalog all projects in one place
- Present work in a visually compelling way
- Easy to add new projects through an admin panel

**Pain Points:**
- Current UI feels generic — not portfolio-grade
- No project detail pages — card layout is limiting for complex projects
- Hard to differentiate projects visually

**Quote:** *"I want people to see what I've built and think 'that's cool' within seconds."*

### Secondary Persona: Portfolio Visitor

**Demographics:**
- Age: 20-40
- Role: Recruiter, collaborator, fellow developer, curious internet person
- Tech savviness: Medium-High

**Behaviors:**
- Skims the homepage, browses projects, checks contact info
- Might click a live demo link or GitHub repo
- Stays 1-3 minutes on first visit

**Needs & Motivations:**
- Quickly assess the developer's skill and range
- See live demos and source code
- Easy way to reach out

**Pain Points:**
- Current cards blend together — hard to scan
- Not immediately clear what each project does

**Quote:** *"Show me your best work upfront and make it easy to explore."*

---

## User Stories & Requirements

### Epic: Portfolio Homepage

#### Story 1: Hero Section

**User Story:**
```
As a visitor,
I want to see a compelling hero/intro on the homepage,
So that I immediately understand who Marz is and what this site is.
```

**Acceptance Criteria:**
- [ ] Hero section with name, title/tagline, and brief intro
- [ ] Visual element (gradient, illustration, or animated background)
- [ ] Subtle CTA to explore projects
- [ ] Responsive (looks great on mobile and desktop)

**Priority:** Must Have (P0)

---

#### Story 2: Featured/Selection of Projects

**User Story:**
```
As a visitor,
I want to see a curated selection of projects on the homepage,
So that I can quickly see the best work without navigating away.
```

**Acceptance Criteria:**
- [ ] Grid or list of 3-6 featured/"highlighted" projects
- [ ] Each shows thumbnail, title, short description
- [ ] Links to full project page or external demo

**Priority:** Must Have (P0)

---

#### Story 3: "Currently Working On" Section

**User Story:**
```
As Marz,
I want to highlight what I'm currently building,
So that visitors see I'm actively developing.
```

**Acceptance Criteria:**
- [ ] Prominent section with current project name, status badge, description
- [ ] Links to GitHub/live demo
- [ ] Easy to update/swap when projects change

**Priority:** Should Have (P1)

---

### Epic: Project Showcase

#### Story 4: Full Project Grid Page

**User Story:**
```
As a visitor,
I want to browse all projects in a searchable grid,
So that I can find projects by name or technology.
```

**Acceptance Criteria:**
- [ ] Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- [ ] Search by title, description, tags
- [ ] Filter by technology/tag/category
- [ ] Each card shows: image, title, description, tech tags, links
- [ ] Count display: "Showing X of Y projects"

**Priority:** Must Have (P0)

---

#### Story 5: Project Detail Page

**User Story:**
```
As a visitor,
I want to click a project and see full details,
So that I understand the context, tech choices, and outcomes.
```

**Acceptance Criteria:**
- [ ] Dedicated route per project: `/projects/:slug`
- [ ] Hero section with project image, title, tags, status badge
- [ ] Full description (multi-paragraph with markdown support)
- [ ] Tech stack list with icons
- [ ] Links: GitHub, live demo, related projects
- [ ] Screenshots gallery or embedded media
- [ ] Back to all projects link
- [ ] 404 handling for unknown slugs

**Priority:** Should Have (P1)

---

#### Story 6: Tag/Category Filtering

**User Story:**
```
As a visitor,
I want to filter projects by technology or category,
So that I can find projects relevant to my interests.
```

**Acceptance Criteria:**
- [ ] Filter chips or dropdown for tags/categories
- [ ] Multiple tags can be selected
- [ ] "Clear all filters" button
- [ ] Results update in real-time

**Priority:** Should Have (P1)

---

### Epic: About / Contact

#### Story 7: Contact Page

**User Story:**
```
As a visitor,
I want to see clear contact options,
So that I can reach out for collaboration or opportunities.
```

**Acceptance Criteria:**
- [ ] Contact cards for Email, Instagram, Facebook (existing)
- [ ] Clean layout with icons and hover effects
- [ ] All links open in new tab where applicable
- [ ] "Open for Collaboration" section

**Priority:** Must Have (P0)

---

### Epic: Polish & Design System

#### Story 8: Consistent Design System

**User Story:**
```
As Marz,
I want a cohesive visual design system across all pages,
So that the site looks intentional and professional.
```

**Acceptance Criteria:**
- [ ] Refined color palette (current pink/magenta — keep or evolve)
- [ ] Consistent typography (headings, body, mono)
- [ ] Unified spacing and layout grid
- [ ] Animation and transition guidelines
- [ ] All UI components follow the system (buttons, cards, inputs)

**Priority:** Must Have (P0)

---

#### Story 9: Dark/Light Mode Polish

**User Story:**
```
As a visitor,
I want dark and light modes to both look polished,
So that the experience is great regardless of preference.
```

**Acceptance Criteria:**
- [ ] Both themes fully tested
- [ ] Smooth theme transition
- [ ] Consistent contrast in both modes
- [ ] System preference detection as default

**Priority:** Should Have (P1)

---

### Functional Requirements

| Req ID | Description | Priority | Status |
|--------|-------------|----------|--------|
| FR-001 | Hero section with intro and visual element | Must Have | Open |
| FR-002 | Featured projects grid on homepage | Must Have | Open |
| FR-003 | "Currently Working On" section | Should Have | Open |
| FR-004 | Full project listing with search | Must Have | Open |
| FR-005 | Project detail page with full info | Should Have | Open |
| FR-006 | Tag/category filter on projects page | Should Have | Open |
| FR-007 | Contact page with social links | Must Have | Open |
| FR-008 | Valentine projects merged into main projects with tag filter | Must Have | Open |
| FR-009 | Sidebar navigation with active states (existing) | Must Have | Done |
| FR-010 | Dark/light theme toggle (existing) | Must Have | Done |

### Non-Functional Requirements

| Req ID | Category | Description | Target |
|--------|----------|-------------|--------|
| NFR-001 | Performance | Lighthouse Performance score | 90+ |
| NFR-002 | Performance | First Contentful Paint | < 1.5s |
| NFR-003 | Performance | Largest Contentful Paint | < 2.5s |
| NFR-004 | Accessibility | WCAG compliance | Level AA |
| NFR-005 | SEO | Meta tags for all pages | All pages |
| NFR-006 | Responsive | Works on mobile, tablet, desktop | All breakpoints |
| NFR-007 | Build | TypeScript strict mode, no errors | Pass |
| NFR-008 | Build | Zero ESLint warnings | Pass |

---

## Success Metrics

### Key Performance Indicators (KPIs)

#### Primary Metric (North Star)

**Metric:** Portfolio completeness — all meaningful projects represented with detail pages
**Definition:** % of projects that have a dedicated detail page with full context (description, tech, links)
**Current Baseline:** 0% (no detail pages exist)
**Target:** 100% for MVP portfolio

#### Secondary Metrics

| Metric | Current | Target | Notes |
|--------|---------|--------|-------|
| Lighthouse Performance | Unknown | 90+ | Measured post-deploy |
| Pages with content | 4 | 6+ | Home, Projects (×N), Contacts, Valentine |
| Project count | 8 | All projects | Include as many as relevant |

---

## Scope

### In Scope

**Phase 1 (MVP — Design Polish):**
- Design system refinement: typography, spacing, color, animations
- Homepage hero section redesign
- Featured/spotlight projects on homepage
- Project grid page polish (search, improved cards)
- Contact page visual cleanup
- Dark/light mode polish
- Responsive improvements

**Phase 2 (Backend & Admin):**
- Backend API + database (Supabase or similar)
- Admin panel for managing projects (CRUD)
- Project data served from backend instead of hardcoded files
- Authentication for admin access

**Phase 3 (Project Detail Pages):**
- `ProjectDetail` component and routing (`/projects/:slug`)
- Full project data model (description, tech stack, screenshots, links)
- Markdown or structured content for descriptions
- Images/media served from storage

### Out of Scope

**Explicitly Excluded:**
- Blog or CMS
- Analytics/tracking (privacy-first)
- Server-side rendering or Next.js migration
- Automated testing (manual review for now)
- CI/CD pipeline changes

### Future Considerations

- Image optimization pipeline (WebP, responsive images)
- i18n support (English + Thai)
- Print-friendly resume page

---

## Technical Considerations

### High-Level Architecture

Single-page application (React SPA) served via Vite. Backend API (Supabase) for project data. Admin panel (separate route) for managing projects. Routing via react-router-dom (existing). Deployment via Vercel or similar host.

### Technology Stack

**Frontend:**
- React 18.2 (existing)
- TypeScript 5.2 strict (existing)
- Vite 5.1 (existing)
- Tailwind CSS 3.4 (existing)
- shadcn/ui patterns — Button, Card, Input (existing)
- react-router-dom v6 (existing)
- lucide-react icons (existing)
- next-themes (existing)

### Data Model (Recommended)

```typescript
// src/data/projects.ts
export interface Project {
  id: string
  slug: string
  title: string
  description: string       // Short card description
  longDescription?: string  // Multi-paragraph for detail page
  image: string
  screenshots?: string[]    // Gallery for detail page
  tags: string[]
  category?: string
  status: "active" | "archived" | "paused"
  githubUrl?: string
  liveUrl?: string
  accentColor?: string
  featured?: boolean        // Show on homepage
  year: number
}
```

### Security Requirements

- Admin area requires authentication (Supabase Auth)
- Public-facing pages require no auth
- Row Level Security (RLS) on database tables

### Performance Requirements

- Keep all page bundles under 200KB gzipped
- Lazy-load project images
- No unnecessary re-renders (use `useMemo`/`useCallback` where appropriate)

### Data Considerations

**Data Model (Phase 1 — Static):** Projects defined as TypeScript array in `src/data/projects.ts` (migrate from inline page components). Contact info in `src/data/contact.ts`. Valentine projects merged into main projects array with a `valentine` tag.

**Data Model (Phase 2 — Database):** Projects stored in Supabase (Postgres) with fields matching the Project interface. API endpoints for CRUD operations.

**Migration (Phase 1→2):** Seed the database from static data. Swap data fetching from local imports to API calls.

---

## Design & UX Requirements

### User Experience Principles

1. **Show, don't tell** — Visuals first, text second
2. **Scannable** — Visitors should understand the portfolio in under 30 seconds
3. **Cohesive identity** — Every page feels part of the same site
4. **Delightful details** — Micro-interactions, smooth transitions, hover effects

### User Flows

**Primary Flow (Visitor):**
1. Land on homepage → see hero + featured projects
2. Click project card → see project detail page (or external demo)
3. Navigate to /projects → browse all with search/filter
4. Navigate to /contacts → find contact options

**Alternative Flows:**
- Direct link to /projects/:slug
- Click GitHub link → external repo
- Click demo link → live project

### Visual Design

**Design Direction (to be refined in UI Init mode):**
- Evolve the pink/magenta palette into something broader and more professional
- Refine typography: consider Inter or Plus Jakarta Sans for headings, JetBrains Mono for code
- Asymmetric bento-grid layouts for homepage
- Smooth page transitions (framer-motion or CSS)
- Card hover states with depth (subtle shadow lift, scale)

**Key Screens:**
- Homepage: hero + featured projects + current work
- Projects: filterable grid
- Project Detail: hero image, full description, tech stack, screenshots, links
- Contacts: contact cards + collaboration CTA
- Valentine: filterable tag within main Projects page

### Responsive Design

**Breakpoints (existing Tailwind defaults):**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+

### Accessibility

- WCAG 2.1 Level AA compliance
- Keyboard navigation for all interactive elements
- Sufficient color contrast in both themes
- Alt text on all images
- Semantic HTML structure

---

## Risks & Mitigation

| Risk | Impact | Probability | Mitigation | Owner |
|------|--------|------------|------------|-------|
| Scope creep — redesign never ships | High | Medium | Ship in phases; start with design polish, add detail pages later | Marz |
| Design dissatisfaction — never happy with the look | Medium | Medium | Set a deadline and ship; iterate from there | Marz |
| Data migration breaks existing pages | Medium | Low | Keep old data structure alongside new; migrate methodically | Marz |
| Valentine page merged into main projects — feature parity maintained | Low | Medium | Tag-based filtering in Projects page | Marz |

---

## Open Questions

No open questions — all decisions made.

---

## Appendix

### File Structure Changes (Proposed)

```
src/
├── data/                          # Phase 1 — static data
│   ├── projects.ts                # Main + Valentine projects merged
│   └── contact.ts                 # Contact info
├── components/
│   ├── Sidebar.tsx                # Existing
│   ├── ThemeProvider.tsx          # Existing
│   ├── ui/                        # Existing shadcn components
│   └── ProjectCard.tsx            # NEW — extracted card component
├── pages/
│   ├── Home.tsx                   # Redesign
│   ├── Projects.tsx               # Redesign (merged Valentine, detail links)
│   ├── ProjectDetail.tsx          # NEW
│   ├── Contacts.tsx               # Polish
│   └── Admin.tsx                  # NEW — Phase 2, backend admin
├── lib/
│   ├── utils.ts                   # Existing cn()
│   └── supabase.ts                # NEW — Phase 2, Supabase client
├── App.tsx                        # Add /projects/:slug, /admin routes
└── types/
    └── project.ts                 # Shared Project type
```
