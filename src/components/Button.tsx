import React from 'react'

type Variant = 'primary' | 'secondary' | 'tertiary'
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  href?: string
  children: React.ReactNode
}

const shadows = {
  primary: '0 1px 2px 0 rgba(5,26,36,0.1),0 4px 4px 0 rgba(5,26,36,0.09),0 9px 6px 0 rgba(5,26,36,0.05),0 17px 7px 0 rgba(5,26,36,0.01),0 26px 7px 0 rgba(5,26,36,0),inset 0 2px 8px 0 rgba(255,255,255,0.5)',
  secondary: '0 0 0 0.5px rgba(0,0,0,0.05),0 4px 30px rgba(0,0,0,0.08)',
  tertiary: '0 0 0 0.5px rgba(0,0,0,0.05),0 4px 30px rgba(0,0,0,0.08),inset 0 2px 8px 0 rgba(255,255,255,0.5)',
}

export default function Button({ variant = 'primary', href, children, className = '', ...props }: Props) {
  const base = 'inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-transform hover:scale-[1.03] cursor-pointer select-none'
  const styles = {
    primary: 'bg-[#051A24] text-white',
    secondary: 'bg-white text-[#051A24]',
    tertiary: 'bg-white text-[#051A24]',
  }
  const cls = `${base} ${styles[variant]} ${className}`
  if (href) return <a href={href} className={cls} style={{ boxShadow: shadows[variant] }}>{children}</a>
  return <button className={cls} style={{ boxShadow: shadows[variant] }} {...props}>{children}</button>
}