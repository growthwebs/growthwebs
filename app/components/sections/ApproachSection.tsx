'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function ApproachSection() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [typingFor, setTypingFor] = useState<'ai' | 'user' | null>(null)

  const conversation = [
    {
      id: 1,
      sender: 'ai',
      text: "Hello! I've been looking at your website situation. It's a common challenge.",
      avatar: 'AI'
    },
    {
      id: 2,
      sender: 'user',
      text: "Yeah, we're struggling. Our site looks good but doesn't help us grow.",
      avatar: 'U'
    },
    {
      id: 3,
      sender: 'ai',
      text: "That's the classic 'digital business card' problem. Beautiful design, zero impact.",
      avatar: 'AI'
    },
    {
      id: 4,
      sender: 'user',
      text: "Exactly! How do we fix this? We need something that actually works.",
      avatar: 'U'
    },
    {
      id: 5,
      sender: 'ai',
      text: "A website should be your best salesperson, working 24/7. Let me show you how.",
      avatar: 'AI'
    }
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sceneRef.current) {
        const rect = sceneRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const messageTimer = setInterval(() => {
      if (currentMessageIndex < conversation.length - 1) {
        const nextMessage = conversation[currentMessageIndex + 1]
        setTypingFor(nextMessage.sender as 'ai' | 'user')
        setIsTyping(true)
        
        setTimeout(() => {
          setCurrentMessageIndex(prev => prev + 1)
          setIsTyping(false)
          setTypingFor(null)
        }, 800)
      }
    }, 2000)

    return () => clearInterval(messageTimer)
  }, [currentMessageIndex, conversation.length])

  return (
    <section className="relative h-[95vh] overflow-hidden bg-midnight">
      {/* Enhanced Aurora Borealis Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle star field - much darker and hidden */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:20px_20px] sm:bg-[length:25px_25px] md:bg-[length:30px_30px] animate-star-drift-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] sm:bg-[length:50px_50px] md:bg-[length:60px_60px] animate-star-drift-very-slow" style={{animationDelay: '15s'}}></div>
        
        {/* Aurora Borealis Effects - Multiple layers for depth and movement */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] bg-gradient-to-br from-cosmic/15 via-andromeda/12 to-orion/8 rounded-full blur-3xl animate-aurora-float opacity-40" style={{animationDelay: '8s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] bg-gradient-to-tl from-andromeda/15 via-orion/12 to-cosmic/8 rounded-full blur-3xl animate-aurora-float opacity-35" style={{animationDelay: '12s'}}></div>
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-tr from-orion/12 via-cosmic/10 to-andromeda/6 rounded-full blur-3xl animate-aurora-float opacity-30" style={{animationDelay: '16s'}}></div>
        
        {/* Moving aurora streams - Flowing aurora effects */}
        <div className="absolute top-1/2 left-0 w-full h-20 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-r from-transparent via-cosmic/8 to-transparent animate-aurora-stream opacity-60" style={{animationDelay: '20s'}}></div>
        <div className="absolute top-1/3 left-0 w-full h-16 sm:h-20 md:h-24 lg:h-28 bg-gradient-to-r from-transparent via-andromeda/6 to-transparent animate-aurora-stream opacity-50" style={{animationDelay: '6s'}}></div>
        <div className="absolute bottom-1/3 left-0 w-full h-14 sm:h-18 md:h-22 lg:h-26 bg-gradient-to-r from-transparent via-orion/5 to-transparent animate-aurora-stream opacity-45" style={{animationDelay: '25s'}}></div>
        
        {/* Additional aurora accents for more drama */}
        <div className="absolute top-1/6 left-1/8 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] bg-gradient-to-br from-cosmic/12 via-andromeda/8 to-pleiades/6 rounded-full blur-2xl animate-aurora-pulse opacity-55" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/6 right-1/8 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] bg-gradient-to-tl from-andromeda/12 via-orion/8 to-cosmic/6 rounded-full blur-2xl animate-aurora-pulse opacity-50" style={{animationDelay: '11s'}}></div>
        
        {/* Subtle aurora wisps for realism */}
        <div className="absolute top-1/4 right-1/6 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] bg-gradient-to-bl from-cosmic/8 via-andromeda/6 to-transparent rounded-full blur-xl animate-aurora-wisp opacity-40" style={{animationDelay: '7s'}}></div>
        <div className="absolute bottom-1/4 left-1/6 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] bg-gradient-to-tr from-orion/8 via-cosmic/6 to-transparent rounded-full blur-xl animate-aurora-wisp opacity-35" style={{animationDelay: '14s'}}></div>
      </div>

      {/* Digital Network Patterns - Dark and Hidden */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[length:30px_30px] sm:bg-[length:40px_40px] md:bg-[length:50px_50px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(124,58,237,0.02)_1px,transparent_1px)] bg-[length:60px_60px] sm:bg-[length:80px_80px] md:bg-[length:100px_100px]"></div>
      
      {/* Animated Digital Circuits - Overlay on Aurora */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving Circuit Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cosmic/20 to-transparent animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-andromeda/15 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orion/12 to-transparent animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-pleiades/15 to-transparent animate-pulse" style={{animationDelay: '6s'}}></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cosmic/12 to-transparent animate-pulse" style={{animationDelay: '8s'}}></div>
        
        {/* Vertical Circuit Lines */}
        <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-andromeda/15 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-transparent via-orion/12 to-transparent animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-0 left-3/4 h-full w-px bg-gradient-to-b from-transparent via-cosmic/15 to-transparent animate-pulse" style={{animationDelay: '5s'}}></div>
        
        {/* Diagonal Circuit Connections */}
        <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-cosmic/20 to-transparent transform rotate-45 origin-left animate-pulse" style={{animationDelay: '7s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-px bg-gradient-to-l from-transparent via-andromeda/15 to-transparent transform -rotate-45 origin-right animate-pulse" style={{animationDelay: '9s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-px bg-gradient-to-r from-transparent via-orion/12 to-transparent transform rotate-30 origin-left animate-pulse" style={{animationDelay: '11s'}}></div>
        
        {/* Enhanced Circuit Nodes with Ping Animations */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cosmic/25 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-andromeda/20 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-orion/18 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pleiades/20 rounded-full animate-ping" style={{animationDelay: '6s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cosmic/18 rounded-full animate-ping" style={{animationDelay: '8s'}}></div>
        
        {/* Additional Ping Animations Throughout */}
        <div className="absolute top-1/6 left-1/3 w-1.5 h-1.5 bg-cosmic/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/5 right-1/5 w-1.5 h-1.5 bg-andromeda/25 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 left-1/6 w-1.5 h-1.5 bg-orion/22 rounded-full animate-ping" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-pleiades/25 rounded-full animate-ping" style={{animationDelay: '7s'}}></div>
        <div className="absolute bottom-1/5 left-2/3 w-1.5 h-1.5 bg-cosmic/20 rounded-full animate-ping" style={{animationDelay: '9s'}}></div>
        <div className="absolute bottom-1/6 right-1/6 w-1.5 h-1.5 bg-andromeda/22 rounded-full animate-ping" style={{animationDelay: '11s'}}></div>
        <div className="absolute top-1/8 left-1/8 w-1 h-1 bg-orion/28 rounded-full animate-ping" style={{animationDelay: '13s'}}></div>
        <div className="absolute top-1/8 right-1/8 w-1 h-1 bg-pleiades/25 rounded-full animate-ping" style={{animationDelay: '15s'}}></div>
        <div className="absolute bottom-1/8 left-1/8 w-1 h-1 bg-cosmic/22 rounded-full animate-ping" style={{animationDelay: '17s'}}></div>
        <div className="absolute bottom-1/8 right-1/8 w-1 h-1 bg-andromeda/20 rounded-full animate-ping" style={{animationDelay: '19s'}}></div>
      </div>
      
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-16 sm:pt-20 md:pt-24 lg:pt-28">
        {/* Section Header - Enhanced spacing and better proportions */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 flex-shrink-0">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-lightGrey mb-6 sm:mb-8 md:mb-10 leading-tight tracking-tight">
            The Agency{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic via-andromeda to-cosmic">
              Dilemma
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-lightGrey/80 max-w-4xl sm:max-w-5xl mx-auto font-light leading-relaxed">
            You're stuck between designers who don't understand business and marketers who don't understand design. 
            The result? A beautiful website that goes nowhere, or a functional one that fails to inspire.
          </p>
        </div>

        {/* Animated Dashboard Scene - Better spacing and positioning */}
        <div 
          ref={sceneRef}
          className="relative mx-auto max-w-4xl sm:max-w-5xl lg:max-w-6xl flex-1 flex items-center justify-center"
          style={{
            transform: `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 5}deg) rotateX(${(mousePosition.y - 0.5) * 5}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Floating Chat Card - macOS Tahoe Style - Enhanced spacing */}
          <div className="relative mx-auto w-full max-w-[360px] sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl z-50">
            <div className="rounded-2xl sm:rounded-3xl bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.1)_inset] border border-white/20 overflow-hidden">
              {/* macOS Window Header - Better padding */}
              <div className="bg-gradient-to-b from-gray-50 to-gray-100 px-6 sm:px-8 py-4 sm:py-5 border-b border-gray-200/50 flex items-center justify-between">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  {/* Window Controls */}
                  <div className="flex space-x-2 sm:space-x-3">
                    <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 ml-2 sm:ml-3">
                    <Image 
                      src="/images/svg/growthwebs-logo.svg" 
                      alt="Growthwebs Logo" 
                      width={16} 
                      height={16}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">Grover</span>
                  </div>
                </div>
                <div className="text-gray-500">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </div>
              </div>

              {/* Chat Content - Enhanced spacing and better proportions */}
              <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] flex flex-col justify-end bg-white overflow-hidden">
                {/* Display conversation up to current index */}
                {conversation.slice(0, currentMessageIndex + 1).map((message) => (
                  <div key={message.id} className={`flex items-start space-x-3 sm:space-x-4 md:space-x-5 ${message.sender === 'user' ? 'justify-end' : ''}`}>
                    {message.sender === 'ai' && (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-cosmic to-andromeda rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs sm:text-sm font-medium">{message.avatar}</span>
                      </div>
                    )}
                    
                    <div className={`rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 max-w-[220px] sm:max-w-xs md:max-w-sm lg:max-w-md shadow-sm ${
                      message.sender === 'user' 
                        ? 'bg-gradient-to-r from-cosmic to-andromeda text-white' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed">{message.text}</p>
                    </div>
                    
                    {message.sender === 'user' && (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-orion to-cosmic rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs sm:text-sm font-medium">{message.avatar}</span>
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator - Enhanced spacing */}
                {isTyping && (
                  <div className={`flex items-start space-x-3 sm:space-x-4 md:space-x-5 ${typingFor === 'user' ? 'justify-end' : ''}`}>
                    {typingFor === 'ai' && (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-cosmic to-andromeda rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs sm:text-sm font-medium">AI</span>
                      </div>
                    )}
                    
                    <div className={`rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 shadow-sm ${
                      typingFor === 'user' 
                        ? 'bg-gradient-to-r from-cosmic to-andromeda' 
                        : 'bg-gray-100'
                    }`}>
                      <div className="flex space-x-1.5 sm:space-x-2">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full animate-bounce" style={{backgroundColor: typingFor === 'user' ? 'white' : '#6B7280'}}></div>
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full animate-bounce" style={{backgroundColor: typingFor === 'user' ? 'white' : '#6B7280', animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full animate-bounce" style={{backgroundColor: typingFor === 'user' ? 'white' : '#6B7280', animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                    
                    {typingFor === 'user' && (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-orion to-cosmic rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs sm:text-sm font-medium">U</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Invisible spacer to maintain consistent height */}
                <div className="flex-1"></div>
              </div>
            </div>
          </div>

          {/* Floating Data Panels - Better spacing and positioning */}
          <div className="absolute top-1/4 -left-12 sm:-left-16 md:-left-20 lg:-left-24 xl:-left-28 w-28 h-20 sm:w-36 sm:h-24 md:w-44 md:h-28 lg:w-52 lg:h-36 xl:w-60 xl:h-40 bg-gradient-to-br from-cosmic/10 via-andromeda/8 to-orion/6 rounded-xl sm:rounded-2xl backdrop-blur-xl border border-cosmic/20 animate-float-slow opacity-60"></div>
          <div className="absolute top-1/2 -right-8 sm:-right-12 md:-left-16 lg:-left-20 xl:-left-24 w-24 h-16 sm:w-32 sm:h-20 md:w-36 md:h-24 lg:w-44 lg:h-28 xl:w-52 xl:h-32 bg-gradient-to-br from-andromeda/10 via-orion/8 to-cosmic/6 rounded-xl sm:rounded-2xl backdrop-blur-xl border border-andromeda/20 animate-float-slow opacity-50" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 sm:left-1/2 w-20 h-16 sm:w-24 sm:h-20 md:w-32 md:h-24 lg:w-40 lg:h-28 xl:w-48 xl:h-36 bg-gradient-to-tr from-orion/10 via-cosmic/8 to-andromeda/6 rounded-xl sm:rounded-2xl backdrop-blur-xl border border-orion/20 animate-float-slow opacity-45" style={{animationDelay: '6s'}}></div>
        </div>
      </div>
    </section>
  )
}
