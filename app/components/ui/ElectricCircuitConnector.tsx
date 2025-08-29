'use client'

import { useEffect, useState } from 'react'

interface ElectricCircuitConnectorProps {
  from: 'left' | 'right'
  to: 'center'
}

export default function ElectricCircuitConnector({ from, to }: ElectricCircuitConnectorProps) {
  const [electricFlow, setElectricFlow] = useState(0)
  const [pulsePhase, setPulsePhase] = useState(0)
  const [connectionStrength, setConnectionStrength] = useState(0)

  // Electric flow animation
  useEffect(() => {
    const electricInterval = setInterval(() => {
      setElectricFlow(prev => (prev + 2) % 100)
    }, 50)

    const pulseInterval = setInterval(() => {
      setPulsePhase(prev => (prev + 1) % 100)
    }, 80)

    const strengthInterval = setInterval(() => {
      setConnectionStrength(prev => (prev + 0.5) % 100)
    }, 100)

    return () => {
      clearInterval(electricInterval)
      clearInterval(pulseInterval)
      clearInterval(strengthInterval)
    }
  }, [])

  const isLeft = from === 'left'
  const startX = isLeft ? '25%' : '75%'
  const endX = '50%'
  const controlX = isLeft ? '35%' : '65%'

  return (
    <div className="absolute inset-0 pointer-events-none z-40">
      {/* Main Electric Cable */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 40 }}
      >
        {/* Cable Path */}
        <path
          d={`M ${startX} 50% Q ${controlX} 40% ${endX} 50%`}
          fill="none"
          stroke={`rgba(59, 130, 246, ${0.3 + Math.sin(connectionStrength * Math.PI / 50) * 0.3})`}
          strokeWidth="3"
          strokeDasharray="5,5"
          strokeDashoffset={electricFlow}
          className="animate-pulse"
        />
        
        {/* Electric Energy Flow */}
        <path
          d={`M ${startX} 50% Q ${controlX} 40% ${endX} 50%`}
          fill="none"
          stroke="rgba(59, 130, 246, 0.8)"
          strokeWidth="2"
          strokeDasharray="10,5"
          strokeDashoffset={-electricFlow}
          className="animate-pulse"
          style={{
            filter: 'blur(1px)',
            animationDuration: '1s'
          }}
        />
        
        {/* High Energy Core */}
        <path
          d={`M ${startX} 50% Q ${controlX} 40% ${endX} 50%`}
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="3,2"
          strokeDashoffset={electricFlow * 2}
          style={{
            filter: 'blur(0.5px)',
            opacity: 0.8 + Math.sin(electricFlow * Math.PI / 50) * 0.2
          }}
        />
      </svg>

      {/* Electric Nodes Along the Path */}
      {[...Array(8)].map((_, i) => {
        const progress = (i / 7) * 100
        const nodeX = isLeft 
          ? 25 + (progress * 0.5) 
          : 75 - (progress * 0.5)
        const nodeY = 50 - Math.sin((progress / 100) * Math.PI) * 10
        
        return (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full animate-ping"
            style={{
              left: `${nodeX}%`,
              top: `${nodeY}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: '1.5s',
              opacity: 0.6 + Math.sin((electricFlow + i * 20) * Math.PI / 50) * 0.4,
              boxShadow: `0 0 8px rgba(59, 130, 246, 0.8), 0 0 16px rgba(59, 130, 246, 0.6)`
            }}
          ></div>
        )
      })}

      {/* Energy Pulse Rings */}
      {[...Array(3)].map((_, i) => {
        const progress = (i / 2) * 100
        const ringX = isLeft 
          ? 25 + (progress * 0.5) 
          : 75 - (progress * 0.5)
        const ringY = 50 - Math.sin((progress / 100) * Math.PI) * 10
        
        return (
          <div
            key={i}
            className="absolute border border-blue-500 rounded-full animate-ping"
            style={{
              left: `${ringX}%`,
              top: `${ringY}%`,
              width: `${8 + i * 4}px`,
              height: `${8 + i * 4}px`,
              transform: 'translate(-50%, -50%)',
              animationDelay: `${i * 0.2}s`,
              animationDuration: '2s',
              opacity: 0.3 + Math.sin((pulsePhase + i * 30) * Math.PI / 50) * 0.3
            }}
          ></div>
        )
      })}

      {/* Electric Arcs */}
      {[...Array(5)].map((_, i) => {
        const progress = (i / 4) * 100
        const arcX = isLeft 
          ? 25 + (progress * 0.5) 
          : 75 - (progress * 0.5)
        const arcY = 50 - Math.sin((progress / 100) * Math.PI) * 10
        
        return (
          <div
            key={i}
            className="absolute w-0.5 h-6 bg-gradient-to-b from-blue-500 via-white to-blue-500 rounded-full"
            style={{
              left: `${arcX}%`,
              top: `${arcY}%`,
              transform: `translate(-50%, -50%) rotate(${45 + i * 30}deg)`,
              opacity: 0.4 + Math.sin((electricFlow + i * 25) * Math.PI / 50) * 0.6,
              animationDelay: `${i * 0.1}s`
            }}
          ></div>
        )
      })}

      {/* Connection Points */}
      {/* Start Point */}
      <div 
        className={`absolute w-4 h-4 bg-blue-500 rounded-full animate-pulse`}
        style={{
          left: startX,
          top: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: `0 0 12px rgba(59, 130, 246, 0.8), 0 0 24px rgba(59, 130, 246, 0.6)`,
          animationDuration: '1s'
        }}
      ></div>
      
      {/* End Point */}
      <div 
        className="absolute w-4 h-4 bg-blue-500 rounded-full animate-ping"
        style={{
          left: endX,
          top: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: `0 0 12px rgba(59, 130, 246, 0.8), 0 0 24px rgba(59, 130, 246, 0.6)`,
          animationDuration: '1.5s'
        }}
      ></div>

      {/* Floating Energy Particles */}
      {[...Array(12)].map((_, i) => {
        const progress = (i / 11) * 100
        const particleX = isLeft 
          ? 25 + (progress * 0.5) 
          : 75 - (progress * 0.5)
        const particleY = 50 - Math.sin((progress / 100) * Math.PI) * 10 + (Math.sin((electricFlow + i * 30) * Math.PI / 50) * 5)
        
        return (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
            style={{
              left: `${particleX}%`,
              top: `${particleY}%`,
              animationDelay: `${i * 0.15}s`,
              animationDuration: '2s',
              opacity: 0.7 + Math.sin((electricFlow + i * 25) * Math.PI / 50) * 0.3
            }}
          ></div>
        )
      })}
    </div>
  )
}
