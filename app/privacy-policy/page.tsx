import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/sections/Footer'
import AnimationProvider from '@/app/components/providers/AnimationProvider'
import GDPRConsent from '@/app/components/ui/GDPRConsent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - GrowthWebs Agency',
  description: 'Learn how GrowthWebs Agency protects your privacy and personal data. Our comprehensive privacy policy covers GDPR compliance, data collection and usage.',
  keywords: [
    'privacy policy',
    'GDPR compliance',
    'data protection',
    'personal data',
    'privacy rights',
    'data collection',
    'web agency privacy',
    'UK privacy law',
    'data processing',
    'consent management'
  ],
  openGraph: {
    title: 'Privacy Policy - GrowthWebs Agency',
    description: 'Learn how GrowthWebs Agency protects your privacy and personal data with GDPR compliance.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'GrowthWebs Agency',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://growthwebs.com/privacy-policy',
  },
}

export default function PrivacyPolicy() {
  return (
    <AnimationProvider>
      <div className="min-h-screen bg-primary-background">
        <Header />
        <main className="pt-32 pb-16">
          {/* Main Content */}
          <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="prose prose-lg prose-invert max-w-none">
              {/* Page Header */}
              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Privacy policy
                </h1>
                <p className="text-lg text-gray-300">
                  Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
              </div>

              <div className="space-y-8 text-gray-300">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    What This Policy Covers
                  </h2>
                  <p className="leading-relaxed">
                    This privacy policy explains how GrowthWebs collects, uses, and protects your personal information when you visit our website or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Information We Collect
                  </h2>
                  <div className="space-y-3">
                    <p className="leading-relaxed">
                      <strong>Information you give us:</strong> When you contact us or fill out forms on our website, we collect:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Your name and email address</li>
                      <li>Company name (if applicable)</li>
                      <li>Message content</li>
                    </ul>
                    <p className="leading-relaxed">
                      <strong>Information we collect automatically:</strong> When you visit our website, we collect:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Your IP address</li>
                      <li>Pages you visit</li>
                      <li>Time spent on our website</li>
                      <li>Browser type and device information</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    How We Use Your Information
                  </h2>
                  <p className="leading-relaxed mb-3">
                    We use your information to:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Respond to your messages and requests</li>
                    <li>Provide our services to you</li>
                    <li>Improve our website and services</li>
                    <li>Send you important updates (only if you agree)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Legal Basis for Processing
                  </h2>
                  <p className="leading-relaxed">
                    We process your personal information based on:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1 mt-3">
                    <li><strong>Consent:</strong> When you agree to receive communications from us</li>
                    <li><strong>Legitimate interest:</strong> To provide and improve our services</li>
                    <li><strong>Contract:</strong> When you use our services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Your Rights
                  </h2>
                  <p className="leading-relaxed mb-3">
                    Under European data protection law, you have the right to:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your information</li>
                    <li>Object to processing</li>
                    <li>Data portability</li>
                    <li>Withdraw consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Data sharing
                  </h2>
                  <p className="leading-relaxed">
                    We do not sell your personal information. We may share it only with:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1 mt-3">
                    <li>Service providers who help us run our business</li>
                    <li>Legal authorities when required by law</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Data security
                  </h2>
                  <p className="leading-relaxed">
                    We protect your information using industry-standard security measures. However, no method of transmission over the internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Data retention
                  </h2>
                  <p className="leading-relaxed">
                    We keep your information only as long as necessary to provide our services or as required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    International transfers
                  </h2>
                  <p className="leading-relaxed">
                    Your information is processed within the European Economic Area (EEA). If we need to transfer data outside the EEA, we ensure adequate protection measures are in place.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Cookies
                  </h2>
                  <p className="leading-relaxed">
                    We use cookies to improve your experience on our website. You can control cookie settings in your browser. See our <a href="/cookie-policy" className="text-blue-400 hover:text-blue-300 underline">Cookie Policy</a> for more details.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Contact us
                  </h2>
                  <p className="leading-relaxed">
                    If you have questions about this privacy policy or want to exercise your rights, please contact us:
                  </p>
                  <div className="mt-3 p-4 bg-gray-800 rounded-lg">
                    <p className="text-white">
                      <strong>Email:</strong> privacy@growthwebs.com<br/>
                      <strong>Address:</strong> [Your Company Address]<br/>
                      <strong>Data Protection Officer:</strong> [DPO Name if applicable]
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Changes to this policy
                  </h2>
                  <p className="leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <GDPRConsent />
      </div>
    </AnimationProvider>
  )
}
