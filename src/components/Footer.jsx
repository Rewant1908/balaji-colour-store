import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '919431212039'
const WHATSAPP_MSG = encodeURIComponent('Hi! I visited your website and would like to know more about your services.')

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-coral to-brand-purple flex items-center justify-center text-white font-bold text-xl shadow-lg">
                B
              </div>
              <div>
                <div className="font-bold text-xl">Balaji Colour Store</div>
                <div className="text-sm text-white/50">Your Home, Beautifully Done</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Ranchi's trusted destination for modular interiors, premium paints, and complete home solutions. Serving families since 2005.
            </p>

            {/* WhatsApp CTA — TASK-004 */}
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 mt-6 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#1ebe5c] text-white text-sm font-semibold shadow-lg transition-colors"
            >
              <MessageCircle size={18} className="shrink-0" />
              Chat on WhatsApp
            </motion.a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5">Contact Us</h4>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-coral mt-0.5 shrink-0" />
                <span>Lalpur Chowk, Lalpur, Ranchi, Jharkhand 834001</span>
              </div>
              <a href="tel:9431212039" className="flex items-center gap-3 hover:text-brand-coral transition-colors">
                <Phone size={16} className="text-brand-coral shrink-0" />
                +91 94312 12039 (Ravi Jain)
              </a>
              <a href="tel:7903904076" className="flex items-center gap-3 hover:text-brand-coral transition-colors">
                <Phone size={16} className="text-brand-teal shrink-0" />
                +91 79039 04076 (Umang Jain)
              </a>
              <a href="tel:9430024233" className="flex items-center gap-3 hover:text-brand-coral transition-colors">
                <Phone size={16} className="text-brand-gold shrink-0" />
                +91 94300 24233 (Shubham Jain)
              </a>
              <a href="mailto:balajicolourstore@gmail.com" className="flex items-center gap-3 hover:text-brand-coral transition-colors">
                <Mail size={16} className="text-brand-coral shrink-0" />
                balajicolourstore@gmail.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {['Home', 'Services', 'Gallery', 'Why Us', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="hover:text-brand-coral transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-coral flex items-center justify-center transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-coral flex items-center justify-center transition-colors">
                  <Facebook size={16} />
                </a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors">
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Balaji Colour Store. All rights reserved.</p>
          <p>Made with ❤️ in Ranchi, Jharkhand</p>
        </div>
      </div>
    </footer>
  )
}
