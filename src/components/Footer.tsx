import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Button } from './Button'

export const Footer: React.FC = () => {
  return (
    <footer className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left CTA */}
        <Button variant="primary">Start a chat</Button>

        {/* Right nav */}
        <div className="flex items-center gap-6">
          <ArrowUpRight className="w-5 h-5 text-[#051A24] flex-shrink-0" />

          {/* Column 1 */}
          <div className="flex flex-col gap-2">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Work', href: '#work' },
              { label: 'About', href: '#about' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            {[
              { label: 'x.com', href: 'https://x.com' },
              { label: 'LinkedIn', href: 'https://linkedin.com' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
