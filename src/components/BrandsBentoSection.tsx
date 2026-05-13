import React, { useRef, useEffect, useState } from 'react'

// ─── SVG Paint Can Illustration ─────────────────────────────────────────────
interface PaintCanProps {
  bodyColor: string
  rimColor: string
  labelColor: string
  dripColor: string
  accentColor?: string
  animated?: boolean
  size?: number
}

function PaintCan({
  bodyColor,
  rimColor,
  labelColor,
  dripColor,
  accentColor,
  animated = true,
  size = 80,
}: PaintCanProps) {
  const id = useRef(`can-${Math.random().toString(36).slice(2)}`).current
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 80 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={animated ? { animation: 'canFloat 3s ease-in-out infinite' } : undefined}
      aria-hidden="true"
    >
      {/* Handle */}
      <path
        d="M26 18 Q40 6 54 18"
        stroke={rimColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Can body */}
      <rect x="14" y="22" width="52" height="62" rx="5" fill={bodyColor} />
      {/* Shine on body */}
      <rect x="18" y="26" width="6" height="50" rx="3" fill="white" opacity="0.18" />
      {/* Rim top */}
      <rect x="11" y="18" width="58" height="8" rx="4" fill={rimColor} />
      {/* Label background */}
      <rect x="18" y="38" width="44" height="28" rx="4" fill={labelColor} opacity="0.92" />
      {/* Label stripe */}
      <rect x="18" y="52" width="44" height="5" rx="2" fill={accentColor || rimColor} opacity="0.55" />
      {/* Label dots */}
      <circle cx="28" cy="45" r="3" fill={accentColor || rimColor} opacity="0.7" />
      <circle cx="40" cy="45" r="3" fill={accentColor || rimColor} opacity="0.7" />
      <circle cx="52" cy="45" r="3" fill={accentColor || rimColor} opacity="0.7" />
      {/* Can bottom rim */}
      <rect x="11" y="80" width="58" height="7" rx="3.5" fill={rimColor} />
      {/* Drip 1 */}
      <path
        d={`M34 86 Q33 94 32 100 Q31.5 103 32.5 103 Q33.5 103 34 100 Q35 94 34 86Z`}
        fill={dripColor}
        style={animated ? { animation: `drip1 2.4s ease-in-out infinite`, transformOrigin: '34px 86px' } : undefined}
      />
      {/* Drip 2 */}
      <path
        d={`M46 86 Q45.5 92 46 97 Q46.3 100 47 100 Q47.7 100 48 97 Q48.5 92 46 86Z`}
        fill={dripColor}
        style={animated ? { animation: `drip2 2.4s ease-in-out infinite 0.5s`, transformOrigin: '46px 86px' } : undefined}
      />
    </svg>
  )
}

// ─── Animated Color Swirl ────────────────────────────────────────────────────
function ColorSwirl() {
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" aria-hidden="true"
      style={{ animation: 'spinSwirl 8s linear infinite' }}>
      <defs>
        <linearGradient id="swirl1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e63946" />
          <stop offset="33%" stopColor="#f4a261" />
          <stop offset="66%" stopColor="#2a9d8f" />
          <stop offset="100%" stopColor="#457b9d" />
        </linearGradient>
      </defs>
      <path d="M45 10 C65 10 80 25 80 45 C80 65 65 80 45 80 C25 80 10 65 10 45 C10 25 25 10 45 10Z"
        stroke="url(#swirl1)" strokeWidth="6" fill="none" strokeDasharray="18 8" />
      <path d="M45 20 C60 20 70 32 70 45 C70 58 60 70 45 70 C30 70 20 58 20 45 C20 32 30 20 45 20Z"
        stroke="url(#swirl1)" strokeWidth="4" fill="none" strokeDasharray="12 6" opacity="0.7" />
      <circle cx="45" cy="45" r="10" fill="url(#swirl1)" opacity="0.6" />
    </svg>
  )
}

// ─── Paint Splash SVG ────────────────────────────────────────────────────────
function PaintSplash({ color }: { color: string }) {
  return (
    <svg width="100" height="70" viewBox="0 0 100 70" fill="none" aria-hidden="true"
      style={{ animation: 'splashPulse 2.5s ease-in-out infinite' }}>
      <ellipse cx="50" cy="55" rx="40" ry="10" fill={color} opacity="0.18" />
      <path d="M20 50 Q15 30 30 20 Q40 12 50 15 Q60 12 70 20 Q85 30 80 50 Q70 65 50 63 Q30 65 20 50Z"
        fill={color} opacity="0.85" />
      <circle cx="28" cy="28" r="6" fill={color} />
      <circle cx="72" cy="25" r="4" fill={color} />
      <circle cx="50" cy="10" r="5" fill={color} />
      <circle cx="38" cy="8" r="3" fill={color} opacity="0.7" />
      <circle cx="63" cy="12" r="3" fill={color} opacity="0.7" />
    </svg>
  )
}

