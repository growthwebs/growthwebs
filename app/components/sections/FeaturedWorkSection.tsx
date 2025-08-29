'use client'

import Button from '../ui/Button'

export default function FeaturedWorkSection() {
  return (
    <section className="relative overflow-hidden bg-midnight">
      {/* Consistent Background Effects */}
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

      {/* Digital Network Patterns - Dark and Hidden */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[length:30px_30px] sm:bg-[length:40px_40px] md:bg-[length:50px_50px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(124,58,237,0.02)_1px,transparent_1px)] bg-[length:60px_60px] sm:bg-[length:80px_80px] md:bg-[length:100px_100px]"></div>
      
      {/* Animated Digital Circuits - Overlay on Aurora */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving Circuit Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cosmic/15 to-transparent animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-andromeda/12 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orion/10 to-transparent animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-pleiades/12 to-transparent animate-pulse" style={{animationDelay: '6s'}}></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cosmic/10 to-transparent animate-pulse" style={{animationDelay: '8s'}}></div>
        
        {/* Vertical Circuit Lines */}
        <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-andromeda/12 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-transparent via-orion/10 to-transparent animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-0 left-3/4 h-full w-px bg-gradient-to-b from-transparent via-cosmic/12 to-transparent animate-pulse" style={{animationDelay: '5s'}}></div>
        
        {/* Diagonal Circuit Connections */}
        <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-cosmic/15 to-transparent transform rotate-45 origin-left animate-pulse" style={{animationDelay: '7s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-px bg-gradient-to-l from-transparent via-andromeda/12 to-transparent transform -rotate-45 origin-right animate-pulse" style={{animationDelay: '9s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-px bg-gradient-to-r from-transparent via-orion/10 to-transparent transform rotate-30 origin-left animate-pulse" style={{animationDelay: '11s'}}></div>
        
        {/* Enhanced Circuit Nodes with Ping Animations */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cosmic/20 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-andromeda/18 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-orion/15 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pleiades/18 rounded-full animate-ping" style={{animationDelay: '6s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cosmic/15 rounded-full animate-ping" style={{animationDelay: '8s'}}></div>
        
        {/* Additional Ping Animations Throughout */}
        <div className="absolute top-1/6 left-1/3 w-1.5 h-1.5 bg-cosmic/25 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/5 right-1/5 w-1.5 h-1.5 bg-andromeda/22 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 left-1/6 w-1.5 h-1.5 bg-orion/20 rounded-full animate-ping" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-pleiades/22 rounded-full animate-ping" style={{animationDelay: '7s'}}></div>
        <div className="absolute bottom-1/5 left-2/3 w-1.5 h-1.5 bg-cosmic/18 rounded-full animate-ping" style={{animationDelay: '9s'}}></div>
        <div className="absolute bottom-1/6 right-1/6 w-1.5 h-1.5 bg-andromeda/20 rounded-full animate-ping" style={{animationDelay: '11s'}}></div>
        <div className="absolute top-1/8 left-1/8 w-1 h-1 bg-orion/25 rounded-full animate-ping" style={{animationDelay: '13s'}}></div>
        <div className="absolute top-1/8 right-1/8 w-1 h-1 bg-pleiades/22 rounded-full animate-ping" style={{animationDelay: '15s'}}></div>
        <div className="absolute bottom-1/8 left-1/8 w-1 h-1 bg-cosmic/20 rounded-full animate-ping" style={{animationDelay: '17s'}}></div>
        <div className="absolute bottom-1/8 right-1/8 w-1 h-1 bg-andromeda/18 rounded-full animate-ping" style={{animationDelay: '19s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-lightGrey mb-6 sm:mb-8 leading-tight">
            We build digital{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic via-andromeda to-cosmic">
              flagships
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-lightGrey/80 max-w-4xl mx-auto font-light leading-relaxed px-4">
            At Growthwebs, we fuse strategic thinking with world-class design. We don't just build pages; we architect conversion systems. 
            Our process is built on a single belief: a great website is a beautiful business tool.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {/* Column 1: Data-Driven Design */}
          <div className="group">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-8 hover:border-white/30 hover:bg-white/15 transition-all duration-500 hover:scale-105 transform shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.1)_inset]">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cosmic/20 to-andromeda/20 rounded-2xl border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 group-hover:text-cosmic transition-colors duration-300">
                Data-driven design
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                We start with your business goals, not our design portfolio. Every decision is backed by data to ensure it drives results.
              </p>
            </div>
          </div>

          {/* Column 2: AI-Powered Growth */}
          <div className="group">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-8 hover:border-white/30 hover:bg-white/15 transition-all duration-500 hover:scale-105 transform shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.1)_inset]">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-andromeda/20 to-orion/20 rounded-2xl border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 group-hover:text-andromeda transition-colors duration-300">
                AI-powered growth
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                We integrate intelligent automation to not just attract leads, but to qualify and nurture them, turning your website into a proactive sales channel.
              </p>
            </div>
          </div>

          {/* Column 3: A True Partnership */}
          <div className="group">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-8 hover:border-white/30 hover:bg-white/15 transition-all duration-500 hover:scale-105 transform shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.1)_inset]">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orion/20 to-cosmic/20 rounded-2xl border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 group-hover:text-orion transition-colors duration-300">
                A true partnership
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                We operate as an extension of your team. You get a single point of contact and a transparent process from start to finish.
              </p>
            </div>
          </div>
        </div>

        {/* Service Keywords Section - Glass Finish & Rounded Edges */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 text-sm sm:text-base md:text-lg text-white/90 font-medium">
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
              Conversion Optimisation
            </span>
            <span className="px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg shadow-black/20 hover:bg-white/15 hover:border-cosmic/40 hover:shadow-cosmic/20 transition-all duration-300">
              Performance Optimisation
            </span>
            <span className="px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg shadow-black/20 hover:bg-white/15 hover:border-cosmic/40 hover:shadow-cosmic/20 transition-all duration-300">
              UX/UI Design
            </span>
            <span className="px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg shadow-black/20 hover:bg-white/15 hover:border-cosmic/40 hover:shadow-cosmic/20 transition-all duration-300">
              Webflow
            </span>
            <span className="px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg shadow-black/20 hover:bg-white/15 hover:border-cosmic/40 hover:shadow-cosmic/20 transition-all duration-300">
              Wix
            </span>
            <span className="px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg shadow-black/20 hover:bg-white/15 hover:border-cosmic/40 hover:shadow-cosmic/20 transition-all duration-300">
              Framer
            </span>
            <span className="px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg shadow-black/20 hover:bg-white/15 hover:border-cosmic/40 hover:shadow-cosmic/20 transition-all duration-300">
              Shopify
            </span>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center">
          <Button 
            href="#process" 
            variant="primary" 
            size="lg"
          >
            See our process
          </Button>
        </div>
      </div>
    </section>
  )
}
