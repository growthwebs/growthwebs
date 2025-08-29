'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

export default function ApproachSection() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [typingFor, setTypingFor] = useState<'ai' | 'user' | null>(null)
  const [isAnyBoxHovered, setIsAnyBoxHovered] = useState(false)

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
      text: "That's what we craft best. Growth-focused websites that work 24/7.",
      avatar: 'AI'
    },
    {
      id: 5,
      sender: 'user',
      text: "And everyone's talking about AI and automation... it's so overwhelming!",
      avatar: 'U'
    },
    {
      id: 6,
      sender: 'ai',
      text: "I understand. The tech landscape is complex, but we make it elegantly simple.",
      avatar: 'AI'
    },
    {
      id: 7,
      sender: 'user',
      text: "I need help understanding what AI can actually do for my business!",
      avatar: 'U'
    },
    {
      id: 8,
      sender: 'ai',
      text: "Let's break it down. AI can automate tasks, analyse data, and grow your business—all beautifully crafted.",
      avatar: 'AI'
    },
    {
      id: 9,
      sender: 'ai',
      text: "You came to the right place, we can help you with that!",
      avatar: 'AI'
    },
    {
      id: 10,
      sender: 'user',
      text: "Finally, let's start!",
      avatar: 'U'
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

    const handleMouseEnter = () => {
      // Enable mouse tracking when entering the chat window
      if (sceneRef.current) {
        sceneRef.current.addEventListener('mousemove', handleMouseMove)
      }
    }

    const handleMouseLeave = () => {
      // Reset position and remove mouse tracking when leaving
      setMousePosition({ x: 0.5, y: 0.5 })
      if (sceneRef.current) {
        sceneRef.current.removeEventListener('mousemove', handleMouseMove)
      }
    }

    // Add event listeners to the chat window container
    if (sceneRef.current) {
      sceneRef.current.addEventListener('mouseenter', handleMouseEnter)
      sceneRef.current.addEventListener('mouseleave', handleMouseLeave)
    }
    
    return () => {
      if (sceneRef.current) {
        sceneRef.current.removeEventListener('mouseenter', handleMouseEnter)
        sceneRef.current.removeEventListener('mouseleave', handleMouseLeave)
        sceneRef.current.removeEventListener('mousemove', handleMouseMove)
      }
    }
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

  // Auto-scroll chat to bottom when conversation advances
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [currentMessageIndex, isTyping])

  return (
    <section className="relative overflow-hidden bg-midnight min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center">
      {/* Enhanced Background Effects for Larger Section */}
      <div className="absolute inset-0">
        {/* Subtle star field - matching other sections */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:20px_20px] sm:bg-[length:25px_25px] md:bg-[length:30px_30px] animate-star-drift-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] sm:bg-[length:50px_50px] md:bg-[length:60px_60px] animate-star-drift-very-slow" style={{animationDelay: '15s'}}></div>
        
        {/* Dark cosmic nebula effects - very subtle */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-cosmic/8 via-andromeda/6 to-orion/4 rounded-full blur-3xl animate-aurora-float opacity-30" style={{animationDelay: '8s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-tl from-andromeda/8 via-orion/6 to-cosmic/4 rounded-full blur-3xl animate-aurora-float opacity-25" style={{animationDelay: '12s'}}></div>
        
        {/* Hidden cosmic streams - very dark and subtle */}
        <div className="absolute top-1/3 left-0 w-full h-16 sm:h-20 md:h-24 bg-gradient-to-r from-transparent via-cosmic/4 to-transparent animate-aurora-stream opacity-40" style={{animationDelay: '20s'}}></div>
        <div className="absolute bottom-1/3 left-0 w-full h-12 sm:h-16 md:h-20 bg-gradient-to-r from-transparent via-andromeda/3 to-transparent animate-aurora-stream opacity-35" style={{animationDelay: '25s'}}></div>
      </div>

      {/* Messy City Grid Background - Organic and Disorganised */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Messy Grid - Irregular Spacing */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:35px_45px] sm:bg-[length:45px_55px] md:bg-[length:55px_65px] lg:bg-[length:75px_85px] xl:bg-[length:95px_105px]"></div>
        
        {/* Secondary Messy Grid - Different Irregular Spacing */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.12)_2px,transparent_2px)] bg-[length:180px_220px] sm:bg-[length:230px_270px] md:bg-[length:280px_320px] lg:bg-[length:380px_420px] xl:bg-[length:480px_520px]"></div>
        
        {/* Tertiary Messy Grid - Even More Irregular */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:120px_140px] sm:bg-[length:150px_170px] md:bg-[length:180px_200px] lg:bg-[length:240px_260px] xl:bg-[length:300px_320px]"></div>
        
        {/* Additional Cluttered Grid Lines - More Density */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:80px_100px] sm:bg-[length:100px_120px] md:bg-[length:120px_140px] lg:bg-[length:160px_180px] xl:bg-[length:200px_220px]"></div>
        
        {/* Micro Grid Lines - Very Fine Detail */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_0.5px,transparent_0.5px),linear-gradient(90deg,rgba(255,255,255,0.025)_0.5px,transparent_0.5px)] bg-[length:25px_30px] sm:bg-[length:30px_35px] md:bg-[length:35px_40px] lg:bg-[length:45px_50px] xl:bg-[length:55px_60px]"></div>
        
        {/* Grid Fade Masks - Top and Bottom */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-midnight via-midnight/80 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-midnight/80 to-midnight pointer-events-none"></div>
        
        {/* Side Fade Masks - Left and Right */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-midnight via-midnight/80 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-midnight via-midnight/80 to-transparent pointer-events-none"></div>
      </div>

      {/* Grid-Navigating Lights - Following Grid Lines Randomly */}
      <div className="absolute inset-0">
        {/* Base Grid Lights - Few, Following Grid Paths */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`grid-navigator-${i}`}
            className={`absolute w-2 h-2 bg-gradient-to-r from-cosmic to-andromeda rounded-full shadow-lg shadow-cosmic/60 transition-all duration-1000 ${
              isAnyBoxHovered ? 'opacity-100 scale-125' : 'opacity-80 scale-100'
            }`}
            style={{
              left: `${15 + (i % 2) * 35}%`,
              top: `${25 + Math.floor(i / 2) * 30}%`,
              animation: `gridPathNavigate ${6 + i * 1}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`
            }}
          />
        ))}

        {/* Hover-Enhanced Light Balls - Appear When Hovering */}
        {isAnyBoxHovered && [...Array(6)].map((_, i) => (
          <div
            key={`hover-enhanced-${i}`}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-andromeda to-orion rounded-full shadow-lg shadow-andromeda/70 transition-all duration-500 opacity-0 animate-in fade-in duration-500"
            style={{
              left: `${15 + (i % 3) * 25}%`,
              top: `${25 + Math.floor(i / 3) * 25}%`,
              animation: `gridNavigateEnhanced ${3 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}

        {/* Cross-Section Travel Light Balls - Few, Following Grid to Other Sections */}
        {[...Array(2)].map((_, i) => (
          <div
            key={`cross-section-${i}`}
            className={`absolute w-2.5 h-2.5 bg-gradient-to-r from-orion via-cosmic to-andromeda rounded-full shadow-lg shadow-orion/70 transition-all duration-800 ${
              isAnyBoxHovered ? 'opacity-100 scale-110' : 'opacity-70 scale-100'
            }`}
            style={{
              left: `${10 + i * 40}%`,
              top: `${20 + i * 30}%`,
              animation: `crossSectionTravel ${5 + i * 0.8}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content Section */}
      <div className="relative z-10 pt-16 xs:pt-18 sm:pt-20 lg:pt-20 xl:pt-24 pb-12 xs:pb-14 sm:pb-16 lg:pb-16 xl:pb-20 px-4 xs:px-5 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-8 xs:mb-10 sm:mb-12 lg:mb-12 xl:mb-16 px-4 xs:px-5 sm:px-6 lg:px-8">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-6xl font-light text-white mb-6 xs:mb-8 sm:mb-8 lg:mb-10 leading-tight">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic via-andromeda to-cosmic">
              growth-first approach
            </span>
          </h2>
          <p className="text-base xs:text-lg sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 xs:mb-10 sm:mb-10 lg:mb-12">
            We don't just build websites – we create digital growth engines that drive measurable business results. 
            Our proven methodology combines strategic thinking, technical excellence, and data-driven optimisation.
          </p>
        </div>
      </div>

      {/* Three Boxes Layout */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-6 lg:gap-6 xl:gap-8">
        
        {/* Left Box - Enhanced 3D Motion with Same Effects as Feature Cards */}
        <EnhancedSideBox
          icon={
            <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          }
          title="Strategic Growth"
          description="Data-driven approach that transforms websites into conversion machines. We don't just build, we optimise for results."
          gradientFrom="from-orange-500/20"
          gradientTo="to-pink-500/20"
          accentColor="orange"
          index={0}
          orderClass="order-1"
          onHoverChange={setIsAnyBoxHovered}
        />

        {/* Center Box - Chat Window with Proper Heights */}
        <div className="w-full max-w-[380px] sm:max-w-[480px] lg:max-w-[600px] xl:max-w-[680px] order-2 relative z-20 mx-auto p-4">
          <div 
            ref={sceneRef}
            className="rounded-2xl sm:rounded-3xl bg-white md:bg-white/80 md:backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.3)_inset] md:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.3)_inset] border border-gray-200 md:border-white/40 overflow-hidden transition-all duration-500 hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.4)_inset]"
            style={{
              transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 3}deg) rotateY(${(mousePosition.x - 0.5) * 3}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
            onMouseEnter={() => setIsAnyBoxHovered(true)}
            onMouseLeave={() => setIsAnyBoxHovered(false)}
          >
            {/* macOS Window Header - Much More Subtle and Refined - ALWAYS ON TOP */}
            <div className="relative z-50 bg-gray-50 md:bg-white/60 md:backdrop-blur-xl border-b border-gray-200 md:border-white/50 px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 flex items-center justify-between">
                              <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                  {/* Window Controls - Much Smaller and Subtle */}
                  <div className="flex space-x-1.5 sm:space-x-2 lg:space-x-2.5">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 ml-2 sm:ml-3 lg:ml-4">
                  <Image 
                    src="/images/svg/grover-icon.svg" 
                    alt="Grover Icon" 
                    width={32} 
                    height={32}
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                  />
                  <span className="text-gray-700 font-medium text-sm sm:text-base lg:text-base">Grover</span>
                </div>
              </div>
              <div className="text-gray-500">
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </div>
            </div>

            {/* Chat Content - Better Heights for All Breakpoints with Subtle Font Sizes */}
            <div 
              ref={chatContainerRef}
              className="relative z-0 p-4 sm:p-5 lg:p-6 space-y-4 sm:space-y-5 lg:space-y-6 h-[320px] sm:h-[380px] lg:h-[400px] xl:h-[420px] bg-white md:bg-white/40 md:backdrop-blur-sm overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 md:scrollbar-thumb-white/30 scrollbar-track-gray-100 md:scrollbar-track-white/10"
            >
              {/* Display conversation up to current index */}
              {conversation.slice(0, currentMessageIndex + 1).map((message) => (
                <div key={message.id} className={`flex items-start space-x-3 sm:space-x-4 lg:space-x-5 ${message.sender === 'user' ? 'justify-end' : ''}`}>
                  {message.sender === 'ai' && (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-gradient-to-br from-cosmic to-andromeda md:from-cosmic/90 md:to-andromeda/90 md:backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 shadow-sm md:shadow-lg md:shadow-cosmic/20 md:border md:border-white/20">
                      <span className="text-xs font-medium">{message.avatar}</span>
                    </div>
                  )}
                  
                  <div className={`rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5 max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px] 2xl:max-w-[420px] shadow-sm md:backdrop-blur-sm ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-r from-cosmic to-andromeda md:from-cosmic/90 md:to-andromeda/90 text-white shadow-sm md:shadow-lg md:shadow-cosmic/20' 
                      : 'bg-gray-100 md:bg-white/70 text-gray-800 md:border md:border-white/30 shadow-sm md:shadow-lg md:shadow-black/5'
                  }`}>
                    <p className="text-xs sm:text-sm lg:text-sm leading-relaxed">{message.text}</p>
                  </div>
                  
                  {message.sender === 'user' && (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-gradient-to-br from-orion to-cosmic md:from-orion/90 md:to-cosmic/90 md:backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 shadow-sm md:shadow-lg md:shadow-orion/20 md:border md:border-white/20">
                      <span className="text-xs font-medium">{message.avatar}</span>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className={`flex items-start space-x-3 sm:space-x-4 lg:space-x-5 ${typingFor === 'user' ? 'justify-end' : ''}`}>
                  {typingFor === 'ai' && (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-gradient-to-br from-cosmic to-andromeda md:from-cosmic/90 md:to-andromeda/90 md:backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 shadow-sm md:shadow-lg md:shadow-cosmic/20 md:border md:border-white/20">
                      <span className="text-xs font-medium">AI</span>
                    </div>
                  )}
                  
                  <div className={`rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5 max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px] 2xl:max-w-[420px] shadow-sm md:backdrop-blur-sm ${
                    typingFor === 'user' 
                      ? 'bg-gradient-to-r from-cosmic to-andromeda md:from-cosmic/90 md:to-andromeda/90 text-white shadow-sm md:shadow-lg md:shadow-cosmic/20' 
                      : 'bg-gray-100 md:bg-white/70 text-gray-800 md:border md:border-white/30 shadow-sm md:shadow-lg md:shadow-black/5'
                  }`}>
                                         <div className="flex space-x-1">
                       <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                       <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                       <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                     </div>
                  </div>
                  
                  {typingFor === 'user' && (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-gradient-to-br from-orion to-cosmic md:from-orion/90 md:to-cosmic/90 md:backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 shadow-sm md:shadow-lg md:shadow-orion/20 md:border md:border-white/20">
                      <span className="text-xs font-medium">U</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Box - Enhanced 3D Motion with Same Effects as Feature Cards */}
        <EnhancedSideBox
          icon={
            <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
          title="Data-Driven Results"
          description="Every decision is backed by analytics. We track, measure, and optimise for continuous improvement and growth."
          gradientFrom="from-blue-500/20"
          gradientTo="to-purple-500/20"
          accentColor="blue"
          index={1}
          orderClass="order-3"
          onHoverChange={setIsAnyBoxHovered}
        />
      </div>
    </section>
  )
}

// Enhanced Side Box Component with Same 3D Effects as Feature Cards
interface EnhancedSideBoxProps {
  icon: React.ReactNode
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
  accentColor: string
  index: number
  orderClass: string
  onHoverChange: (isHovered: boolean) => void
}

function EnhancedSideBox({
  icon,
  title,
  description,
  gradientFrom,
  gradientTo,
  accentColor,
  index,
  orderClass,
  onHoverChange
}: EnhancedSideBoxProps) {
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
  const springScale = useSpring(1, springConfig)  // COMPLETELY REMOVED hover scale effect - always 1
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
      className={`group relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[320px] xl:max-w-[360px] 2xl:max-w-[400px] ${orderClass}`}
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
          scale: springScale, // This is ALWAYS 1 - no scale change on hover
          z: springZ,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => {
          setIsHovered(true)
          onHoverChange(true)
        }}
        onMouseLeave={() => {
          handleMouseLeave()
          onHoverChange(false)
        }}
      >
        {/* Enhanced Card Background */}
        <div className="relative h-full min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[320px] xl:min-h-[360px] 2xl:min-h-[400px] bg-gradient-to-br from-white/5 via-white/8 to-white/3 backdrop-blur-2xl border border-white/20 rounded-3xl p-5 sm:p-6 lg:p-8 overflow-hidden group-hover:border-white/40 transition-all duration-700">
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-25 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent transform rotate-45 scale-150 group-hover:scale-160 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] group-hover:bg-[length:19px_19px] transition-transform duration-1000" />
          </div>

          {/* Glowing Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Enhanced Icon Container */}
          <div className="relative mb-6 group-hover:mb-8 transition-all duration-500">
            {/* Icon Background with 3D Effect */}
            <div className={`relative w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-2xl border border-white/20 flex items-center justify-center group-hover:rotate-0.5 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
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
            <div className={`absolute inset-0 w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-2xl opacity-20 group-hover:opacity-40 scale-150 group-hover:scale-200 transition-all duration-1000 blur-sm`} />
          </div>

          {/* Enhanced Content */}
          <div className="relative z-10">
            {/* Title with Glow Effect */}
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 group-hover:mb-6 transition-all duration-500">
              {title}
              <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo} blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
            </h3>
            
            {/* Description with Enhanced Typography */}
            <p className="text-white/80 text-sm sm:text-sm lg:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-500 group-hover:leading-relaxed">
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
