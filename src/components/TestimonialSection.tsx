import React, { useEffect, useRef, useState } from 'react'
import { Quote } from 'lucide-react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

const PARALLAX_IMG = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85'

function ParallaxImage() {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect()
            const center = rect.top + rect.height / 2 - window.innerHeight / 2
            setOffset(Math.max(-200, Math.min(200, center * 0.25)))
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div ref={ref} className="w-full flex justify-center mt-10">
      <img src={PARALLAX_IMG} alt="Chris Halaska"
        style={{ transform: `translateY(${offset}px)`, transition: 'transform 0.1s linear' }}
        className="w-full max-w-xs rounded-2xl shadow-lg object-cover" loading="lazy" />
    </div>
  )
}

export default function TestimonialSection() {
  const { ref, inView } = useInViewAnimation()
  const logos = [{ name: 'Apple', w: 80 }, { name: 'IDEO', w: 83 }, { name: 'Polygon', w: 110 }]
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-12 px-6 flex flex-col items-center">
      <div className="max-w-2xl w-full flex flex-col items-center text-center">
        <div className={`${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          <Quote className="w-6 h-6 text-slate-900 mb-4" />
        </div>
        <h2 className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight font-normal text-[#0D212C] ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}>
          I left <em className="not-italic" style={{ fontFamily: "'PP Mondwest', 'Georgia', serif" }}>Apple</em> to build the studio I always wanted to work with
        </h2>
        <p className={`italic text-sm text-[#273C46] mt-4 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>Viktor Oddy</p>
        <div className={`flex items-center gap-6 mt-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          {logos.map(l => <span key={l.name} className="font-medium text-slate-900 inline-block" style={{ width: l.w, fontSize: 24 }}>{l.name}</span>)}
        </div>
        <div className={`w-full ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <ParallaxImage />
        </div>
      </div>
    </section>
  )
}