import Header from './components/layout/Header'
import HeroSection from './components/sections/HeroSection'
import ApproachSection from './components/sections/ApproachSection'
import FeaturedWorkSection from './components/sections/FeaturedWorkSection'
import FinalCTASection from './components/sections/FinalCTASection'
import Footer from './components/sections/Footer'
import AnimationProvider from './components/providers/AnimationProvider'
import GDPRConsent from './components/ui/GDPRConsent'
import CookiePreferencesManager from './components/ui/CookiePreferencesManager'

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
