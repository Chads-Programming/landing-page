import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const title = 'Chads programming'
const description = `Join our 24/7 active community of passionate developers and tech
              enthusiasts. Share knowledge, collaborate on projects, and grow
              together.`

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: ['/chadprogramming.webp'],
    type: 'website',
    siteName: 'Chads Programming',
  },
}

export const viewport: Viewport = {
  themeColor: 'black',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="32x32"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  )
}
