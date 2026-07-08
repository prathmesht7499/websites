# Emberdune — Luxury Auto Protection

A full marketing site for emberdune.world built with Vite + React 19, Tailwind CSS v4, GSAP (ScrollTrigger), and Framer Motion.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

- `src/sections/` — page sections (Hero, Coverage, Process, Fleet, Stats, Testimonials, Membership, FAQ, Contact)
- `src/components/` — Navbar, Footer, LegalModal (the footer legal pop-up)
- `src/lib/` — GSAP setup + a reusable scroll-reveal hook
- `src/index.css` — Tailwind v4 theme tokens (`@theme`), fonts, global styles

## Design notes

Palette and type are custom-tokened in `src/index.css` under `@theme` (Tailwind v4 CSS-first config — no `tailwind.config.js` needed). Fonts: Fraunces (display), Inter (body), IBM Plex Mono (data/labels), loaded via Google Fonts in `index.css`.

The footer's "Legal" links open a tabbed modal (`LegalModal.jsx`) with Privacy Policy, Terms of Service, and Insurance Disclosures — replace the placeholder copy with reviewed legal text before launch.

All copy, pricing, stats, and testimonials are placeholder content for demonstration — replace with real figures, licensing information, and underwriting partner details before going live, since this is an insurance-adjacent product.
