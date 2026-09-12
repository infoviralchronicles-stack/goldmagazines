import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'GoldMagazines — Precious Metals, Macro Markets & Sovereign Living',
    template: '%s | GoldMagazines',
  },
  description:
    'GoldMagazines is the authoritative luxury journal delivering real-time intelligence on central bank gold reserves, global macro trends, high horology, and wealth preservation.',
  keywords: [
    'gold news',
    'gold price',
    'bullion',
    'sovereign wealth',
    'luxury assets',
    'high horology',
    'family office',
    'macro economics',
  ],
  authors: [{ name: 'GoldMagazines Editorial Desk' }],
  creator: 'GoldMagazines',
  publisher: 'GoldMagazines Publishing House',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://goldmagazines.com',
    siteName: 'GoldMagazines',
    title: 'GoldMagazines — Precious Metals & Sovereign Living',
    description: 'Authoritative analysis on gold bullion, sovereign monetary reserves, and luxury tangible assets.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'GoldMagazines Editorial Bullion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@goldmagazines',
    creator: '@goldmagazines',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/gold-bar-icon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/gold-bar-icon.svg',
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    name: 'GoldMagazines',
    url: 'https://goldmagazines.com',
    logo: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=400&q=80',
    sameAs: [
      'https://twitter.com/goldmagazines',
      'https://linkedin.com/company/goldmagazines',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        {/* Google AdSense Script Integration Hook */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9876543210123456"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
