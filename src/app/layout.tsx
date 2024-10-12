import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import config from '@/website.config';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
  keywords: config.seo.keywords,
  icons: [
    {
      rel: 'icon',
      url: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'apple-touch-icon',

      url: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
  robots: 'index, follow',
  authors: [{ name: config.seo.author }],
  generator: 'Next.js',
  manifest: '/site.webmanifest',
  openGraph: {
    title: config.seo.title,
    description: config.seo.description,
    url: config.seo.url,
    siteName: config.seo.title,
    images: [
      {
        url: config.seo.image.url,
        width: config.seo.image.width,
        height: config.seo.image.height,
        alt: config.seo.image.alt,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
