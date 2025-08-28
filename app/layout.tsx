import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'Growthwebs Agency - We Build Growth Engines, Not Just Websites',
  description: 'Stop settling for a digital business card. We build websites that work as hard as you do, fusing strategic thinking with world-class design to create conversion systems.',
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
