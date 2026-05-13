import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const colors = [
  { name: 'Coral Red', hex: '#FF6B6B' },
  { name: 'Ocean Teal', hex: '#4ECDC4' },
  { name: 'Sunshine', hex: '#FFD93D' },
  { name: 'Royal Purple', hex: '#C084FC' },
  { name: 'Blush Pink', hex: '#F472B6' },
  { name: 'Fresh Lime', hex: '#A3E635' },
  { name: 'Tangerine', hex: '#FB923C' },
  { name: 'Sky Blue', hex: '#60A5FA' },
]

export default function PaintExperience() {
  const [activeColor, setActiveColor] = useState(colors[0])
  const [splashes, setSplashes] = useState([])

  const handleColorClick = (color, e) => {
    setActiveColor(color)
    const rect = e.currentTarget.getBoundingClientRect()
    const id = Date.now()
    setSplashes(prev => [...prev, { id, x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, color: color.hex }])
    setTimeout(() => setSplashes(prev => prev.filter(s => s.id !== id)), 1000)
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {splashes.map(splash => (
        <motion.div key={splash.id} initial={{ scale: 0, x: splash.x - 50, y: splash.y - 50 }} animate={{ scale: [0, 3, 0], opacity: [1, 0.3, 0] }} transition={{ duration: 0.8 }} className="fixed w-24 h-24 rounded-full pointer-events-none z-50" style={{ backgroundColor: splash.color }} />
      ))}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-semibold mb-4">Interactive Experience</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark">Discover Your Perfect Color</h2>
          <p className="mt-4 text-lg text-brand-dark/50">Tap any color to see it come alive</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.div key={activeColor.hex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0" style={{ backgroundColor: activeColor.hex + '20' }}>
                  <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop" alt="Room Preview" className="w-full h-full object-cover mix-blend-multiply" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-6 left-6 glass rounded-2xl px-5 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full shadow-md" style={{ backgroundColor: activeColor.hex }} />
                  <div><div className="text-sm font-bold text-brand-dark">{activeColor.name}</div><div className="text-xs text-brand-dark/50 font-mono">{activeColor.hex}</div></div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="grid grid-cols-2 gap-4">
              {colors.map((color, i) => (
                <motion.button key={color.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={(e) => handleColorClick(color, e)} className={`group relative flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${activeColor.name === color.name ? 'border-brand-dark shadow-lg' : 'border-transparent hover:border-brand-dark/10'}`} style={{ backgroundColor: color.hex + '15' }}>
                  <motion.div className="w-12 h-12 rounded-full shadow-md" style={{ backgroundColor: color.hex }} whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} />
                  <div className="text-left"><div className="font-semibold text-brand-dark">{color.name}</div><div className="text-xs text-brand-dark/50 font-mono">{color.hex}</div></div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}