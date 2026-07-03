# Task 1: Design Tokens — CSS Variables & Tailwind Config

**Files:**
- Modify: `src/index.css`
- Modify: `tailwind.config.js`

**Interfaces:**
- Consumes: existing HSL-based shadcn CSS variable structure
- Produces: new pastel purple hex-based CSS variables consumed by all components

### Step 1: Replace index.css HSL variables with pastel purple palette

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

### Step 2: Verify radius scale in tailwind.config.js

The `borderRadius` section in `tailwind.config.js` should be:

```js
borderRadius: {
  lg: 'var(--radius)',
  md: 'calc(var(--radius) - 2px)',
  sm: 'calc(var(--radius) - 4px)',
},
```

### Step 3: Verify build

Run: `npm run build` — must pass with zero errors.

### Step 4: Commit

```bash
git add src/index.css tailwind.config.js
git commit -m "feat: update design tokens to pastel purple palette"
```
