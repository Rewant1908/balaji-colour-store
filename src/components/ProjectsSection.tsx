import React, { useEffect, useRef, useState } from 'react'

// ── useInView ──────────────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, inView }
}

// ── Types ──────────────────────────────────────────────────────────────────────
interface GalleryImage {
  url: string
  alt: string
  span?: 'tall' | 'wide' | 'normal'
}

interface Project {
  id: string
  category: string
  title: string
  subtitle: string
  accentColor: string
  tagBg: string
  tagText: string
  images: GalleryImage[]
}

// ── Project Data ───────────────────────────────────────────────────────────────
const PROJECTS: Project[] = [
  {
    id: 'living',
    category: 'Living Spaces',
    title: 'Living Room Transformations',
    subtitle: 'Bold accent walls, calming neutrals, and dramatic colour shifts that redefine how a room feels.',
    accentColor: '#c0392b',
    tagBg: '#fee2e2',
    tagText: '#991b1b',
    images: [
      {
        url: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/b820bb9fb11857f66f8d385e8a65a0dfc10f0b4f.jpg',
        alt: 'Living room before & after white paint transformation',
        span: 'wide',
      },
      {
        url: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/37a3eb27237118fb99b54e2e5762b3fa51a8b827.jpg',
        alt: 'Orange accent wall living room',
        span: 'tall',
      },
      {
        url: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/b08f447f7b8a85b93e2316cb8b62cb9df14d7e11.jpg',
        alt: 'Vibrant red wall living room transformation',
        span: 'normal',
      },
      {
        url: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/a7965f28faa624dc26eb2e12b2de9baa8f879429.jpg',
        alt: 'White marble fireplace accent wall luxury living room',
        span: 'tall',
      },
      {
        url: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/a24263839a90bc96abf6590e80138a87670f2498.jpg',
        alt: 'Living room transformation dark blue to white walls',
        span: 'normal',
      },
    ],
  },
  {
    id: 'bedroom',
    category: 'Bedrooms',
    title: 'Bedroom Makeovers',
    subtitle: 'From serene neutrals to rich jewel tones — bedrooms that finally feel like a retreat.',
    accentColor: '#1d4ed8',
    tagBg: '#dbeafe',
    tagText: '#1e40af',
    images: [
      {
        url: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/9aad0b5c8c0529f1ff830ba932eaa14de0616a89.jpg',
        alt: 'Navy blue panelled bedroom walls',
        span: 'wide',
      },
      {
        url: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/5bb2ebcc2944b0906bc839095eb30b6470296e27.jpg',
        alt: 'Beige terracotta bedroom interior design India',
        span: 'tall',
      },
      {
        url: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/0f3a4870c09446178c43ad268333f911b1c4b89d.jpg',
        alt: 'Modern bedroom wall painting design',
        span: 'normal',
      },
      {
        url: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/113389e516c1f9c7bd73c79b7259647a532beb50.jpg',
        alt: 'Black accent wall dining area',
        span: 'normal',
      },
      {
        url: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/78f19d7e6bf9621defaea35240910e9f088922f1.jpg',
        alt: 'Elegant dining room interior',
        span: 'tall',
      },
    ],
  },
  {
    id: 'kitchen',
    category: 'Kitchens & Dining',
    title: 'Kitchen & Dining Spaces',
    subtitle: 'Crisp whites, warm greys, and pops of colour that make cooking and dining a joy.',
    accentColor: '#15803d',
    tagBg: '#dcfce7',
    tagText: '#166534',
    images: [
      {
        url: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/d02109fb483a5832d5b81ed41bd002d71f1e8661.jpg',
        alt: 'Modern white kitchen renovation',
        span: 'wide',
      },
      {
        url: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/6004433565c815260cb3ba602555dce10587a9e0.jpg',
        alt: 'Colourful kitchen paint and wallpaper renovation',
        span: 'tall',
      },
      {
        url: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/ff77ff4fa5b3c56a2b89e4252d31dbdd37340054.jpg',
        alt: 'Light grey kitchen walls and cabinets',
        span: 'normal',
      },
      {
        url: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/6b15558ac681d83c5e389d46ec447b6e2373edb4.jpg',
        alt: 'Abstract art on dining room dark wall',
        span: 'normal',
      },
      {
        url: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/66b01e3a180f60cf2e09b71ae6a87064c29b3e7c.jpg',
        alt: 'Warm kitchen interior paint transformation',
        span: 'tall',
      },
    ],
  },
]

// ── Bento Image Grid ───────────────────────────────────────────────────────────
function BentoGrid({ images }: { images: GalleryImage[] }) {
  // Layout: first image wide (2 cols), others fill in a smart 3-col grid
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 w-full">
      {images.map((img, i) => {
        const isWide = img.span === 'wide'
        const isTall = img.span === 'tall'
        return (
          <div
            key={i}
            className={[
              'overflow-hidden rounded-2xl bg-slate-100 group relative',
              isWide ? 'col-span-2' : 'col-span-1',
              isTall ? 'row-span-2' : 'row-span-1',
            ].join(' ')}
            style={{ aspectRatio: isWide ? '16/7' : isTall ? '3/4' : '4/3' }}
          >
            <img
              src={img.url}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            {/* Hover caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
              <span className="text-white text-xs md:text-sm font-medium leading-snug drop-shadow-md">{img.alt}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ── Project Block ──────────────────────────────────────────────────────────────
function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useInView(0.08)
  return (
    <div
      ref={ref}
      className="flex flex-col gap-5"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.75s ${index * 0.12}s ease, transform 0.75s ${index * 0.12}s ease`,
      }}
    >
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div className="flex flex-col gap-2">
          {/* Category pill */}
          <span
            className="self-start text-[11px] font-mono font-medium tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: project.tagBg, color: project.tagText }}
          >
            {project.category}
          </span>
          <h3
            className="text-[24px] md:text-[30px] font-semibold leading-tight text-[#051A24] tracking-tight"
            style={{ fontFamily: "'PP Mondwest','Georgia',serif" }}
          >
            {project.title}
          </h3>
          <p className="text-sm text-[#051A24]/60 max-w-md leading-relaxed">{project.subtitle}</p>
        </div>
        {/* Image count badge */}
        <span className="text-xs font-mono text-[#051A24]/30 whitespace-nowrap pb-1">
          {project.images.length} photos
        </span>
      </div>

      {/* Bento grid */}
      <BentoGrid images={project.images} />

      {/* Divider — not after last */}
      {index < PROJECTS.length - 1 && (
        <div className="mt-4 border-t border-[#051A24]/8" />
      )}
    </div>
  )
}

// ── Section ────────────────────────────────────────────────────────────────────
export default function ProjectsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-24" id="projects">
      {/* Section title */}
      <div className="mb-12 md:mb-16">
        <div className="text-xs font-mono text-[#051A24]/40 tracking-widest uppercase mb-3">Portfolio</div>
        <h2
          className="text-[32px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.1] tracking-tight text-[#051A24]"
          style={{ fontFamily: "'PP Mondwest','Georgia',serif" }}
        >
          Interior Transformation
          <br />
          <span className="text-[#051A24]/40">Gallery</span>
        </h2>
        <p className="text-sm md:text-base text-[#051A24]/55 mt-4 max-w-lg leading-relaxed">
          Explore our stunning home transformation projects — every room, every finish,
          brought to life with the right paint and the right expertise.
        </p>
      </div>

      {/* Project blocks */}
      <div className="flex flex-col gap-16 md:gap-24">
        {PROJECTS.map((p, i) => (
          <ProjectBlock key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
