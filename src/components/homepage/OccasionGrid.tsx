import React from 'react'
import Link from 'next/link'
import { SectionHeader } from '@/components/shared/SectionHeader'

const OCCASIONS = [
  {
    emoji: "🎂",
    title: "Celebration Hub",
    subtitle: "Cakes & party magic",
    href: "/collections/celebration",
    bg: "bg-rose-deep",
    image: "/img/product-1.webp"
  },
  {
    emoji: "☕",
    title: "Tea-Time Ritual",
    subtitle: "Biscuits & namkeen",
    href: "/collections/tea-time",
    bg: "bg-brown-deep",
    image: "/img/product-2.webp"
  },
  {
    emoji: "🥗",
    title: "Wellness Pantry",
    subtitle: "Roasted superfoods",
    href: "/collections/wellness-pantry",
    bg: "bg-green-deep",
    image: "/img/service-1.webp"
  },
  {
    emoji: "⚡",
    title: "Quick Bites",
    subtitle: "Hot & fresh snacks",
    href: "/collections/quick-bites",
    bg: "bg-orange-deep",
    image: "/img/product-3.webp"
  },
  {
    emoji: "🎁",
    title: "Birthday Boutique",
    subtitle: "Full party kits",
    href: "/collections/birthday",
    bg: "bg-rose-text",
    image: "/img/carousel-1.webp"
  },
  {
    emoji: "✨",
    title: "Best Sellers",
    subtitle: "Ghaziabad's favorites",
    href: "/collections/best-sellers",
    bg: "bg-gold-deep",
    image: "/img/products/assets/heritage-display.jpg"
  }
]

export const OccasionGrid: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeader 
          heading="What are you in the mood for?"
          subtext="Discover our range curated by your eating habits and emotional intent."
          align="center"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {OCCASIONS.map((occ, idx) => (
            <Link 
              key={idx}
              href={occ.href}
              className="group relative h-48 md:h-64 rounded-2xl overflow-hidden bg-muted"
            >
              <div className="absolute inset-0 z-0">
                <div className={`absolute inset-0 ${occ.bg} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                <img 
                  src={occ.image} 
                  alt={occ.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="relative z-10 h-full p-6 flex flex-col justify-end text-white">
                <span className="text-3xl mb-2">{occ.emoji}</span>
                <h3 className="text-lg md:text-xl font-bold leading-tight">{occ.title}</h3>
                <p className="text-xs md:text-sm text-white/90 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {occ.subtitle} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
