import React from 'react'
import Button from './Button'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <Button href="https://halaskastudio.com/./book" variant="primary">Start a chat</Button>
        <div className="flex items-start gap-8">
          <ArrowUpRight className="w-5 h-5 text-[#051A24] mt-0.5 flex-shrink-0" />
          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              {['Services','Work','About'].map(l => <a key={l} href={`#${l.toLowerCase()}`} className="text-base text-[#051A24] hover:opacity-70 transition-opacity">{l}</a>)}
            </div>
            <div className="flex flex-col gap-2">
              {[{ label: 'x.com', href: 'https://x.com' },{ label: 'LinkedIn', href: 'https://linkedin.com' }].map(l => <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">{l.label}</a>)}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}