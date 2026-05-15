import React, { useRef, useCallback } from 'react'
import { Button } from './Button'

const gifImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
]

export const PartnerSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const lastSpawnRef = useRef(0)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now()
    if (now - lastSpawnRef.current < 80) return
    lastSpawnRef.current = now

    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const img = document.createElement('img')
    const src = gifImages[Math.floor(Math.random() * gifImages.length)]
    const rotation = (Math.random() * 20 - 10).toFixed(1)
    img.src = src
    img.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      width: 120px;
      height: 80px;
      object-fit: cover;
      border-radius: 12px;
      transform: translate(-50%, -50%) rotate(${rotation}deg) scale(1);
      pointer-events: none;
      z-index: 10;
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      transition: opacity 1000ms ease, transform 1000ms ease;
    `
    container.appendChild(img)

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        img.style.opacity = '0'
        img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0.85)`
      })
    })

    setTimeout(() => {
      if (img.parentNode) img.parentNode.removeChild(img)
    }, 1100)
  }, [])

  return (
    <section className="w-full py-12 px-6">
      <div
        ref={containerRef}
        className="relative max-w-7xl mx-auto py-48 rounded-[40px] overflow-hidden flex flex-col items-center justify-center"
        style={{ boxShadow: '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08)', background: '#fff' }}
        onMouseMove={handleMouseMove}
      >
        <h2
          className="text-[48px] md:text-[64px] lg:text-[80px] text-[#0D212C] mb-12 relative z-20 text-center leading-none"
          style={{ fontFamily: "'PP Mondwest', Georgia, serif" }}
        >
          Partner with us
        </h2>

        <div className="relative z-20">
          <Button variant="primary" className="flex items-center gap-3 px-6 py-3">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2"
              alt="Viktor"
              className="w-10 h-10 rounded-full object-cover"
            />
            Start chat with Viktor
          </Button>
        </div>
      </div>
    </section>
  )
}
