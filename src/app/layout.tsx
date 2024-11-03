import Footer from '@components/shared/footer'
import Header from '@components/shared/header'

import type { Metadata, Viewport } from 'next'
import { Providers } from '@lib/providers/providers'
import { inter, lexend } from '@app/fonts'
import { cn } from '@lib/utils'
import '@styles/globals.css'
import { FALLBACK_SEO } from '@/app.config'

export const metadata: Metadata = {
  ...FALLBACK_SEO,
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#ffffff' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="SCA" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={cn(
          inter.className,
          lexend.variable,
          'scrollbar-thin scrollbar-track-background scrollbar-thumb-accent flex min-h-screen flex-col bg-teal-200 dark:bg-teal-950',
        )}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
