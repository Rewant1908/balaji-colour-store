import React from 'react'
import { motion } from 'framer-motion'
import { Paintbrush, Box, ShowerHead, Lamp, DoorOpen, Layers, UtensilsCrossed, Shirt, Monitor, Gem } from 'lucide-react'

const services = [
  { title: 'Modular Kitchens', icon: UtensilsCrossed, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop', size: 'col-span-2 row-span-2', gradient: 'from-brand-coral to-brand-purple' },
  { title: 'Modular Wardrobes', icon: Shirt, image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&h=400&fit=crop', size: 'col-span-1 row-span-1', gradient: 'from-brand-teal to-brand-coral' },
  { title: 'Paint Solutions', icon: Paintbrush, image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=400&fit=crop', size: 'col-span-1 row-span-1', gradient: 'from-brand-purple to-brand-teal' },
  { title: 'False Ceiling', icon: Lamp, image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=400&fit=crop', size: 'col-span-1 row-span-1', gradient: 'from-brand-gold to-brand-coral' },
  { title: 'PVC/WPC Panels', icon: Layers, image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=400&h=400&fit=crop', size: 'col-span-1 row-span-1', gradient: 'from-brand-pink to-brand-purple' },
  { title: 'Modular TV Units', icon: Monitor, image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop', size: 'col-span-1 row-span-1', gradient: 'from-brand-teal to-brand-gold' },
  { title: 'Modular Vanity', icon: Gem, image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?w=400&h=400&fit=crop', size: 'col-span-1 row-span-1', gradient: 'from-brand-coral to-brand-gold' },
  { title: 'Bath Fittings', icon: ShowerHead, image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop', size: 'col-span-1 row-span-1', gradient: 'from-brand-purple to-brand-pink' },
  { title: 'UPVC Doors & Windows', icon: DoorOpen, image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&h=300&fit=crop', size: 'col-span-2 row-span-1', gradient: 'from-brand-gold to-brand-teal' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-sm font-semibold mb-4">Our Services</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark">Complete Home Solutions</h2>
          <p className="mt-4 text-lg text-brand-dark/50 max-w-2xl mx-auto">Premium modular interiors, paints, and home transformation services under one roof</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ scale: 1.02, y: -5 }} className={`${service.size} relative group overflow-hidden rounded-3xl cursor-pointer`}>
                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg`}><Icon size={20} /></div>
                    <h3 className="text-white font-bold text-lg">{service.title}</h3>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}