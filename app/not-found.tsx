import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-midnight via-primary-background to-midnight relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cosmic Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(139,92,246,0.1)_1px,transparent_0)] bg-[length:24px_24px]"></div>
        
        {/* Floating Stars */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cosmic/60 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-andromeda/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-orion/40 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-pleiades/45 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-cosmic/35 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Aurora Effects */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cosmic/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-andromeda/20 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        {/* 404 Number with Cosmic Glow */}
        <div className="mb-8">
          <h1 className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-light text-transparent bg-clip-text bg-gradient-to-r from-cosmic via-andromeda to-cosmic drop-shadow-2xl animate-glow">
            404
          </h1>
        </div>

        {/* Cosmic Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-cosmic/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-cosmic/40 shadow-lg shadow-cosmic/30 animate-float">
            <Image 
              src="/images/svg/snowflake-icon.svg" 
              alt="Cosmic Icon" 
              width={32} 
              height={32}
              className="w-10 h-10 xs:w-12 xs:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-cosmic drop-shadow-lg"
            />
          </div>
        </div>

        {/* Main Message */}
        <div className="mb-8 max-w-2xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-lightGrey mb-4 sm:mb-6 leading-tight tracking-tight">
            Oops! You've ventured into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic via-andromeda to-cosmic drop-shadow-lg">
              uncharted space
            </span>
          </h2>
          
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
            The page you're looking for seems to have drifted into the cosmic void. 
            Let's get you back on track to explore our amazing web development universe.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mb-12">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-8 xs:px-10 py-4 xs:py-5 text-base xs:text-lg font-medium text-white bg-gradient-to-r from-cosmic to-andromeda hover:from-andromeda hover:to-orion rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-cosmic/50 focus:ring-offset-2 focus:ring-offset-midnight"
          >
            Return to homepage
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="flex items-center gap-4 xs:gap-6 text-xs xs:text-sm text-lightGrey/50">
          <div className="w-8 h-px bg-cosmic/30"></div>
          <span className="font-light tracking-wider">EXPLORE THE COSMOS</span>
          <div className="w-8 h-px bg-cosmic/30"></div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center space-y-2 scroll-float">
          <div className="text-xs sm:text-sm text-lightGrey/50 font-light tracking-wider">
            SCROLL TO NAVIGATE
          </div>
          <div className="w-6 h-10 sm:w-7 sm:h-12 border border-cosmic/30 rounded-full flex justify-center bg-cosmic/10 backdrop-blur-sm relative overflow-hidden">
            <div className="w-1.5 h-3 sm:h-4 bg-cosmic/60 rounded-full mt-2 sm:mt-3 animate-pulse shadow-lg shadow-cosmic/20 absolute"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
