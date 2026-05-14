# Project Constitution - Balaji Colour Store

## 1. Technical Stack & Styling Architecture
- **Framework**: Next.js 14+ (App Router) with strict server-side rendering (SSR) guidelines.
- **Styling Engine**: Tailwind CSS.
- **Design System Palette**:
  - Primary Base: Deep Royal Navy (`#0B192C`)
  - Accent / Highlights: Metallic Brushed Gold (`#E0B867`)
  - Background Neutral: Light Alabaster (`#F9F9F9`)

## 2. Animation & 3D WebGL Engineering
- **Libraries**: Three.js, `@react-three/fiber`, `@react-three/drei`, and Framer Motion.
- **Client Isolation**: Enforce strict `'use client'` isolation for all interactive 3D WebGL canvas components to preserve streaming SSR performance.
- **Interaction Performance**: Target fluid 60fps frame rates on point interactions; fallback gracefully to CSS transforms on low-power devices.
