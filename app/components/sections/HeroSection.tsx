'use client'

import Button from '../ui/Button'
import Image from 'next/image'

// Import logo paths
const companyLogos = {
  'Culture Amp': '/images/logos/culture-amp.svg',
  'Clay': '/images/logos/clay.svg',
  'Lightspeed': '/images/logos/lightspeed.svg',
  'Anthropic': '/images/logos/anthropic.svg',
  'Monday.com': '/images/logos/monday.svg',
  'Amplitude': '/images/logos/amplitude.svg',
  'Synthesia': '/images/logos/synthesia.svg'
}

export default function HeroSection() {
  const companies = Object.keys(companyLogos)
  const duplicatedCompanies = [...companies, ...companies]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-midnight via-midnight to-slate-800">
      {/* NASA-Style Starry Background with Subtle Movements */}
      <div className="absolute inset-0">
        {/* Base star field - multiple layers for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:20px_20px] sm:bg-[length:25px_25px] md:bg-[length:30px_30px] animate-star-drift"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:40px_40px] sm:bg-[length:50px_50px] md:bg-[length:60px_60px] animate-star-drift-slow" style={{animationDelay: '10s'}}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:60px_60px] sm:bg-[length:80px_80px] md:bg-[length:100px_100px] animate-star-drift-very-slow" style={{animationDelay: '20s'}}></div>
        
        {/* Additional star layers for more depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px] sm:bg-[length:40px_40px] md:bg-[length:50px_50px] animate-star-drift-medium" style={{animationDelay: '5s'}}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:50px_50px] sm:bg-[length:60px_60px] md:bg-[length:70px_70px] animate-star-drift-medium" style={{animationDelay: '15s'}}></div>
      </div>
      
      {/* Andromeda-Style Aurora Effect - Cosmic Purple & Nebula Colors */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary aurora layers - Andromeda-inspired cosmic colors */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] md:w-[800px] md:h-[800px] lg:w-[900px] lg:h-[900px] bg-gradient-to-br from-cosmic/25 via-andromeda/20 to-pleiades/15 rounded-full blur-3xl animate-aurora-float opacity-70"></div>
        <div className="absolute -top-16 -right-16 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] bg-gradient-to-bl from-andromeda/22 via-orion/18 to-cosmic/12 rounded-full blur-3xl animate-aurora-float opacity-80" style={{animationDelay: '8s'}}></div>
        <div className="absolute -bottom-24 left-1/3 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] bg-gradient-to-tr from-orion/20 via-cosmic/15 to-andromeda/10 rounded-full blur-3xl animate-aurora-float opacity-60" style={{animationDelay: '16s'}}></div>
        
        {/* Secondary aurora layers for depth and realism */}
        <div className="absolute top-1/4 left-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-cosmic/18 via-andromeda/12 to-orion/8 rounded-full blur-3xl animate-aurora-pulse opacity-50" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] bg-gradient-to-tl from-andromeda/18 via-orion/12 to-cosmic/8 rounded-full blur-3xl animate-aurora-pulse opacity-55" style={{animationDelay: '9s'}}></div>
        
        {/* Moving aurora streams - Andromeda-style flowing auroras */}
        <div className="absolute top-1/2 left-0 w-full h-24 sm:h-32 md:h-40 lg:h-48 bg-gradient-to-r from-transparent via-cosmic/10 to-transparent animate-aurora-stream opacity-80" style={{animationDelay: '12s'}}></div>
        <div className="absolute top-1/3 left-0 w-full h-20 sm:h-24 md:h-28 lg:h-36 bg-gradient-to-r from-transparent via-andromeda/8 to-transparent animate-aurora-stream opacity-70" style={{animationDelay: '6s'}}></div>
        <div className="absolute bottom-1/3 left-0 w-full h-16 sm:h-20 md:h-24 lg:h-32 bg-gradient-to-r from-transparent via-orion/7 to-transparent animate-aurora-stream opacity-65" style={{animationDelay: '18s'}}></div>
        
        {/* Additional aurora accents for more drama */}
        <div className="absolute top-1/6 left-1/8 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-cosmic/20 via-andromeda/15 to-pleiades/10 rounded-full blur-2xl animate-aurora-pulse opacity-75" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/6 right-1/8 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] bg-gradient-to-tl from-andromeda/20 via-orion/15 to-cosmic/10 rounded-full blur-2xl animate-aurora-pulse opacity-70" style={{animationDelay: '11s'}}></div>
        
        {/* Subtle aurora wisps for realism */}
        <div className="absolute top-1/4 right-1/6 w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] bg-gradient-to-bl from-cosmic/12 via-andromeda/8 to-transparent rounded-full blur-xl animate-aurora-wisp opacity-60" style={{animationDelay: '7s'}}></div>
        <div className="absolute bottom-1/4 left-1/6 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] bg-gradient-to-tr from-orion/12 via-cosmic/8 to-transparent rounded-full blur-xl animate-aurora-wisp opacity-55" style={{animationDelay: '14s'}}></div>
      </div>

      {/* Enhanced Digital Network Patterns with Andromeda Colors */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08)_1px,transparent_1px)] bg-[length:30px_30px] sm:bg-[length:35px_35px] md:bg-[length:40px_40px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(124,58,237,0.06)_1px,transparent_1px)] bg-[length:60px_60px] sm:bg-[length:70px_70px] md:bg-[length:80px_80px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.04)_1px,transparent_1px)] bg-[length:90px_90px] sm:bg-[length:100px_100px] md:bg-[length:110px_110px]"></div>
      
      {/* Animated Digital Circuits - Overlay on Aurora */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving Circuit Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cosmic/30 to-transparent animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-andromeda/25 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orion/20 to-transparent animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-pleiades/25 to-transparent animate-pulse" style={{animationDelay: '6s'}}></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cosmic/20 to-transparent animate-pulse" style={{animationDelay: '8s'}}></div>
        
        {/* Vertical Circuit Lines */}
        <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-andromeda/25 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-transparent via-orion/20 to-transparent animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-0 left-3/4 h-full w-px bg-gradient-to-b from-transparent via-cosmic/25 to-transparent animate-pulse" style={{animationDelay: '5s'}}></div>
        
        {/* Diagonal Circuit Connections */}
        <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-cosmic/30 to-transparent transform rotate-45 origin-left animate-pulse" style={{animationDelay: '7s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-px bg-gradient-to-l from-transparent via-andromeda/25 to-transparent transform -rotate-45 origin-right animate-pulse" style={{animationDelay: '9s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-px bg-gradient-to-r from-transparent via-orion/20 to-transparent transform rotate-30 origin-left animate-pulse" style={{animationDelay: '11s'}}></div>
        
        {/* Enhanced Circuit Nodes with Ping Animations */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cosmic/40 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-andromeda/35 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-orion/30 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pleiades/35 rounded-full animate-ping" style={{animationDelay: '6s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cosmic/30 rounded-full animate-ping" style={{animationDelay: '8s'}}></div>
        
        {/* Additional Ping Animations Throughout */}
        <div className="absolute top-1/6 left-1/3 w-1.5 h-1.5 bg-cosmic/50 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/5 right-1/5 w-1.5 h-1.5 bg-andromeda/45 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 left-1/6 w-1.5 h-1.5 bg-orion/40 rounded-full animate-ping" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-pleiades/45 rounded-full animate-ping" style={{animationDelay: '7s'}}></div>
        <div className="absolute bottom-1/5 left-2/3 w-1.5 h-1.5 bg-cosmic/35 rounded-full animate-ping" style={{animationDelay: '9s'}}></div>
        <div className="absolute bottom-1/6 right-1/6 w-1.5 h-1.5 bg-andromeda/40 rounded-full animate-ping" style={{animationDelay: '11s'}}></div>
        <div className="absolute top-1/8 left-1/8 w-1 h-1 bg-orion/50 rounded-full animate-ping" style={{animationDelay: '13s'}}></div>
        <div className="absolute top-1/8 right-1/8 w-1 h-1 bg-pleiades/45 rounded-full animate-ping" style={{animationDelay: '15s'}}></div>
        <div className="absolute bottom-1/8 left-1/8 w-1 h-1 bg-cosmic/40 rounded-full animate-ping" style={{animationDelay: '17s'}}></div>
        <div className="absolute bottom-1/8 right-1/8 w-1 h-1 bg-andromeda/35 rounded-full animate-ping" style={{animationDelay: '19s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-[320px] xs:max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Enhanced Snowflake Icon with Glow */}
        <div className="mb-4 xs:mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-cosmic/20 backdrop-blur-sm rounded-xl xs:rounded-2xl sm:rounded-3xl border border-cosmic/40 shadow-lg shadow-cosmic/30">
            <Image 
              src="/images/svg/snowflake-icon.svg" 
              alt="Snowflake Icon" 
              width={32} 
              height={32}
              className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-cosmic drop-shadow-lg"
            />
          </div>
        </div>
        
        {/* Main Headline with Enhanced Glow */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light text-lightGrey mb-3 xs:mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-tight tracking-tight">
          We build{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic via-andromeda to-cosmic drop-shadow-lg">
            growth engines
          </span>
          <br className="hidden xs:block" />
          <span className="xs:hidden"> </span>
          not just websites
        </h1>
        
        {/* Enhanced Subtitle with Comprehensive SEO Keywords */}
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 xs:mb-6 sm:mb-8 md:mb-10 max-w-[280px] xs:max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
          Expert web design, development & strategic SEO. 
          Conversion optimization & high-performance websites that drive growth.
        </p>
        

        
        {/* Enhanced CTA Button - SEO Optimized */}
        <div className="flex justify-center mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          <Button 
            href="#start" 
            variant="primary" 
            size="lg"
          >
            Start your digital transformation
          </Button>
        </div>

        {/* Service Keywords Section - Glass Finish & Rounded Edges */}
        <div className="mb-8 xs:mb-10 sm:mb-12 md:mb-14">
          <div className="flex flex-wrap items-center justify-center gap-3 xs:gap-4 sm:gap-5 md:gap-6 text-xs xs:text-sm sm:text-base text-white/90 font-medium">
            <span className="px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg shadow-black/20 hover:bg-white/15 hover:border-cosmic/40 hover:shadow-cosmic/20 transition-all duration-300">
              Web Design
            </span>
            <span className="px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg shadow-black/20 hover:bg-white/15 hover:border-cosmic/40 hover:shadow-cosmic/20 transition-all duration-300">
              Frontend Development
            </span>
            <span className="px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg shadow-black/20 hover:bg-white/15 hover:border-cosmic/40 hover:shadow-cosmic/20 transition-all duration-300">
              Backend Development
            </span>
            <span className="px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg shadow-black/20 hover:bg-white/15 hover:border-cosmic/40 hover:shadow-cosmic/20 transition-all duration-300">
              Technical SEO
            </span>
            <span className="px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg shadow-black/20 hover:bg-white/15 hover:border-cosmic/40 hover:shadow-cosmic/20 transition-all duration-300">
              Strategic SEO
            </span>
            <span className="px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg shadow-black/20 hover:bg-white/15 hover:border-cosmic/40 hover:shadow-cosmic/20 transition-all duration-300">
              Conversion Optimization
            </span>
            <span className="px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg shadow-black/20 hover:bg-white/15 hover:border-cosmic/40 hover:shadow-cosmic/20 transition-all duration-300">
              Performance Optimization
            </span>
            <span className="px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg shadow-black/20 hover:bg-white/15 hover:border-cosmic/40 hover:shadow-cosmic/20 transition-all duration-300">
              UX/UI Design
            </span>
          </div>
        </div>

        {/* Transparent Logos Carousel - Just the logos visible */}
        <div className="relative mx-auto max-w-[300px] xs:max-w-5xl sm:max-w-6xl">
          <div className="flex items-center gap-4 xs:gap-8 sm:gap-10 md:gap-12 py-4 xs:py-6 sm:py-8 animate-scroll">
            {duplicatedCompanies.map((company, index) => (
              <div key={index} className="flex-shrink-0">
                <Image 
                  src={companyLogos[company as keyof typeof companyLogos]} 
                  alt={`${company} logo`} 
                  width={100} 
                  height={40} 
                  className="w-12 h-4 xs:w-16 xs:h-6 sm:w-20 sm:h-8 md:w-24 md:h-10 lg:w-28 lg:h-12 opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator - Fixed positioning and no weird jumps */}
      <div className="absolute bottom-6 xs:bottom-8 sm:bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center space-y-1.5 xs:space-y-2 sm:space-y-3 scroll-float">
          <div className="text-xs sm:text-sm md:text-base text-lightGrey/70 font-light tracking-wider">
            SCROLL
          </div>
          <div className="w-5 h-8 xs:w-6 xs:h-10 sm:w-7 sm:h-12 md:w-8 md:h-14 border border-cosmic/50 rounded-full flex justify-center bg-cosmic/10 backdrop-blur-sm relative overflow-hidden">
            <div className="w-1 h-2.5 xs:h-3 sm:h-4 md:h-5 bg-cosmic/90 rounded-full mt-1.5 xs:mt-2 sm:mt-3 md:mt-4 animate-pulse shadow-lg shadow-cosmic/40 absolute"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
