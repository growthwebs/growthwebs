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
  title: 'GrowthWebs Agency - Premium web development & growth marketing | London',
  description: 'Transform your business with GrowthWebs. We build high-converting websites, implement growth marketing strategies, and create digital experiences that drive results. Expert web development, SEO, and conversion optimization.',
  keywords: [
    'web development agency',
    'growth marketing',
    'conversion optimization',
    'website design',
    'digital marketing',
    'SEO services',
    'e-commerce development',
    'custom web applications',
    'performance optimization',
    'user experience design',
    'London web agency',
    'UK web development',
    'business growth',
    'lead generation',
    'digital transformation'
  ],
  openGraph: {
    title: 'GrowthWebs Agency - Premium Web Development & Growth Marketing',
    description: 'Transform your business with GrowthWebs. We build high-converting websites, implement growth marketing strategies, and create digital experiences that drive results.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'GrowthWebs Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrowthWebs Agency - Premium Web Development & Growth Marketing',
    description: 'Transform your business with GrowthWebs. We build high-converting websites and implement growth marketing strategies.',
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
