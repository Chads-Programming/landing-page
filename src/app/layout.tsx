import type { Metadata, Viewport } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const atkinson = localFont({
  src: [
    {
      path: '../../public/fonts/atkinson-regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/atkinson-bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
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
      <body className={`font-sans ${atkinson.className} antialiased bg-black`}>
        {children}
      </body>
    </html>
  )
}
