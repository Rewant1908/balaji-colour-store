import { motion } from 'motion/react'
import { Music2, Facebook, Twitter, Youtube, Instagram } from 'lucide-react'

const footerLinks = [
  {
    heading: 'Discover',
    links: ['Labs & Workshops', 'Deep Dive Series', 'Global Circle', 'Resource Vault', 'Future Roadmap'],
  },
  {
    heading: 'The Mission',
    links: ['Origin Story', 'The Collective', 'Newsroom Hub', 'Join the Team'],
  },
  {
    heading: 'Concierge',
    links: ['Get in Touch', 'Legal Privacy', 'User Agreement', 'Report Concern'],
  },
]

const socialLinks = [
  { Icon: Music2,    label: 'Music' },
  { Icon: Facebook,  label: 'Facebook' },
  { Icon: Twitter,   label: 'Twitter' },
  { Icon: Youtube,   label: 'YouTube' },
  { Icon: Instagram, label: 'Instagram' },
]

export default function Lumina() {
  return (
    <main className="relative w-full min-h-[115vh] overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white">

      {/* ── Fixed video background ── */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-[0]"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ── Subtle dark overlay ── */}
      <div className="fixed inset-0 z-[1] bg-black/30 pointer-events-none" />

      {/* ── Content wrapper ── */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 flex flex-col flex-1">

        {/* ── Upper CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center pt-32 pb-12 text-center"
        >
          <p className="text-[11px] uppercase tracking-widest text-white/50 mb-6">
            Est. 2024 &nbsp;&bull;&nbsp; Global Intelligence Network
          </p>
          <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.05] mb-6">
            Clarity for the
            <br />
            <span className="text-white/50">curious mind</span>
          </h1>
          <p className="text-white/50 text-base md:text-lg max-w-xl leading-relaxed mb-10">
            Premium insight on global events and cosmic wonders —
            curated and shared with the world, always free.
          </p>
          <a
            href="#"
            className="liquid-glass inline-flex items-center gap-2 px-8 py-3 rounded-full text-white text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Explore Now
          </a>
        </motion.div>

        {/* ── Footer ── */}
        <motion.footer
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="liquid-glass w-full rounded-3xl p-6 md:p-10 text-white/70 mt-32 md:mt-64"
        >
          {/* Top grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">

            {/* Brand column */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 text-white mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  aria-label="Lumina logo"
                >
                  <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" />
                </svg>
                <span className="text-xl font-medium tracking-widest">LUMINA</span>
              </div>
              <p className="text-sm leading-relaxed max-w-sm">
                Lumina provides premium clarity on global events and cosmic
                wonders — shared with all for free.
              </p>
            </div>

            {/* Link columns */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {footerLinks.map((col) => (
                <div key={col.heading}>
                  <h3 className="text-sm uppercase tracking-wider text-white font-medium mb-4">
                    {col.heading}
                  </h3>
                  <ul className="space-y-2">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-xs hover:text-white transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            <p className="text-[10px] uppercase tracking-widest opacity-50">
              Curated by @GotInGeorgiG
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-widest opacity-50">
                Join the Journey:
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="opacity-70 hover:opacity-100 transition-opacity hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.footer>

        <div className="h-12" />
      </div>
    </main>
  )
}
