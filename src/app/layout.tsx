import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://goldmagazines.com'),
  title: {
    default: 'GoldMagazines — Technology, Global Business, Style & Culture',
    template: '%s | GoldMagazines',
  },
  description:
    'GoldMagazines is the premier digital publication covering cutting-edge technology, global finance, luxury lifestyle, and contemporary cultural movements.',
  keywords: [
    'goldmagazines',
    'tech innovation',
    'business news',
    'finance',
    'luxury lifestyle',
    'culture',
    'editorial reports',
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
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body className={`${playfair.variable} ${jakarta.variable} min-h-screen flex flex-col antialiased font-sans`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
