'use client'

import { useEffect, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimationProviderProps {
  children: ReactNode
}

export default function AnimationProvider({ children }: AnimationProviderProps) {
  useEffect(() => {
    // Initialize GSAP animations
    const ctx = gsap.context(() => {
      // Set default ease
      gsap.set('.animate-on-scroll', { 
        opacity: 0, 
        y: 30 
      })

      // Create scroll-triggered animations for all sections
      gsap.utils.toArray('.animate-on-scroll').forEach((element: any) => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        })
      })

      // Enhanced hero text animation - fin.ai style
      const heroTl = gsap.timeline({ delay: 0.5 })
      
      // Animate main headline with character-by-character reveal
      const headline = document.querySelector('.hero-headline')
      if (headline) {
        // Split text into characters for staggered animation
        const text = headline.textContent || ''
        headline.innerHTML = text.split('').map(char => 
          char === ' ' ? ' ' : `<span class="char">${char}</span>`
        ).join('')
        
        gsap.fromTo('.char', 
          { 
            opacity: 0, 
            y: 50,
            rotationX: -90
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
            stagger: 0.03,
            delay: 0.2
          }
        )
      }

      // Animate subheadline
      heroTl.from('.hero-subheadline', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power2.out'
      }, '-=0.3')

      // Animate CTA button with bounce effect
      heroTl.from('.hero-button', {
        opacity: 0,
        y: 30,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)'
      }, '-=0.2')

      // Animate trust indicators
      heroTl.from('.trust-indicators', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.1')

      // Animate scroll indicator
      heroTl.from('.scroll-indicator', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.1')

      // Add floating animation to scroll indicator
      gsap.to('.scroll-indicator', {
        y: -10,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      })
    })

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return <>{children}</>
}
