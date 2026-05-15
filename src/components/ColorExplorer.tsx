import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const spectrumTabs = ['Warm', 'Cool', 'Earth', 'Pastels', 'Vibrant', 'Deep'] as const;
type Tab = typeof spectrumTabs[number];

interface Color { name: string; hex: string; finish: string; brand: string; }

const colorDatabase: Record<Tab, Color[]> = {
  Warm:    [
    { name: 'Saffron Dawn',    hex: '#FF6B2B', finish: 'Silk Luxury',       brand: 'Asian Paints Royale' },
    { name: 'Tuscan Terracotta', hex: '#E65100', finish: 'Matt Emulsion',    brand: 'Indigo Velvet' },
    { name: 'Golden Harvest',  hex: '#F5A623', finish: 'Metallic Shimmer',   brand: 'Berger Glamor' },
    { name: 'Burnt Coral',     hex: '#FF8C42', finish: 'Velvet Soft',        brand: 'Birla Opus' },
  ],
  Cool:    [
    { name: 'Teal Serenade',   hex: '#00C2CB', finish: 'High Gloss',        brand: 'Indigo Creative' },
    { name: 'Nordic Breeze',   hex: '#B2EBF2', finish: 'Anti-Bacterial Matt', brand: 'Asian Paints Apex' },
    { name: 'Aegean Cyan',     hex: '#00838F', finish: 'Satin Smooth',       brand: 'Berger Easy Clean' },
    { name: 'Sapphire Night',  hex: '#1565C0', finish: 'Ultra Matt',         brand: 'Birla Elegant' },
  ],
  Earth:   [
    { name: 'Himalayan Clay',  hex: '#8D6E63', finish: 'Rough Texture',      brand: 'Asian Paints Atmos' },
    { name: 'Desert Sand',     hex: '#D7CCC8', finish: 'Smooth Emulsion',    brand: 'Indigo Odour-free' },
    { name: 'Moss Green',      hex: '#33691E', finish: 'Washable Matt',       brand: 'Berger WeatherCoat' },
    { name: 'Ancient Oak',     hex: '#4E342E', finish: 'Premium Velvet',      brand: 'Birla Opus Wood' },
  ],
  Pastels: [
    { name: 'Lavender Whispers', hex: '#D1C4E9', finish: 'Silk Sheen',      brand: 'Asian Paints Royale' },
    { name: 'Blush Pink',      hex: '#F8BBD0', finish: 'Matt Luxury',        brand: 'Indigo Velvet' },
    { name: 'Mint Sorbet',     hex: '#C8E6C9', finish: 'Satin Matt',         brand: 'Berger Silk' },
    { name: 'Powder Lemon',    hex: '#FFF9C4', finish: 'Eggshell',           brand: 'Birla Opus Luxury' },
  ],
  Vibrant: [
    { name: 'Electric Vermillion', hex: '#FF1744', finish: 'Ultra Gloss',   brand: 'Asian Paints Royale' },
    { name: 'Neon Lime',       hex: '#AEEA00', finish: 'Neon Emulsion',      brand: 'Indigo Creative' },
    { name: 'Magenta Fusion',  hex: '#D500F9', finish: 'High Sheen',         brand: 'Berger Glamor' },
    { name: 'Sunset Gold',     hex: '#FFAB00', finish: 'Metallic Touch',      brand: 'Birla Opus Shimmer' },
  ],
  Deep:    [
    { name: 'Midnight Onyx',   hex: '#212121', finish: 'Deep Matt',          brand: 'Asian Paints Apex' },
    { name: 'Imperial Ruby',   hex: '#880E4F', finish: 'Silk Velvet',        brand: 'Indigo Odour-free' },
    { name: 'Abyssal Navy',    hex: '#0D47A1', finish: 'Satin Smooth',       brand: 'Berger Glamor' },
    { name: 'Forest Canopy',   hex: '#1B5E20', finish: 'Washable Luxury',    brand: 'Birla Opus Elegance' },
  ],
};

