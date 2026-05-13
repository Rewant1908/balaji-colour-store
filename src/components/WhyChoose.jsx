import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, Wrench, Gem, Clock, Users } from 'lucide-react'

const highlights = [
  { icon: Shield, title: '10 Years Warranty', desc: 'Complete peace of mind on all modular work', color: 'from-brand-coral to-brand-purple' },
  { icon: Award, title: 'Asian Paints Sleek', desc: 'Authorized dealer for premium kitchens', color: 'from-brand-teal to-brand-coral' },
  { icon: Wrench, title: 'Professional Install', desc: 'Expert craftsmen with years of experience', color: 'from-brand-purple to-brand-teal' },
  { icon: Gem, title: 'Premium Materials', desc: 'Only top-quality branded products used', color: 'from-brand-gold to-brand-coral' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'We respect your time and schedule', color: 'from-brand-pink to-brand-purple' },
  { icon: Users, title: 'Expert Consultation', desc: 'Free design advice from specialists', color: 'from-brand-coral to-brand-gold' },
]

export default function WhyChoose() {
  return (
    <section id="whyus" className="py-24 bg-gradient-to-b from-brand-light to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-coral/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-semibold mb-4">Why Choose Us</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark">The Balaji Advantage</h2>
          <p className="mt-4 text-lg text-brand-dark/50 max-w-2xl mx-auto">Trust, quality, and excellence in every home we transform</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="group relative overflow-hidden rounded-3xl bg-white border border-brand-dark/5 p-8 shadow-lg hover:shadow-2xl transition-all">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg mb-5`}><Icon size={24} /></div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-brand-dark/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}