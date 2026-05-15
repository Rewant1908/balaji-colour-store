import React from 'react'
import { useInViewAnimation } from './hooks/useInViewAnimation'
import { Button } from './components/Button'
import { TestimonialSection } from './components/TestimonialSection'
import { PricingSection } from './components/PricingSection'
import { TestimonialCarousel } from './components/TestimonialCarousel'
import { ProjectsSection } from './components/ProjectsSection'
import { PartnerSection } from './components/PartnerSection'
import { Footer } from './components/Footer'
import { CopyrightBar } from './components/CopyrightBar'
import { BottomNav } from './components/BottomNav'

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
]

// Duplicate for seamless loop
const allImages = [...marqueeImages, ...marqueeImages]

export const App: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInViewAnimation(0.05)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* ── HERO ── */}
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className="flex flex-col items-center text-center px-6 pt-12 md:pt-16"
      >
        <div className="max-w-[440px] w-full">
          {/* Logo */}
          <h1
            className={`text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-[#051A24] tracking-tight mb-4 ${
              heroInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{
              fontFamily: "'PP Mondwest', Georgia, serif",
              animationDelay: '0.1s',
            }}
          >
            Viktor Oddy
          </h1>

          {/* Tagline */}
          <p
            className={`font-mono text-xs md:text-sm text-[#051A24] mb-2 ${
              heroInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            The creative studio of Viktor Oddy
          </p>

          {/* Main heading */}
          <div
            className={`${
              heroInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <p
              className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight whitespace-nowrap"
            >
              Build the{' '}
              <span style={{ fontFamily: "'PP Mondwest', Georgia, serif" }}>next wave,</span>
            </p>
            <p
              className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight whitespace-nowrap"
            >
              the{' '}
              <span style={{ fontFamily: "'PP Mondwest', Georgia, serif" }}>bold way.</span>
            </p>
          </div>

          {/* Description */}
          <div
            className={`flex flex-col gap-6 text-sm md:text-base text-[#051A24] leading-relaxed mt-5 md:mt-6 text-left ${
              heroInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <p>
              I spent seven years at Apple crafting products used by over a billion people. I founded
              Vortex Studio to bring that same level of thinking to innovators shaping what comes next.
            </p>
            <p>
              The studio is deliberately small. I guide the creative vision on every project, backed
              by a veteran design crew that moves fast without cutting corners.
            </p>
            <p>Projects start at $5,000 per month.</p>
          </div>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6 ${
              heroInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            <Button variant="primary">Start a chat</Button>
            <Button variant="secondary">View projects</Button>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="w-full overflow-hidden mt-16 md:mt-20 mb-16">
        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {allImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-[280px] md:h-[500px] object-cover mx-3 rounded-2xl shadow-lg flex-shrink-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* ── TESTIMONIAL QUOTE ── */}
      <TestimonialSection />

      {/* ── PRICING ── */}
      <PricingSection />

      {/* ── TESTIMONIAL CAROUSEL ── */}
      <TestimonialCarousel />

      {/* ── PROJECTS ── */}
      <ProjectsSection />

      {/* ── PARTNER ── */}
      <PartnerSection />

      {/* ── FOOTER ── */}
      <Footer />

      {/* ── COPYRIGHT ── */}
      <CopyrightBar />

      {/* ── FIXED BOTTOM NAV ── */}
      <BottomNav />
    </div>
  )
}

export default App
