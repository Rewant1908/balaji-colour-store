import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Brands from './components/Brands.jsx'
import Services from './components/Services.jsx'
import PaintExperience from './components/PaintExperience.jsx'
import Gallery from './components/Gallery.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import Testimonials from './components/Testimonials.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'
import LiquidChrome from './components/LiquidChrome.jsx'
import { ArrowRight, Calendar } from 'lucide-react'

const LIQUID_BASE_COLOR = [0.9, 0.35, 0.15]

const paintBlobs = [
  { color: '#FF6B6B', pos: { top: '10%',  left: '-5%'  }, delay: 0   },
  { color: '#4ECDC4', pos: { top: '60%',  right: '-8%' }, delay: 0.3 },
  { color: '#C084FC', pos: { top: '20%',  right: '18%' }, delay: 0.6 },
  { color: '#FFD93D', pos: { bottom:'8%', left: '12%'  }, delay: 0.9 },
  { color: '#F472B6', pos: { top: '48%',  left: '38%'  }, delay: 1.2 },
]

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <LiquidChrome
          baseColor={LIQUID_BASE_COLOR}
          speed={0.6}
          amplitude={0.55}
          frequencyX={2.8}
          frequencyY={1.8}
          interactive={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-black/45" />
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,107,107,0.18) 0%, transparent 70%),' +
            'radial-gradient(ellipse 60% 80% at 80% 70%, rgba(78,205,196,0.14) 0%, transparent 70%),' +
            'radial-gradient(ellipse 50% 50% at 20% 80%, rgba(255,217,61,0.12) 0%, transparent 70%)',
        }}
      />
      {paintBlobs.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.22, scale: 1 }}
          transition={{ duration: 2.5, delay: b.delay }}
          className="absolute w-72 h-72 rounded-full blur-3xl pointer-events-none z-[3]"
          style={{ backgroundColor: b.color, ...b.pos }}
        />
      ))}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center pt-32 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF6B6B] animate-pulse" />
          <span className="text-sm font-medium text-white/80">Premium Interior Solutions</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="max-w-5xl text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2px] font-normal text-white"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Transforming Homes With{' '}
          <em className="not-italic" style={{ color: '#FFD93D' }}>Premium Interior</em>
          {' '}&amp;{' '}
          <em className="not-italic" style={{ color: '#4ECDC4' }}>Paint Solutions</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70"
        >
          Modular Kitchens &bull; Paints &bull; Wardrobes &bull; False Ceiling &bull; PVC Panels &bull; Bath Fittings
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center mt-12"
        >
          <a href="#services" className="group flex items-center gap-2 px-10 py-4 rounded-full text-white font-semibold transition-transform hover:scale-[1.04] liquid-glass">
            Explore Designs
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="flex items-center gap-2 px-10 py-4 rounded-full text-white font-semibold border border-white/20 hover:border-white/40 transition-all hover:scale-[1.04] backdrop-blur-sm bg-white/5">
            <Calendar size={18} />
            Book Free Consultation
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-10 mt-16"
        >
          {[['10+','Years Experience'],['5000+','Happy Homes'],['15+','Premium Services']].map(([num, label], i) => (
            <React.Fragment key={label}>
              {i > 0 && <div className="w-px h-10 bg-white/20" />}
              <div className="text-center">
                <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>{num}</div>
                <div className="text-xs text-white/50 mt-1">{label}</div>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-[#FF6B6B]" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      {/* ── Warm paint-inspired background for all sections below hero ── */}
      <div className="page-body-bg">
        <Brands />
        <Services />
        <PaintExperience />
        <Gallery />
        <WhyChoose />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </div>
  )
}
