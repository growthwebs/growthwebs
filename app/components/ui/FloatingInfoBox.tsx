'use client'

import { useState, useEffect, useRef } from 'react'

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
  const [auroraPhase, setAuroraPhase] = useState(0)
  const [electricPulse, setElectricPulse] = useState(0)
  const boxRef = useRef<HTMLDivElement>(null)

  // Color mapping to avoid dynamic class generation
  const getAccentColorClasses = (type: 'bg' | 'border' | 'text' | 'shadow') => {
    const colorMap = {
      yellow: {
        bg: 'bg-yellow-500',
        border: 'border-yellow-500',
        text: 'text-yellow-500',
        shadow: 'shadow-yellow-500'
      },
      blue: {
        bg: 'bg-blue-500',
        border: 'border-blue-500',
        text: 'text-blue-500',
        shadow: 'shadow-blue-500'
      },
      orange: {
        bg: 'bg-orange-500',
        border: 'border-orange-500',
        text: 'text-orange-500',
        shadow: 'shadow-orange-500'
      },
      pink: {
        bg: 'bg-pink-500',
        border: 'border-pink-500',
        text: 'text-pink-500',
        shadow: 'shadow-pink-500'
      },
      purple: {
        bg: 'bg-purple-500',
        border: 'border-purple-500',
        text: 'text-purple-500',
        shadow: 'shadow-purple-500'
      }
    }
    
    return colorMap[accentColor as keyof typeof colorMap]?.[type] || 'bg-blue-500'
  }

  // Complex animation effects
  useEffect(() => {
    const meteorInterval = setInterval(() => {
      setMeteorPosition(prev => (prev + 1) % 100)
    }, 30)

    const auroraInterval = setInterval(() => {
      setAuroraPhase(prev => (prev + 0.5) % 360)
    }, 50)

    const electricInterval = setInterval(() => {
      setElectricPulse(prev => (prev + 1) % 100)
    }, 80)

    return () => {
      clearInterval(meteorInterval)
      clearInterval(auroraInterval)
      clearInterval(electricInterval)
    }
  }, [])

  return (
    <div 
      ref={boxRef}
      className={`relative group transition-all duration-700 hover:scale-105 ${
        position === 'left' 
          ? 'lg:mr-4 xl:mr-6 2xl:mr-8' 
          : 'lg:ml-4 xl:ml-6 2xl:ml-8'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Electric Circuit Board Background */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        {/* Circuit Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(59,130,246,0.1)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_49%,rgba(59,130,246,0.1)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
        
        {/* Animated Circuit Nodes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1.5 h-1.5 ${getAccentColorClasses('bg')} rounded-full animate-pulse`}
            style={{
              top: `${15 + (i * 7) % 70}%`,
              left: `${20 + (i * 8) % 60}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '2s'
            }}
          ></div>
        ))}
      </div>

      {/* Dynamic Aurora Borealis Effects */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        {/* Primary Aurora Stream - Complex Wave */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-500/80 to-transparent"
          style={{
            transform: `skewY(${Math.sin(auroraPhase * Math.PI / 180) * 15}deg) scaleY(${1.2 + Math.sin(auroraPhase * Math.PI / 90) * 0.3})`,
            opacity: 0.9 + Math.sin(auroraPhase * Math.PI / 180) * 0.1
          }}
        ></div>
        
        {/* Secondary Aurora - Diagonal Wave */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-500/70 to-transparent"
          style={{
            transform: `rotate(${auroraPhase}deg) scale(${1.1 + Math.sin(auroraPhase * Math.PI / 120) * 0.2})`,
            opacity: 0.8 + Math.sin(auroraPhase * Math.PI / 180) * 0.2
          }}
        ></div>
        
        {/* Tertiary Aurora - Spiral Effect */}
        <div 
          className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
          style={{
            transform: `rotate(${auroraPhase * 2}deg) scale(${0.8 + Math.sin(auroraPhase * Math.PI / 60) * 0.4})`,
            opacity: 0.7 + Math.sin(auroraPhase * Math.PI / 90) * 0.3
          }}
        ></div>
      </div>

      {/* Electric Energy Field */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        {/* Pulsing Energy Ring */}
        <div 
          className={`absolute inset-2 border-2 ${getAccentColorClasses('border')} rounded-2xl animate-pulse`}
          style={{
            animationDuration: '1.5s',
            opacity: 0.3 + Math.sin(electricPulse * Math.PI / 50) * 0.7
          }}
        ></div>
        
        {/* Electric Arc Effects */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-0.5 h-8 bg-gradient-to-b from-${accentColor} via-white to-${accentColor} rounded-full`}
            style={{
              top: `${20 + i * 12}%`,
              left: `${15 + i * 10}%`,
              transform: `rotate(${45 + i * 30}deg)`,
              opacity: 0.4 + Math.sin((electricPulse + i * 20) * Math.PI / 50) * 0.6,
              animationDelay: `${i * 0.1}s`
            }}
          ></div>
        ))}
      </div>

      {/* Meteor Stars with Electric Trails */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        {/* Meteor 1 - Main Trail */}
        <div 
          className={`absolute w-1 h-1 bg-white rounded-full shadow-lg`}
          style={{
            top: `${meteorPosition}%`,
            left: `${20 + Math.sin(meteorPosition * 0.1) * 30}%`,
            boxShadow: `0 0 10px ${accentColor}, 0 0 20px ${accentColor}, 0 0 30px ${accentColor}`
          }}
        ></div>
        
        {/* Electric Trail 1 */}
        <div 
          className={`absolute w-0.5 h-6 bg-gradient-to-b from-white via-blue-500 to-transparent rounded-full`}
          style={{
            top: `${meteorPosition - 3}%`,
            left: `${20 + Math.sin((meteorPosition - 3) * 0.1) * 30}%`,
            opacity: 0.6
          }}
        ></div>
        
        {/* Meteor 2 - Secondary */}
        <div 
          className={`absolute w-0.5 h-0.5 ${getAccentColorClasses('bg')} rounded-full shadow-lg`}
          style={{
            top: `${(meteorPosition + 40) % 100}%`,
            left: `${60 + Math.sin((meteorPosition + 40) * 0.1) * 20}%`,
            boxShadow: `0 0 8px ${getAccentColorClasses('bg').replace('bg-', '')}, 0 0 16px ${getAccentColorClasses('bg').replace('bg-', '')}`
          }}
        ></div>
        
        {/* Meteor 3 - Fast Moving */}
        <div 
          className={`absolute w-0.5 h-0.5 bg-white rounded-full shadow-lg`}
          style={{
            top: `${meteorPosition * 1.5}%`,
            left: `${40 + Math.sin((meteorPosition * 1.5) * 0.1) * 25}%`,
            boxShadow: `0 0 12px ${getAccentColorClasses('bg').replace('bg-', '')}, 0 0 24px ${getAccentColorClasses('bg').replace('bg-', '')}`
          }}
        ></div>
      </div>

      {/* Floating Content Card with Electric Border */}
      <div className="relative z-10 bg-black/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden">
        
        {/* Electric Border Effect */}
        <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500/50 via-white/30 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent transform rotate-45 scale-150 group-hover:scale-200 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] group-hover:bg-[length:15px_15px] transition-all duration-1000" />
        </div>

        {/* Icon with Electric Glow */}
        <div className="flex justify-center mb-4 sm:mb-6 relative z-10">
          <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative`}>
            {/* Electric Glow Effect */}
            <div className={`absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="text-center relative z-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
      </div>

      {/* Floating Energy Particles */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${getAccentColorClasses('bg')} rounded-full animate-ping`}
            style={{
              top: `${20 + i * 5}%`,
              left: `${15 + i * 6}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '3s',
              opacity: 0.6 + Math.sin(i * 0.5) * 0.4
            }}
          ></div>
        ))}
      </div>

      {/* Electric Pulse Rings */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute inset-0 border ${getAccentColorClasses('border')} rounded-3xl animate-ping`}
            style={{
              animationDelay: `${i * 0.5}s`,
              animationDuration: '2s',
              opacity: 0.1 + Math.sin(electricPulse * Math.PI / 50 + i) * 0.1
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
