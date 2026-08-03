# Betopia Project Memory — year

## Project
Pohela Boishakh (Bengali New Year 1432) celebration website. Migrated from single-page HTML/CSS/JS to **Vite + React + TypeScript** with scalable component-based architecture.

## Layout
```
├── src/                          # Vite project root (run commands from here)
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   └── src/                      # React source code
│       ├── main.tsx              # Entry point
│       ├── App.tsx               # App shell (composes all components)
│       ├── index.css             # Global styles, CSS variables, animations
│       ├── types/
│       │   └── index.ts          # Shared TypeScript interfaces
│       ├── context/
│       │   └── ThemeContext.tsx  # ThemeProvider + useTheme hook
│       ├── hooks/
│       │   ├── useCountdown.ts   # Bengali numeral countdown to Apr 14
│       │   ├── useScrollReveal.ts# IntersectionObserver scroll animations
│       │   └── useLocalStorage.ts# Generic localStorage state hook
│       ├── utils/
│       │   ├── helpers.ts        # escapeXml, padStart, gradient helpers
│       │   └── constants.ts      # Gallery data, traditions, map locations
│       ├── components/
│       │   ├── Hero/             # Hero section + countdown + scroll-down
│       │   ├── Gallery/          # Photo gallery with lightbox + arrow/keyboard nav
│       │   ├── Traditions/       # Pohela Boishakh traditions grid
│       │   ├── Foods/            # Traditional food cards
│       │   ├── ShareBar/         # Facebook, WhatsApp, Twitter, copy link
│       │   ├── CardGenerator/    # Greeting card builder with SVG export
│       │   ├── MapSection/       # Interactive map of celebration locations
│       │   ├── ProgressBar/      # Scroll progress bar
│       │   ├── ThemeToggle/      # Light/dark theme switch
│       │   ├── MusicToggle/      # Baul melody Web Audio toggle
│       │   └── Footer/           # Footer with copyright + social links
│       └── assets/
├── index.html                    # Original single-file (kept for reference)
└── .vercel/                      # Vercel deployment config
```

## Build / Dev
- **Install:** `cd src && npm install`
- **Dev:** `cd src && npm run dev` (Vite dev server on localhost:5173)
- **Build:** `cd src && npm run build` (production build to dist/)
- **Preview:** `cd src && npm run preview`
- **Deploy:** Vercel auto-deploys from linked repo (push to main)

## Conventions
- **Bengali language (bn)** — Noto Sans Bengali / Hind Siliguri fonts (Google Fonts)
- **Component-based** — each feature isolated in its own directory under `src/src/components/`
- **Custom hooks** — reusable logic (countdown, scroll reveal, localStorage) under `src/src/hooks/`
- **Context API** — theme state via `ThemeContext` (not Redux/Zustand)
- **TypeScript** — all components and utilities typed; shared interfaces in `src/src/types/`
- **XML escaping** — all user text inputs escaped via `escapeXml()` before SVG generation
- **External links** — use `rel="noopener noreferrer"`
- **CSP** — set in `index.html` meta tag
- **Dark/light theme** — persisted to localStorage, toggled via `useTheme()` hook

## Features (all implemented)
1. **Photo gallery with lightbox** — showcase Pohela Boishakh celebrations (6 items, arrow nav, keyboard nav)
2. **Music/audio** — Baul/Rabindra Sangeet style pentatonic melody via Web Audio API with toggle button
3. **Share buttons** — Facebook, WhatsApp, Twitter, copy link
4. **Greeting card generator** — personalized "Shubho Noboborsho" cards with theme selection and SVG download
5. **Interactive map** — major celebration locations in Bangladesh and West Bengal with Google Maps links

## Dependencies
- `react` + `react-dom` — UI framework
- `vite` — build tool + dev server
- `@types/react` + `@types/react-dom` — TypeScript types
- Google Fonts — Noto Sans Bengali, Hind Siliguri (loaded in index.html)
