import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only activate on pointer: fine (mouse) devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    interface Point { x: number; y: number; age: number; color: string; size: number; }
    const points: Point[] = [];
    const colors = ['#FF6B2B', '#00C2CB', '#F5A623', '#FF8C42'];

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      points.push({
        x: e.clientX, y: e.clientY, age: 0,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 14 + 8,
      });
      // Keep trail array from growing unbounded
      if (points.length > 80) points.shift();

      const target = e.target as HTMLElement;
      setIsHovered(
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        !!target.closest('button') ||
        !!target.closest('a')
      );
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        p.age += 0.035;
        const alpha = Math.max(0, 1 - p.age);
        if (alpha <= 0) { points.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha * 0.55;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[9998] pointer-events-none"
        aria-hidden="true"
      />
      {!isHovered ? (
        <div
          className="fixed z-[9999] pointer-events-none w-5 h-5 rounded-full border-2 border-[#FF6B2B] mix-blend-multiply transition-transform duration-75"
          style={{ left: mousePos.x - 10, top: mousePos.y - 10 }}
          aria-hidden="true"
        />
      ) : (
        <div
          className="fixed z-[9999] pointer-events-none w-12 h-12 rounded-full bg-[#FF6B2B]/20 border border-[#FF6B2B] flex items-center justify-center text-[10px] font-syne font-bold text-[#FF6B2B] transition-transform duration-100"
          style={{ left: mousePos.x - 24, top: mousePos.y - 24 }}
          aria-hidden="true"
        >
          Tap
        </div>
      )}
    </>
  );
};
