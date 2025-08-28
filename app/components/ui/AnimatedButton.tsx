'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface AnimatedButtonProps {
  href: string
  variant?: 'primary' | 'secondary'
  children: ReactNode
  className?: string
}

export default function AnimatedButton({ 
  href, 
  variant = 'primary', 
  children, 
  className = '' 
}: AnimatedButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-glow focus:ring-offset-2 focus:ring-offset-primary-background'
  
  const variantClasses = {
    primary: 'bg-accent-glow text-primary-background hover:bg-accent-glow/90 hover:shadow-lg hover:shadow-accent-glow/25',
    secondary: 'border-2 border-accent-glow text-accent-glow hover:bg-accent-glow hover:text-primary-background'
  }

  return (
    <Link 
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
