import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Share2 } from 'lucide-react';

export const Footer: React.FC = () => (
  <footer className="bg-neutral-900 text-white pt-16 pb-8 px-4 md:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-9 h-9 rounded-full bg-[#FF6B2B] flex items-center justify-center">
              <span className="font-bebas text-white text-base leading-none">B</span>
            </span>
            <span className="font-syne font-bold text-lg tracking-tight">Balaji Colour Store</span>
          </div>
          <p className="font-dm text-sm text-neutral-400 leading-relaxed max-w-xs">
            Premium paints, modular kitchens, wardrobes, and bespoke interior solutions. Serving Jharkhand since 2014.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="https://wa.me/919431212039"
              target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-[#25D366] flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-[#FF6B2B] flex items-center justify-center transition-colors"
              aria-label="Share"
            >
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-syne font-bold text-sm uppercase tracking-wider mb-5 text-neutral-300">Contact Us</h3>
          <ul className="flex flex-col gap-3" role="list">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#FF6B2B] mt-0.5 flex-shrink-0" />
              <span className="font-dm text-sm text-neutral-400">Near Lalpur Chowk, Ranchi, Jharkhand — 834001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#FF6B2B] flex-shrink-0" />
              <a href="tel:+919431212039" className="font-dm text-sm text-neutral-400 hover:text-white transition-colors">+91 94312 12039</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#FF6B2B] flex-shrink-0" />
              <a href="tel:+917903904076" className="font-dm text-sm text-neutral-400 hover:text-white transition-colors">+91 79039 04076</a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#FF6B2B] mt-0.5 flex-shrink-0" />
              <span className="font-dm text-sm text-neutral-400">Mon–Sat: 9 AM – 8 PM · Sun: 10 AM – 6 PM</span>
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-syne font-bold text-sm uppercase tracking-wider mb-5 text-neutral-300">Quick Links</h3>
          <ul className="flex flex-col gap-2.5" role="list">
            {['Services', 'Gallery', 'Colours', 'Team', 'Contact'].map(link => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="font-dm text-sm text-neutral-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-dm text-xs text-neutral-600">© 2026 Balaji Colour Store. All rights reserved.</p>
        <p className="font-dm text-xs text-neutral-600">Ranchi, Jharkhand, India</p>
      </div>
    </div>
  </footer>
);
