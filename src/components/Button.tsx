import React from 'react'

type Variant = 'primary' | 'secondary' | 'tertiary'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  href?: string
  children: React.ReactNode
}

const primaryShadow =
  '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0), inset 0 2px 8px 0 rgba(255,255,255,0.5)'
const secondaryShadow =
  '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08)'

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  children,
  className = '',
  style,
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm transition-all duration-200 cursor-pointer select-none'

  const variants: Record<Variant, { cls: string; shadow: string }> = {
    primary: {
      cls: 'bg-[#051A24] text-white px-7 py-3',
      shadow: primaryShadow,
    },
    secondary: {
      cls: 'bg-white text-[#051A24] px-7 py-3',
      shadow: secondaryShadow,
    },
    tertiary: {
      cls: 'bg-white text-[#051A24] px-7 py-3',
      shadow: `${secondaryShadow}, ${primaryShadow}`,
    },
  }

  const { cls, shadow } = variants[variant]

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${cls} ${className}`}
        style={{ boxShadow: shadow, ...style }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={`${base} ${cls} ${className}`}
      style={{ boxShadow: shadow, ...style }}
      {...props}
    >
      {children}
    </button>
  )
}
