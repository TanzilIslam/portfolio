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
        <meta name="title" content="Hi, I'm Thorn Chorn" />
        <meta name="description" content="A next js personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Thorn Chorn" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://next-js-portfolio-web.netlify.app/"
        />
        <meta property="og:title" content="Hi, I'm Thorn Chorn" />
        <meta property="og:description" content="A next js personal website" />
        <meta
          property="og:image"
          content="https://next-js-portfolio-web.netlify.app/og.png"
        />

        {/* Open Graph Defaults */}
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://next-js-portfolio-web.netlify.app/og.png"
        />
        <meta property="og:title" content="Hi, I'm Thorn Chorn" />
        <meta
          property="og:description"
          content="Welcome to Your Website. Discover amazing features and learn more about what we offer."
        />
        <meta
          property="og:url"
          content="https://next-js-portfolio-web.netlify.app/"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://next-js-portfolio-web.netlify.app/"
        />
        <meta property="twitter:title" content="Hi, I'm Thorn Chorn" />
        <meta
          property="twitter:description"
          content="A next js personal website"
        />
        <meta
          property="twitter:image"
          content="https://next-js-portfolio-web.netlify.app/og.png"
        />

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
