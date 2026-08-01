# Betopia Project Memory — year

## Project
Pohela Boishakh (Bengali New Year 1432) celebration website. Single-page HTML/CSS/JS app deployed on Vercel.

## Layout
- `index.html` — all content, styles, and scripts in one file
- `.vercel/` — Vercel deployment config

## Build / Dev
- No build step needed — static HTML
- Dev: `npx serve . -p 5173`
- Deploy: Vercel auto-deploys from linked repo

## Conventions
- Bengali language (bn) with Noto Sans Bengali / Hind Siliguri fonts
- Single-file approach (no framework)
- Dark/light theme persisted to localStorage
- All user text inputs are XML-escaped before SVG generation
- External links use `rel="noopener noreferrer"`
- CSP header set in meta tag

## Features (all implemented)
1. Photo gallery with lightbox — showcase Pohela Boishakh celebrations (6 items, arrow nav, keyboard nav)
2. Music/audio — Baul/Rabindra Sangeat style pentatonic melody via Web Audio API with toggle button
3. Share buttons — Facebook, WhatsApp, Twitter, copy link
4. Greeting card generator — personalized "Shubho Noboborsho" cards with theme selection and SVG download
5. Interactive map — major celebration locations in Bangladesh and West Bengal with Google Maps links