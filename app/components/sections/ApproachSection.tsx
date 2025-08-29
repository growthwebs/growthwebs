'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import FloatingInfoBox from '@/app/components/ui/FloatingInfoBox'

export default function ApproachSection() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [typingFor, setTypingFor] = useState<'ai' | 'user' | null>(null)

  const conversation = [
    {
      id: 1,
      sender: 'user',
      text: "I need a re-design... my website is killing my business 😩",
      avatar: 'U'
    },
    {
      id: 2,
      sender: 'ai',
      text: "You've landed in exactly the right place. Let's turn that around.",
      avatar: 'AI'
    },
    {
      id: 3,
      sender: 'user',
      text: "I need a new website that actually converts visitors!",
      avatar: 'U'
    },
    {
      id: 4,
      sender: 'ai',
      text: "That's what we do best. Growth-focused websites that work 24/7.",
      avatar: 'AI'
    },
    {
      id: 5,
      sender: 'user',
      text: "I need SEO help too... I'm invisible on Google 😭",
      avatar: 'U'
    },
    {
      id: 6,
      sender: 'ai',
      text: "We'll make you impossible to miss. Strategic SEO that drives real traffic.",
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
    <section className="relative overflow-hidden bg-midnight">
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
      
              {/* Content Section with SEO-Optimised Headings */}
        <div className="relative z-10 pt-16 xs:pt-18 sm:pt-20 pb-12 xs:pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 xs:mb-6 sm:mb-8 leading-tight">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic via-andromeda to-cosmic">
              growth-first approach
            </span>
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 xs:mb-8 sm:mb-10 md:mb-12">
            We don't just build websites – we create digital growth engines that drive measurable business results. 
            Our proven methodology combines strategic thinking, technical excellence, and data-driven optimisation.
          </p>


        </div>

        {/* Interactive Chat Interface */}
        <div 
          ref={sceneRef}
          className="relative flex items-center justify-center min-h-[400px] xs:min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px]"
          style={{
            transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 5}deg) rotateY(${(mousePosition.x - 0.5) * 5}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Three Column Layout: Left Box | Chat Window | Right Box */}
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Left Floating Box - Hidden on mobile, visible on lg+ */}
            <div className="hidden lg:block w-full max-w-[300px] xl:max-w-[350px] 2xl:max-w-[400px]">
              <FloatingInfoBox
                position="left"
                title="Strategic Growth"
                description="Data-driven approach that transforms websites into conversion machines. We don't just build, we optimize for results."
                icon={
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                }
                gradientColors={{
                  from: "from-yellow-400",
                  via: "via-orange-500", 
                  to: "to-pink-600"
                }}
                accentColor="yellow"
              />
            </div>

            {/* Center Chat Window */}
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] md:max-w-[520px] lg:max-w-[640px] xl:max-w-[720px] 2xl:max-w-[800px] z-50">
            <div className="rounded-2xl sm:rounded-3xl bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.1)_inset] border border-white/20 overflow-hidden">
              {/* macOS Window Header - Responsive spacing */}
              <div className="bg-gradient-to-b from-gray-50 to-gray-100 px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-4 lg:py-5 border-b border-gray-200/50 flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                  {/* Window Controls - Responsive sizing */}
                  <div className="flex space-x-1.5 sm:space-x-2 md:space-x-2.5 lg:space-x-3">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-red-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-yellow-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 ml-2 sm:ml-3 md:ml-4">
                    <Image 
                      src="/images/svg/grover-icon.svg" 
                      alt="Grover Icon" 
                      width={32} 
                      height={32}
                      className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12"
                    />
                    <span className="text-gray-700 font-medium text-xs sm:text-sm md:text-base lg:text-lg">Grover</span>
                  </div>
                </div>
                <div className="text-gray-500">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </div>
              </div>

              {/* Chat Content - Responsive height with proper scrolling */}
              <div className="p-3 sm:p-4 md:p-5 lg:p-6 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 h-[280px] xs:h-[320px] sm:h-[380px] md:h-[440px] lg:h-[500px] xl:h-[560px] 2xl:h-[620px] bg-white overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {/* Display conversation up to current index */}
                {conversation.slice(0, currentMessageIndex + 1).map((message) => (
                  <div key={message.id} className={`flex items-start space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 ${message.sender === 'user' ? 'justify-end' : ''}`}>
                    {message.sender === 'ai' && (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 bg-gradient-to-br from-cosmic to-andromeda rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium">{message.avatar}</span>
                      </div>
                    )}
                    
                    <div className={`rounded-xl sm:rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px] 2xl:max-w-[420px] shadow-sm ${
                      message.sender === 'user' 
                        ? 'bg-gradient-to-r from-cosmic to-andromeda text-white' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">{message.text}</p>
                    </div>
                    
                    {message.sender === 'user' && (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 bg-gradient-to-br from-orion to-cosmic rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium">{message.avatar}</span>
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator - Responsive spacing */}
                {isTyping && (
                  <div className={`flex items-start space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 ${typingFor === 'user' ? 'justify-end' : ''}`}>
                    {typingFor === 'ai' && (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 bg-gradient-to-br from-cosmic to-andromeda rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium">AI</span>
                      </div>
                    )}
                    
                    <div className={`rounded-xl sm:rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 shadow-sm ${
                      typingFor === 'user' 
                        ? 'bg-gradient-to-br from-cosmic to-andromeda' 
                        : 'bg-gray-100'
                    }`}>
                      <div className="flex space-x-1.5 sm:space-x-2 md:space-x-2.5 lg:space-x-3">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 rounded-full animate-bounce" style={{backgroundColor: typingFor === 'user' ? 'white' : '#6B7280'}}></div>
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 rounded-full animate-bounce" style={{backgroundColor: typingFor === 'user' ? 'white' : '#6B7280', animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 rounded-full animate-bounce" style={{backgroundColor: typingFor === 'user' ? 'white' : '#6B7280', animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                    
                    {typingFor === 'user' && (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 bg-gradient-to-br from-orion to-cosmic rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium">U</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right Floating Box - Hidden on mobile, visible on lg+ */}
            <div className="hidden lg:block w-full max-w-[300px] xl:max-w-[350px] 2xl:max-w-[400px]">
              <FloatingInfoBox
                position="right"
                title="Technical Excellence"
                description="Cutting-edge development with performance optimization. Your website will be fast, secure, and future-ready."
                icon={
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                gradientColors={{
                  from: "from-blue-500",
                  via: "via-purple-600",
                  to: "to-indigo-700"
                }}
                accentColor="blue"
              />
            </div>

            {/* Mobile Floating Boxes - Stack above chat window on mobile */}
            <div className="lg:hidden w-full max-w-[300px] mb-8">
              <FloatingInfoBox
                position="left"
                title="Strategic Growth"
                description="Data-driven approach that transforms websites into conversion machines. We don't just build, we optimize for results."
                icon={
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                }
                gradientColors={{
                  from: "from-yellow-400",
                  via: "via-orange-500", 
                  to: "to-pink-600"
                }}
                accentColor="yellow"
              />
            </div>

            <div className="lg:hidden w-full max-w-[300px] mt-8">
              <FloatingInfoBox
                position="right"
                title="Technical Excellence"
                description="Cutting-edge development with performance optimization. Your website will be fast, secure, and future-ready."
                icon={
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                gradientColors={{
                  from: "from-blue-500",
                  via: "via-purple-600",
                  to: "to-indigo-700"
                }}
                accentColor="blue"
              />
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
