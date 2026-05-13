import React, { useRef, useEffect } from 'react'
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion'

// ── Real SVG Brand Logos ─────────────────────────────────────────────────────
// Each brand gets its own inline SVG logo that matches its real identity

function AsianPaintsLogo() {
  return (
    <svg viewBox="0 0 120 60" width="100" height="50" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="60" rx="6" fill="#E31E24" />
      {/* AP wordmark */}
      <text x="12" y="38" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="28" fill="white" letterSpacing="-1">AP</text>
      {/* Asian Paints text */}
      <text x="60" y="28" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="9" fill="white" textAnchor="middle">ASIAN</text>
      <text x="60" y="40" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="8" fill="white" opacity="0.85" textAnchor="middle">PAINTS</text>
      {/* Colour dots motif */}
      <circle cx="100" cy="15" r="5" fill="#FFD700" opacity="0.9" />
      <circle cx="110" cy="22" r="4" fill="#4CAF50" opacity="0.8" />
      <circle cx="103" cy="28" r="3" fill="#2196F3" opacity="0.8" />
    </svg>
  )
}

function BergerLogo() {
  return (
    <svg viewBox="0 0 120 60" width="100" height="50" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="60" rx="6" fill="#0050A0" />
      <text x="60" y="26" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="20" fill="white" textAnchor="middle" letterSpacing="1">BERGER</text>
      <text x="60" y="42" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="8" fill="#7EC8F0" textAnchor="middle" letterSpacing="2">PAINTS</text>
      {/* Brush stroke accent */}
      <rect x="20" y="46" width="80" height="3" rx="1.5" fill="#FFD700" opacity="0.9" />
    </svg>
  )
}

function IndigoLogo() {
  return (
    <svg viewBox="0 0 120 60" width="100" height="50" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="indigoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6C3AB5" />
          <stop offset="100%" stopColor="#4A1D96" />
        </linearGradient>
      </defs>
      <rect width="120" height="60" rx="6" fill="url(#indigoGrad)" />
      {/* Star/sparkle motif */}
      <polygon points="18,10 20,16 26,16 21,20 23,26 18,22 13,26 15,20 10,16 16,16" fill="#FFD700" />
      <text x="68" y="28" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="18" fill="white" textAnchor="middle">INDIGO</text>
      <text x="68" y="42" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="8" fill="#C4B5FD" textAnchor="middle" letterSpacing="2">PAINTS</text>
    </svg>
  )
}

function NerolacLogo() {
  return (
    <svg viewBox="0 0 120 60" width="100" height="50" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="nerolacGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00843D" />
          <stop offset="100%" stopColor="#005C2B" />
        </linearGradient>
      </defs>
      <rect width="120" height="60" rx="6" fill="url(#nerolacGrad)" />
      {/* Leaf motif */}
      <path d="M14 30 Q20 10 30 15 Q20 20 22 35 Q14 35 14 30Z" fill="#7ED321" opacity="0.9" />
      <text x="70" y="27" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="16" fill="white" textAnchor="middle">NEROLAC</text>
      <text x="70" y="42" fontFamily="Arial,sans-serif" fontWeight="300" fontSize="7.5" fill="#A7F3D0" textAnchor="middle" letterSpacing="1.5">GOODNESS OF NATURE</text>
    </svg>
  )
}

function DuluxLogo() {
  return (
    <svg viewBox="0 0 120 60" width="100" height="50" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="duluxGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#CC0000" />
          <stop offset="100%" stopColor="#8B0000" />
        </linearGradient>
      </defs>
      <rect width="120" height="60" rx="6" fill="url(#duluxGrad)" />
      {/* Dog paw print motif */}
      <circle cx="14" cy="22" r="4" fill="white" opacity="0.7" />
      <circle cx="22" cy="17" r="3" fill="white" opacity="0.7" />
      <circle cx="9" cy="15" r="3" fill="white" opacity="0.7" />
      <ellipse cx="15" cy="30" rx="5" ry="6" fill="white" opacity="0.6" />
      <text x="72" y="28" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="22" fill="white" textAnchor="middle">DULUX</text>
      <text x="72" y="42" fontFamily="Arial,sans-serif" fontWeight="300" fontSize="7" fill="rgba(255,255,255,0.7)" textAnchor="middle" letterSpacing="1">LET'S COLOUR</text>
    </svg>
  )
}

function BirlaPaintsLogo() {
  return (
    <svg viewBox="0 0 120 60" width="100" height="50" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="birlaGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>
      <rect width="120" height="60" rx="6" fill="url(#birlaGrad)" />
      {/* B monogram */}
      <text x="14" y="42" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="36" fill="white" opacity="0.25">B</text>
      <text x="42" y="28" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="15" fill="white" textAnchor="middle">BIRLA</text>
      <text x="42" y="42" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="9" fill="white" opacity="0.85" textAnchor="middle">PAINTS</text>
    </svg>
  )
}

