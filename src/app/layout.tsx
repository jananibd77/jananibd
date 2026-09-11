import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jananicraft.com"),
  title: {
    default: "Janani Craft & Fashion | Bangladeshi Traditional Handicrafts & Textiles",
    template: "%s | Janani Craft & Fashion",
  },
  description:
    "Discover handcrafted Bangladeshi handicrafts, heritage Nakshi Kantha, bamboo & cane homeware, golden jute, and traditional wear. Rooted in rural artisan culture and natural materials.",
  keywords: [
    "Bangladeshi handicrafts",
    "Handmade Bangladesh products",
    "Nakshi Kantha",
    "Bamboo crafts",
    "Cane crafts",
    "Jute products",
    "Handmade home decor",
    "Bangladeshi traditional crafts",
    "Handcrafted textiles",
    "Traditional wear Panjabi",
  ],
  authors: [{ name: "Janani Craft & Fashion" }],
  openGraph: {
    title: "Janani Craft & Fashion | Traditional Handicrafts & Textiles",
    description:
      "Handcrafted in Bangladesh. Traditional textiles, Nakshi Kantha, bamboo & cane homeware, and golden jute pieces designed for modern living.",
    url: "https://jananicraft.com",
    siteName: "Janani Craft & Fashion",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero_artisanal_spread_4k.webp",
        width: 1200,
        height: 630,
        alt: "Janani Craft & Fashion — Bangladeshi Traditional Handicrafts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Janani Craft & Fashion | Traditional Handicrafts & Textiles",
    description:
      "Handcrafted in Bangladesh. Traditional textiles, Nakshi Kantha, bamboo & cane homeware, and golden jute pieces designed for modern living.",
    images: ["/images/hero_artisanal_spread_4k.webp"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-stone-900 selection:bg-[#A84A28] selection:text-white overflow-x-hidden max-w-full"
      >
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
