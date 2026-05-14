import { motion } from "motion/react";
import {
  Music2,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";

const navLinks = [
  {
    header: "Discover",
    links: [
      "Labs & Workshops",
      "Deep Dive Series",
      "Global Circle",
      "Resource Vault",
      "Future Roadmap",
    ],
  },
  {
    header: "The Mission",
    links: ["Origin Story", "The Collective", "Newsroom Hub", "Join the Team"],
  },
  {
    header: "Concierge",
    links: [
      "Get in Touch",
      "Legal Privacy",
      "User Agreement",
      "Report Concern",
    ],
  },
];

const socialLinks = [
  { icon: Music2, label: "Music" },
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "YouTube" },
  { icon: Instagram, label: "Instagram" },
];

export default function App() {
  return (
    <main className="relative w-full min-h-[115vh] overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white">
      {/* Fixed Video Background */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-[0]"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 flex flex-col flex-1 pb-8 md:pb-12">
        {/* CTA Placeholder */}
        <div className="flex flex-col items-center justify-center py-32 md:py-48 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight tracking-tight mb-6"
          >
            See the world<br />with clarity.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="text-white/60 text-base md:text-lg max-w-md mb-10"
          >
            Premium insight on global events and cosmic wonders — always free.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: "easeOut" }}
            className="liquid-glass rounded-full px-8 py-3 text-white text-sm tracking-wide hover:bg-white/10 transition-colors cursor-pointer"
          >
            Start Exploring
          </motion.button>
        </div>

        {/* Liquid Glass Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="liquid-glass w-full rounded-3xl p-6 md:p-10 text-white/70 mt-32 md:mt-64"
        >
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">
            {/* Brand Column */}
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
              <p className="text-sm leading-relaxed max-w-sm text-white/60">
                Lumina provides premium clarity on global events and cosmic
                wonders — shared with all for free.
              </p>
            </div>

            {/* Links Grid */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {navLinks.map((col) => (
                <div key={col.header}>
                  <h4 className="text-sm uppercase tracking-wider text-white font-medium mb-4">
                    {col.header}
                  </h4>
                  <ul className="space-y-2">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-xs hover:text-white transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            {/* Left */}
            <p className="text-[10px] uppercase tracking-widest opacity-50">
              Curated by @GotInGeorgiG
            </p>

            {/* Right */}
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-widest opacity-50">
                Join the Journey:
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="opacity-70 hover:opacity-100 transition-colors hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}
