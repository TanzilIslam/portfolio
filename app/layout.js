import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import CustomCursor from '@/app/components/CustomCursor';
import Header from '@/app/components/Header';
import BaseFooter from '@/app/components/BaseFooter';
import { GoogleTagManager, GoogleAnalytics, GoogleMapsEmbed, YouTubeEmbed } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://next-js-portfolio-web.netlify.app'),
  title: {
    default: 'HI, I am Thorn Chorn',
    template: '%s | Thorn Chorn',
  },
  description: 'A next js personal website',
  keywords: ['next.js', 'tailwind css', 'framer motion', 'personal website', 'portfolio'],
  authors: [{ name: 'Thorn Chorn' }],
  applicationName: 'Next Portfolio',
  generator: 'Next.js',
  robots: {
    index: true,
    follow: true,
  },
  referrer: 'no-referrer-when-downgrade',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    title: 'HI, I am Thorn Chorn',
    description: 'A next js personal website',
    siteName: 'Next Portfolio',
    images: [{
      url: '/og.png',
      width: 1200,
      height: 630,
      alt: 'Next.js personal website portfolio preview',
    }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thornchorn',
    creator: '@thornchorn',
    title: 'HI, I am Thorn Chorn',
    description: 'A next js personal website',
    images: ['/og.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

// Separate viewport export
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Separate theme color export
export const themeColor = '#ffffff';

// Separate color scheme export
export const colorScheme = 'light';

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HI, I am Thorn Chorn',
    url: 'https://next-js-portfolio-web.netlify.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://next-js-portfolio-web.netlify.app/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    description: 'A next js personal website',
    keywords: ['next.js', 'tailwind css', 'framer motion', 'personal website', 'portfolio'],
    author: {
      '@type': 'Person',
      name: 'Thorn Chorn',
    },
    application: {
      '@type': 'SoftwareApplication',
      name: 'Next Portfolio',
      operatingSystem: 'All',
      url: 'https://next-js-portfolio-web.netlify.app',
    },
    image: {
      '@type': 'ImageObject',
      url: '/og.png',
      width: 1200,
      height: 630,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Thorn Chorn',
    },
  };

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta name="author" content={metadata.authors[0].name} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content={themeColor} />
        <meta name="color-scheme" content={colorScheme} />
        <meta name="referrer" content={metadata.referrer} />
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.metadataBase.href} />
        <meta property="og:locale" content={metadata.openGraph.locale} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      {/* Google Tag Manager */}
      <GoogleTagManager gtmId="GTM-XYZ" />

      <body className={inter.className}>
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <BaseFooter />

        {/* Google Maps Embed */}
        <GoogleMapsEmbed
          apiKey="XYZ"
          height={200}
          width="100%"
          mode="place"
          q="Brooklyn+Bridge,New+York,NY"
        />

        {/* YouTube Embed */}
        <YouTubeEmbed videoid="ogfYd705cRs" height={400} params="controls=0" />
      </body>

      {/* Google Analytics */}
      <GoogleAnalytics gaId="G-XYZ" />
    </html>
  );
}