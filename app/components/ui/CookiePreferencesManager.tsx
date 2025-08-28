'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  functional: boolean
  marketing: boolean
}

export default function CookiePreferencesManager() {
  const [isOpen, setIsOpen] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    functional: false,
    marketing: false
  })

  useEffect(() => {
    // Load saved preferences
    const savedPreferences = localStorage.getItem('gdprConsent')
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences)
        setPreferences(parsed)
      } catch (e) {
        console.error('Error parsing saved preferences:', e)
      }
    }
  }, [])

  const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
    if (type === 'essential') return // Essential cookies can't be disabled
    
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }))
  }

  const savePreferences = () => {
    localStorage.setItem('gdprConsent', JSON.stringify(preferences))
    localStorage.setItem('gdprConsentDate', new Date().toISOString())
    
    // Here you would typically enable/disable cookies based on preferences
    console.log('Cookie preferences updated:', preferences)
    
    // Show success message
    alert('Cookie preferences updated successfully!')
  }

  const resetPreferences = () => {
    if (confirm('Are you sure you want to reset your cookie preferences? This will show the consent banner again.')) {
      localStorage.removeItem('gdprConsent')
      localStorage.removeItem('gdprConsentDate')
      setPreferences({
        essential: true,
        analytics: false,
        functional: false,
        marketing: false
      })
      alert('Preferences reset. The consent banner will appear on your next visit.')
    }
  }

  const getConsentDate = () => {
    const date = localStorage.getItem('gdprConsentDate')
    if (date) {
      return new Date(date).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
    return 'Not set'
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-40 bg-gray-800/90 backdrop-blur-lg border border-white/10 rounded-full p-3 hover:bg-gray-700/90 transition-all duration-300 hover:scale-110 shadow-lg"
        title="Cookie Preferences"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-900/95 backdrop-blur-lg border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Cookie Preferences</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Current Status */}
          <div className="mb-6 p-4 bg-gray-800/50 rounded-lg">
            <h3 className="text-white font-medium mb-2">Current Status</h3>
            <p className="text-gray-400 text-sm">
              Last updated: {getConsentDate()}
            </p>
          </div>

          {/* Cookie Types */}
          <div className="space-y-4 mb-6">
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
          <div className="flex flex-col sm:flex-row gap-3 justify-end mb-6">
            <button
              onClick={resetPreferences}
              className="px-6 py-2 bg-red-600/20 text-red-400 rounded-lg font-medium hover:bg-red-600/30 transition-all duration-300 border border-red-600/30"
            >
              Reset Preferences
            </button>
            <button
              onClick={savePreferences}
              className="px-6 py-2 bg-gradient-to-r from-cosmic to-andromeda text-white rounded-lg font-medium hover:from-cosmic/90 hover:to-andromeda/90 transition-all duration-300 hover:scale-105"
            >
              Save Changes
            </button>
          </div>

          {/* Additional Information */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Learn more about how we use cookies in our{' '}
              <Link href="/cookie-policy" className="text-blue-400 hover:text-blue-300 underline">
                Cookie Policy
              </Link>{' '}
              and{' '}
              <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
