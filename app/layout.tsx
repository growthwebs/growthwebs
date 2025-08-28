import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'GrowthWebs Agency - Web Development & Growth Marketing',
  description: 'Transform your business with GrowthWebs. Expert web design, development & strategic SEO. Conversion optimisation & high-performance websites that drive growth.',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/favicon/favicon-growthwebs.png', type: 'image/png' }
    ],
    apple: '/images/favicon/favicon-growthwebs.png',
    shortcut: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="font-jakarta bg-primary-background text-primary-text antialiased">
        {children}
      </body>
    </html>
  )
}
