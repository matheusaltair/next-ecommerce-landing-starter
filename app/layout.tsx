import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@/components/analytics'

const siteUrl = process.env.SITE_URL || 'https://example.com'
const title = 'Next.js E-commerce Landing Starter'
const description = 'Production-ready landing page optimized for paid traffic and product launches with strong SEO, tracking, and lead capture'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title,
    description,
    siteName: title,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${siteUrl}/og-image.jpg`],
    creator: '@yourhandle',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}