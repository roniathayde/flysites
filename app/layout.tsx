import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'FlySites',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0D0D0D] font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
