import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Wrench, Gem } from 'lucide-react';

const statsData = [
  { value: 10,  suffix: '+',  label: 'Years Experience' },
  { value: 500, suffix: '+',  label: 'Projects Completed' },
  { value: 7,   suffix: '',   label: 'Brand Partners' },
  { value: 100, suffix: '%',  label: 'Professional Install' },
];

const trustCards = [
  { title: '10-Year Warranty',     desc: 'Absolute protection against flaking, peeling, or moisture blistering.', icon: ShieldCheck },
  { title: 'Pro Installation',     desc: 'Factory-trained Master Craftsmen with laser-aligned precision tooling.',  icon: Wrench },
  { title: 'Sleek Kitchen Partner',desc: 'Authorized flagship tier dealers for German modular excellence.',         icon: Award },
  { title: 'Premium Materials',    desc: 'Exclusively non-toxic, low-VOC luxury formulations and imported birch.',  icon: Gem },
];

function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const raf = useRef<number>(0);
  const start = useRef<number | null>(null);

  const run = (ts: number) => {
    if (!start.current) start.current = ts;
    const progress = Math.min((ts - start.current) / duration, 1);
    setCount(Math.floor(progress * target));
    if (progress < 1) raf.current = requestAnimationFrame(run);
    else setCount(target);
  };

  const trigger = () => {
    start.current = null;
    raf.current = requestAnimationFrame(run);
  };

  useEffect(() => () => cancelAnimationFrame(raf.current), []);
  return { count, trigger };
}

function StatItem({ value, suffix, label }: typeof statsData[0]) {
  const { count, trigger } = useCountUp(value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { trigger(); observer.disconnect(); } }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [trigger]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-bebas text-5xl md:text-6xl text-white tracking-wide">
        {count}{suffix}
      </p>
      <p className="font-dm text-sm text-white/70 mt-1">{label}</p>
    </div>
  );
}

export const Stats: React.FC = () => (
  <section className="py-20 px-4 md:px-8 bg-neutral-900">
    <div className="max-w-7xl mx-auto">
      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {statsData.map((s, i) => <StatItem key={i} {...s} />)}
      </div>

      {/* Trust cards */}
      <div className="text-center mb-12">
        <p className="font-syne text-xs uppercase tracking-[0.25em] text-[#FF6B2B] mb-3">Balaji Brand Standard</p>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">Why Discerning Clients Choose Us</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {trustCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={i}
              className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700/50 hover:border-[#FF6B2B]/40 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Icon className="w-7 h-7 text-[#FF6B2B] mb-4" />
              <h3 className="font-syne font-bold text-base text-white mb-2">{card.title}</h3>
              <p className="font-dm text-sm text-neutral-400 leading-relaxed">{card.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
