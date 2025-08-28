import Header from './components/layout/Header'
import HeroSection from './components/sections/HeroSection'
import ApproachSection from './components/sections/ApproachSection'
import FeaturedWorkSection from './components/sections/FeaturedWorkSection'
import FinalCTASection from './components/sections/FinalCTASection'
import Footer from './components/sections/Footer'
import AnimationProvider from './components/providers/AnimationProvider'

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
      </div>
    </AnimationProvider>
  )
}
