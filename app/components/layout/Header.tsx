'use client'

import Link from 'next/link'
import Image from 'next/image'
import Button from '../ui/Button'
import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 lg:pt-6">
      {/* Floating Glass Header Container */}
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl mx-auto max-w-7xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.1)_inset]">
        <div className="px-6 sm:px-8 py-4 sm:py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300" onClick={closeMobileMenu}>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cosmic to-andromeda rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg sm:text-xl font-semibold text-white">Growthwebs</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#work" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base font-medium">
                Work
              </a>
              <a href="#process" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base font-medium">
                Process
              </a>
              <a href="#services" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base font-medium">
                Services
              </a>
              <a href="#blog" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base font-medium">
                Blog
              </a>
            </nav>

            {/* CTA Button - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="header" 
                size="md" 
                className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm"
              >
                Start now
              </Button>
            </div>

            {/* Mobile Menu Button - Futuristic Design with Animated Hamburger */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden relative flex items-center justify-center w-12 h-12 text-white hover:text-white/80 transition-all duration-300 group"
              aria-label="Toggle mobile menu"
            >
              {/* Animated Background Ring */}
              <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-500 ${
                isMobileMenuOpen 
                  ? 'border-cosmic/60 bg-cosmic/10' 
                  : 'border-white/20 hover:border-white/40'
              }`}></div>
              
              {/* Circuit Lines */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                {/* Horizontal Circuit Line */}
                <div className={`absolute top-1/2 left-0 w-full h-px bg-gradient-to-r transition-all duration-700 ${
                  isMobileMenuOpen 
                    ? 'from-cosmic via-andromeda to-orion opacity-80' 
                    : 'from-transparent via-white/30 to-transparent opacity-40'
                }`}></div>
                
                {/* Vertical Circuit Line */}
                <div className={`absolute left-1/2 top-0 h-full w-px bg-gradient-to-b transition-all duration-700 ${
                  isMobileMenuOpen 
                    ? 'from-cosmic via-andromeda to-orion opacity-80' 
                    : 'from-transparent via-white/30 to-transparent opacity-40'
                }`}></div>
                
                {/* Diagonal Circuit Lines */}
                <div className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ${
                  isMobileMenuOpen 
                    ? 'rotate-45 scale-110' 
                    : 'rotate-0 scale-100'
                }`}>
                  <div className={`absolute top-1/4 left-1/4 w-8 h-px bg-gradient-to-r transition-all duration-500 ${
                    isMobileMenuOpen 
                      ? 'from-cosmic to-andromeda opacity-80' 
                      : 'from-transparent to-white/20 opacity-0'
                  }`}></div>
                  <div className={`absolute top-3/4 right-1/4 w-8 h-px bg-gradient-to-l transition-all duration-500 ${
                    isMobileMenuOpen 
                      ? 'from-orion to-cosmic opacity-80' 
                      : 'from-transparent to-white/20 opacity-0'
                  }`}></div>
                </div>
              </div>
              
              {/* Animated Stars */}
              <div className="absolute inset-0">
                {/* Star 1 - Top Left */}
                <div className={`absolute top-1 left-1 w-1 h-1 bg-white rounded-full transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'opacity-100 scale-150 animate-pulse' 
                    : 'opacity-60 scale-100'
                }`}></div>
                
                {/* Star 2 - Top Right */}
                <div className={`absolute top-1 right-1 w-1 h-1 bg-cosmic rounded-full transition-all duration-300 delay-100 ${
                  isMobileMenuOpen 
                    ? 'opacity-100 scale-150 animate-pulse' 
                    : 'opacity-60 scale-100'
                }`}></div>
                
                {/* Star 3 - Bottom Left */}
                <div className={`absolute bottom-1 left-1 w-1 h-1 bg-andromeda rounded-full transition-all duration-300 delay-200 ${
                  isMobileMenuOpen 
                    ? 'opacity-100 scale-150 animate-pulse' 
                    : 'opacity-60 scale-100'
                }`}></div>
                
                {/* Star 4 - Bottom Right */}
                <div className={`absolute bottom-1 right-1 w-1 h-1 bg-orion rounded-full transition-all duration-300 delay-300 ${
                  isMobileMenuOpen 
                    ? 'opacity-100 scale-150 animate-pulse' 
                    : 'opacity-60 scale-100'
                }`}></div>
              </div>
              
              {/* Animated Hamburger Menu Icon */}
              <div className="relative z-10 w-6 h-5">
                {/* Top Line */}
                <div className={`absolute top-0 left-0 w-6 h-0.5 bg-white rounded-full transition-all duration-300 transform origin-center ${
                  isMobileMenuOpen 
                    ? 'rotate-45 translate-y-2' 
                    : 'rotate-0 translate-y-0'
                }`}></div>
                
                {/* Middle Line */}
                <div className={`absolute top-1/2 left-0 w-6 h-0.5 bg-white rounded-full transition-all duration-300 transform -translate-y-1/2 ${
                  isMobileMenuOpen 
                    ? 'opacity-0 scale-x-0' 
                    : 'opacity-100 scale-x-100'
                }`}></div>
                
                {/* Bottom Line */}
                <div className={`absolute bottom-0 left-0 w-6 h-0.5 bg-white rounded-full transition-all duration-300 transform origin-center ${
                  isMobileMenuOpen 
                    ? '-rotate-45 -translate-y-2' 
                    : 'rotate-0 translate-y-0'
                }`}></div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                isMobileMenuOpen 
                  ? 'shadow-[0_0_20px_rgba(139,92,246,0.4)]' 
                  : 'group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]'
              }`}></div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="pt-4 pb-2 space-y-4 border-t border-white/10">
              {/* Mobile Navigation Links */}
              <nav className="space-y-4">
                <a 
                  href="#work" 
                  className="block text-white/70 hover:text-white transition-colors duration-300 text-base font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Work
                </a>
                <a 
                  href="#process" 
                  className="block text-white/70 hover:text-white transition-colors duration-300 text-base font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Process
                </a>
                <a 
                  href="#services" 
                  className="block text-white/70 hover:text-white transition-colors duration-300 text-base font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Services
                </a>
                <a 
                  href="#blog" 
                  className="block text-white/70 hover:text-white transition-colors duration-300 text-base font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Blog
                </a>
              </nav>

              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-white/10">
                <Button 
                  variant="header" 
                  size="md" 
                  className="w-full px-6 py-3 text-base"
                  onClick={closeMobileMenu}
                >
                  Start now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
