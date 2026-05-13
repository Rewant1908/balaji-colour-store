import React from 'react'
import Button from './Button'

export default function BottomNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white rounded-full px-8 py-2 flex items-center gap-4"
      style={{ boxShadow: '0 1px 2px 0 rgba(5,26,36,0.1),0 4px 16px 0 rgba(5,26,36,0.12),0 0 0 0.5px rgba(0,0,0,0.05),inset 0 2px 8px 0 rgba(255,255,255,0.8)' }}>
      <span className="text-2xl font-semibold text-[#051A24]" style={{ fontFamily: "'PP Mondwest','Georgia',serif" }}>V</span>
      <Button href="https://halaskastudio.com/./book" variant="primary" className="py-2 px-6 text-sm">Start a chat</Button>
    </div>
  )
}