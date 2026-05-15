import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  { title: 'Modular Kitchen', desc: 'Bespoke ergonomic design with German hinges and sleek quartz countertops.', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80', size: 'large' },
  { title: 'Wardrobe',        desc: 'Luxury sliding and walk-in closet systems with smart LED sensor lighting.',    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80', size: 'large' },
  { title: 'Vanity',          desc: 'Premium floating vanity units with moisture-resistant core panels.',           image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',  size: 'small' },
  { title: 'TV Unit',         desc: 'Minimalist entertainment centers with hidden acoustic cable management.',      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',  size: 'small' },
  { title: 'False Ceiling',   desc: 'Architectural drop ceilings with integrated cove lighting and acoustics.',    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',  size: 'small' },
  { title: 'Curtains',        desc: 'Custom drapery, motorized sheer blinds, and velvet blackout panels.',         image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',  size: 'small' },
  { title: 'Bath Fittings',   desc: 'High-end brassware, rain showers, and sleek thermostatic valves.',           image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',  size: 'small' },
  { title: 'UPVC Doors',      desc: 'Energy-efficient, soundproof multi-point locking sliding door profiles.',     image: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80',  size: 'small' },
  { title: 'PVC/WPC Panels',  desc: 'Durable fluted wall cladding for instant luxury textural depth.',             image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',  size: 'small' },
  { title: 'Chimney & Hobs',  desc: 'Sleek touch-control auto-clean chimneys and tempered glass cooktops.',       image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',  size: 'small' },
];

export const ServicesBento: React.FC = () => (
  <section id="services" className="py-20 px-4 md:px-8 bg-[#FDFAF6]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="font-syne text-xs uppercase tracking-[0.25em] text-[#FF6B2B] mb-3">Bespoke Expertise</p>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Services &amp; Masterworks</h2>
        <p className="font-dm text-base text-neutral-500 max-w-xl mx-auto">
          Every custom installation engineered for uncompromising aesthetic durability.
        </p>
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden flex flex-col gap-5">
        {services.map((s, idx) => (
          <div key={idx} className="relative overflow-hidden rounded-2xl h-48 group">
            <img
              src={s.image} alt={s.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy" width="800" height="400"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-syne font-bold text-white text-base">{s.title}</p>
              <p className="font-dm text-xs text-white/70 mt-1">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: bento grid */}
      <div className="hidden md:grid grid-cols-12 gap-4">
        {services.map((s, idx) => {
          const isLarge = s.size === 'large';
          return (
            <motion.div
              key={idx}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                isLarge ? 'col-span-6 h-[460px]' : 'col-span-3 h-[300px]'
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (idx % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={s.image} alt={s.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy" width={isLarge ? 1000 : 800} height={isLarge ? 460 : 300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF6B2B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-syne font-bold text-white text-lg">{s.title}</p>
                <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-300">
                  <p className="font-dm text-xs text-white/75 mt-1.5">{s.desc}</p>
                  <button className="mt-3 flex items-center gap-1 text-[#FF6B2B] font-syne font-bold text-xs uppercase tracking-wider">
                    Explore <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
