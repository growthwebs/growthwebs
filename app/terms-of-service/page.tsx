import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/sections/Footer'
import AnimationProvider from '@/app/components/providers/AnimationProvider'
import GDPRConsent from '@/app/components/ui/GDPRConsent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - GrowthWebs Agency | Web Development & Digital Marketing Terms',
  description: 'Read GrowthWebs Agency terms of service. Learn about our web development, digital marketing, and consulting services terms, conditions, and policies.',
  keywords: [
    'terms of service',
    'web development terms',
    'digital marketing terms',
    'agency terms',
    'service agreement',
    'web design terms',
    'consulting terms',
    'UK web agency',
    'legal terms',
    'service conditions'
  ],
  openGraph: {
    title: 'Terms of Service - GrowthWebs Agency',
    description: 'Read GrowthWebs Agency terms of service for web development and digital marketing services.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'GrowthWebs Agency',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://growthwebs.com/terms-of-service',
  },
}

export default function TermsOfService() {
  return (
    <AnimationProvider>
      <div className="min-h-screen bg-primary-background">
        <Header />
        <main className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-300">
                Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Welcome to GrowthWebs
                </h2>
                <p className="leading-relaxed">
                  These terms explain how you can use our website and services. By using our website, you agree to these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  What We Do
                </h2>
                <p className="leading-relaxed">
                  GrowthWebs is a digital agency that provides web design, development, and digital marketing services to help businesses grow online.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Using Our Website
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    When you use our website, you agree to:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Use the website for lawful purposes only</li>
                    <li>Not interfere with the website's operation</li>
                    <li>Not attempt to access restricted areas</li>
                    <li>Respect our intellectual property rights</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Our Services
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    We offer various digital services including:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Website design and development</li>
                    <li>Digital marketing and SEO</li>
                    <li>Branding and graphic design</li>
                    <li>Consulting and strategy</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Service Agreements
                </h2>
                <p className="leading-relaxed">
                  When you hire us for services, we will provide a separate agreement that outlines:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 mt-3">
                  <li>What we will deliver</li>
                  <li>Timeline and deadlines</li>
                  <li>Payment terms and pricing</li>
                  <li>What happens if things change</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Payment and Billing
                </h2>
                <p className="leading-relaxed">
                  We will clearly explain our pricing before starting work. Payment terms will be outlined in your service agreement. We accept various payment methods and will invoice you according to the agreed schedule.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Intellectual property
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    <strong>Our content:</strong> Our website content, logos, and designs belong to us. You cannot copy or use them without permission.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Your content:</strong> When you provide content for your project, you confirm you have the right to use it.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Final deliverables:</strong> Once you pay in full, you own the final work we create for you.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Privacy and data
                </h2>
                <p className="leading-relaxed">
                  We take your privacy seriously. How we handle your information is explained in our{' '}
                  <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
                    Privacy Policy
                  </a>
                  . By using our services, you agree to our privacy practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Limitation of liability
                </h2>
                <p className="leading-relaxed">
                  We work hard to provide excellent services, but we cannot guarantee specific business results. Our liability is limited to the amount you paid for our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Disputes and resolution
                </h2>
                <p className="leading-relaxed">
                  If you have concerns about our services, please contact us first. We want to resolve any issues quickly and fairly. If we cannot resolve a dispute, we may use mediation or other dispute resolution methods.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Changes to these terms
                </h2>
                <p className="leading-relaxed">
                  We may update these terms from time to time. We will notify you of any important changes by posting them on this page. Your continued use of our website means you accept the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Contact information
                </h2>
                <p className="leading-relaxed">
                  If you have questions about these terms, please contact us:
                </p>
                <div className="mt-3 p-4 bg-gray-800 rounded-lg">
                  <p className="text-white">
                    <strong>Email:</strong> legal@growthwebs.com<br />
                    <strong>Address:</strong> [Your Company Address]<br />
                    <strong>Phone:</strong> [Your Phone Number]
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Governing law
                </h2>
                <p className="leading-relaxed">
                  These terms are governed by the laws of [Your Country]. Any disputes will be resolved in the courts of [Your Country].
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
        <GDPRConsent />
      </div>
    </AnimationProvider>
  )
}
