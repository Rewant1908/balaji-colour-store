import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const projects = [
  { id: 1, title: 'Saffron Living Room', client: 'Sharma Residence', before: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80', after: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', tag: 'Living Room' },
  { id: 2, title: 'Luxury Kitchen',     client: 'Gupta Residence',  before: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80', after: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80', tag: 'Kitchen' },
  { id: 3, title: 'Teal Master Suite',  client: 'Singh Residence',  before: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80', after: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80', tag: 'Bedroom' },
  { id: 4, title: 'Modern Vanity',      client: 'Patel Residence',  before: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80', after: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', tag: 'Bathroom' },
];

export const Gallery: React.FC = () => {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);
  const [sliderPos, setSliderPos]         = useState(50);
  const [isDragging, setIsDragging]       = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos  = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(95, Math.max(5, pos)));
  }, [isDragging]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos  = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(95, Math.max(5, pos)));
  }, []);

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 bg-[#FDFAF6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-syne text-xs uppercase tracking-[0.25em] text-[#FF6B2B] mb-3">Our Work</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Before &amp; After</h2>
          <p className="font-dm text-base text-neutral-500 max-w-lg mx-auto">
            Click any project to launch our interactive Before / After slider.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map(p => (
            <motion.button
              key={p.id}
              onClick={() => { setActiveProject(p); setSliderPos(50); }}
              className="relative overflow-hidden rounded-2xl h-64 group text-left w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
            >
              <img
                src={p.after} alt={p.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy" width="800" height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-[#FF6B2B]/90 text-white font-syne font-bold text-xs uppercase tracking-wide">
                  {p.tag}
                </span>
              </div>
              <div className="absolute bottom-4 left-4">
                <p className="font-syne font-bold text-white text-base">{p.title}</p>
                <p className="font-dm text-xs text-white/70">Client: {p.client}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Before/After lightbox */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Slider area */}
              <div
                className="relative h-72 md:h-[420px] select-none"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                {/* After */}
                <img src={activeProject.after}  alt="After"  className="absolute inset-0 w-full h-full object-cover" width="800" height="500" />
                {/* Before — clipped */}
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
                  <img src={activeProject.before} alt="Before" className="w-full h-full object-cover" width="800" height="500" />
                </div>
                {/* Divider handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <span className="text-neutral-600 text-xs font-bold">⇔</span>
                  </div>
                </div>
                {/* Labels */}
                <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/60 text-white text-xs font-dm rounded">Before</span>
                <span className="absolute top-3 right-3 px-2 py-0.5 bg-[#FF6B2B] text-white text-xs font-dm rounded">After</span>
              </div>

              <div className="bg-white p-5">
                <h3 className="font-syne font-bold text-lg text-neutral-900">{activeProject.title}</h3>
                <p className="font-dm text-sm text-neutral-500 mt-1">Client: {activeProject.client}</p>
                <p className="font-dm text-xs text-neutral-400 mt-2">
                  Drag the handle left and right to compare before and after.
                </p>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
