import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn } from 'lucide-react'

const categories = ['All', 'Kitchen', 'Wardrobe', 'Living Room', 'Bedroom', 'Bathroom']

const galleryItems = [
  { id: 1, category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop', title: 'Modern Modular Kitchen' },
  { id: 2, category: 'Living Room', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop', title: 'Contemporary Living Space' },
  { id: 3, category: 'Wardrobe', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&h=500&fit=crop', title: 'Walk-in Wardrobe' },
  { id: 4, category: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=700&fit=crop', title: 'Master Bedroom Design' },
  { id: 5, category: 'Kitchen', image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&fit=crop', title: 'Premium Kitchen Finish' },
  { id: 6, category: 'Bathroom', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=600&fit=crop', title: 'Luxury Bathroom' },
  { id: 7, category: 'Living Room', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=800&fit=crop', title: 'TV Unit Design' },
  { id: 8, category: 'Wardrobe', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=400&fit=crop', title: 'Sliding Wardrobe' },
  { id: 9, category: 'Bedroom', image: 'https://images.unsplash.com/photo-1505693416388-b0346809d0bf?w=600&h=500&fit=crop', title: 'Cozy Bedroom Setup' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? galleryItems : galleryItems.filter(g => g.category === activeCategory)

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-semibold mb-4">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark">Interior Transformation Gallery</h2>
          <p className="mt-4 text-lg text-brand-dark/50">Explore our stunning home transformation projects</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <motion.button key={cat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveCategory(cat)} className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeCategory === cat ? 'bg-gradient-to-r from-brand-coral to-brand-purple text-white shadow-lg' : 'bg-brand-light text-brand-dark/70 hover:bg-brand-coral/10 hover:text-brand-coral'}`}>{cat}</motion.button>
          ))}
        </div>
        <motion.div layout className="masonry">
          <AnimatePresence>
            {filtered.map(item => (
              <motion.div key={item.id} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.4 }} className="break-inside relative group overflow-hidden rounded-3xl cursor-pointer">
                <img src={item.image} alt={item.title} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"><ZoomIn size={24} /></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs font-semibold text-brand-coral uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-white font-bold text-lg mt-1">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}