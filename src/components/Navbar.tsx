import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Colours',  href: '#colours' },
  { label: 'Team',     href: '#team' },
  { label: 'Contact',  href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled]             = useState(false);
  const [menuOpen, setMenuOpen]             = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setScrollProgress((window.scrollY / total) * 100);
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FDFAF6]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-[#FF6B2B] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" aria-label="Balaji Colour Store home">
          <span className="w-8 h-8 rounded-full bg-[#FF6B2B] flex items-center justify-center">
            <span className="font-bebas text-white text-sm leading-none">B</span>
          </span>
          <span className="font-syne font-bold text-base text-neutral-900 tracking-tight hidden sm:block">
            Balaji Colour Store
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-dm text-sm text-neutral-700 hover:text-[#FF6B2B] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF6B2B] text-white font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#e55a1c] transition-colors duration-200"
        >
          Free Consultation
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-neutral-900 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-neutral-900 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-neutral-900 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#FDFAF6] border-t border-neutral-100 px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-dm text-base text-neutral-800 hover:text-[#FF6B2B] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-3 rounded-full bg-[#FF6B2B] text-white font-syne font-bold text-xs uppercase tracking-wider text-center"
          >
            Free Consultation
          </a>
        </motion.div>
      )}
    </header>
  );
};
