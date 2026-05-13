import React, { useRef, useCallback } from 'react'
import Button from './Button'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

const GIFS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
]

export default function PartnerSection() {
  const { ref, inView } = useInViewAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const lastSpawnRef = useRef(0)
  const gifIndexRef = useRef(0)
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const now = Date.now()
    if (now - lastSpawnRef.current < 80) return
    lastSpawnRef.current = now
    const container = containerRef.current; if (!container) return
    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left, y = e.clientY - rect.top
    const rotation = (Math.random() - 0.5) * 20
    const gif = GIFS[gifIndexRef.current % GIFS.length]
    gifIndexRef.current++
    const img = document.createElement('img')
    img.src = gif
    img.style.cssText = `position:absolute;left:${x-60}px;top:${y-45}px;width:120px;height:90px;object-fit:cover;border-radius:12px;transform:rotate(${rotation}deg) scale(1);pointer-events:none;z-index:10;transition:opacity 1000ms,transform 1000ms;box-shadow:0 4px 20px rgba(0,0,0,0.15)`
    container.appendChild(img)
    requestAnimationFrame(() => requestAnimationFrame(() => { img.style.opacity = '0'; img.style.transform = `rotate(${rotation}deg) scale(0.8)` }))
    setTimeout(() => img.remove(), 1100)
  }, [])
  return (
    <section className="w-full py-12 px-6">
      <div ref={containerRef} className="relative max-w-7xl mx-auto rounded-[40px] py-48 overflow-hidden cursor-crosshair"
        style={{ boxShadow: '0 0 0 0.5px rgba(0,0,0,0.05),0 4px 30px rgba(0,0,0,0.06)' }} onMouseMove={handleMouseMove}>
        <div ref={ref as React.RefObject<HTMLDivElement>} className="flex flex-col items-center text-center relative z-20">
          <h2 className={`text-[48px] md:text-[64px] lg:text-[80px] font-normal text-[#0D212C] mb-12 tracking-tight leading-[1.05] ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ fontFamily: "'PP Mondwest','Georgia',serif" }}>Partner with us</h2>
          <div className={`${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <Button variant="primary" href="https://halaskastudio.com/./book" className="px-8 py-4 text-base gap-3">
              <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1" alt="Viktor" className="w-10 h-10 rounded-full object-cover" loading="lazy" />
              Start chat with Viktor
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}