// ─── Paint Roller SVG ────────────────────────────────────────────────────────
function PaintRoller({ color }: { color: string }) {
  return (
    <svg width="110" height="80" viewBox="0 0 110 80" fill="none" aria-hidden="true"
      style={{ animation: 'rollerSlide 2s ease-in-out infinite alternate' }}>
      {/* Handle */}
      <line x1="55" y1="70" x2="55" y2="40" stroke="#555" strokeWidth="4" strokeLinecap="round" />
      <line x1="55" y1="40" x2="30" y2="28" stroke="#555" strokeWidth="4" strokeLinecap="round" />
      {/* Roller body */}
      <rect x="10" y="18" width="40" height="20" rx="10" fill={color} />
      <rect x="10" y="18" width="40" height="20" rx="10" fill="white" opacity="0.2" />
      {/* Paint streak on wall */}
      <rect x="10" y="40" width="40" height="22" rx="2" fill={color} opacity="0.3" />
      <rect x="10" y="40" width="6" height="22" rx="2" fill={color} opacity="0.5" />
      <rect x="20" y="40" width="6" height="22" rx="2" fill={color} opacity="0.5" />
      <rect x="30" y="40" width="6" height="22" rx="2" fill={color} opacity="0.5" />
      <rect x="40" y="40" width="6" height="22" rx="2" fill={color} opacity="0.5" />
    </svg>
  )
}

// ─── Counter Animation ───────────────────────────────────────────────────────
function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const duration = 1800
          const step = 16
          const increment = target / (duration / step)
          const timer = setInterval(() => {
            start += increment
            if (start >= target) { setCount(target); clearInterval(timer) }
            else setCount(Math.floor(start))
          }, step)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

// ─── useInView hook ──────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, inView }
}

// ─── Individual Bento Cards ──────────────────────────────────────────────────

function HeroCard({ delay }: { delay: number }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className="bento-card col-span-2 row-span-2 bg-[#051A24] rounded-[32px] p-8 flex flex-col justify-between overflow-hidden relative"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(32px)', transition: `opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease`, minHeight: 280 }}>
      {/* Background paint splash */}
      <div className="absolute -bottom-4 -right-4 opacity-20">
        <PaintSplash color="#ffffff" />
      </div>
      <div className="absolute top-6 right-6 opacity-30">
        <ColorSwirl />
      </div>
      <div className="relative z-10">
        <div className="text-xs font-mono text-[#4a9aba] mb-3 tracking-widest uppercase">Premium Selection</div>
        <h2 className="text-[28px] md:text-[36px] font-semibold text-white leading-tight mb-3"
          style={{ fontFamily: "'PP Mondwest','Georgia',serif" }}>
          India's Finest<br />Paint Brands
        </h2>
        <p className="text-[#8ab4c8] text-sm leading-relaxed max-w-[220px]">
          Every color, every finish — from matte elegance to glossy brilliance.
        </p>
      </div>
      <div className="flex items-center gap-3 mt-6 relative z-10">
        <span className="text-[42px] font-bold text-white"><CountUp target={10} suffix="+" /></span>
        <span className="text-[#8ab4c8] text-sm">Premium<br />Brands</span>
      </div>
    </div>
  )
}

interface BrandCardProps {
  brand: string
  tagline: string
  bodyColor: string
  rimColor: string
  labelColor: string
  dripColor: string
  accentColor: string
  bg: string
  textColor: string
  subColor: string
  delay: number
}

