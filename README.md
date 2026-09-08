# Soul Cafe — Website

React + Vite + Tailwind CSS site for Soul Cafe, Ashok Vihar Phase 2, Delhi.

## Project structure

```
soul-cafe/
├── index.html                # HTML entry, loads Google Fonts + mounts React
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx               # React entry point
│   ├── App.jsx                # Assembles all sections
│   ├── index.css              # Tailwind directives + shared hover/transition CSS
│   ├── data/
│   │   └── menu.js            # Menu items + cafe contact/location info (edit here)
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Features.jsx
│       ├── MenuSection.jsx    # Interactive tabbed menu
│       ├── Ambiance.jsx
│       ├── Reservation.jsx    # Reservation form (front-end only, see note below)
│       ├── Location.jsx       # Address, hours, phone, embedded map
│       ├── Footer.jsx
│       └── StickyBar.jsx      # Mobile-only WhatsApp/Call bar
```

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`. Preview the production build with:

```bash
npm run preview
```

## Deploy

The `dist/` folder is a static site and can be deployed anywhere that serves
static files:

**Vercel**
```bash
npm i -g vercel
vercel
```
(Framework preset: Vite — auto-detected. Build command `npm run build`, output dir `dist`.)

**Netlify**
- Build command: `npm run build`
- Publish directory: `dist`

**GitHub Pages / any static host**
- Run `npm run build`, then upload the contents of `dist/` to your host.

## Things to update before going live

- `src/data/menu.js` → `CAFE_INFO.hoursSummary` / `hoursNote`: only "closes 7pm"
  was visible on the Google listing at build time. Replace with the full
  weekly hours once confirmed.
- `src/data/menu.js` → `MENU_ITEMS`: swap in the real Swiggy menu items/prices
  once you can share them (the live Swiggy page is JS-rendered and couldn't
  be scraped automatically).
- `src/components/Reservation.jsx`: the form currently just shows a
  confirmation message on submit. Wire `handleSubmit` up to a real backend
  (e.g. a serverless function, Formspree, or your booking system) to actually
  receive reservations.
- "Download Full PDF Menu" button in `MenuSection.jsx` has no file linked yet
  — add an `href` to a hosted PDF once you have one.
