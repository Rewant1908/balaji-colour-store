import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Wardrobe', 'Bathroom']

// span: 'wide'=2 cols, 'tall'=2 rows, 'normal'=1×1, 'square'=explicit 1×1
const galleryItems = [
  // ── Living Room ────────────────────────────────────────────────────────────
  {
    id: 1, category: 'Living Room', span: 'wide',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&h=500&fit=crop&auto=format',
    title: 'Contemporary TV Unit', desc: 'Floor-to-ceiling storage with integrated TV panel',
  },
  {
    id: 2, category: 'Living Room', span: 'tall',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&h=700&fit=crop&auto=format',
    title: 'Modern Living Space', desc: 'Open-plan design with warm accent walls',
  },
  {
    id: 3, category: 'Living Room', span: 'normal',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=380&fit=crop&auto=format',
    title: 'Accent Wall Detail', desc: 'Textured feature wall in deep teal',
  },
  {
    id: 4, category: 'Living Room', span: 'normal',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&h=380&fit=crop&auto=format',
    title: 'Minimalist Lounge', desc: 'Clean lines with layered neutral tones',
  },
  {
    id: 5, category: 'Living Room', span: 'wide',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&h=420&fit=crop&auto=format',
    title: 'Open Living + Dining', desc: 'Seamless colour flow across connected spaces',
  },
  {
    id: 6, category: 'Living Room', span: 'normal',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=380&fit=crop&auto=format',
    title: 'Cosy Reading Nook', desc: 'Warm amber walls with built-in shelving',
  },

  // ── Bedroom ────────────────────────────────────────────────────────────────
  {
    id: 7, category: 'Bedroom', span: 'wide',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&h=480&fit=crop&auto=format',
    title: 'Master Bedroom Suite', desc: 'Velvet headboard against a dusty-rose feature wall',
  },
  {
    id: 8, category: 'Bedroom', span: 'tall',
    image: 'https://images.unsplash.com/photo-1505693416388-b0346809d0bf?w=500&h=720&fit=crop&auto=format',
    title: 'Serene Blue Retreat', desc: 'Navy panelling with linen bedding',
  },
  {
    id: 9, category: 'Bedroom', span: 'normal',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&h=380&fit=crop&auto=format',
    title: 'Blush & Gold Bedroom', desc: 'Soft blush walls with brass accents',
  },
  {
    id: 10, category: 'Bedroom', span: 'normal',
    image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&h=380&fit=crop&auto=format',
    title: 'Kids Room Magic', desc: 'Playful geometric paint pattern',
  },
  {
    id: 11, category: 'Bedroom', span: 'normal',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=380&fit=crop&auto=format',
    title: 'Earthy Terracotta', desc: 'Warm clay tones for a grounded feel',
  },
  {
    id: 12, category: 'Bedroom', span: 'normal',
    image: 'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=500&h=380&fit=crop&auto=format',
    title: 'Japandi Minimal', desc: 'White & sage green with natural wood',
  },

  // ── Kitchen ────────────────────────────────────────────────────────────────
  {
    id: 13, category: 'Kitchen', span: 'wide',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&h=480&fit=crop&auto=format',
    title: 'Modern Modular Kitchen', desc: 'Full-height cabinets in matte white & walnut',
  },
  {
    id: 14, category: 'Kitchen', span: 'tall',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=500&h=720&fit=crop&auto=format',
    title: 'Premium Kitchen Finish', desc: 'Lacquer doors with stone countertop',
  },
  {
    id: 15, category: 'Kitchen', span: 'normal',
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=500&h=380&fit=crop&auto=format',
    title: 'Island Kitchen', desc: 'Statement island with contrasting colour',
  },
  {
    id: 16, category: 'Kitchen', span: 'normal',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=380&fit=crop&auto=format',
    title: 'Open Shelf Kitchen', desc: 'Sage green lower cabinets with open display',
  },
  {
    id: 17, category: 'Kitchen', span: 'wide',
    image: 'https://images.unsplash.com/photo-1556909172-8c2f041fca1e?w=900&h=420&fit=crop&auto=format',
    title: 'Breakfast Bar Setup', desc: 'Compact bar area with bold backsplash',
  },

  // ── Wardrobe ───────────────────────────────────────────────────────────────
  {
    id: 18, category: 'Wardrobe', span: 'wide',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=900&h=480&fit=crop&auto=format',
    title: 'Walk-in Wardrobe', desc: 'Island dresser with full-length mirrors',
  },
  {
    id: 19, category: 'Wardrobe', span: 'tall',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&h=700&fit=crop&auto=format',
    title: 'Sliding Door Wardrobe', desc: 'Floor-to-ceiling panels with soft-close track',
  },
  {
    id: 20, category: 'Wardrobe', span: 'normal',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=380&fit=crop&auto=format',
    title: 'Hinged Wardrobe', desc: 'Classic shutters in champagne finish',
  },
  {
    id: 21, category: 'Wardrobe', span: 'normal',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&h=380&fit=crop&auto=format',
    title: 'Open Closet System', desc: 'Modular cubbies with integrated lighting',
  },
  {
    id: 22, category: 'Wardrobe', span: 'normal',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&h=380&fit=crop&auto=format',
    title: 'Corner Wardrobe', desc: 'L-shaped unit maximising corner space',
  },

  // ── Bathroom ───────────────────────────────────────────────────────────────
  {
    id: 23, category: 'Bathroom', span: 'wide',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&h=480&fit=crop&auto=format',
    title: 'Luxury Ensuite', desc: 'Freestanding bath with marble tile surround',
  },
  {
    id: 24, category: 'Bathroom', span: 'tall',
    image: 'https://images.unsplash.com/photo-1620626011761-996317702782?w=500&h=720&fit=crop&auto=format',
    title: 'Spa Shower Room', desc: 'Rain shower with full-height porcelain tiles',
  },
  {
    id: 25, category: 'Bathroom', span: 'normal',
    image: 'https://images.unsplash.com/photo-1552325986-e5d3440a6ae7?w=500&h=380&fit=crop&auto=format',
    title: 'Powder Room', desc: 'Dramatic dark walls with gold fixtures',
  },
  {
    id: 26, category: 'Bathroom', span: 'normal',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=380&fit=crop&auto=format',
    title: 'Kids Bathroom', desc: 'Bright tiles with playful colour accents',
  },
  {
    id: 27, category: 'Bathroom', span: 'normal',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&h=380&fit=crop&auto=format',
    title: 'Terrazzo Basin', desc: 'Statement basin with terrazzo counter',
  },
]

// ── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({ items, index, onClose, onNav }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNav(-1)
      if (e.key === 'ArrowRight') onNav(1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onNav])

  const item = items[index]
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 24, stiffness: 300 }}
        className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-[#0d1117]"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={item.image.replace(/w=\d+&h=\d+/, 'w=1200&h=800')} alt={item.title}
          className="w-full object-cover" style={{ maxHeight: '70vh' }} />
        <div className="p-5 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-coral">{item.category}</span>
            <h3 className="text-white font-bold text-lg mt-0.5">{item.title}</h3>
            <p className="text-white/50 text-sm mt-0.5">{item.desc}</p>
          </div>
          <span className="text-white/30 text-sm">{index + 1} / {items.length}</span>
        </div>
        {/* Nav */}
        <button onClick={() => onNav(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors">
          <ChevronLeft size={20} />
        </button>
        <button onClick={() => onNav(1)} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors">
          <ChevronRight size={20} />
        </button>
        <button onClick={onClose} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors">
          <X size={16} />
        </button>
      </motion.div>
    </motion.div>
  )
}

// ── Bento Grid ──────────────────────────────────────────────────────────────
function BentoGrid({ items, onOpen }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3 auto-rows-[200px] md:auto-rows-[220px]">
      {items.map((item, idx) => (
        <motion.div
          key={item.id}
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.35, delay: idx * 0.04 }}
          onClick={() => onOpen(idx)}
          className={[
            'relative group overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer bg-slate-100',
            item.span === 'wide'  ? 'col-span-2' : 'col-span-1',
            item.span === 'tall'  ? 'row-span-2' : 'row-span-1',
          ].join(' ')}
        >
          {/* Image — object-cover fills the fixed cell, never zoomed to browser full */}
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          {/* Zoom icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
              <ZoomIn size={18} />
            </div>
          </div>

          {/* Caption slide-up */}
          <div className="absolute bottom-0 left-0 right-0 p-3.5 md:p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest" style={{ color: '#FF6B6B' }}>{item.category}</span>
            <h3 className="text-white font-semibold text-sm md:text-base leading-snug mt-0.5">{item.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// ── Main Export ─────────────────────────────────────────────────────────────
export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(g => g.category === activeCategory)

  const openLightbox = (idx) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)
  const navLightbox = (dir) =>
    setLightboxIndex(i => (i + dir + filtered.length) % filtered.length)

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-semibold mb-4">
            Portfolio &amp; Showcase
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
                Interior Transformation<br />
                <span className="text-brand-dark/35">Gallery</span>
              </h2>
              <p className="mt-3 text-base text-brand-dark/50 max-w-lg">
                Real homes, real results — browse by room type to find the look you love.
              </p>
            </div>
            {/* Count badge */}
            <div className="flex-shrink-0 text-right">
              <span className="text-4xl font-bold text-brand-dark" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {filtered.length}
              </span>
              <span className="block text-xs text-brand-dark/40 mt-0.5">projects shown</span>
            </div>
          </div>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10"
        >
          {categories.map(cat => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-brand-coral to-brand-purple text-white shadow-md shadow-brand-coral/20'
                  : 'bg-gray-100 text-brand-dark/60 hover:bg-brand-coral/10 hover:text-brand-coral'
              }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className={`ml-1.5 text-[10px] font-bold ${ activeCategory === cat ? 'text-white/70' : 'text-brand-dark/30'}`}>
                  {galleryItems.filter(g => g.category === cat).length}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Bento grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <BentoGrid items={filtered} onOpen={openLightbox} />
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mt-10 md:mt-14 text-center"
        >
          <p className="text-brand-dark/40 text-sm mb-4">Inspired by what you see?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-brand-coral to-brand-purple shadow-lg shadow-brand-coral/25 hover:scale-[1.04] active:scale-[0.98] transition-transform"
          >
            Book a Free Consultation
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            index={lightboxIndex}
            onClose={closeLightbox}
            onNav={navLightbox}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
