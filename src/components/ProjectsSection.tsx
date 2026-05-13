import React, { useEffect, useRef, useState } from 'react'

const PROJECTS = [
  { name: 'evr', desc: 'From idea to millions raised for a web3 AI product', img: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif' },
  { name: 'Automation Machines', desc: 'Streamlining industrial automation processes', img: 'https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif' },
  { name: 'xPortfolio', desc: 'Modern portfolio management platform', img: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif' },
]

function ProjectItem({ project, delay }: { project: typeof PROJECTS[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`flex flex-col gap-4 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${delay}s` }}>
      <div className="ml-20 md:ml-28">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#051A24]" style={{ fontFamily: "'PP Mondwest','Georgia',serif" }}>{project.name}</h3>
        <p className="text-sm md:text-base text-[#051A24]/70 mt-1">{project.desc}</p>
      </div>
      <img src={project.img} alt={project.name} className="w-full rounded-2xl shadow-lg object-cover" loading="lazy" />
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col gap-16 md:gap-20">
        {PROJECTS.map((p, i) => <ProjectItem key={p.name} project={p} delay={i * 0.15} />)}
      </div>
    </section>
  )
}