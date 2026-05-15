import React from 'react';
import { motion } from 'framer-motion';

interface PaintDividerProps {
  fill?: string;
  className?: string;
  flip?: boolean;
}

export const PaintDivider: React.FC<PaintDividerProps> = ({ fill = '#FF6B2B', className = '', flip = false }) => (
  <div
    className={`relative w-full overflow-hidden h-16 md:h-24 ${flip ? 'scale-y-[-1]' : ''} ${className}`}
    aria-hidden="true"
  >
    {/* Animated drips */}
    {[40, 75, 20, 90, 50, 110, 30, 85].map((h, i) => (
      <motion.div
        key={i}
        className="absolute top-0 rounded-b-full"
        style={{ left: `${8 + i * 11}%`, width: 10, backgroundColor: fill, height: h, originY: 0 }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      />
    ))}
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute bottom-0 w-full">
      <path
        d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
        fill={fill}
      />
    </svg>
  </div>
);
