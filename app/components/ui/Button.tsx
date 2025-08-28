'use client'

import Link from 'next/link'
import { ReactNode, forwardRef } from 'react'

/**
 * Button Component - Unified button system with consistent styling
 * 
 * @component
 * @example
 * // Primary button (default)
 * <Button variant="primary" size="md">Click me</Button>
 * 
 * // Secondary button with border
 * <Button variant="secondary" size="lg">Learn more</Button>
 * 
 * // Header-style button (exact header styling)
 * <Button variant="header" size="md">Start now</Button>
 * 
 * // Ghost button for minimal styling
 * <Button variant="ghost" size="sm">Cancel</Button>
 * 
 * // Outline button with fill on hover
 * <Button variant="outline" size="md">Download</Button>
 * 
 * // Disabled state
 * <Button variant="primary" disabled>Processing...</Button>
 * 
 * // With href (renders as Link)
 * <Button href="/about" variant="primary">About Us</Button>
 */
interface ButtonProps {
  /** URL for link buttons - renders as Next.js Link when provided */
  href?: string
  /** Button style variant */
  variant?: 'primary' | 'secondary' | 'header' | 'ghost' | 'outline'
  /** Button size */
  size?: 'sm' | 'md' | 'lg'
  /** Button content */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Click handler for button elements */
  onClick?: () => void
  /** Disabled state */
  disabled?: boolean
  /** Button type for form submissions */
  type?: 'button' | 'submit' | 'reset'
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  ...props
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-cosmic/50 focus:ring-offset-2 focus:ring-offset-midnight disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none'
  
  const sizeClasses = {
    sm: 'px-4 py-2.5 text-xs rounded-md',
    md: 'px-6 py-3 text-sm rounded-lg',
    lg: 'px-8 py-4 text-base rounded-xl'
  }

  const variantClasses = {
    // Primary - Solid gradient button with hover effects
    primary: 'bg-gradient-to-r from-cosmic to-andromeda hover:from-andromeda hover:to-orion text-white shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100 disabled:hover:shadow-lg',
    
    // Secondary - Transparent with border, subtle hover
    secondary: 'bg-transparent hover:bg-cosmic/10 text-white border border-cosmic/30 hover:border-cosmic/50 hover:scale-105 disabled:hover:scale-100',
    
    // Header - The exact style from the header (gradient with specific hover)
    header: 'bg-gradient-to-r from-cosmic to-andromeda hover:from-andromeda hover:to-orion text-white shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100 disabled:hover:shadow-lg',
    
    // Ghost - Minimal transparent button
    ghost: 'text-white/70 hover:text-white hover:bg-white/10 disabled:hover:bg-transparent',
    
    // Outline - Bordered button with fill on hover
    outline: 'border-2 border-cosmic text-cosmic hover:bg-cosmic hover:text-white disabled:hover:bg-transparent disabled:hover:text-cosmic'
  }

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <Link 
        href={href}
        className={classes}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...props}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
