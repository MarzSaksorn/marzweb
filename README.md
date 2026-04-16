# Marzweb

## I am personally not a Frontend Web Dev And This Project is Vibe Coded based on My Previous versions of This Project.  So you can be sure to a certain level that I do actually understand the code, But I did not code this by hand
## **My Previous versions of this Project is Hand Coded by Me**

A modern, responsive Project Archive page website built with React, Vite, and TypeScript.

## Features

- **Sidebar Navigation** - Collapsible sidebar with main navigation links
- **Topbar** - Main action buttons (My Projects, My Contacts)
- **Three Pages** - Home, Projects, and Contacts
- **Theme Toggle** - Dark/Light mode support
- **Search Functionality** - Filter projects on the Projects page
- **Responsive Design** - Mobile-friendly with hamburger menu
- **GPU-Friendly Animations** - CSS-only animations for optimal performance

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - UI component library
- **react-router-dom** - Client-side routing
- **lucide-react** - Icon library
- **next-themes** - Theme management

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MarzSaksorn/marzweb.git
   cd marzweb
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   ├── ThemeProvider.tsx     # Theme management wrapper
│   └── Sidebar.tsx          # Main navigation sidebar
├── pages/
│   ├── Home.tsx             # Home page
│   ├── Projects.tsx          # Projects page with search
│   └── Contacts.tsx         # Contacts page
├── lib/
│   └── utils.ts             # Utility functions
├── App.tsx                  # Main app component
├── main.tsx                 # Entry point
└── index.css                # Global styles and CSS variables
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Design

### Color Theme

The project uses a pastel pink color palette:

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary | `#FFB6C1` | Buttons, accents |
| Secondary | `#FFC0CB` | Hover states |
| Accent | `#FF69B4` | Active states |
| Dark | `#2D2D2D` | Dark mode background |
| Light | `#F8F8FF` | Light mode background |

### Typography

- Font: System font stack (sans-serif)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License
