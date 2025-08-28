import Header from '../components/layout/Header'
import Footer from '../components/sections/Footer'
import AnimationProvider from '../components/providers/AnimationProvider'
import GDPRConsent from '../components/ui/GDPRConsent'

export default function CookiePolicy() {
  return (
    <AnimationProvider>
      <div className="min-h-screen bg-primary-background">
        <Header />
        <main className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cookie Policy
              </h1>
              <p className="text-lg text-gray-300">
                Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  What Are Cookies?
                </h2>
                <p className="leading-relaxed">
                  Cookies are small text files that websites store on your device when you visit them. They help websites remember your preferences and provide a better experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  How We Use Cookies
                </h2>
                <p className="leading-relaxed">
                  We use cookies to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Make our website work properly</li>
                  <li>Remember your preferences</li>
                  <li>Understand how you use our website</li>
                  <li>Improve our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Types of Cookies We Use
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      Essential Cookies
                    </h3>
                    <p className="leading-relaxed">
                      These cookies are necessary for our website to work. They cannot be turned off. They include cookies that remember your language preference and basic website settings.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      Analytics Cookies
                    </h3>
                    <p className="leading-relaxed">
                      These cookies help us understand how visitors use our website. They tell us which pages are popular and how people navigate our site. This helps us improve our website.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      Functional Cookies
                    </h3>
                    <p className="leading-relaxed">
                      These cookies remember your choices and preferences. For example, they might remember your username or language choice to make your next visit easier.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Third-Party Cookies
                </h2>
                <p className="leading-relaxed">
                  Some cookies on our website are set by third-party services we use, such as:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 mt-3">
                  <li>Google Analytics (to understand website usage)</li>
                  <li>Social media platforms (if you share our content)</li>
                  <li>Payment processors (if you make purchases)</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  These services have their own privacy policies and cookie practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  How Long Cookies Last
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    <strong>Session cookies:</strong> These are deleted when you close your browser. They help our website work during your visit.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Persistent cookies:</strong> These stay on your device for a longer time (usually a few months to a year). They remember your preferences for future visits.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Managing Your Cookie Preferences
                </h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    You have several ways to control cookies:
                  </p>
                  
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-white mb-2">
                      Browser Settings
                    </h3>
                    <p className="text-sm">
                      Most browsers allow you to control cookies through their settings. You can usually find this in the "Privacy" or "Security" section of your browser settings.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-white mb-2">
                      Cookie Consent
                    </h3>
                    <p className="text-sm">
                      When you first visit our website, you'll see a cookie banner. You can choose which types of cookies to accept or reject.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-white mb-2">
                      Opt-Out Links
                    </h3>
                    <p className="text-sm">
                      For third-party cookies, you can often opt out directly through the service provider's website.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  What Happens If You Disable Cookies?
                </h2>
                <p className="leading-relaxed">
                  If you disable cookies, some parts of our website may not work properly. For example:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 mt-3">
                  <li>You may need to re-enter information each time you visit</li>
                  <li>Some features might not work as expected</li>
                  <li>Your preferences won't be remembered</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Updates to This Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this cookie policy from time to time. We will notify you of any important changes by posting the updated policy on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Contact Us
                </h2>
                <p className="leading-relaxed">
                  If you have questions about our use of cookies, please contact us:
                </p>
                <div className="mt-3 p-4 bg-gray-800 rounded-lg">
                  <p className="text-white">
                    <strong>Email:</strong> privacy@growthwebs.com<br />
                    <strong>Address:</strong> [Your Company Address]<br />
                    <strong>Data Protection Officer:</strong> [DPO Name if applicable]
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Related Policies
                </h2>
                <p className="leading-relaxed">
                  For more information about how we handle your data, please read our{' '}
                  <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms-of-service" className="text-blue-400 hover:text-blue-300 underline">
                    Terms of Service
                  </a>
                  .
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
