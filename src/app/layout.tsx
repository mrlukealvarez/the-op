import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
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
  title: {
    default: "THE OP — Where the Black Hills Come Together",
    template: "%s | THE OP",
  },
  description:
    "Amsterdam-inspired cafe and community space in Custer, South Dakota. Craft coffee, cannabis culture, and community — the heart of the Black Hills Consortium campus.",
  keywords: [
    "THE OP",
    "Custer SD cafe",
    "cannabis cafe",
    "Black Hills coffee",
    "community space",
    "Black Hills Consortium",
    "South Dakota",
  ],
  openGraph: {
    title: "THE OP — Where the Black Hills Come Together",
    description:
      "Amsterdam-inspired cafe and community space in Custer, South Dakota. Craft coffee, cannabis culture, and community.",
    type: "website",
    locale: "en_US",
    siteName: "THE OP",
  },
  twitter: {
    card: "summary_large_image",
    title: "THE OP — Where the Black Hills Come Together",
    description:
      "Amsterdam-inspired cafe and community space in Custer, South Dakota.",
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
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
