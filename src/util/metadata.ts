import { Metadata } from 'next'

const SITE_NAME = 'Readme generator'

export const METADATA: Metadata = {
  metadataBase: new URL('https://readme-generator.fennectales.com'),
  robots: {
    'index': true,
    'follow': true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    'googleBot': 'index, follow',
  },
  openGraph: {
    siteName: SITE_NAME,
    type: 'website',
  },
  title: 'Readme generator',
  applicationName: SITE_NAME,
  appleWebApp: {
    title: SITE_NAME,
    statusBarStyle: 'default',
    capable: true,
  },

  /* TODO Add sites verification */
  verification: {
    google: 'B4O2wqOWRNO2pnTtIXSMafMiAGUudX5T5RmdkzoVyJ0',
    // yandex: ['YOUR_DATA'],
    // other: {
    //   'msvalidate.01': ['YOUR_DATA'],
    //   'ir-site-verification-token': ['YOUR_DATA'],
    //   'facebook-domain-verification': ['YOUR_DATA'],
    //   'impact-site-verification': ['YOUR_DATA'],
    //   'p:domain_verify': ['YOUR_DATA'],
    // },
  },

}