function BrandCard({ brand, tagline, bodyColor, rimColor, labelColor, dripColor, accentColor, bg, textColor, subColor, delay }: BrandCardProps) {
  const { ref, inView } = useInView()
  const [hovered, setHovered] = useState(false)
  return (
    <div ref={ref}
      className="bento-card rounded-[28px] p-6 flex flex-col justify-between overflow-hidden relative cursor-pointer"
      style={{
        background: bg,
        opacity: inView ? 1 : 0,
        transform: inView ? (hovered ? 'translateY(-4px) scale(1.01)' : 'translateY(0) scale(1)') : 'translateY(28px)',
        transition: `opacity 0.6s ${delay}s ease, transform 0.4s ease, box-shadow 0.4s ease`,
        boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.14)' : '0 4px 20px rgba(0,0,0,0.07)',
        minHeight: 180,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="text-xs font-mono tracking-widest uppercase mb-1" style={{ color: subColor }}>Paint Brand</div>
          <h3 className="text-[20px] font-semibold leading-tight" style={{ color: textColor, fontFamily: "'PP Mondwest','Georgia',serif" }}>{brand}</h3>
          <p className="text-xs mt-1 leading-relaxed max-w-[120px]" style={{ color: subColor }}>{tagline}</p>
        </div>
        <div style={{ transform: hovered ? 'rotate(-8deg) scale(1.1)' : 'rotate(0deg) scale(1)', transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)' }}>
          <PaintCan bodyColor={bodyColor} rimColor={rimColor} labelColor={labelColor} dripColor={dripColor} accentColor={accentColor} size={64} animated={hovered} />
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        {[bodyColor, rimColor, accentColor, dripColor].map((c, i) => (
          <div key={i} className="w-5 h-5 rounded-full border-2 border-white/40 shadow-sm"
            style={{ background: c, transform: hovered ? `translateY(-${i * 2}px)` : 'translateY(0)', transition: `transform 0.3s ${i * 0.06}s ease` }} />
        ))}
      </div>
    </div>
  )
}

function ColorMixerCard({ delay }: { delay: number }) {
  const { ref, inView } = useInView()
  const colors = ['#e63946','#f4a261','#2a9d8f','#457b9d','#6a4c93','#f7b731','#1a936f','#c1121f']
  return (
    <div ref={ref} className="bento-card col-span-2 rounded-[28px] p-6 overflow-hidden relative"
      style={{ background: '#f8fafc', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease`, minHeight: 160 }}>
      <div className="text-xs font-mono text-[#051A24]/50 mb-2 tracking-widest uppercase">Color Spectrum</div>
      <h3 className="text-[18px] font-semibold text-[#051A24] mb-4" style={{ fontFamily: "'PP Mondwest','Georgia',serif" }}>10,000+ Shades</h3>
      <div className="flex gap-2 flex-wrap">
        {colors.map((c, i) => (
          <div key={i}
            className="rounded-full flex-shrink-0"
            style={{
              background: c,
              width: 36, height: 36,
              animation: `colorBob 2s ease-in-out infinite`,
              animationDelay: `${i * 0.18}s`,
              boxShadow: `0 4px 12px ${c}55`
            }}
          />
        ))}
      </div>
    </div>
  )
}

function RollerCard({ delay }: { delay: number }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className="bento-card rounded-[28px] p-6 flex flex-col justify-between overflow-hidden"
      style={{ background: '#fff7ed', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease`, minHeight: 200 }}>
      <div>
        <div className="text-xs font-mono text-orange-400 mb-1 tracking-widest uppercase">Service</div>
        <h3 className="text-[18px] font-semibold text-[#051A24]" style={{ fontFamily: "'PP Mondwest','Georgia',serif" }}>Free Color<br />Consultation</h3>
      </div>
      <div className="flex justify-center my-2">
        <PaintRoller color="#f4a261" />
      </div>
      <p className="text-xs text-orange-700/70">Expert advice to pick the perfect palette for your space.</p>
    </div>
  )
}

function StatsCard({ delay }: { delay: number }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className="bento-card rounded-[28px] p-6 flex flex-col justify-between"
      style={{ background: '#f0fdf4', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease`, minHeight: 160 }}>
      <div className="text-xs font-mono text-green-600 mb-1 tracking-widest uppercase">Happy Clients</div>
      <div className="text-[42px] font-bold text-[#051A24] leading-none">
        <CountUp target={5000} suffix="+" />
      </div>
      <p className="text-sm text-green-700/70 mt-2">Homes & projects painted with trust.</p>
      <div className="flex gap-1 mt-3">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#22c55e" style={{ animation: `starPop 0.4s ${0.1 + i * 0.08}s both` }}>
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        ))}
      </div>
    </div>
  )
}

function FinishCard({ delay }: { delay: number }) {
  const { ref, inView } = useInView()
  const finishes = [
    { name: 'Matte', color: '#e8d5b7', desc: 'Velvety, no glare' },
    { name: 'Silk', color: '#b8d4e8', desc: 'Soft luminance' },
    { name: 'Gloss', color: '#d4b8e8', desc: 'Mirror finish' },
    { name: 'Satin', color: '#b8e8c8', desc: 'Easy to clean' },
  ]
  return (
    <div ref={ref} className="bento-card col-span-2 md:col-span-1 rounded-[28px] p-6"
      style={{ background: '#fafafa', border: '1px solid #e5e7eb', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease` }}>
      <div className="text-xs font-mono text-[#051A24]/40 mb-2 tracking-widest uppercase">Finishes</div>
      <h3 className="text-[18px] font-semibold text-[#051A24] mb-4" style={{ fontFamily: "'PP Mondwest','Georgia',serif" }}>Every Texture</h3>
      <div className="grid grid-cols-2 gap-3">
        {finishes.map((f, i) => (
          <div key={i} className="rounded-xl p-3 flex flex-col gap-1"
            style={{ background: f.color + '55', animation: `colorBob 3s ${i * 0.3}s ease-in-out infinite` }}>
            <div className="w-full h-8 rounded-lg" style={{ background: f.color, boxShadow: `0 2px 8px ${f.color}88` }} />
            <span className="text-xs font-semibold text-[#051A24]">{f.name}</span>
            <span className="text-[10px] text-[#051A24]/50">{f.desc}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Main Section ────────────────────────────────────────────────────────────
const BRANDS = [
  {
    brand: 'Asian Paints',
    tagline: 'India\'s #1 paint brand',
    bodyColor: '#c0392b',
    rimColor: '#7f1d1d',
    labelColor: '#fef2f2',
    dripColor: '#ef4444',
    accentColor: '#fbbf24',
    bg: 'linear-gradient(135deg, #fff5f5 0%, #fee2e2 100%)',
    textColor: '#1a0000',
    subColor: '#b91c1c',
    delay: 0.1,
  },
  {
    brand: 'Berger',
    tagline: 'Express yourself boldly',
    bodyColor: '#1d4ed8',
    rimColor: '#1e3a8a',
    labelColor: '#eff6ff',
    dripColor: '#60a5fa',
    accentColor: '#fbbf24',
    bg: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
    textColor: '#0f172a',
    subColor: '#1d4ed8',
    delay: 0.15,
  },
  {
    brand: 'Nerolac',
    tagline: 'Goodness of nature',
    bodyColor: '#15803d',
    rimColor: '#14532d',
    labelColor: '#f0fdf4',
    dripColor: '#4ade80',
    accentColor: '#fbbf24',
    bg: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
    textColor: '#052e16',
    subColor: '#15803d',
    delay: 0.2,
  },
  {
    brand: 'Dulux',
    tagline: 'Let\'s colour your world',
    bodyColor: '#7c3aed',
    rimColor: '#4c1d95',
    labelColor: '#faf5ff',
    dripColor: '#a78bfa',
    accentColor: '#f43f5e',
    bg: 'linear-gradient(135deg, #faf5ff 0%, #ede9fe 100%)',
    textColor: '#1a0030',
    subColor: '#7c3aed',
    delay: 0.25,
  },
  {
    brand: 'Indigo',
    tagline: 'Smart, lasting colors',
    bodyColor: '#0e7490',
    rimColor: '#164e63',
    labelColor: '#ecfeff',
    dripColor: '#22d3ee',
    accentColor: '#f59e0b',
    bg: 'linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)',
    textColor: '#0c1a1a',
    subColor: '#0e7490',
    delay: 0.3,
  },
  {
    brand: 'Nippon',
    tagline: 'Coat of perfection',
    bodyColor: '#dc2626',
    rimColor: '#7f1d1d',
    labelColor: '#fff1f2',
    dripColor: '#fb7185',
    accentColor: '#1d4ed8',
    bg: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)',
    textColor: '#1a0000',
    subColor: '#dc2626',
    delay: 0.35,
  },
]

export default function BrandsBentoSection() {
  return (
    <section className="w-full px-4 md:px-8 py-16 md:py-24 max-w-[1200px] mx-auto">
      {/* Section Header */}
      <div className="mb-10 md:mb-14">
        <div className="text-xs font-mono text-[#051A24]/40 tracking-widest uppercase mb-2">Our Collection</div>
        <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.1] tracking-tight text-[#051A24]"
          style={{ fontFamily: "'PP Mondwest','Georgia',serif" }}>
          Brands we carry
        </h2>
        <p className="text-sm md:text-base text-[#051A24]/60 mt-3 max-w-md leading-relaxed">
          Handpicked premium paint brands — each chosen for quality, coverage, and lasting finish.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-auto gap-4 md:gap-5">
        {/* Row 1: Hero (2×2) + 2 brand cards */}
        <div className="col-span-2 row-span-2">
          <HeroCard delay={0.05} />
        </div>
        <BrandCard {...BRANDS[0]} />
        <BrandCard {...BRANDS[1]} />

        {/* Row 2 continuation: 2 more brand cards (fill row 2 col 3-4) */}
        <BrandCard {...BRANDS[2]} />
        <BrandCard {...BRANDS[3]} />

        {/* Row 3: Color mixer (col span 2) + roller + stats */}
        <ColorMixerCard delay={0.25} />
        <RollerCard delay={0.3} />
        <StatsCard delay={0.35} />

        {/* Row 4: 2 more brands + finishes */}
        <BrandCard {...BRANDS[4]} />
        <BrandCard {...BRANDS[5]} />
        <FinishCard delay={0.4} />
      </div>
    </section>
  )
}
