"use client";
import "./globals.css";

import Head from "next/head";
import CustomCursor from "@/app/components/CustomCursor";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
const seoData = {
  title: "HI, I am Thorn Chorn",
  author:'Thorn Chorn',
  keywords:'next 15,tailwind css, motion,personal website, portfolio',
  description: "A next js personal website",
  siteName:'Next Portfolio',
  url: "https://next-js-portfolio-web.netlify.app/",
  image: "https://next-js-portfolio-web.netlify.app/og.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{seoData.title}</title>
        <meta name="keywords" content={seoData.keywords} />
        <meta name="author" content={seoData.author} />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={seoData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:site_name" content={seoData.siteName} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thornchorn" />
        <meta property="twitter:url" content={seoData.url} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
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
