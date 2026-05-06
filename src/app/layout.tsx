import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { StickyMobileCTA } from "@/components/layout/sticky-mobile-cta";
import { LocalBusinessSchema } from "@/components/seo/json-ld";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Heritage Oven | Premium Bakery in Ghaziabad",
  description: "Freshly baked comfort, right to your door. Handcrafted cakes, pastries, and daily delights in Crossings Republik, Ghaziabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <LocalBusinessSchema />
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
