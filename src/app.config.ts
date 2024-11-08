import { env } from '@/env.mjs'
import type { Metadata } from 'next'

export const APP_CONFIG = {
  name: 'Stack Card Animate',
  creator: 'Abderrahmane MOUZOUNE',
  website: (env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000') as string,
  twitter: '@abderrahmane_js',
  authors: [
    { name: 'Abderrahmane MOUZOUNE', url: 'https://abderrahmanemouzoune.com' },
  ],
}

export const FALLBACK_SEO: Metadata = {
  metadataBase: new URL(APP_CONFIG.website),
  authors: APP_CONFIG.authors,
  creator: APP_CONFIG.creator,
  title:
    env.NODE_ENV !== 'production'
      ? `[${env.NODE_ENV.substring(0, 3)}] - ${APP_CONFIG.name}`
      : APP_CONFIG.name,
  openGraph: {
    title: 'Card stack on scroll animation only css',
    url: new URL(APP_CONFIG.website),
    siteName: APP_CONFIG.name,
    images: [
      {
        url: APP_CONFIG.website + '/logo.webp',
        width: 1300,
        height: 272,
        alt: `Logo of ${APP_CONFIG.name}`,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}
