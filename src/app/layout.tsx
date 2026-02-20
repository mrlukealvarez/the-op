import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/json-ld";
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
  },
  twitter: {
    card: "summary_large_image",
    title: "THE OP — Where the Black Hills Come Together",
    description:
      "Coffee shop and tourist stop in Custer, South Dakota.",
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
      </body>
    </html>
  );
}
