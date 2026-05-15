import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps { onComplete: () => void; }

export const LoaderScreen: React.FC<LoaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'svg' | 'letters' | 'flood'>('svg');

  useEffect(() => {
    const t1 = setTimeout(() => setStage('letters'), 1600);
    const t2 = setTimeout(() => setStage('flood'), 3200);
    const t3 = setTimeout(() => onComplete(), 4200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  const brandLetters = 'BALAJI COLOUR STORE'.split('');

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        className="fixed inset-0 z-[99999] bg-[#1A1A1A] flex flex-col items-center justify-center overflow-hidden"
        exit={{ opacity: 0, scale: 1.04 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Liquid flood */}
        <AnimatePresence>
          {stage === 'flood' && (
            <motion.div
              key="flood"
              className="absolute inset-0 bg-[#FF6B2B] flex items-center justify-center"
              initial={{ scaleY: 0, originY: 1 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-bebas text-white text-4xl md:text-6xl tracking-[0.3em] opacity-80">
                ALIVE WITH COLOUR
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SVG Logo */}
        <AnimatePresence>
          {stage === 'svg' && (
            <motion.svg
              key="logo-svg"
              viewBox="0 0 120 80" width="120" height="80"
              fill="none" stroke="#FF6B2B" strokeWidth="3"
              strokeLinecap="round" strokeLinejoin="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Paint brush silhouette */}
              <motion.path
                d="M20 60 Q40 20 60 40 Q80 60 100 20"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              />
              <motion.circle
                cx="60" cy="68" r="8" fill="#FF6B2B" stroke="none"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              />
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Letter drop */}
        {(stage === 'letters' || stage === 'svg') && (
          <div className="flex flex-wrap justify-center gap-0.5 px-8 max-w-lg mt-8">
            {brandLetters.map((char, i) => (
              <motion.span
                key={i}
                className="font-bebas text-white text-3xl md:text-5xl tracking-widest"
                initial={{ opacity: 0, y: -40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.06 * i + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
