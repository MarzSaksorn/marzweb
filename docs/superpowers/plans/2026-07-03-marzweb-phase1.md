# Marzweb Phase 1 — Design Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the pastel purple design system across all pages, restructure the homepage into a bento grid, and extract project data into a shared data file.

**Architecture:** Single-page React app (Vite). All changes are frontend-only — CSS variables, component refactoring, and data extraction. No backend. CSS-only motion.

**Tech Stack:** React 18, TypeScript 5, Tailwind CSS 3, Vite 5, next-themes, lucide-react

## Global Constraints

- All color values use hex, not HSL (replacing the existing shadcn HSL system)
- Pastel purple accent: `#A78BFA` light / `#C4B5FD` dark
- Corner radius: cards 8px, buttons 6px, inputs 4px, pills 9999px
- CSS-only motion — no Framer Motion, GSAP, or JS animation libs
- No hardcoded project data in page components — extract to `src/data/`
- All pages must look correct in both light and dark mode
- `npm run build` must pass with zero errors

---

### Task 1: Design Tokens — CSS Variables & Tailwind Config

**Files:**
- Modify: `src/index.css`
- Modify: `tailwind.config.js`

**Interfaces:**
- Consumes: existing HSL-based shadcn CSS variable structure
- Produces: new pastel purple hex-based CSS variables consumed by all components

- [ ] **Step 1: Replace index.css HSL variables with pastel purple palette**

