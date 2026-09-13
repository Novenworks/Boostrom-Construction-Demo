import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.deployedUrl),
  title: "Boostrom Construction | Orange County Remodeling",
  description:
    "Orange County remodeling since 2000 — kitchens, bathrooms, indoor and outdoor living, and larger renovations. License #789193. Request an estimate at (949) 500-1851.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Remodel the Home. Rework the Way You Live In It.",
    description:
      "Boostrom Construction — Orange County kitchens, baths, outdoor living, and whole-home remodeling. License #789193.",
    url: site.deployedUrl,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/bathroom-vanity.jpg",
        width: 1600,
        height: 1200,
        alt: "Finished dual-sink bathroom vanity with stone counters and a backlit mirror",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <head>
        <link rel="icon" href="/images/logo-white.png" />
      </head>
      <body className="min-h-screen bg-paper-50 font-sans text-ink-900 antialiased">
        {children}
      </body>
    </html>
  );
}
