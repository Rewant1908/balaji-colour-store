import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

const teamMembers = [
  {
    name: 'Ravi Jain',     role: 'Founder & Paint Expert',
    quote: 'True luxury begins with uncompromised, vibrant wall finishes.',
    phone: '9431212039',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    size: 'large',
  },
  {
    name: 'Umang Jain',    role: 'Interior Solutions Head',
    quote: 'Bespoke modular designs tailored for seamless daily living.',
    phone: '7903904076',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    size: 'medium',
  },
  {
    name: 'Shubham Jain',  role: 'Client Experience Lead',
    quote: 'Every client relationship built on transparency and trust.',
    phone: '9430024233',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    size: 'medium',
  },
];

export const Team: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handlePhoneTap = (phone: string, index: number, event: React.MouseEvent) => {
    event.preventDefault();
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
    confetti({
      particleCount: 80, spread: 70,
      origin: { x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight },
      colors: ['#FF6B2B', '#00C2CB', '#F5A623', '#FFD166'],
    });
    if (navigator.clipboard) navigator.clipboard.writeText(phone).catch(() => {});
  };

  return (
    <section id="team" className="py-20 px-4 md:px-8 bg-[#FDFAF6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-syne text-xs uppercase tracking-[0.25em] text-[#FF6B2B] mb-3">Meet The Team</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-neutral-900">The Minds Behind Your Dream Home</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-neutral-100"
              style={{ marginTop: idx === 1 ? 24 : idx === 2 ? 48 : 0 }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.photo} alt={member.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy" width="600" height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-3 left-4 font-syne text-xs text-white/80 uppercase tracking-wider">
                  {member.role}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-playfair font-bold text-xl text-neutral-900">{member.name}</h3>
                <p className="font-syne text-xs text-neutral-500 uppercase tracking-wider mb-3">{member.role}</p>
                <p className="font-dm text-sm text-neutral-600 italic leading-relaxed mb-5">&ldquo;{member.quote}&rdquo;</p>

                <button
                  onClick={e => handlePhoneTap(member.phone, idx, e)}
                  className={`w-full py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 font-syne font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                    copiedIndex === idx
                      ? 'bg-[#00C2CB] text-white ring-4 ring-[#00C2CB]/25 scale-95'
                      : 'bg-[#FDFAF6] hover:bg-[#FF6B2B] text-neutral-900 hover:text-white border border-neutral-200'
                  }`}
                >
                  {copiedIndex === idx
                    ? <><Check className="w-4 h-4" /> Copied!</>
                    : <><Phone className="w-4 h-4" /> {member.phone}</>
                  }
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
