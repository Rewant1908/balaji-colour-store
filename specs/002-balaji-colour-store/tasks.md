# Tasks: Balaji Colour Store Enhancements

## Status Legend
- ✅ DONE
- 🔄 IN PROGRESS
- ⬜ TODO

---

## TASK-001: Sticky Navbar glassmorphism ✅
**File**: `src/components/Navbar.jsx`
- Stronger `backdrop-blur-xl` + `bg-white/80` on scroll > 60px
- Added `border-b border-white/60` and layered shadow
- Passive scroll listener for perf

## TASK-002: Services cards hover glow ✅
**File**: `src/components/Services.jsx`
- Each card has a unique `glow` color matching its icon
- Framer Motion `whileHover` applies `boxShadow` with the card's glow color
- Cards also lift `y: -6` on hover

## TASK-003: Contact form success toast ✅
**File**: `src/components/ContactForm.jsx`
- `<Toast>` component: Framer Motion spring in/out
- Coral-to-purple gradient pill, bottom-right fixed
- Auto-dismisses after 4 seconds, manual close button
- Replaces the old `alert()` call

## TASK-004: Footer WhatsApp CTA ✅
**File**: `src/components/Footer.jsx`
- Green `#25D366` pill button: "Chat on WhatsApp"
- Links to `wa.me/919431212039` with pre-filled message
- Also added WhatsApp icon in social links row
- `MessageCircle` icon from lucide-react

## TASK-005: Smooth scroll + navbar offset ✅
**File**: `src/index.css`
- `scroll-behavior: smooth` on `html`
- `scroll-padding-top: 80px` so navbar doesn't cover section headings

## TASK-006: Open Graph + SEO meta tags ✅
**File**: `index.html`
- Full `<title>`, `<meta description>`, `<meta keywords>`
- `og:title`, `og:description`, `og:url`, `og:type`, `og:locale`
- Twitter Card meta tags
- `LocalBusiness` JSON-LD schema with address, phone, hours
- `rel="canonical"` link
- Preconnect hints for font CDNs
