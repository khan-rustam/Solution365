import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solutions369 - Digital Marketing Agency",
  description:
    "A dynamic digital marketing agency blending creativity, strategy, and technology for measurable brand growth.",
  metadataBase: new URL("https://solutions369.in"),
  openGraph: {
    title: "Solutions369 - Digital Marketing Agency",
    description:
      "A dynamic digital marketing agency blending creativity, strategy, and technology for measurable brand growth.",
    url: "https://solutions369.in",
    siteName: "Solutions369",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Solutions369 - Digital Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@solutions369in",
    title: "Solutions369 - Digital Marketing Agency",
    description:
      "A dynamic digital marketing agency blending creativity, strategy, and technology for measurable brand growth.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://solutions369.in" />
        <link rel="apple-touch-icon" sizes="180x180" href="/SEO/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/SEO/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/SEO/favicon-16x16.png" />
        <link rel="manifest" href="/SEO/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="192x192" href="/SEO/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/SEO/android-chrome-512x512.png" />
        <link rel="shortcut icon" href="/SEO/favicon.ico" />
        <meta name="theme-color" content="#28ade1" />
        {/* Open Graph and Twitter tags are handled by Next.js metadata */}
      </head>
      <body>{children}</body>
    </html>
  );
}
