# Feature Specification: Balaji Colour Store — Website Polish & Enhancements

**Feature Branch**: `002-balaji-colour-store`

**Created**: 2026-05-14

**Status**: Draft

**Input**: User description: "Balaji Colour Store full website polish and enhancements"

## User Scenarios & Testing

### User Story 1 - Visitor lands on hero section (Priority: P1)

A potential customer visits the site and is immediately impressed by the animated LiquidChrome WebGL hero background with vibrant paint-inspired colors.

**Why this priority**: First impression — if the hero looks great, the visitor stays.

**Independent Test**: Load the site, verify LiquidChrome animates with coral/teal/gold colors, text is readable, CTA buttons work.

**Acceptance Scenarios**:

1. **Given** a visitor opens the site, **When** the page loads, **Then** the LiquidChrome WebGL canvas renders behind the hero text with coral/teal/gold flowing colors
2. **Given** a visitor moves their mouse, **When** hovering over the hero, **Then** the liquid reacts to the cursor position
3. **Given** a mobile visitor, **When** they touch the screen, **Then** the liquid responds to touch input

---

### User Story 2 - Visitor browses sections below hero (Priority: P2)

A visitor scrolls down and experiences a visually consistent warm paint-themed background across all sections — not a jarring pure white.

**Why this priority**: Visual cohesion builds brand trust and keeps users engaged.

**Independent Test**: Scroll through all sections — background should be warm cream (#fdf8f4) with subtle paint-color blobs, not pure white.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls past the hero, **When** they view any section, **Then** the background is warm cream with coral/teal/gold radial gradient blobs
2. **Given** a visitor views section cards, **When** inspecting card backgrounds, **Then** card whites (#ffffff) contrast clearly against the cream background

---

### User Story 3 - Visitor views the team section (Priority: P3)

A visitor wants to know who runs Balaji Colour Store and sees profile cards for Ravi Jain, Shubham Jain, and Umang Jain.

**Why this priority**: Trust-building — knowing the founders increases conversion.

**Independent Test**: Scroll to team section, verify 3 cards appear with names, titles, descriptions, and photos.

**Acceptance Scenarios**:

1. **Given** a visitor reaches the team section, **When** viewing the grid, **Then** exactly 3 cards appear: Ravi Jain, Shubham Jain, Umang Jain
2. **Given** a visitor hovers a card, **When** hovering, **Then** card lifts with shadow and photo zooms subtly
3. **Given** a mobile visitor, **When** viewing on small screen, **Then** cards stack to single column

---

### Edge Cases

- What happens when WebGL is not supported by the browser? LiquidChrome container should show a static gradient fallback.
- What happens when team photos fail to load? Cards should show a colored initial avatar fallback.
- What happens on very slow connections? Page should be usable before WebGL loads (content-first).

## Requirements

### Functional Requirements

- **FR-001**: System MUST render LiquidChrome WebGL canvas as the hero background
- **FR-002**: System MUST use baseColor [0.9, 0.35, 0.15] for coral/gold/teal LiquidChrome palette
- **FR-003**: LiquidChrome MUST respond to mouse and touch interaction
- **FR-004**: All sections below hero MUST use warm cream background (#fdf8f4) with radial paint blobs
- **FR-005**: Team section MUST display exactly 3 cards: Ravi Jain, Shubham Jain, Umang Jain
- **FR-006**: Each team card MUST include: photo, name, title, description, color accent tag
- **FR-007**: Site MUST be responsive across 375px mobile to 1440px desktop
- **FR-008**: All animations MUST use Framer Motion with whileInView triggers
- **FR-009**: ogl library MUST be installed as a dependency for LiquidChrome

### Key Entities

- **HeroSection**: Full-screen section with LiquidChrome background, overlay, paint blobs, headline, CTAs, stats
- **LiquidChrome**: WebGL OGL-based animated canvas component, props: baseColor, speed, amplitude, frequencyX, frequencyY, interactive
- **TeamMember**: { name, title, image, description, tag, color }
- **PageBodyBg**: CSS class providing warm cream base + 6 radial paint-color blobs for all post-hero sections

## Success Criteria

### Measurable Outcomes

- **SC-001**: LiquidChrome renders and animates within 2 seconds on a standard connection
- **SC-002**: All 3 team member cards display correctly on mobile (375px) and desktop (1440px)
- **SC-003**: No section below the hero displays a pure #ffffff background at the page level
- **SC-004**: Lighthouse performance score remains above 70 with WebGL active
- **SC-005**: Mouse interaction on LiquidChrome responds within 16ms (60fps)

## Assumptions

- Users have WebGL-capable browsers (Chrome, Firefox, Safari, Edge modern versions)
- Real photos of Ravi, Shubham, and Umang will be provided later; placeholder Pexels images used for now
- The ogl package is installed via npm (already added to package.json)
- Tailwind CSS v3 is the styling system — no CSS modules or styled-components
- Framer Motion handles all scroll-triggered animations
- The site is a static frontend — no backend or CMS involved
