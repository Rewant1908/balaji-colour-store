# Feature: Gallery Lightbox

## Summary
When a user clicks any image in the Gallery section, a fullscreen
lightbox opens showing the image with prev/next navigation and
a close button. Clicking outside or pressing Escape closes it.

## Requirements
- Click any gallery image → opens lightbox overlay
- Prev / Next arrow buttons to navigate between images
- Keyboard: ArrowLeft, ArrowRight, Escape
- Click backdrop to close
- Smooth fade-in animation (Framer Motion)
- Mobile swipe support (touch events)
- Image counter: "3 / 8" shown bottom center

## Files to modify
- src/components/Gallery.jsx
- src/index.css (if needed)

## Acceptance Criteria
- [ ] Lightbox opens on image click
- [ ] Navigation works (prev/next + keyboard)
- [ ] Escape / backdrop closes lightbox
- [ ] Works on mobile (375px)
- [ ] No layout shift when lightbox opens