Replace the entire `:root` and `.dark` blocks in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 250 250 249;
    --foreground: 28 28 30;
    --card: 255 255 255;
    --card-foreground: 28 28 30;
    --popover: 255 255 255;
    --popover-foreground: 28 28 30;
    --primary: 167 139 250;
    --primary-foreground: 255 255 255;
    --secondary: 240 236 255;
    --secondary-foreground: 28 28 30;
    --muted: 120 119 116;
    --muted-foreground: 120 119 116;
    --accent: 240 236 255;
    --accent-foreground: 28 28 30;
    --destructive: 239 68 68;
    --destructive-foreground: 255 255 255;
    --border: 228 228 231;
    --input: 228 228 231;
    --ring: 167 139 250;
    --radius: 0.5rem;
  }

  .dark {
    --background: 28 28 30;
    --foreground: 245 245 240;
    --card: 44 44 46;
    --card-foreground: 245 245 240;
    --popover: 44 44 46;
    --popover-foreground: 245 245 240;
    --primary: 196 181 253;
    --primary-foreground: 28 28 30;
    --secondary: 46 36 89;
    --secondary-foreground: 245 245 240;
    --muted: 161 161 170;
    --muted-foreground: 161 161 170;
    --accent: 46 36 89;
    --accent-foreground: 245 245 240;
    --destructive: 248 113 113;
    --destructive-foreground: 28 28 30;
    --border: 58 58 60;
    --input: 58 58 60;
    --ring: 196 181 253;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-[#A78BFA] via-[#8B6FE8] to-[#C4B5FD];
  }

  .bg-gradient-primary {
    @apply bg-gradient-to-r from-[#A78BFA] via-[#8B6FE8] to-[#C4B5FD];
  }

  .border-gradient {
    border-image: linear-gradient(135deg, #A78BFA, #8B6FE8, #C4B5FD) 1;
  }
}
```

- [ ] **Step 2: Update radius scale in tailwind.config.js**

Replace the `borderRadius` section:

```js
borderRadius: {
  lg: 'var(--radius)',
  md: 'calc(var(--radius) - 2px)',
  sm: 'calc(var(--radius) - 4px)',
},
```

- [ ] **Step 3: Remove old gradient utility references in tailwind.config.js**

The extended colors in `tailwind.config.js` reference HSL custom properties — those remain auto-mapped via CSS variables. No change needed.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build passes with zero errors.

- [ ] **Step 5: Commit**

```bash
git add src/index.css tailwind.config.js
git commit -m "feat: update design tokens to pastel purple palette"
```

---

### Task 2: Extract Project Data

**Files:**
- Create: `src/data/projects.ts`
- Create: `src/data/contact.ts`

**Interfaces:**
- Consumes: project data currently inlined in `src/pages/Projects.tsx` and `src/pages/Home.tsx`
- Produces: exported `projects` array and `ContactItem` type consumed by Home, Projects, and Contacts pages

- [ ] **Step 1: Create `src/data/projects.ts` with all projects (main + Valentine merged)**

Include the `Project` interface and the full combined array with all 13 projects (ids 1-8 existing + 9-13 Valentine sub-projects). Each Valentine sub-project gets `"Valentine"` as the first tag for filterability.

```typescript
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  accentColor: string;
  category?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Gamehub",
    description: "A hub that gathers games from around Github and unites them all",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/Gamehub.jpg",
    githubUrl: "https://github.com/MarzSaksorn/Gamehub",
    liveUrl: "/Gamehub/",
    tags: ["Pure HTML, CSS", "Node.js"],
    accentColor: "from-[#A78BFA] to-[#C4B5FD]",
    featured: true,
  },
  {
    id: 2,
    title: "Marzweb - Vite Revamped",
    description: "The homepage that archive all My Projects of My Cloud / DevOps Engineer Path from Ground Zero",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/Marzweb.png",
    githubUrl: "https://github.com/MarzSaksorn/marzweb",
    liveUrl: "/",
    tags: ["React", "Vite", "Tailwind", "TypeScript", "BigPickle AI Opencode"],
    accentColor: "from-[#C4B5FD] to-[#A78BFA]",
    featured: true,
  },
  {
    id: 3,
    title: "Online game dns blocklist",
    description: "Windows hosts file that contains bunch of online game domains",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/Game-Blocklist.png",
    githubUrl: "https://github.com/MarzSaksorn/Online-game-dns-blocklist",
    tags: ["Windows Hosts file"],
    accentColor: "from-[#A78BFA] to-[#8B6FE8]",
  },
  {
    id: 4,
    title: "Checkers Multiplayer",
    description: "Checkers Multiplayer with lobby system built entirely by Canva AI",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/checkers.png",
    githubUrl: "https://github.com/MarzSaksorn/checkers_multiplayer",
    liveUrl: "/checkers_multiplayer/",
    tags: ["Node.js", "HTML", "Tailwind", "JavaScript", "Canva AI"],
    accentColor: "from-[#C4B5FD] to-[#A78BFA]",
  },
  {
    id: 5,
    title: "PC Wiki by Marzweb (Paused Dev.)",
    description: "PC Wiki for everyone on How to use a computer from the begining to being able to troubleshoot stuffs",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/PC-Wiki.png",
    githubUrl: "https://github.com/MarzSaksorn/PC-Wiki",
    liveUrl: "/PC-Wiki/",
    tags: ["React", "Vite", "Tailwind", "BigPickle AI Opencode"],
    accentColor: "from-[#A78BFA] to-[#C4B5FD]",
  },
  {
    id: 6,
    title: "Valentine",
    description: "Credit to @code_wars_official on Instagram — Valentine web ideas collection",
    image: "https://raw.githubusercontent.com/MarzSaksorn/Valentine/refs/heads/main/be-my-Valentine/img1.gif",
    githubUrl: "https://github.com/MarzSaksorn/Valentine",
    liveUrl: "/Valentine/",
    tags: ["Valentine", "Pure HTML, CSS", "Instagram", "@code_wars_official"],
    accentColor: "from-[#C4B5FD] to-[#A78BFA]",
  },
  {
    id: 7,
    title: "borntoDev-Project",
    description: "Lite-Fundamental-Web-Dev-With-HTML5-CSS3",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/Lite-Fundamental-Web-Dev-With-HTML5-CSS3.png",
    githubUrl: "https://github.com/MarzSaksorn/borntoDev-Project_Lite-Fundamental-Web-Dev-With-HTML5-CSS3",
    tags: ["borntoDev", "Pure HTML, CSS"],
    accentColor: "from-[#A78BFA] to-[#C4B5FD]",
  },
  {
    id: 8,
    title: "borntoDev-Project",
    description: "Introduction-to-JavaScript",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/Thailand_tax_cal.png",
    githubUrl: "https://github.com/MarzSaksorn/borntoDev-Project_Introduction-to-JavaScript",
    tags: ["borntoDev", "Tailwind", "JavaScript"],
    accentColor: "from-[#C4B5FD] to-[#A78BFA]",
  },
  {
    id: 9,
    title: "Be My Valentine",
    description: "Credit to @code_wars_official on Instagram — a cute Valentine proposal page",
    image: "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif",
    liveUrl: "/Valentine/be-my-Valentine/",
    tags: ["Valentine", "Pure HTML, CSS", "JavaScript"],
    accentColor: "from-pink-400 to-rose-400",
  },
  {
    id: 10,
    title: "Love Me Valentine",
    description: "Credit to @code_wars_official on Instagram — an interactive Valentine experience",
    image: "https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif",
    liveUrl: "/Valentine/Love-Me-Valentine/",
    tags: ["Valentine", "Pure HTML, CSS", "JavaScript"],
    accentColor: "from-pink-400 to-rose-400",
  },
  {
    id: 11,
    title: "Valentine Card",
    description: "Credit to @code_wars_official on Instagram — a digital Valentine card",
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmhrbmtqb3V2YmZ2aWJ5eWJqbm5oZnN5Y3h4aG5rOGZ6aHhua3VwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/KztT2c4u8mYYUiMKdJ/giphy.gif",
    liveUrl: "/Valentine/Valentine-Card/",
    tags: ["Valentine", "Pure HTML, CSS", "JavaScript"],
    accentColor: "from-pink-400 to-rose-400",
  },
  {
    id: 12,
    title: "Valentine Letter",
    description: "Credit to @code_wars_official on Instagram — an animated envelope Valentine letter",
    image: "https://raw.githubusercontent.com/MarzSaksorn/Valentine/refs/heads/main/Valentine-Letter/envelope.png",
    liveUrl: "/Valentine/Valentine-Letter/",
    tags: ["Valentine", "Pure HTML, CSS", "JavaScript"],
    accentColor: "from-pink-400 to-rose-400",
  },
  {
    id: 13,
    title: "Love Me Valentine",
    description: "Credit to @code_wars_official on Instagram — another Valentine interactive page",
    image: "https://raw.githubusercontent.com/MarzSaksorn/Valentine/refs/heads/main/Love-Me-Valentine-1/preview.png",
    liveUrl: "/Valentine/Love-Me-Valentine-1/",
    tags: ["Valentine", "Pure HTML, CSS", "JavaScript"],
    accentColor: "from-pink-400 to-rose-400",
  },
];
```

- [ ] **Step 2: Create `src/data/contact.ts`**

```typescript
import { Github, ExternalLink } from "lucide-react";

