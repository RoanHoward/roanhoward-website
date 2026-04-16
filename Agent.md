# Agent.md — Roan Howard Personal Portfolio

This document provides context for any agent working on this project.

---

## Project Overview

Roan Howard's personal portfolio website — a React SPA showcasing CS work, film criticism, and visual art. Roan is a Stanford CS student and Alaskan Native (Tlingit, Raven moiety) from Alaska.

**Live deployment:** Vercel
**Branch:** `main`

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| UI Framework | React | ^19.1.0 |
| Routing | React Router DOM | ^7.6.0 |
| Build Tool | Vite | ^6.3.5 |
| Linting | ESLint | ^9.25.0 |
| Styling | Pure CSS (no Tailwind, no CSS-in-JS) | — |
| Deployment | Vercel | — |

**No TypeScript** — all source files are `.jsx` and `.js`.
**No UI component library** — everything is custom CSS.

---

## Project Structure

```
Personal_Website/
├── Agent.md                        ← this file
└── roanhoward-website/             ← all source lives here
    ├── index.html                  ← Google Fonts loaded here, favicon = etree.png
    ├── package.json
    ├── vite.config.js
    ├── vercel.json
    ├── eslint.config.js
    ├── public/
    │   └── Images/                 ← all static assets (images, PDFs, icons)
    │       ├── Resume.pdf
    │       ├── etree.png           ← favicon
    │       └── [48 image/svg files]
    └── src/
        ├── main.jsx                ← React entry point
        ├── App.jsx                 ← Router + SidebarNav layout shell
        ├── index.css               ← global reset + navbar offset styles
        ├── App.css                 ← mostly unused legacy Vite template CSS
        ├── components/
        │   ├── SidebarNav.jsx      ← fixed top navbar (desktop + mobile hamburger)
        │   └── SidebarNav.css
        └── pages/
            ├── Home.jsx & Home.css     ← landing/bio page
            ├── CS.jsx & CS.css         ← CS portfolio (expertise cards + projects)
            ├── Film.jsx & Film.css     ← film criticism + reviews
            └── Art.jsx & Art.css       ← art portfolio with modal viewer
```

---

## Routing

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Bio, profile image, Alaskan/Stanford intro |
| `/cs` | CS | Skill cards + featured projects |
| `/film` | Film | Academic papers (PDF downloads) + movie carousel |
| `/art` | Art | Image gallery with clickable modal overlay |

---

## Fonts (loaded in index.html via Google Fonts)

- **Ubuntu** — primary font for most UI text
- **Share Tech Mono** — tech stack badge display (CS page)
- **Playfair Display** — elegant serif for Film section typography

---

## Navigation (SidebarNav.jsx)

Fixed top navbar with three zones:
- **Left:** CS / Film / Art nav links (NavLink with active state)
- **Center:** "ROAN HOWARD" title → links to `/`
- **Right:** Resume (PDF download), LinkedIn, GitHub, Email icons
- **Mobile (<768px):** Hamburger button (☰) opens a dropdown with all links

---

## Key Design Patterns

- **Responsive breakpoint:** 768px (mobile vs desktop)
- **No inline styles** except Art.jsx absolute positioning tiles
- **CSS custom properties** used in CS.jsx for pseudo-random badge tilt angles
- **CSS animations:** wiggling dashes, rotating ampersands, hover scale transforms
- **Lazy loading:** all non-critical images use `loading="lazy"`; hero/banner images use `loading="eager" fetchPriority="high"`
- **Scroll snap:** Film page movie carousel uses `scroll-snap-type: x mandatory`

---

## Vite Config Notes

```js
// vite.config.js
build: {
  rollupOptions: {
    output: {
      manualChunks: { 'react-vendor': ['react', 'react-dom', 'react-router-dom'] }
    }
  },
  chunkSizeWarningLimit: 1000,
},
assetsInclude: ['**/*.pdf'],  // PDFs treated as static assets
```

---

## Vercel Config (vercel.json)

- Images cached for **1 year** (`Cache-Control: public, max-age=31536000, immutable`)
- Security headers on all routes: `X-Content-Type-Options`, `X-Frame-Options: DENY`, `X-XSS-Protection`
- Image rewrites for `/Images/:path*`

---

## Known Issues / Areas to Watch

### 1. Art.jsx — Hardcoded Absolute Positioning
Art gallery tiles use hardcoded `top`/`left` pixel values in a 1200px container. Not truly responsive — breaks on very small screens. If reworking the Art page layout, consider CSS Grid or masonry.

### 2. App.css — Unused Legacy Code
`App.css` contains the default Vite template styles (logo spinner, card hover). These are not used anywhere. Safe to delete or ignore.

### 3. Duplicate Google Fonts Preconnect
`index.html` has two `<link rel="preconnect" href="https://fonts.googleapis.com">` tags and two `<link rel="preconnect" href="https://fonts.gstatic.com">` tags. Harmless but redundant.

### 4. Film Page — `background-attachment: fixed` (Parallax)
The film hero section uses `background-attachment: fixed` for a parallax effect. This is disabled/buggy on iOS Safari (renders as `scroll` instead). Not currently fixed.

### 5. No Tests
Zero test files in the project. No testing framework configured.

### 6. `index.html` at Root
There is a deleted `index.html` at the repo root (shown in git status as `D index.html`). The real entry point is `roanhoward-website/index.html`. Do not recreate the root one.

### 7. SidebarNav.jsx — Staged Modifications
`SidebarNav.jsx` currently has uncommitted changes (shown in git status as `M`). Check `git diff` before modifying it.

---

## Common Tasks

**Run dev server:**
```bash
cd roanhoward-website
npm run dev
```

**Build for production:**
```bash
cd roanhoward-website
npm run build
```

**Lint:**
```bash
cd roanhoward-website
npm run lint
```

All npm commands must be run from inside `roanhoward-website/`, not the repo root.

---

## Assets Reference

All static assets live in `roanhoward-website/public/Images/`. Reference them in JSX as `/Images/filename.ext` (Vite serves `public/` at root).

Key assets:
- `Resume.pdf` — downloadable resume (linked in navbar)
- `Roan_alaska.JPG` — Home page banner
- `etree.png` — favicon (electric tree icon)
- Movie posters for Film carousel: `Lahaine.jpg`, `Cityofgod.jpeg`, etc.
- Art photos: `Charcoal.jpeg`, `HeadRest6.jpeg`, `Ravens.jpg`, etc.
- Icon SVGs for GitHub, LinkedIn, Email in navbar
