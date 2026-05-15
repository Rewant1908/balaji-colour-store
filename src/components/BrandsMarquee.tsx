import React from 'react';

const brandsRow1 = [
  { name: 'Asian Paints',    desc: 'Luxury Wall Finishes',    color: '#FF6B2B' },
  { name: 'Indigo Paints',   desc: 'Creative Coatings',       color: '#00C2CB' },
  { name: 'Berger Paints',   desc: 'Express Painting',        color: '#F5A623' },
  { name: 'Birla Paints',    desc: 'Opus Collection',         color: '#D32F2F' },
  { name: 'Ashirvad',        desc: 'Pipes & Fittings',        color: '#1565C0' },
  { name: 'J.K. Putty',      desc: 'Smooth Wall Base',        color: '#FF8C42' },
  { name: 'Sleek Kitchens',  desc: 'Modular Excellence',      color: '#2E7D32' },
];

const brandsRow2 = [...brandsRow1].reverse();

export const BrandsMarquee: React.FC = () => (
  <section className="py-16 bg-[#FDFAF6] overflow-hidden" aria-label="Brand partners">
    <div className="text-center mb-10">
      <p className="font-syne text-xs uppercase tracking-[0.25em] text-[#FF6B2B] mb-2">Elite Alliances</p>
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-neutral-900">Trusted Brand Partners</h2>
    </div>

    {/* Row 1 — left to right */}
    <div className="overflow-hidden mb-4">
      <div className="flex animate-marquee gap-6 w-max">
        {[...brandsRow1, ...brandsRow1, ...brandsRow1].map((brand, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-neutral-100 shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: brand.color }} />
            <span className="font-syne font-bold text-sm text-neutral-900 whitespace-nowrap">{brand.name}</span>
            <span className="font-dm text-xs text-neutral-500 whitespace-nowrap hidden sm:inline">{brand.desc}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Row 2 — right to left */}
    <div className="overflow-hidden">
      <div className="flex animate-marquee-reverse gap-6 w-max">
        {[...brandsRow2, ...brandsRow2, ...brandsRow2].map((brand, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-neutral-100 shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: brand.color }} />
            <span className="font-syne font-bold text-sm text-neutral-900 whitespace-nowrap">{brand.name}</span>
            <span className="font-dm text-xs text-neutral-500 whitespace-nowrap hidden sm:inline">{brand.desc}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
