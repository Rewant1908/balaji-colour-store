import React from 'react'
import { motion } from 'framer-motion'

const brands = [
  { name: 'Asian Paints', color: 'from-red-500 to-red-600' },
  { name: 'Indigo Paints', color: 'from-indigo-500 to-indigo-600' },
  { name: 'Berger Paints', color: 'from-blue-500 to-blue-600' },
  { name: 'Birla Paints', color: 'from-amber-500 to-amber-600' },
  { name: 'Ashirvad', color: 'from-emerald-500 to-emerald-600' },
  { name: 'J.K. Putty', color: 'from-slate-500 to-slate-600' },
  { name: 'Sleek Kitchens', color: 'from-rose-500 to-rose-600' },
]

export default function Brands() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sm font-semibold text-brand-coral uppercase tracking-wider">Authorized Dealer</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-dark">Trusted Premium Brands</h2>
          <p className="mt-3 text-brand-dark/50">We partner with industry-leading brands to deliver excellence</p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {brands.map((brand, i) => (
            <motion.div key={brand.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -8, scale: 1.05 }} className="group relative overflow-hidden rounded-2xl bg-white border border-black/5 p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="flex flex-col items-center gap-3">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-white font-bold text-lg shadow-md`}>{brand.name[0]}</div>
                <span className="text-sm font-semibold text-brand-dark text-center">{brand.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}