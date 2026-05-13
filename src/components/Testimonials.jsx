import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  { name: 'Priya Sharma', role: 'Homeowner', text: 'Our modular kitchen from Balaji Colour Store is absolutely stunning. The Sleek by Asian Paints quality is unmatched!', rating: 5 },
  { name: 'Rajesh Gupta', role: 'Interior Designer', text: 'I recommend Balaji to all my clients. Their paint solutions and false ceiling work is always top-notch.', rating: 5 },
  { name: 'Anita Mishra', role: 'Homeowner', text: 'The team transformed our entire home interior. Professional installation and amazing attention to detail.', rating: 5 },
  { name: 'Vikram Patel', role: 'Business Owner', text: 'Best experience for UPVC doors and PVC panels. Great pricing and excellent after-sales service.', rating: 5 },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink text-sm font-semibold mb-4">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-brand-dark/50">Real stories from happy homeowners</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }} className="relative group rounded-3xl bg-gradient-to-br from-brand-light to-white border border-brand-dark/5 p-8 shadow-lg hover:shadow-xl transition-all">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-coral/10 group-hover:text-brand-coral/20 transition-colors" />
              <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, j) => (<Star key={j} size={18} className="fill-brand-gold text-brand-gold" />))}</div>
              <p className="text-brand-dark/70 text-base leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-coral to-brand-purple flex items-center justify-center text-white font-bold">{t.name[0]}</div>
                <div><div className="font-semibold text-brand-dark">{t.name}</div><div className="text-sm text-brand-dark/50">{t.role}</div></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}