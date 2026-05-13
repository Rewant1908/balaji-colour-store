import React from 'react'
import { motion } from 'framer-motion'
import Button from './components/Button'
import TestimonialSection from './components/TestimonialSection'
import PricingSection from './components/PricingSection'
import TestimonialCarousel from './components/TestimonialCarousel'
import ProjectsSection from './components/ProjectsSection'
import PartnerSection from './components/PartnerSection'
import Footer from './components/Footer'
import CopyrightBar from './components/CopyrightBar'
import BottomNav from './components/BottomNav'
import BrandsBentoSection from './components/BrandsBentoSection'

const MARQUEE_IMGS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
]

function HeroSection() {
  return (
    <section className="flex flex-col items-center max-w-[440px] mx-auto px-6 pt-12 md:pt-16 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
        <h1 className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold tracking-tight text-[#051A24] mb-4"
          style={{ fontFamily: "'PP Mondwest', 'Georgia', serif" }}>Viktor Oddy</h1>
      </motion.div>
      <motion.p className="font-mono text-xs md:text-sm text-[#051A24] mb-2"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
        The creative studio of Viktor Oddy
      </motion.p>
      <motion.h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight text-[#0D212C] font-normal"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
        Build the{' '}
        <em className="not-italic" style={{ fontFamily: "'PP Mondwest','Georgia',serif" }}>next wave,</em>
        <br />
        the{' '}
        <em className="not-italic" style={{ fontFamily: "'PP Mondwest','Georgia',serif" }}>bold way.</em>
      </motion.h2>
      <motion.div className="flex flex-col gap-6 text-sm md:text-base text-[#051A24] leading-relaxed mt-5 md:mt-6"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
        <p>I spent seven years at Apple crafting products used by over a billion people. I founded Vortex Studio to bring that same level of thinking to innovators shaping what comes next.</p>
        <p>The studio is deliberately small. I guide the creative vision on every project, backed by a veteran design crew that moves fast without cutting corners.</p>
        <p>Projects start at $5,000 per month.</p>
      </motion.div>
      <motion.div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6 w-full justify-center"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
        <Button href="https://halaskastudio.com/./book" variant="primary">Start a chat</Button>
        <Button href="#projects" variant="secondary">View projects</Button>
      </motion.div>
    </section>
  )
}

function MarqueeSection() {
  const imgs = [...MARQUEE_IMGS, ...MARQUEE_IMGS]
  return (
    <div className="w-full overflow-hidden mt-16 md:mt-20 mb-16">
      <div className="flex animate-marquee" style={{ width: 'max-content' }}>
        {imgs.map((src, i) => (
          <img
            key={i} src={src} alt=""
            className="h-[280px] md:h-[500px] object-cover mx-3 rounded-2xl shadow-lg flex-shrink-0"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <HeroSection />
      <MarqueeSection />
      <BrandsBentoSection />
      <TestimonialSection />
      <PricingSection />
      <TestimonialCarousel />
      <div id="projects"><ProjectsSection /></div>
      <PartnerSection />
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </div>
  )
}
