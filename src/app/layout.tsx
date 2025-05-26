/** @format */

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portlify-navy.vercel.app"),
  title: "Build Your Stunning Portfolio in Minutes | Portfilo",
  description:
    "No coding needed. Choose a template, customize your style, and launch your personal brand with ease. Build your stunning portfolio website in minutes.",
  keywords: [
    "portfolio builder",
    "no code portfolio",
    "personal branding",
    "portfolio template",
    "build portfolio",
    "portfilo",
    "portfolio website",
  ],
  applicationName: "Portfilo",
  robots: "index, follow",
  category: "Personal Branding, Portfolio Builder",
  authors: [{ name: "Portfilo", url: "https://portlify-navy.vercel.app" }],
  openGraph: {
    title: "Build Your Stunning Portfolio in Minutes | Portfilo",
    description:
      "No coding needed. Choose a template, customize your style, and launch your personal brand with ease.",
    url: "https://portlify-navy.vercel.app",
    siteName: "Portfilo",
    images: [
      {
        url: "https://portlify-navy.vercel.app/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Portfilo - Build Your Stunning Portfolio in Minutes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Portfilo",
    title: "Build Your Stunning Portfolio in Minutes | Portfilo",
    description:
      "No coding needed. Choose a template, customize your style, and launch your personal brand with ease.",
    images: ["https://portlify-navy.vercel.app/images/logo.png"],
  },
  other: {
    "google-site-verification": "",
    "schema:Organization": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Portfilo Builder",
      url: "https://portlify-navy.vercel.app",
      logo: "https://portlify-navy.vercel.app/images/logo.png",
      description:
        "No coding needed. Choose a template, customize your style, and launch your personal brand with ease.",
    }),
  },
  alternates: {
    canonical: "https://portlify-navy.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
