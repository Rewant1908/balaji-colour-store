# Implementation Plan: Balaji Colour Store Enhancements

**Branch**: `002-balaji-colour-store` | **Date**: 2026-05-14

## Technical Context
- **Language**: JavaScript (React 18 + JSX)
- **Primary Dependencies**: Vite, Tailwind CSS v3, Framer Motion, OGL, Lucide React
- **Storage**: N/A (static frontend)
- **Target Platform**: Web browser (mobile + desktop)
- **Performance Goals**: 60fps animations, Lighthouse > 70

## Enhancements Planned

### P1 — Visual & UX Polish
1. Smooth scroll between sections
2. Navbar becomes solid/glassy on scroll (currently transparent)
3. Section dividers — subtle paint-stroke SVG between sections
4. Loading screen with animated paint splash before site reveals

### P2 — Section Improvements
5. Services section — add hover glow effect matching each card's color
6. Gallery section — lightbox on image click
7. Contact form — add success toast notification after submit
8. Footer — add WhatsApp CTA button

### P3 — Performance
9. Lazy load images with blur-up placeholder
10. Add meta tags / Open Graph for SEO
