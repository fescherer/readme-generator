import type { Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ReadmeGeneratorProvider } from '@/context/readme-generator.context'
import { METADATA } from '@/util/metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata = METADATA

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2E7A85',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col bg-background ${inter.className}`}>
        <Header />

        <ReadmeGeneratorProvider>
          {children}
        </ReadmeGeneratorProvider>

        <Footer />
      </body>
    </html>
  )
}
