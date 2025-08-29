'use client'

import { useState, useEffect } from 'react'

interface FloatingInfoBoxProps {
  position: 'left' | 'right'
  title: string
  description: string
  icon: React.ReactNode
  gradientColors: {
    from: string
    via: string
    to: string
  }
  accentColor: string
}

export default function FloatingInfoBox({
  position,
  title,
  description,
  icon,
  gradientColors,
  accentColor
}: FloatingInfoBoxProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [meteorPosition, setMeteorPosition] = useState(0)

  // Meteor animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setMeteorPosition(prev => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      className={`relative group transition-all duration-500 hover:scale-105 ${
        position === 'left' 
          ? 'lg:mr-8 xl:mr-12 2xl:mr-16' 
          : 'lg:ml-8 xl:ml-12 2xl:ml-16'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient with Aurora Effects */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradientColors.from} ${gradientColors.via} ${gradientColors.to} blur-sm opacity-80 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Aurora Streams */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        {/* Primary Aurora Stream */}
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-${accentColor}/20 to-transparent animate-pulse opacity-60`}></div>
        
        {/* Secondary Aurora Stream */}
        <div className={`absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-r from-transparent via-${accentColor}/15 to-transparent animate-pulse opacity-40`} style={{animationDelay: '2s'}}></div>
        
        {/* Diagonal Aurora */}
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-${accentColor}/10 to-transparent animate-pulse opacity-30`} style={{animationDelay: '4s'}}></div>
      </div>

      {/* Meteor Stars */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        {/* Meteor 1 */}
        <div 
          className={`absolute w-1 h-1 bg-white rounded-full shadow-lg animate-pulse`}
          style={{
            top: `${meteorPosition}%`,
            left: `${20 + Math.sin(meteorPosition * 0.1) * 30}%`,
            animationDelay: '0s'
          }}
        ></div>
        
        {/* Meteor 2 */}
        <div 
          className={`absolute w-0.5 h-0.5 bg-${accentColor} rounded-full shadow-lg animate-pulse`}
          style={{
            top: `${(meteorPosition + 30) % 100}%`,
            left: `${60 + Math.sin((meteorPosition + 30) * 0.1) * 20}%`,
            animationDelay: '1s'
          }}
        ></div>
        
        {/* Meteor 3 */}
        <div 
          className={`absolute w-0.5 h-0.5 bg-white rounded-full shadow-lg animate-pulse`}
          style={{
            top: `${(meteorPosition + 60) % 100}%`,
            left: `${40 + Math.sin((meteorPosition + 60) * 0.1) * 25}%`,
            animationDelay: '2s'
          }}
        ></div>
      </div>

      {/* Floating Content Card */}
      <div className="relative z-10 bg-black/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
        {/* Icon */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-${accentColor} to-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-${accentColor}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-${accentColor} rounded-full animate-ping`}
            style={{
              top: `${20 + i * 10}%`,
              left: `${15 + i * 8}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
