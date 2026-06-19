import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LocalBusinessSchema } from "@/components/seo/json-ld";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              "name": "Heritage Oven",
              "url": "https://heritageoven.in",
              "telephone": "+918178769036",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop-06, Assotech HI-STREET, LGF",
                "addressLocality": "Crossings Republik",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "201016",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                "opens": "09:00",
                "closes": "21:00"
              },
              "servesCuisine": ["Cakes","Pastries","Breads","Bakery"],
              "priceRange": "₹₹"
            }).replace(/</g, '\\u003c')
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <LocalBusinessSchema />
        <AnnouncementBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
