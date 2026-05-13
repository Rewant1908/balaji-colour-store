import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

const paintBlobs = [
  { color: 'bg-brand-coral', size: 'w-72 h-72', top: '10%', left: '-5%', delay: 0 },
  { color: 'bg-brand-teal', size: 'w-96 h-96', top: '60%', right: '-10%', delay: 0.3 },
  { color: 'bg-brand-purple', size: 'w-64 h-64', top: '20%', right: '20%', delay: 0.6 },
  { color: 'bg-brand-gold', size: 'w-80 h-80', bottom: '10%', left: '15%', delay: 0.9 },
  { color: 'bg-brand-pink', size: 'w-56 h-56', top: '50%', left: '40%', delay: 1.2 },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-brand-light to-white">
      {paintBlobs.map((blob, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, delay: blob.delay, ease: 'easeOut' }}
          className={`absolute ${blob.size} ${blob.color} paint-blob blur-3xl pointer-events-none`}
          style={{ top: blob.top, left: blob.left, right: blob.right, bottom: blob.bottom }}
        />
      ))}

      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #1E293B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-coral/10 to-brand-purple/10 border border-brand-coral/20">
              <span className="w-2 h-2 rounded-full bg-brand-coral animate-pulse" />
              <span className="text-sm font-medium text-brand-coral">Premium Interior Solutions</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Transforming Homes With{' '}
              <span className="text-gradient">Premium Interior</span> &{' '}
              <span className="text-gradient">Paint Solutions</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg sm:text-xl text-brand-dark/60 font-medium">
              Modular Kitchens • Paints • Wardrobes • False Ceiling • PVC Panels • Bath Fittings
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
              <a href="#services" className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-coral to-brand-purple text-white font-semibold shadow-xl shadow-brand-coral/25 hover:shadow-2xl transition-all hover:scale-105">
                Explore Designs
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="flex items-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-brand-dark/10 text-brand-dark font-semibold hover:border-brand-coral/30 hover:bg-brand-coral/5 transition-all">
                <Calendar size={20} />
                Book Free Consultation
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex items-center gap-8 pt-4">
              <div><div className="text-3xl font-bold text-gradient">10+</div><div className="text-sm text-brand-dark/50">Years Experience</div></div>
              <div className="w-px h-12 bg-brand-dark/10" />
              <div><div className="text-3xl font-bold text-gradient">5000+</div><div className="text-sm text-brand-dark/50">Happy Homes</div></div>
              <div className="w-px h-12 bg-brand-dark/10" />
              <div><div className="text-3xl font-bold text-gradient">15+</div><div className="text-sm text-brand-dark/50">Premium Services</div></div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9, rotateY: -15 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 1.2, delay: 0.4 }} className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-coral/20 via-brand-purple/20 to-brand-teal/20 rounded-[2rem] blur-2xl" />
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop" alt="Modern Modular Kitchen" className="relative rounded-[2rem] shadow-2xl w-full h-[500px] object-cover" />
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -left-8 top-1/4 glass rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-coral/10 flex items-center justify-center"><span className="text-brand-coral text-lg">🏠</span></div>
                  <div><div className="text-sm font-bold text-brand-dark">Modular Kitchen</div><div className="text-xs text-brand-dark/50">Sleek by Asian Paints</div></div>
                </div>
              </motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute -right-4 bottom-1/4 glass rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center"><span className="text-brand-teal text-lg">🎨</span></div>
                  <div><div className="text-sm font-bold text-brand-dark">Premium Paints</div><div className="text-xs text-brand-dark/50">Asian Paints & More</div></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-6 h-10 rounded-full border-2 border-brand-dark/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-brand-coral" />
        </motion.div>
      </motion.div>
    </section>
  )
}