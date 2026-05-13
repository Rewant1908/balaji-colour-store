import React from 'react'
import Button from './Button'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

const BOOK_URL = 'https://halaskastudio.com/./book'

export default function PricingSection() {
  const { ref, inView } = useInViewAnimation()
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-4xl md:ml-auto">
        <div className={`bg-[#051A24] rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 flex flex-col gap-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s', boxShadow: 'inset 0 2px 16px 0 rgba(255,255,255,0.04)' }}>
          <div>
            <p className="text-[22px] font-medium text-[#F6FCFF] mt-4">Monthly Partnership</p>
            <p className="text-sm text-[#E0EBF0] mt-2 leading-relaxed">A dedicated creative design team.<br />You work directly with Viktor.</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-[#F6FCFF]">$5,000</p>
            <p className="text-xs text-[#E0EBF0] mt-1">Monthly</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href={BOOK_URL} variant="secondary">Start a chat</Button>
            <Button href={BOOK_URL} variant="tertiary">How it works</Button>
          </div>
        </div>
        <div className={`bg-white rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 flex flex-col gap-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div>
            <p className="text-[22px] font-medium text-[#0D212C] mt-4">Custom Project</p>
            <p className="text-sm text-[#273C46] mt-2 leading-relaxed">Fixed scope, fixed timeline.<br />Same team, same standards.</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-[#0D212C]">$5,000</p>
            <p className="text-xs text-[#273C46] mt-1">Minimum</p>
          </div>
          <Button href={BOOK_URL} variant="primary">Start a chat</Button>
        </div>
      </div>
    </section>
  )
}