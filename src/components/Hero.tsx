import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';

const heroColors = [
  { name: 'Saffron Dawn',    hex: '#FF6B2B', brand: 'Asian Paints Royale', finish: 'Silk Luxury' },
  { name: 'Teal Serenade',   hex: '#00C2CB', brand: 'Indigo Creative',      finish: 'High Gloss' },
  { name: 'Golden Harvest',  hex: '#F5A623', brand: 'Berger Glamor',         finish: 'Metallic Shimmer' },
  { name: 'Midnight Onyx',   hex: '#212121', brand: 'Asian Paints Apex',     finish: 'Deep Matt' },
  { name: 'Himalayan Clay',  hex: '#8D6E63', brand: 'Asian Paints Atmos',    finish: 'Rough Texture' },
  { name: 'Nordic Breeze',   hex: '#E0F7FA', brand: 'Asian Paints Apex',     finish: 'Anti-Bacterial Matt' },
];

export const Hero: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(heroColors[0]);
  const [rotation, setRotation] = useState(0);

  const handleColorPick = useCallback((color: typeof heroColors[0], idx: number) => {
    setSelectedColor(color);
    setRotation(idx * 60);
  }, []);

  const textColor = selectedColor.hex === '#212121' || selectedColor.hex === '#1A1A1A' ? '#FDFAF6' : '#1A1A1A';

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: selectedColor.hex + '18' }}
      aria-label="Hero section"
    >
      {/* Background color wash */}
      <div
        className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${selectedColor.hex}22 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-syne text-xs uppercase tracking-[0.25em] text-[#FF6B2B] mb-4">
            Premium Interior Solutions · Jharkhand
          </p>

          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-neutral-900 mb-6">
            Paint Your World
            <em className="block not-italic" style={{ color: selectedColor.hex }}>
              Alive.
            </em>
          </h1>

          <p className="font-dm text-base md:text-lg text-neutral-600 leading-relaxed max-w-md mb-8">
            Premium home interior transformations crafted with hyper-vibrant luxury paints
            and world-class bespoke furnishings.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF6B2B] text-white font-syne font-bold text-sm uppercase tracking-wider hover:bg-[#e55a1c] transition-colors duration-200 shadow-lg shadow-[#FF6B2B]/25"
            >
              Free Home Visit
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-neutral-900 font-syne font-bold text-sm uppercase tracking-wider hover:bg-neutral-50 transition-colors duration-200 border border-neutral-200 shadow-sm"
            >
              <Play className="w-4 h-4" /> View Projects
            </a>
          </div>

          {/* Selected color spec */}
          <div className="mt-10 flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-full shadow-md border border-white/40 flex-shrink-0"
              style={{ backgroundColor: selectedColor.hex }}
            />
            <div>
              <p className="font-syne font-bold text-sm text-neutral-900">{selectedColor.name}</p>
              <p className="font-dm text-xs text-neutral-500">{selectedColor.brand} · {selectedColor.finish}</p>
            </div>
          </div>
        </motion.div>

        {/* Right: color wheel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <p className="font-dm text-xs uppercase tracking-widest text-neutral-500">
            Rotate &amp; pick to preview premium finish
          </p>

          {/* Wheel */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Centre preview */}
            <motion.div
              className="absolute inset-0 m-auto w-28 h-28 md:w-36 md:h-36 rounded-full shadow-xl border-4 border-white z-10 flex flex-col items-center justify-center"
              style={{ backgroundColor: selectedColor.hex }}
              animate={{ backgroundColor: selectedColor.hex }}
              transition={{ duration: 0.4 }}
            >
              <span className="font-bebas text-white text-xs tracking-widest drop-shadow-sm">
                {selectedColor.brand.split(' ')[0]}
              </span>
              <span className="font-dm text-white/80 text-[10px]">{selectedColor.finish}</span>
            </motion.div>

            {/* Orbit swatches */}
            {heroColors.map((color, idx) => {
              const angle = (idx / heroColors.length) * 2 * Math.PI - Math.PI / 2 + (rotation * Math.PI) / 180;
              const r = 110;
              const x = Math.cos(angle) * r + 128;
              const y = Math.sin(angle) * r + 128;
              const isActive = color.name === selectedColor.name;
              return (
                <motion.button
                  key={color.name}
                  onClick={() => handleColorPick(color, idx)}
                  className="absolute w-10 h-10 rounded-full border-2 shadow-md transition-transform duration-200 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    backgroundColor: color.hex,
                    left: x, top: y,
                    borderColor: isActive ? '#fff' : 'rgba(255,255,255,0.4)',
                    transform: `translate(-50%, -50%) scale(${isActive ? 1.3 : 1})`,
                    boxShadow: isActive ? `0 0 0 3px ${color.hex}55, 0 4px 12px ${color.hex}44` : undefined,
                  }}
                  aria-label={`Select colour ${color.name}`}
                  aria-pressed={isActive}
                />
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-400 hover:text-[#FF6B2B] transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <span className="font-dm text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.a>
    </section>
  );
};