export interface ContactItem {
  icon: typeof Github | typeof ExternalLink;
  label: string;
  value: string;
  href: string;
  gradient: string;
  description: string;
}

export const contactItems: ContactItem[] = [
  {
    icon: Github,
    label: "Email",
    value: "mark94849@proton.me",
    href: "mailto:mark94849@proton.me",
    gradient: "from-[#A78BFA] to-[#C4B5FD]",
    description: "Click to send an email",
  },
  {
    icon: Github,
    label: "Instagram",
    value: "@marzsaksorn",
    href: "https://instagram.com/marzsaksorn",
    gradient: "from-[#C4B5FD] to-[#A78BFA]",
    description: "Click to view Instagram profile",
  },
  {
    icon: Github,
    label: "Facebook",
    value: "Saksorn Ngandee",
    href: "https://facebook.com/MarzSaksorn",
    gradient: "from-[#A78BFA] to-[#8B6FE8]",
    description: "Click to view Facebook profile",
  },
];
```

- [ ] **Step 3: Commit**

```bash
git add src/data/
git commit -m "feat: extract project and contact data to src/data/"
```

---

### Task 3: Sidebar — New Colors & Typography

**Files:**
- Modify: `src/components/Sidebar.tsx`

**Interfaces:**
- Consumes: CSS variables from Task 1
- Produces: updated sidebar with pastel purple active states

- [ ] **Step 1: Replace all pink/rose color references in Sidebar.tsx with pastel purple**

Replace gradient colors in the nav active state:
```tsx
// Before:
"bg-gradient-to-r from-pink-400/20 to-rose-400/20 text-pink-600 dark:text-pink-400 font-medium border-l-2 border-pink-400"

// After:
"bg-[#A78BFA]/10 text-[#A78BFA] dark:text-[#C4B5FD] font-medium border-l-2 border-[#A78BFA]"
```

Replace hover state:
```tsx
// Before:
"text-muted-foreground hover:bg-gradient-to-r hover:from-pink-400/10 hover:to-rose-400/10"

