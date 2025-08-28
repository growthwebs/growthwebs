import Header from './components/layout/Header'
import HeroSection from './components/sections/HeroSection'
import ApproachSection from './components/sections/ApproachSection'
import FeaturedWorkSection from './components/sections/FeaturedWorkSection'
import FinalCTASection from './components/sections/FinalCTASection'
import Footer from './components/sections/Footer'
import AnimationProvider from './components/providers/AnimationProvider'
import GDPRConsent from './components/ui/GDPRConsent'
import CookiePreferencesManager from './components/ui/CookiePreferencesManager'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GrowthWebs Agency - Web Development & Growth Marketing',
  description: 'Transform your business with GrowthWebs. Expert web design, development & strategic SEO. Conversion optimisation & high-performance websites that drive growth.',
  keywords: [
    'web development agency',
    'web design agency',
    'frontend development',
    'backend development',
    'full-stack development',
    'growth marketing',
    'conversion optimisation',
    'conversion rate optimisation',
    'website design',
    'UX/UI design',
    'digital marketing',
    'technical SEO',
    'strategic SEO',
    'SEO services',
    'search engine optimisation',
    'performance optimisation',
    'website performance',
    'core web vitals',
    'e-commerce development',
    'custom web applications',
    'user experience design',
    'user interface design',
    'web agency',
    'UK web development',
    'business growth',
    'lead generation',
    'digital transformation',
    'website optimisation',
    'mobile-first design',
    'responsive web design'
  ],
  openGraph: {
    title: 'GrowthWebs Agency - Web Development & Growth Marketing',
    description: 'Transform your business with GrowthWebs. Expert web design, development & strategic SEO. Conversion optimisation & high-performance websites.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'GrowthWebs Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrowthWebs Agency - Web Development & Growth Marketing',
    description: 'Transform your business with GrowthWebs. Expert web design, development & strategic SEO. Conversion optimisation & high-performance websites.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://growthwebs.com',
  },
}

export default function Home() {
  return (
    <AnimationProvider>
      <div className="min-h-screen bg-primary-background">
        <Header />
        <main>
          <HeroSection />
          <ApproachSection />
          <FeaturedWorkSection />
          <FinalCTASection />
          <Footer />
        </main>
        <GDPRConsent />
        <CookiePreferencesManager />
      </div>
    </AnimationProvider>
  )
}
