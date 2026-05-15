import React, { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

const testimonials = [
  {
    id: 1,
    quote:
      'With very little guidance the team delivered designs that were consistently spot on. Viktor has an incredible ability to translate abstract ideas into visuals that just work.',
    name: 'Marcus Anderson',
    role: 'CEO, Data.storage',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=2',
  },
  {
    id: 2,
    quote:
      'Viktor led the creation of our best fundraising deck to date! Clear, compelling, and beautifully designed. Investors noticed.',
    name: 'alexwu',
    role: 'Founder, Nexgate',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=2',
  },
  {
    id: 3,
    quote:
      'Working with Viktor transformed our product vision into something real. The attention to detail was unmatched and the communication was seamless throughout.',
    name: 'James Mitchell',
    role: 'VP Product, LaunchPad',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=2',
  },
  {
    id: 4,
    quote:
      'The design quality exceeded our expectations at every milestone. Viktor brings a rare combination of strategic thinking and pixel-perfect execution.',
    name: 'Rachel Foster',
    role: 'Co-founder, Nexus Labs',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=2',
  },
  {
    id: 5,
    quote:
      'Incredible work from start to finish. The studio delivered ahead of schedule and the outputs were polished beyond what I thought was possible in the timeframe.',
    name: 'David Zhang',
    role: 'Head of Design, Paradigm Labs',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=2',
  },
]

// Triple for infinite loop
const ITEMS = [...testimonials, ...testimonials, ...testimonials]
const BASE = testimonials.length
const CARD_W = 427.5
const GAP = 24

export const TestimonialCarousel: React.FC = () => {
  const { ref: sectionRef, inView } = useInViewAnimation()
  const [index, setIndex] = useState(BASE)
  const [transitioning, setTransitioning] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const goTo = useCallback((i: number, animate = true) => {
    setTransitioning(animate)
    setIndex(i)
  }, [])

  const next = useCallback(() => goTo(index + 1), [index, goTo])
  const prev = useCallback(() => goTo(index - 1), [index, goTo])

  // Auto-scroll
  const startTimer = useCallback(() => {
    intervalRef.current = setInterval(next, 3000)
  }, [next])
  const stopTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    startTimer()
    return stopTimer
  }, [startTimer, stopTimer])

  // Seamless loop correction
  useEffect(() => {
    if (!transitioning) return
    const t = setTimeout(() => {
      if (index >= BASE * 2) goTo(index - BASE, false)
      if (index < BASE) goTo(index + BASE, false)
    }, 820)
    return () => clearTimeout(t)
  }, [index, transitioning, goTo])

  const offset = index * (CARD_W + GAP)

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="w-full py-20"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      <div className="px-6">
        {/* Header */}
        <div className="md:max-w-4xl md:ml-auto flex items-center justify-between mb-10">
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight">
            What{' '}
            <span style={{ fontFamily: "'PP Mondwest', Georgia, serif" }}>builders</span>{' '}say
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-black text-black" />
              ))}
            </div>
            <span className="text-sm font-medium text-[#051A24]">Clutch 5/5</span>
          </div>
        </div>

        {/* Prev / Next */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#051A24] hover:text-white transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#051A24] hover:text-white transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Track */}
      <div className="overflow-hidden px-6">
        <div
          ref={containerRef}
          className="flex"
          style={{
            gap: GAP,
            transform: `translateX(-${offset}px)`,
            transition: transitioning
              ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              : 'none',
            willChange: 'transform',
          }}
        >
          {ITEMS.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white rounded-[32px] md:rounded-[40px] px-6 md:pl-10 md:pr-24 py-8"
              style={{
                width: CARD_W,
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                opacity: i === index ? 1 : 0.7,
                transform: i === index ? 'scale(1)' : 'scale(0.97)',
                transition: 'opacity 0.4s, transform 0.4s',
              }}
            >
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="mb-4 text-[#051A24]">
                <path
                  d="M0 24V14.4C0 10.56 0.96 7.28 2.88 4.56C4.88 1.84 7.76 0.16 11.52 0L12.96 2.4C10.4 3.04 8.44 4.28 7.08 6.12C5.72 7.88 5.04 9.84 5.04 12H10.08V24H0ZM18.96 24V14.4C18.96 10.56 19.92 7.28 21.84 4.56C23.84 1.84 26.72 0.16 30.48 0L31.92 2.4C29.36 3.04 27.4 4.28 26.04 6.12C24.68 7.88 24 9.84 24 12H29.04V24H18.96Z"
                  fill="currentColor"
                  opacity="0.15"
                />
              </svg>
              <p className="text-base text-[#0D212C] leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-sm text-[#051A24]">{t.name}</p>
                  <p className="text-sm text-[#273C46]">
                    <span className="mr-1">→</span>{t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