// After:
"text-muted-foreground hover:bg-[#A78BFA]/5"
```

Replace old design button gradient:
```tsx
// Before:
"bg-gradient-to-r from-pink-400/10 to-rose-400/10 hover:from-pink-400/20 hover:to-rose-400/20 border-pink-400/30"

// After:
"bg-[#A78BFA]/10 hover:bg-[#A78BFA]/20 border-[#A78BFA]/30"
```

Replace theme toggle icon color:
```tsx
// Before:
<Moon className="h-5 w-5 text-pink-400" />

// After:
<Moon className="h-5 w-5 text-[#A78BFA]" />
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build passes with zero errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Sidebar.tsx
git commit -m "feat: update sidebar colors to pastel purple"
```

---

### Task 4: Homepage — Bento Grid Redesign

**Files:**
- Modify: `src/pages/Home.tsx`

**Interfaces:**
- Consumes: `projects` from `src/data/projects.ts`, CSS variables from Task 1
- Produces: bento-grid homepage with hero, featured projects, about, tech stack

- [ ] **Step 1: Rewrite Home.tsx with bento grid layout**

```tsx
import { projects } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Sparkles, Code2, User } from "lucide-react";

const featured = projects.filter(p => p.featured).slice(0, 3);
const currentProject = projects.find(p => p.title.includes("PC Wiki"));

