"use client";
import "./globals.css";

import Head from "next/head";
import CustomCursor from "@/app/components/CustomCursor";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Global SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Your Name" />

        {/* Open Graph Defaults */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og.png" />
        <meta property="og:title" content="Your Website Name" />
        <meta
          property="og:description"
          content="Welcome to Your Website. Discover amazing features and learn more about what we offer."
        />
        <meta property="og:url" content="https://yourwebsite.com/" />

        {/* Twitter Card Defaults */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Website Name" />
        <meta
          name="twitter:description"
          content="Welcome to Your Website. Discover amazing features and learn more about what we offer."
        />
        <meta name="twitter:image" content="/og.image" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
