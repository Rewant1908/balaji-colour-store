import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Clock, Instagram, Facebook, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-coral via-brand-purple to-brand-teal" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-coral to-brand-purple flex items-center justify-center text-white font-bold text-lg">B</div>
              <span className="font-bold text-xl">Balaji <span className="text-brand-coral">Colour</span> Store</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">Your trusted partner for premium interior solutions, modular kitchens, paints, and complete home transformations.</p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-brand-coral transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-brand-coral transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-brand-coral transition-colors"><Mail size={18} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Gallery', 'Why Us', 'Contact'].map(link => (
                <li key={link}><a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-white/50 hover:text-brand-coral transition-colors text-sm">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              {['Modular Kitchen', 'Paint Solutions', 'False Ceiling', 'PVC Panels', 'Bath Fittings', 'UPVC Doors'].map(s => (
                <li key={s}><span className="text-white/50 text-sm">{s}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-5">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3"><Phone size={16} className="text-brand-coral" /><div><div className="text-sm text-white/70">Ravi Jain: 9431212039</div><div className="text-sm text-white/70">Umang Jain: 7903904076</div><div className="text-sm text-white/70">Shubham Jain: 9430024233</div></div></div>
              <div className="flex items-start gap-3"><Clock size={16} className="text-brand-teal mt-0.5" /><div className="text-sm text-white/70">Mon – Sat: 10 AM – 6 PM<br />Sunday: 10 AM – 5 PM</div></div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© 2026 Balaji Colour Store. All rights reserved.</p>
          <p className="text-white/40 text-sm">Premium Interior & Paint Solutions</p>
        </div>
      </div>
    </footer>
  )
}