import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/json-ld";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://the-op.vercel.app'),
  title: {
    default: "THE OP — Where the Black Hills Come Together",
    template: "%s | THE OP",
  },
  description:
    "Coffee shop and tourist stop in Custer, South Dakota. Craft coffee, local merch, drive-through convenience — the heart of the Black Hills Consortium campus.",
  keywords: [
    "THE OP",
    "Custer SD cafe",
    "coffee shop",
    "Black Hills coffee",
    "community space",
    "Black Hills Consortium",
    "South Dakota",
    "tourist stop",
    "campus coffee",
  ],
  openGraph: {
    title: "THE OP — Where the Black Hills Come Together",
    description:
      "Coffee shop and tourist stop in Custer, South Dakota. Craft coffee, local merch, drive-through convenience.",
    type: "website",
    locale: "en_US",
    siteName: "THE OP",
    url: 'https://the-op.vercel.app',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'THE OP' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "THE OP — Where the Black Hills Come Together",
    description:
      "Coffee shop and tourist stop in Custer, South Dakota.",
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://the-op.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <OrganizationJsonLd
          name="THE OP"
          url="https://the-op.vercel.app"
          description="Cannabis-adjacent cafe and community anchor in Custer, South Dakota"
          parentOrg="Black Hills Consortium"
        />
        <WebSiteJsonLd name="THE OP" url="https://the-op.vercel.app" />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </body>
    </html>
  );
}
