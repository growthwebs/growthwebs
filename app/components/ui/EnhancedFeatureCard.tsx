'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

interface EnhancedFeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
  accentColor: string
  index: number
}

export default function EnhancedFeatureCard({
  icon,
  title,
  description,
  gradientFrom,
  gradientTo,
  accentColor,
  index
}: EnhancedFeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  
  // 3D motion values - Match chat window subtlety exactly
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [3, -3])  // Ultra-subtle: reduced from 8 to 3 degrees
  const rotateY = useTransform(x, [-100, 100], [-3, 3])  // Ultra-subtle: reduced from 8 to 3 degrees
  
  // Spring animations - Match chat window smoothness
  const springConfig = { damping: 30, stiffness: 500 }  // Even smoother motion like chat window
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)
  const springScale = useSpring(1, springConfig)  // No scaling on hover - matches ApproachSection
  const springZ = useSpring(isHovered ? 4 : 0, springConfig)  // Ultra-subtle: reduced from 8 to 4

  // Intersection observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      {/* 3D Card Container */}
      <motion.div
        className="relative h-full"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          scale: springScale,
          z: springZ,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Enhanced Card Background */}
        <div className="relative h-full min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[320px] xl:min-h-[360px] 2xl:min-h-[400px] bg-gradient-to-br from-white/5 via-white/8 to-white/3 backdrop-blur-2xl border border-white/20 rounded-3xl p-5 xs:p-6 sm:p-8 overflow-hidden group-hover:border-white/40 transition-all duration-700">
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-25 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent transform rotate-45 scale-150 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] group-hover:bg-[length:19px_19px] transition-all duration-1000" />
          </div>

          {/* Glowing Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Enhanced Icon Container */}
          <div className="relative mb-5 xs:mb-6 group-hover:mb-8 transition-all duration-500">
            {/* Icon Background with 3D Effect */}
            <div className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-2xl border border-white/20 flex items-center justify-center group-hover:rotate-0.5 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
              {/* Icon Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className="relative z-10 text-white group-hover:text-white/90 transition-colors duration-300">
                {icon}
              </div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
                    style={{
                      top: `${20 + i * 20}%`,
                      left: `${20 + i * 20}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Energy Pulse Ring */}
            <div className={`absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-2xl opacity-20 group-hover:opacity-40 scale-150 transition-all duration-1000 blur-sm`} />
          </div>

          {/* Enhanced Content */}
          <div className="relative z-10">
            {/* Title with Glow Effect */}
            <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-white mb-4 xs:mb-5 group-hover:mb-6 transition-all duration-500">
              {title}
              <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo} blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
            </h3>
            
            {/* Description with Enhanced Typography */}
            <p className="text-white/80 text-sm xs:text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-500 group-hover:leading-relaxed">
              {description}
            </p>
          </div>

          {/* Interactive Energy Lines */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {/* Top Energy Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
            
            {/* Right Energy Line */}
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 origin-top" />
            
            {/* Bottom Energy Line */}
            <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-right" />
            
            {/* Left Energy Line */}
            <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-transparent via-white/30 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 origin-bottom" />
          </div>

          {/* Corner Accents */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full group-hover:bg-white/40 transition-colors duration-500" />
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/20 rounded-full group-hover:bg-white/40 transition-colors duration-500" />
        </div>
      </motion.div>
    </motion.div>
  )
}
