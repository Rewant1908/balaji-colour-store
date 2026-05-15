import React, { useEffect, useRef, useState } from 'react'

const projects = [
  {
    name: 'evr',
    description: 'From idea to millions raised for a web3 AI product',
    image: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  },
  {
    name: 'Automation Machines',
    description: 'Streamlining industrial automation processes',
    image: 'https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif',
  },
  {
    name: 'xPortfolio',
    description: 'Modern portfolio management platform',
    image: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  },
]

function ProjectItem({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-6 ${
        inView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="ml-20 md:ml-28">
        <h3
          className="text-2xl md:text-3xl font-semibold text-[#051A24] mb-2"
          style={{ fontFamily: "'PP Mondwest', Georgia, serif" }}
        >
          {project.name}
        </h3>
        <p className="text-sm md:text-base text-[#051A24]/70">{project.description}</p>
      </div>
      <img
        src={project.image}
        alt={project.name}
        className="w-full rounded-2xl shadow-lg object-cover"
        loading="lazy"
        style={{ maxHeight: 560 }}
      />
    </div>
  )
}

export const ProjectsSection: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map((p, i) => (
          <ProjectItem key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
