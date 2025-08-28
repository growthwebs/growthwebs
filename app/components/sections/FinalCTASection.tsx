'use client'

import Button from '../ui/Button'

export default function FinalCTASection() {
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
        {/* Main Content */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-lightGrey mb-6 sm:mb-8 leading-tight">
            Stop settling for a digital{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic via-andromeda to-cosmic">
              business card
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-lightGrey/80 max-w-3xl mx-auto mb-10 sm:mb-12 font-light leading-relaxed px-4">
            Your website should be more than just a pretty face. It should be a growth engine that works as hard as you do.
          </p>
          
          {/* CTA Buttons - Smaller & More Proportional */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12">
            <Button 
              href="#schedule" 
              variant="primary" 
              size="md"
            >
              Schedule a call
            </Button>
            <Button 
              href="#work" 
              variant="secondary" 
              size="md"
            >
              See our work
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-lightGrey/60 text-sm sm:text-base">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cosmic rounded-full"></div>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-andromeda rounded-full"></div>
              <span>No commitment</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orion rounded-full"></div>
              <span>Results guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
