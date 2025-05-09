'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface JellyButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode
  variant?: 'default' | 'glow'
}

export default function JellyButton({
  children,
  variant = 'default',
  className,
  ...props
}: JellyButtonProps) {
  const rippleRef = useRef<HTMLSpanElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ripple = rippleRef.current
    if (!ripple) return

    const rect = e.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    ripple.classList.remove('animate-ripple')
    void ripple.offsetWidth
    ripple.classList.add('animate-ripple')
  }

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        'relative overflow-hidden px-6 py-2 rounded-full border transition-all duration-300 font-semibold',
        'focus:outline-none focus:ring-2 focus:ring-cyan-400',
        variant === 'glow'
          ? 'border-cyan-400 text-cyan-300 shadow-[0_0_15px_#22d3ee]'
          : 'border-white text-white hover:text-cyan-200',
        'hover:shadow-[0_0_20px_#0ff]',
        className
      )}
      {...props}
    >
      <span
        ref={rippleRef}
        className="ripple-span absolute rounded-full bg-white/30 pointer-events-none z-0"
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