const techStack = ["React", "Vite", "TypeScript", "Tailwind", "Node.js", "Python", "HTML/CSS", "Git", "Docker", "Supabase"];

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <Card className="border-[#A78BFA]/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A78BFA]/5 via-[#C4B5FD]/5 to-transparent" />
        <CardHeader className="relative">
          <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-gradient">Marzweb</span>
          </CardTitle>
          <CardDescription className="text-base max-w-2xl">
            A personal showcase of my journey in software development —
            from web apps to games and creative experiments.
          </CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <Button className="bg-[#A78BFA] hover:bg-[#8B6FE8] text-white" asChild>
            <a href="/projects">
              <Code2 className="h-4 w-4 mr-2" />
              View My Projects
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Bento grid — 2-col layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Featured projects — spans 2 cols */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#A78BFA]" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featured.map((project) => (
              <Card key={project.id} className="group hover:-translate-y-[1px] transition-all duration-200 border-border">
                <div className="relative h-32 overflow-hidden rounded-t-[8px]">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD]" />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm line-clamp-1">{project.title}</CardTitle>
                  <CardDescription className="text-xs line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 gap-2">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="text-xs border-border" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" /> Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" className="text-xs bg-[#A78BFA] hover:bg-[#8B6FE8] text-white" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" /> Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Right column: stacked cards */}
        <div className="space-y-4">
          {/* Currently Working On */}
          {currentProject && (
            <Card className="border-[#A78BFA]/20">
              <div className="relative h-28 overflow-hidden rounded-t-[8px]">
                <img src={currentProject.image} alt={currentProject.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#A78BFA] text-white">
                    <Sparkles className="h-2.5 w-2.5 mr-1" /> In Development
                  </span>
                </div>
              </div>
              <CardHeader className="p-3">
                <CardTitle className="text-xs font-semibold line-clamp-1">{currentProject.title}</CardTitle>
                <CardDescription className="text-[10px] line-clamp-2">{currentProject.description}</CardDescription>
              </CardHeader>
              <CardFooter className="p-3 pt-0">
                <Button size="sm" className="text-[10px] bg-[#A78BFA] hover:bg-[#8B6FE8] text-white w-full" asChild>
                  <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-3 w-3 mr-1" /> View Source
                  </a>
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* About Me */}
          <Card>
            <CardHeader className="p-3">
              <CardTitle className="text-xs font-semibold flex items-center gap-1.5">
                <User className="h-3 w-3 text-[#A78BFA]" /> About
              </CardTitle>
              <CardDescription className="text-[11px] leading-relaxed">
                I build things for the web. Projects span games, developer tools, experiments, and utilities.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Tech Stack */}
          <Card>
            <CardHeader className="p-3">
              <CardTitle className="text-xs font-semibold flex items-center gap-1.5">
                <Code2 className="h-3 w-3 text-[#A78BFA]" /> Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded-full text-[10px] bg-[#A78BFA]/10 text-[#A78BFA] dark:text-[#C4B5FD]">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build passes with zero errors.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Home.tsx
git commit -m "feat: redesign homepage with bento grid layout"
```

---

### Task 5: Projects Page — Updated Colors & Data Source

**Files:**
- Modify: `src/pages/Projects.tsx`

**Interfaces:**
- Consumes: `projects` from `src/data/projects.ts`, CSS variables from Task 1
- Produces: project grid with pastel purple styling, merged Valentine data

- [ ] **Step 1: Import projects from data file and replace all pink/rose colors**

Remove the inline `Project` interface and `projects` array. Add import at top:
```tsx
import { projects, type Project } from "@/data/projects";
```

Replace all color classes:
- `from-pink-400 to-rose-400` → `from-[#A78BFA] to-[#C4B5FD]`
- `text-pink-400` → `text-[#A78BFA]`
- `border-pink-400/30` → `border-[#A78BFA]/30`
- `hover:bg-pink-400/10` → `hover:bg-[#A78BFA]/10`
- `bg-pink-400/10 text-pink-600 dark:text-pink-400` → `bg-[#A78BFA]/10 text-[#A78BFA] dark:text-[#C4B5FD]`
- Search icon `text-pink-400` → `text-[#A78BFA]`
- Input focus ring `focus-visible:ring-pink-400` → `focus-visible:ring-[#A78BFA]`
- Title gradient `from-pink-400 to-rose-400` → `from-[#A78BFA] to-[#C4B5FD]`
- Empty state `FolderOpen` icon `text-pink-400` → `text-[#A78BFA]`
- Button in empty state `border-pink-400/50 hover:bg-pink-400/10` → `border-[#A78BFA]/30 hover:bg-[#A78BFA]/10`

Also update the tag rendering to use the `accentColor` from data:
```tsx
{project.tags.slice(1).map((tag) => (
  <span key={tag} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#A78BFA]/10 text-[#A78BFA] dark:text-[#C4B5FD] border border-[#A78BFA]/20">
    {tag}
  </span>
))}
```

And the Demo button to use purple:
```tsx
<Button size="sm" className="flex-1 bg-[#A78BFA] hover:bg-[#8B6FE8] text-white shadow-sm" asChild>
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build passes with zero errors.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Projects.tsx
git commit -m "feat: update projects page with pastel purple colors and shared data"
```

---

### Task 6: Contacts Page — Updated Colors

**Files:**
- Modify: `src/pages/Contacts.tsx`

**Interfaces:**
- Consumes: `contactItems` from `src/data/contact.ts`, CSS variables from Task 1

- [ ] **Step 1: Import contact data and replace colors**

Add import at top:
```tsx
import { contactItems } from "@/data/contact";
```

Replace the inline `ContactItem` interface and `contacts` array with the imported data.

Replace all pink/rose color classes with pastel purple equivalents. Key replacements:
- Gradient backgrounds on contact cards → `from-[#A78BFA] to-[#C4B5FD]`
- Hover border accent → `border-l-[#A78BFA]`
- Icon gradients → match the card's gradient

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build passes with zero errors.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Contacts.tsx
git commit -m "feat: update contacts page with pastel purple palette"
```

---

### Task 7: Final Verification

**Files:**
- None (verification-only task)

- [ ] **Step 1: Run full build**

```bash
npm run build
```

Expected: Clean build, zero errors, no warnings. Output shows `dist/Gamehub/`, `dist/Valentine/`, and all expected assets.

- [ ] **Step 2: Visual verification checklist**

Manually verify:
- [ ] Homepage bento grid renders correctly (hero + featured + about + tools)
- [ ] Projects page shows all 13 projects (8 main + 5 Valentine)
- [ ] Search/filter works on Projects page
- [ ] All pastel purple colors render in light mode
- [ ] Toggle to dark mode — all colors look correct
- [ ] Sidebar active state shows purple accent
- [ ] Contacts page renders with correct colors
- [ ] Mobile responsive (open dev tools, check < 768px)
- [ ] No hardcoded pink/rose colors remain anywhere

- [ ] **Step 3: Fix any issues found**

If any old pink/rose colors are still visible, grep for them:
```bash
rg -i "pink\|rose-4" src/ --include="*.tsx" --include="*.css" --include="*.js"
```

Fix any remaining instances.

- [ ] **Step 4: Commit any remaining fixes**

```bash
git add -A
git commit -m "fix: final color audit and polish"
```
