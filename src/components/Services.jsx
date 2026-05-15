import React from 'react'
import { motion } from 'framer-motion'
import { Home, Layers, Palette, Wind, DoorOpen, Droplets, ChefHat, Sparkles } from 'lucide-react'

const services = [
  {
    icon: ChefHat,
    title: 'Modular Kitchen',
    desc: 'Premium modular kitchens with Italian hardware, soft-close mechanisms, and custom finishes tailored to your lifestyle.',
    color: '#E8734A',
    glow: 'rgba(232,115,74,0.35)',
    tag: 'Most Popular',
  },
  {
    icon: Home,
    title: 'Modular Wardrobe',
    desc: 'Space-optimised wardrobes with sliding/hinged shutters, internal organisers, and mirror panels.',
    color: '#7C5CBF',
    glow: 'rgba(124,92,191,0.35)',
    tag: null,
  },
  {
    icon: Palette,
    title: 'Paint Solutions',
    desc: 'Expert colour consultation backed by Asian Paints, Berger, Nippon & Dulux — flawless finish guaranteed.',
    color: '#2DB8A8',
    glow: 'rgba(45,184,168,0.35)',
    tag: null,
  },
  {
    icon: Layers,
    title: 'False Ceiling',
    desc: 'Designer gypsum, POP, and grid false ceilings with integrated lighting — add drama to every room.',
    color: '#D4A843',
    glow: 'rgba(212,168,67,0.35)',
    tag: null,
  },
  {
    icon: Wind,
    title: 'PVC / WPC Panels',
    desc: 'Waterproof wall cladding panels — ideal for kitchens, bathrooms, and feature walls. Zero maintenance.',
    color: '#E8734A',
    glow: 'rgba(232,115,74,0.35)',
    tag: null,
  },
  {
    icon: DoorOpen,
    title: 'UPVC Doors & Windows',
    desc: 'Sound-proof, thermally-insulated UPVC frames. Reduces noise by up to 40 dB and UV heat by 60%.',
    color: '#7C5CBF',
    glow: 'rgba(124,92,191,0.35)',
    tag: null,
  },
  {
    icon: Droplets,
    title: 'Bath Fittings',
    desc: 'Premium bathroom accessories — rain showers, concealed cisterns, freestanding tubs, and smart faucets.',
    color: '#2DB8A8',
    glow: 'rgba(45,184,168,0.35)',
    tag: null,
  },
  {
    icon: Sparkles,
    title: 'Interior Consultation',
    desc: '1-on-1 design consultation to plan your complete home interior from concept to completion.',
    color: '#D4A843',
    glow: 'rgba(212,168,67,0.35)',
    tag: 'Free',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-brand-dark/50 max-w-2xl mx-auto">
            Everything you need to transform your home — under one roof
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{
                y: -6,
                boxShadow: `0 16px 48px ${s.glow}, 0 4px 16px rgba(0,0,0,0.06)`,
              }}
              className="relative bg-white rounded-3xl p-6 border border-black/5 shadow-sm cursor-default transition-colors duration-300"
            >
              {s.tag && (
                <span
                  className="absolute top-4 right-4 text-[11px] font-bold px-2.5 py-0.5 rounded-full text-white"
                  style={{ background: s.color }}
                >
                  {s.tag}
                </span>
              )}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${s.color}18` }}
              >
                <s.icon size={22} style={{ color: s.color }} />
              </div>
              <h3 className="font-bold text-brand-dark text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-brand-dark/55 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