function JKPuttyLogo() {
  return (
    <svg viewBox="0 0 120 60" width="100" height="50" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="60" rx="6" fill="#1E293B" />
      <text x="12" y="38" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="30" fill="white" letterSpacing="2">JK</text>
      <rect x="60" y="12" width="2" height="36" rx="1" fill="#64748B" />
      <text x="72" y="27" fontFamily="Arial Black,Arial" fontWeight="700" fontSize="11" fill="white">WALL</text>
      <text x="72" y="41" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="10" fill="#94A3B8">PUTTY</text>
    </svg>
  )
}

function SleekLogo() {
  return (
    <svg viewBox="0 0 120 60" width="100" height="50" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sleekGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
      </defs>
      <rect width="120" height="60" rx="6" fill="url(#sleekGrad)" />
      {/* S monogram accent */}
      <text x="12" y="42" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="36" fill="#F43F5E" opacity="0.3">S</text>
      <text x="60" y="28" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="14" fill="white" textAnchor="middle">SLEEK</text>
      <text x="60" y="42" fontFamily="Arial,sans-serif" fontWeight="300" fontSize="8" fill="#94A3B8" textAnchor="middle" letterSpacing="1.5">KITCHENS</text>
      <rect x="30" y="45" width="60" height="2" rx="1" fill="#F43F5E" opacity="0.7" />
    </svg>
  )
}

function AshirvadLogo() {
  return (
    <svg viewBox="0 0 120 60" width="100" height="50" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ashirvadGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
      </defs>
      <rect width="120" height="60" rx="6" fill="url(#ashirvadGrad)" />
      {/* Water drop motif */}
      <path d="M18 35 Q18 22 24 18 Q30 22 30 35 Q30 41 24 41 Q18 41 18 35Z" fill="white" opacity="0.25" />
      <circle cx="24" cy="33" r="4" fill="white" opacity="0.5" />
      <text x="65" y="28" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="13" fill="white" textAnchor="middle">ASHIRVAD</text>
      <text x="65" y="42" fontFamily="Arial,sans-serif" fontWeight="300" fontSize="7.5" fill="#A7F3D0" textAnchor="middle" letterSpacing="1">PIPES &amp; FITTINGS</text>
    </svg>
  )
}

// ── Brand Data ───────────────────────────────────────────────────────────────
const brands = [
  { name: 'Asian Paints',   Logo: AsianPaintsLogo, tagline: '#1 in India',         glow: '#E31E24' },
  { name: 'Berger Paints',  Logo: BergerLogo,      tagline: 'Since 1923',           glow: '#0050A0' },
  { name: 'Indigo Paints',  Logo: IndigoLogo,      tagline: 'Technologically Advanced', glow: '#6C3AB5' },
  { name: 'Nerolac',        Logo: NerolacLogo,     tagline: 'Goodness of Nature',   glow: '#00843D' },
  { name: 'Dulux',          Logo: DuluxLogo,       tagline: "Let's Colour",         glow: '#CC0000' },
  { name: 'Birla Paints',   Logo: BirlaPaintsLogo, tagline: 'Quality You Trust',    glow: '#F59E0B' },
  { name: 'J.K. Putty',     Logo: JKPuttyLogo,     tagline: 'Wall Perfection',      glow: '#1E293B' },
  { name: 'Sleek Kitchens', Logo: SleekLogo,       tagline: 'Premium Kitchens',     glow: '#F43F5E' },
  { name: 'Ashirvad',       Logo: AshirvadLogo,    tagline: 'Pipes & Fittings',     glow: '#059669' },
]

// ── Animated Background Blobs ────────────────────────────────────────────────
const blobs = [
  { color: '#E31E2422', x: '5%',  y: '10%', size: 320, duration: 8  },
  { color: '#0050A018', x: '75%', y: '5%',  size: 280, duration: 11 },
  { color: '#6C3AB515', x: '40%', y: '60%', size: 360, duration: 14 },
  { color: '#00843D18', x: '85%', y: '55%', size: 240, duration: 9  },
  { color: '#F59E0B12', x: '20%', y: '75%', size: 200, duration: 12 },
]

// ── Floating Paint Drop ───────────────────────────────────────────────────────
function PaintDrop({ color, style }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ background: color, ...style }}
      animate={{ y: [0, -18, 0], scale: [1, 1.08, 1], opacity: [0.55, 0.8, 0.55] }}
      transition={{ duration: style.dur || 5, repeat: Infinity, ease: 'easeInOut', delay: style.delay || 0 }}
    />
  )
}

