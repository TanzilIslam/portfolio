import "./globals.css";

import Head from "next/head";
import CustomCursor from "@/app/components/CustomCursor";
import Header from "@/app/components/Header";
import BaseFooter from "@/app/components/BaseFooter";

export const metadata = {
  title: "HI, I am Thorn Chorn",
  description: "A next js personal website",
  keywords: "next 15,tailwind css, motion,personal website, portfolio",
  author: "Thorn Chorn",
  applicationName: "Next Portfolio",
  generator: "Next.js",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  colorScheme: "light",
  referrer: "no-referrer-when-downgrade",
  canonical: "https://next-js-portfolio-web.netlify.app/",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    title: "HI, I am Thorn Chorn",
    description: "A next js personal website",
    url: "https://next-js-portfolio-web.netlify.app/",
    siteName: "Next Portfolio",
    images: [
      {
        url: "https://next-js-portfolio-web.netlify.app/og.png",
        width: 1200,
        height: 630,
        alt: "Next.js personal website portfolio preview",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@thornchorn",
    title: "HI, I am Thorn Chorn",
    description: "A next js personal website",
    images: ["https://next-js-portfolio-web.netlify.app/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={metadata.url} />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content={metadata.image || "/default-og.png"}
        />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:site_name" content={metadata.siteName} />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image:alt"
          content="Next.js personal website portfolio preview"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thornchorn" />
        <meta property="twitter:url" content={metadata.url} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content={metadata.image || "/default-twitter.png"}
        />
      </Head>
      <body>
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <BaseFooter />
      </body>
    </html>
  );
}
