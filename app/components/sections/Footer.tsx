'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative z-20 mt-12 sm:mt-16 lg:mt-20 mb-8 sm:mb-12 lg:mb-16">
      {/* Main Footer */}
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl mx-4 sm:mx-6 lg:mx-8 xl:mx-auto max-w-7xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.1)_inset]">
        <div className="px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
          {/* Three Column Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
            
            {/* Brand Column */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cosmic to-andromeda rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-lg sm:text-xl font-bold text-white">Growthwebs</span>
              </div>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-sm">
                We build digital flagships that work as hard as you do. Transforming websites into growth engines.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 7.568c-.5 0-.912.412-.912.912s.412.912.912.912.912-.412.912-.912-.412-.912-.912-.912zm-5.568 1.5c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-semibold text-white">Navigation</h3>
              <nav className="space-y-3 sm:space-y-4">
                <a href="#" className="block text-white/70 hover:text-white transition-colors duration-300 text-xs sm:text-sm hover:translate-x-1 transform">
                  Home
                </a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors duration-300 text-xs sm:text-sm hover:translate-x-1 transform">
                  About Us
                </a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors duration-300 text-xs sm:text-sm hover:translate-x-1 transform">
                  Services
                </a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors duration-300 text-xs sm:text-sm hover:translate-x-1 transform">
                  Portfolio
                </a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors duration-300 text-xs sm:text-sm hover:translate-x-1 transform">
                  Contact
                </a>
              </nav>
            </div>

            {/* Contact Column */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-semibold text-white">Contact</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-xs sm:text-sm">hello@growthwebs.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-xs sm:text-sm">London, United Kingdom</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-xs sm:text-sm">Mon-Fri: 9AM-6PM GMT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 sm:mb-8 lg:mb-12"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-white/60 text-xs">
                © 2024 Growthwebs. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a href="#" className="text-white/60 hover:text-white/80 transition-colors duration-300 text-xs">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white/80 transition-colors duration-300 text-xs">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white/80 transition-colors duration-300 text-xs">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Built by Growthwebs */}
          <div className="text-center mt-6 sm:mt-8 lg:mt-12">
            <p className="text-white/50 text-xs">
              Built by <span className="font-semibold text-white">growthwebs</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
