// app/layout.tsx
import '@/app/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/ui/NavBar'
import LayoutWrapper from '@/components/reusable/LayoutWrapper'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chandupa Lokuliyana | Full Stack Developer',
  description:
    'Official portfolio of Chandupa Lokuliyana — full-stack developer, debater, and problem solver. Explore projects, skills, and contact info.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Chandupa Lokuliyana | Full Stack Developer',
    description:
      'Building scalable systems with Next.js, Django, and Node.js. See my work.',
    url: 'https://chandupa.dev',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`bg-background text-white ${poppins.variable} font-sans antialiased transition-colors duration-300`}
      >
        <LayoutWrapper>
        <div className="min-h-screen flex flex-col">
          {/* 🧠 Global NavBar component here */}
          <Navbar />
          <main className="flex-1 overflow-x-hidden">{children}</main>
          {/* 📬 Footer or Contact Component */}
          {/* <Footer /> */}
        </div>
        </LayoutWrapper>
      </body>
    </html>
  )
}
