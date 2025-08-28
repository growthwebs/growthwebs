'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  functional: boolean
  marketing: boolean
}

export default function GDPRConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, can't be disabled
    analytics: false,
    functional: false,
    marketing: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const savedPreferences = localStorage.getItem('gdprConsent')
    if (!savedPreferences) {
      setShowBanner(true)
    } else {
      try {
        const parsed = JSON.parse(savedPreferences)
        setPreferences(parsed)
      } catch (e) {
        setShowBanner(true)
      }
    }
  }, [])

  const savePreferences = (newPreferences: CookiePreferences) => {
    localStorage.setItem('gdprConsent', JSON.stringify(newPreferences))
    localStorage.setItem('gdprConsentDate', new Date().toISOString())
    setPreferences(newPreferences)
    setShowBanner(false)
    setShowSettings(false)
    
    // Here you would typically enable/disable cookies based on preferences
    console.log('Cookie preferences saved:', newPreferences)
  }

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true
    }
    savePreferences(allAccepted)
  }

  const acceptEssential = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false
    }
    savePreferences(essentialOnly)
  }

  const rejectAll = () => {
    const rejected = {
      essential: true, // Essential cookies can't be rejected
      analytics: false,
      functional: false,
      marketing: false
    }
    savePreferences(rejected)
  }

  const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
    if (type === 'essential') return // Essential cookies can't be disabled
    
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }))
  }

  const saveCustomPreferences = () => {
    savePreferences(preferences)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-lg border-t border-white/10 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Banner */}
        {!showSettings && (
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                🍪 We value your privacy
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We use cookies and similar technologies to provide, protect, and improve our services. 
                By clicking "Accept All", you consent to our use of cookies for analytics, 
                personalisation, and marketing purposes. You can customise your preferences or learn more in our{' '}
                <Link href="/cookie-policy" className="text-blue-400 hover:text-blue-300 underline">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={acceptAll}
                className="px-6 py-2 bg-gradient-to-r from-cosmic to-andromeda text-white rounded-lg font-medium hover:from-cosmic/90 hover:to-andromeda/90 transition-all duration-300 hover:scale-105"
              >
                Accept All
              </button>
              <button
                onClick={acceptEssential}
                className="px-6 py-2 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Essential Only
              </button>
                               <button
                   onClick={() => setShowSettings(true)}
                   className="px-6 py-2 bg-blue-600/20 text-blue-400 rounded-lg font-medium hover:bg-blue-600/30 transition-all duration-300 border border-blue-600/30"
                 >
                   Customise
                 </button>
            </div>
          </div>
        )}

        {/* Detailed Settings */}
        {showSettings && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                Cookie Preferences
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Essential Cookies */}
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium">Essential Cookies</h4>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={preferences.essential}
                      disabled
                      className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                    />
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Required for the website to function properly. These cannot be disabled.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium">Analytics Cookies</h4>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                      className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                    />
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Help us understand how visitors use our website to improve performance.
                </p>
              </div>

              {/* Functional Cookies */}
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium">Functional Cookies</h4>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) => handlePreferenceChange('functional', e.target.checked)}
                      className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                    />
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Remember your preferences and choices to provide a better experience.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium">Marketing Cookies</h4>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                      className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                    />
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Used to deliver personalized content and advertisements.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={rejectAll}
                className="px-6 py-2 bg-red-600/20 text-red-400 rounded-lg font-medium hover:bg-red-600/30 transition-all duration-300 border border-red-600/30"
              >
                Reject All
              </button>
              <button
                onClick={saveCustomPreferences}
                className="px-6 py-2 bg-gradient-to-r from-cosmic to-andromeda text-white rounded-lg font-medium hover:from-cosmic/90 hover:to-andromeda/90 transition-all duration-300 hover:scale-105"
              >
                Save Preferences
              </button>
            </div>

            {/* Additional Information */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                You can change these settings at any time. Learn more in our{' '}
                <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="/cookie-policy" className="text-blue-400 hover:text-blue-300 underline">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
