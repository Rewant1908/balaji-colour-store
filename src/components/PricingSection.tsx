import React from 'react'
import { Button } from './Button'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

const primaryShadow =
  '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0), inset 0 2px 8px 0 rgba(255,255,255,0.5)'

export const PricingSection: React.FC = () => {
  const { ref, inView } = useInViewAnimation()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="w-full py-12 px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-4xl md:ml-auto">
        {/* Card 1 — Dark */}
        <div
          className={`rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 flex flex-col gap-6 ${
            inView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{
            background: '#051A24',
            boxShadow: 'inset 0 2px 32px 0 rgba(255,255,255,0.04)',
            animationDelay: '0.1s',
          }}
        >
          <div>
            <p className="text-[#E0EBF0] text-[22px] font-medium mt-6">Monthly Partnership</p>
            <p className="text-[#E0EBF0]/70 text-sm mt-2 leading-relaxed">
              A dedicated creative design team.<br />You work directly with Viktor.
            </p>
          </div>
          <div>
            <p className="text-[#F6FCFF] text-2xl font-semibold">$5,000</p>
            <p className="text-[#E0EBF0]/60 text-sm">Monthly</p>
          </div>
          <div className="flex flex-col gap-3">
            <Button variant="primary" href="https://halaskastudio.com/./book">Start a chat</Button>
            <Button variant="secondary" href="https://halaskastudio.com/./book">How it works</Button>
          </div>
        </div>

        {/* Card 2 — Light */}
        <div
          className={`rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 flex flex-col gap-6 bg-white ${
            inView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            animationDelay: '0.2s',
          }}
        >
          <div>
            <p className="text-[#0D212C] text-[22px] font-medium mt-6">Custom Project</p>
            <p className="text-[#051A24]/70 text-sm mt-2 leading-relaxed">
              Fixed scope, fixed timeline.<br />Same team, same standards.
            </p>
          </div>
          <div>
            <p className="text-[#0D212C] text-2xl font-semibold">$5,000</p>
            <p className="text-[#051A24]/60 text-sm">Minimum</p>
          </div>
          <div>
            <Button
              variant="tertiary"
              style={{ boxShadow: `${primaryShadow}, 0 0 0 0.5px rgba(0,0,0,0.05)` }}
            >
              Start a chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