export const ColorExplorer: React.FC = () => {
  const [activeTab, setActiveTab]             = useState<Tab>('Warm');
  const [selectedColor, setSelectedColor]     = useState<Color>(colorDatabase['Warm'][0]);
  const [savedStrip, setSavedStrip]           = useState<Color[]>([]);
  const [dripActive, setDripActive]           = useState(false);
  const [isMobileOpen, setIsMobileOpen]       = useState(false);

  const handlePickColor = useCallback((color: Color) => {
    setSelectedColor(color);
    setDripActive(true);
    setTimeout(() => setDripActive(false), 900);
    setSavedStrip(prev => {
      if (prev.some(c => c.hex === color.hex)) return prev;
      return [color, ...prev].slice(0, 12);
    });
  }, []);

  return (
    <section id="colours" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Paint drip animation */}
        <AnimatePresence>
          {dripActive && (
            <motion.div
              key="drip"
              className="fixed top-0 left-0 w-full z-50 flex justify-around pointer-events-none"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[1,2,3,4].map(i => (
                <motion.div
                  key={i}
                  className="w-3 rounded-b-full"
                  style={{ backgroundColor: selectedColor.hex }}
                  initial={{ height: 0 }}
                  animate={{ height: 80 + i * 30 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-syne text-xs uppercase tracking-[0.25em] text-[#FF6B2B] mb-3">Professional Palette Suite</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Color Palette Explorer</h2>
          <p className="font-dm text-base text-neutral-500 max-w-xl mx-auto">
            Pick from expertly curated spectrum tabs. Live architectural previews reveal true finish depth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: live room preview */}
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-[500px] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
              alt="Room preview"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy" width="1200" height="800"
            />
            {/* Colour wash overlay */}
            <motion.div
              className="absolute inset-0 mix-blend-multiply"
              animate={{ backgroundColor: selectedColor.hex }}
              transition={{ duration: 0.5 }}
              style={{ opacity: 0.35 }}
            />
            {/* Spec badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow">
              <p className="font-syne font-bold text-sm text-neutral-900">{selectedColor.name}</p>
              <p className="font-dm text-xs text-neutral-500">{selectedColor.brand}</p>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="w-4 h-4 rounded-full border border-white/50 shadow-sm" style={{ backgroundColor: selectedColor.hex }} />
                <span className="font-dm text-xs text-neutral-700 font-medium">{selectedColor.hex}</span>
                <span className="font-dm text-xs text-neutral-400">·</span>
                <span className="font-dm text-xs text-neutral-500">{selectedColor.finish}</span>
              </div>
            </div>
          </div>

          {/* Right: tabs + swatches */}
          <div className="flex flex-col gap-5">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {spectrumTabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl font-syne text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-[#FF6B2B] text-white shadow-md scale-105'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Swatches */}
            <div className="grid grid-cols-2 gap-3">
              {colorDatabase[activeTab].map(color => (
                <button
                  key={color.hex}
                  onClick={() => handlePickColor(color)}
                  className={`text-left p-4 rounded-2xl bg-white border transition-all duration-200 hover:scale-[1.02] shadow-sm h-28 relative overflow-hidden ${
                    selectedColor.hex === color.hex
                      ? 'border-2 border-[#00C2CB] ring-4 ring-[#00C2CB]/20'
                      : 'border-neutral-200'
                  }`}
                  aria-pressed={selectedColor.hex === color.hex}
                >
                  {/* Colour swatch patch */}
                  <div className="absolute top-0 right-0 w-16 h-full rounded-r-2xl" style={{ backgroundColor: color.hex }} />
                  <p className="font-syne font-bold text-sm text-neutral-900 relative z-10 pr-14">{color.name}</p>
                  <p className="font-dm text-xs text-neutral-400 relative z-10 mt-1 pr-14">{color.hex}</p>
                </button>
              ))}
            </div>

            {/* Saved palette strip */}
            <div className="mt-2">
              <div className="flex items-center justify-between mb-2">
                <p className="font-syne font-bold text-sm text-neutral-700">Saved Strip ({savedStrip.length}/12)</p>
                {savedStrip.length > 0 && (
                  <button onClick={() => setSavedStrip([])} className="font-dm text-xs text-neutral-400 hover:text-neutral-700 underline">
                    Clear
                  </button>
                )}
              </div>
              <div className="flex gap-2 flex-wrap">
                {savedStrip.length === 0 && (
                  <p className="font-dm text-xs text-neutral-400 italic">Tap any swatch to save.</p>
                )}
                {savedStrip.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handlePickColor(item)}
                    className="w-8 h-8 rounded-lg shadow-sm hover:scale-110 transition-transform border border-white/30"
                    style={{ backgroundColor: item.hex }}
                    title={`${item.name} (${item.hex})`}
                    aria-label={item.name}
                  />
                ))}
              </div>
            </div>

            {/* Mobile bottom-sheet trigger */}
            <button
              onClick={() => setIsMobileOpen(o => !o)}
              className="lg:hidden w-full py-3 bg-[#FF6B2B] text-white rounded-xl font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              Browse All Colours <ChevronDown className={`w-4 h-4 transition-transform ${isMobileOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isMobileOpen && (
                <motion.div
                  key="drawer"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  className="lg:hidden bg-white rounded-2xl border border-neutral-100 shadow-lg p-4"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {spectrumTabs.map(tab => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-1.5 rounded-lg font-syne text-xs font-bold uppercase ${
                          activeTab === tab ? 'bg-[#FF6B2B] text-white' : 'bg-neutral-100 text-neutral-700'
                        }`}
                      >{tab}</button>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    {colorDatabase[activeTab].map(color => (
                      <button
                        key={color.hex}
                        onClick={() => { handlePickColor(color); setIsMobileOpen(false); }}
                        className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-left flex items-center gap-3"
                      >
                        <span className="w-8 h-8 rounded-lg flex-shrink-0" style={{ backgroundColor: color.hex }} />
                        <span>
                          <p className="font-syne font-bold text-sm text-neutral-900">{color.name}</p>
                          <p className="font-dm text-xs text-neutral-400">{color.hex}</p>
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
