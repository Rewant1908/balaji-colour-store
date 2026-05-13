import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

const TESTIMONIALS = [
  { quote: 'With very little guidance team delivered designs that were consistently spot on. Viktor has an intuitive understanding of what works and what doesn\'t.', name: 'Marcus Anderson', role: 'CEO, Data.storage', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=1' },
  { quote: 'Viktor led the creation of our best fundraising deck to date! The quality and speed were exceptional — highly recommend working with this studio.', name: 'alexwu', role: 'Founder, Nexgate', avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=1' },
  { quote: 'Working with Viktor transformed our product vision into something we are genuinely proud of. The attention to detail is second to none.', name: 'James Mitchell', role: 'VP Product, LaunchPad', avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=1' },
  { quote: 'The design quality exceeded our expectations. We shipped faster and our users loved the new experience immediately.', name: 'Rachel Foster', role: 'Co-founder, Nexus Labs', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=1' },
  { quote: 'Incredible work from start to finish. Clear communication, deep craft, and a team that genuinely cares about the outcome.', name: 'David Zhang', role: 'Head of Design, Paradigm Labs', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=1' },
]
const ALL = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]

export default function TestimonialCarousel() {
  const { ref, inView } = useInViewAnimation()
  const [idx, setIdx] = useState(TESTIMONIALS.length)
  const [hovering, setHovering] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const next = useCallback(() => setIdx(i => i + 1), [])
  const prev = useCallback(() => setIdx(i => i - 1), [])
  useEffect(() => {
    if (hovering) { if (timerRef.current) clearInterval(timerRef.current); return }
    timerRef.current = setInterval(next, 3000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [hovering, next])
  const visible = idx % TESTIMONIALS.length
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full py-20 overflow-hidden">
      <div className="px-6 md:max-w-4xl md:ml-auto flex items-start justify-between mb-10">
        <h2 className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight font-normal text-[#0D212C] ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          What <em style={{ fontFamily: "'PP Mondwest','Georgia',serif" }} className="not-italic">builders</em> say
        </h2>
        <div className={`flex items-center gap-2 pt-3 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 fill-black text-black" />)}
          <span className="text-sm font-medium text-[#051A24] ml-1">Clutch 5/5</span>
        </div>
      </div>
      <div className="relative flex gap-6 px-6" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
        <div className="flex gap-6 transition-transform duration-[800ms]" style={{ transform: `translateX(calc(-${idx * (427.5 + 24)}px + 24px))`, transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)' }}>
          {ALL.map((t, i) => (
            <div key={i} className="flex-shrink-0 w-[calc(100vw-48px)] md:w-[427.5px] bg-white rounded-[32px] md:rounded-[40px] px-6 md:pl-10 md:pr-24 py-8 flex flex-col gap-4"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)', opacity: Math.abs((i % TESTIMONIALS.length) - visible) < 2 ? 1 : 0.5, transform: Math.abs((i % TESTIMONIALS.length) - visible) === 0 ? 'scale(1)' : 'scale(0.97)', transition: 'opacity 0.4s,transform 0.4s' }}>
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none"><path d="M0 24V14.4C0 10.08 1.28 6.56 3.84 3.84 6.4 1.12 9.92 0 14.4 0v4.8c-2.56 0-4.48.8-5.76 2.4C7.36 8.8 6.72 10.72 6.72 13.12V14.4H14.4V24H0Zm17.6 0V14.4c0-4.32 1.28-7.84 3.84-10.56C24 1.12 27.52 0 32 0v4.8c-2.56 0-4.48.8-5.76 2.4-1.28 1.6-1.92 3.52-1.92 5.92V14.4H32V24H17.6Z" fill="#0D212C" fillOpacity=".12"/></svg>
              <p className="text-base text-[#0D212C] leading-relaxed">{t.quote}</p>
              <div className="flex items-center gap-3 mt-2">
                <img src={t.avatar} alt={t.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                <div><p className="font-semibold text-sm text-[#0D212C]">{t.name}</p><p className="text-xs text-[#273C46]">→ {t.role}</p></div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute right-6 bottom-6 flex gap-3">
          {[{ fn: prev, Icon: ChevronLeft }, { fn: next, Icon: ChevronRight }].map(({ fn, Icon }, i) => (
            <button key={i} onClick={fn} className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#051A24]/5 transition-colors">
              <Icon className="w-5 h-5 text-[#0D212C]" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}