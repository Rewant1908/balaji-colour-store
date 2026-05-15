import React, { useEffect, useRef, useState } from 'react'
import { Quote } from 'lucide-react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

const PARALLAX_MAX = 200

export const TestimonialSection: React.FC = () => {
  const { ref: sectionRef, inView } = useInViewAnimation()
  const imgRef = useRef<HTMLImageElement>(null)
  const [parallaxY, setParallaxY] = useState(0)
  const rafRef = useRef<number>(0)
  const isVisible = useRef(false)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    const io = new IntersectionObserver(
      ([e]) => { isVisible.current = e.isIntersecting },
      { threshold: 0 }
    )
    io.observe(img)

    const onScroll = () => {
      if (!isVisible.current) return
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const rect = img.getBoundingClientRect()
        const vh = window.innerHeight
        const center = rect.top + rect.height / 2
        const ratio = (center - vh / 2) / (vh / 2)
        setParallaxY(Math.max(-1, Math.min(1, ratio)) * PARALLAX_MAX)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
      io.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-12 px-6 flex flex-col items-center text-center max-w-2xl mx-auto"
    >
      {/* Quote icon */}
      <div
        className={inView ? 'animate-fade-in-up' : 'opacity-0'}
        style={{ animationDelay: '0.1s' }}
      >
        <Quote className="w-6 h-6 text-slate-900 mb-6" />
      </div>

      {/* Large quote */}
      <h2
        className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight mb-4 ${
          inView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.2s' }}
      >
        I left{' '}
        <span style={{ fontFamily: "'PP Mondwest', Georgia, serif" }}>Apple</span>{' '}
        to build the studio I always wanted to work with
      </h2>

      {/* Author */}
      <p
        className={`italic text-sm text-[#273C46] mb-8 ${
          inView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.3s' }}
      >
        Viktor Oddy
      </p>

      {/* Company logos as text */}
      <div
        className={`flex items-center gap-8 mb-10 ${
          inView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.4s' }}
      >
        {[
          { name: 'Apple', width: 80 },
          { name: 'IDEO', width: 83 },
          { name: 'Polygon', width: 110 },
        ].map((co) => (
          <span
            key={co.name}
            className="font-medium text-slate-900"
            style={{ fontSize: 24, width: co.width, display: 'inline-block', textAlign: 'center' }}
          >
            {co.name}
          </span>
        ))}
      </div>

      {/* Parallax image */}
      <div
        className={`w-full flex justify-center ${
          inView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.5s' }}
      >
        <img
          ref={imgRef}
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85"
          alt="Chris Halaska"
          className="w-full max-w-xs rounded-2xl shadow-lg object-cover"
          style={{ transform: `translateY(${parallaxY * 0.15}px)`, transition: 'transform 0.1s linear' }}
          loading="lazy"
        />
      </div>
    </section>
  )
}