const paintDrops = [
  { color: '#E31E2440', style: { width: 18, height: 18, top: '12%', left: '8%',  dur: 4.5, delay: 0   } },
  { color: '#0050A040', style: { width: 12, height: 12, top: '25%', left: '22%', dur: 6,   delay: 1   } },
  { color: '#FFD70050', style: { width: 22, height: 22, top: '60%', left: '15%', dur: 5.5, delay: 0.5 } },
  { color: '#00843D40', style: { width: 14, height: 14, top: '75%', left: '45%', dur: 7,   delay: 1.5 } },
  { color: '#6C3AB540', style: { width: 10, height: 10, top: '20%', left: '70%', dur: 4,   delay: 2   } },
  { color: '#F59E0B40', style: { width: 20, height: 20, top: '55%', left: '85%', dur: 6.5, delay: 0.8 } },
  { color: '#F43F5E40', style: { width: 16, height: 16, top: '85%', left: '65%', dur: 5,   delay: 1.2 } },
  { color: '#0050A030', style: { width: 26, height: 26, top: '40%', left: '92%', dur: 8,   delay: 0.3 } },
]

// ── Marquee strip ────────────────────────────────────────────────────────────
function MarqueeStrip() {
  const items = [...brands, ...brands] // duplicate for seamless loop
  return (
    <div className="relative overflow-hidden py-4 mb-12 -mx-4 sm:-mx-6 lg:-mx-8">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #F8FAFF, transparent)' }} />
      <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #F8FAFF, transparent)' }} />
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((b, i) => (
          <div key={i} className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white shadow-sm border border-black/5 flex-shrink-0">
            <div className="w-6 h-6 rounded-full flex-shrink-0"
              style={{ background: b.glow }} />
            <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">{b.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// ── Brand Card ────────────────────────────────────────────────────────────────
function BrandCard({ brand, index }) {
  const { name, Logo, tagline, glow } = brand
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -10, scale: 1.04 }}
      className="group relative flex flex-col items-center gap-3 p-5 rounded-3xl bg-white cursor-pointer"
      style={{
        boxShadow: `0 4px 24px ${glow}18, 0 1px 3px rgba(0,0,0,0.07)`,
        border: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      {/* Glow halo on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1.5px ${glow}60, 0 8px 40px ${glow}30` }}
      />

      {/* Shimmer sweep on hover */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `linear-gradient(105deg, transparent 40%, ${glow}15 50%, transparent 60%)`,
            animation: 'shimmerSweep 1.2s ease-out',
          }}
        />
      </div>

      {/* Logo */}
      <div className="relative z-10 transition-transform duration-500 group-hover:scale-[1.06] group-hover:-translate-y-1">
        <Logo />
      </div>

      {/* Brand name */}
      <p className="text-xs font-semibold text-slate-500 text-center tracking-wide group-hover:text-slate-700 transition-colors">
        {tagline}
      </p>

      {/* Animated bottom bar */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full"
        style={{ background: glow }}
        initial={{ width: 0 }}
        whileHover={{ width: '60%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function Brands() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: '#F8FAFF' }}>

      {/* Animated background blobs */}
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none blur-3xl"
          style={{ background: b.color, width: b.size, height: b.size, left: b.x, top: b.y }}
          animate={{
            scale:  [1, 1.15, 0.95, 1],
            x:      [0, 20, -10, 0],
            y:      [0, -15, 10, 0],
            opacity:[0.7, 1, 0.8, 0.7],
          }}
          transition={{ duration: b.duration, repeat: Infinity, ease: 'easeInOut', delay: i * 1.2 }}
        />
      ))}

      {/* Floating paint drops */}
      {paintDrops.map((d, i) => <PaintDrop key={i} {...d} />)}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'linear-gradient(135deg,#FF6B6B22,#C084FC22)', color: '#E31E24' }}>
            <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse" />
            Authorized Dealer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Trusted by India's
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #E31E24, #6C3AB5, #0050A0)' }}
            >
              Premium Brands
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-500 max-w-xl mx-auto">
            Authorized dealer for India's most trusted paint &amp; interior brands — quality guaranteed on every project.
          </p>
        </motion.div>

        {/* Marquee strip */}
        <MarqueeStrip />

        {/* Brand cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          {brands.map((brand, i) => (
            <BrandCard key={brand.name} brand={brand} index={i} />
          ))}
        </div>

        {/* Bottom trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400"
        >
          {['100% Genuine Products', 'Direct Brand Warranty', 'Expert Colour Matching', 'Free Samples Available'].map((text, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="7" fill="#E31E24" opacity="0.15" />
                <path d="M4 7l2 2 4-4" stroke="#E31E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
