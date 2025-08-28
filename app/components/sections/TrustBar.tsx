'use client'

import { useEffect, useState } from 'react'

export default function TrustBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const companies = [
    'Culture Amp',
    'Clay', 
    'Lightspeed',
    'Anthropic',
    'Monday.com',
    'Amplitude',
    'Synthesia'
  ]

  // Duplicate companies for seamless loop
  const duplicatedCompanies = [...companies, ...companies]

  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-slate-900 overflow-hidden">
      {/* Enhanced Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary aurora layers */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/30 via-orange-300/25 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-blue-200/30 via-indigo-300/25 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-gradient-to-tr from-green-200/30 via-teal-300/25 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Secondary aurora layers for more depth */}
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-gradient-to-br from-pink-200/20 via-rose-300/15 to-red-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-[250px] h-[250px] bg-gradient-to-tl from-cyan-200/25 via-sky-300/20 to-blue-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Subtle moving aurora */}
        <div className="absolute top-1/2 left-0 w-full h-32 bg-gradient-to-r from-transparent via-amber-100/5 to-transparent animate-pulse" style={{animationDelay: '5s'}}></div>
      </div>

      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px]"></div>

      {/* Digital network patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(107,202,248,0.03)_1px,transparent_1px)] bg-[length:60px_60px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Logos Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedCompanies.map((company, index) => (
              <div 
                key={index}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-32 h-16 flex items-center justify-center">
                    <div className="text-white/80 text-sm font-medium text-center group-hover:text-white transition-colors duration-300">
                      {company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  )
}
