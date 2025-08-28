'use client'

import Link from 'next/link'
import Image from 'next/image'
import Button from '../ui/Button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 lg:pt-6">
      {/* Floating Glass Header Container */}
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl mx-auto max-w-7xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.1)_inset]">
        <div className="px-6 sm:px-8 py-4 sm:py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cosmic to-andromeda rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg sm:text-xl font-semibold text-white">Growthwebs</span>
            </div>

            {/* Navigation */}
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

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="header" 
                size="md" 
                className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm"
              >
                Start now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
