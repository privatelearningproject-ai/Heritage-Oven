"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const HERO_VARIANTS = [
  {
    start: 7,
    end: 11,
    headline: "Fresh from the Oven",
    subtext: "Breads, pastries & morning treats baked today",
    cta: "Shop Breakfast",
    filter: "savory",
    bgTone: "bg-background",
    image: "/img/carousel-1.webp"
  },
  {
    start: 12,
    end: 15,
    headline: "Office Hunger Rescue",
    subtext: "Rolls, patties & sandwiches — hot and ready",
    cta: "Grab a Quick Bite",
    filter: "savory",
    bgTone: "bg-background",
    image: "/img/carousel-2.webp"
  },
  {
    start: 16,
    end: 18,
    headline: "The 4PM Ritual",
    subtext: "Ghee biscuits, namkeens & tea-time classics",
    cta: "Shop Tea-Time",
    filter: "tea-time",
    bgTone: "bg-background",
    image: "/img/carousel-1.webp"
  },
  {
    start: 19,
    end: 23,
    headline: "Midnight Cravings",
    subtext: "Pastries, cakes & late-night indulgence",
    cta: "Order Now",
    filter: "cakes",
    bgTone: "bg-foreground",
    image: "/img/carousel-2.webp",
    isDark: true
  },
  {
    start: 0,
    end: 6,
    headline: "Pure Tradition. Premium Baking.",
    subtext: "Heritage Oven — Ghaziabad's favorite artisanal bakery.",
    cta: "Explore All",
    filter: "all",
    bgTone: "bg-background",
    image: "/img/carousel-1.webp"
  }
]

export const HeroSection: React.FC = () => {
  const [variant, setVariant] = useState(HERO_VARIANTS[4])

  useEffect(() => {
    const hour = new Date().getHours()
    const currentVariant = HERO_VARIANTS.find(v => hour >= v.start && hour <= v.end) || HERO_VARIANTS[4]
    setVariant(currentVariant)
  }, [])

  return (
    <section className={cn(
      "relative h-[95vh] md:h-screen flex items-center overflow-hidden transition-colors duration-1000",
      variant.bgTone
    )}>
      {/* Cinematic Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className={cn(
          "absolute inset-0 z-10",
          variant.isDark 
            ? "bg-gradient-to-b from-black/60 via-black/20 to-black/80" 
            : "bg-gradient-to-b from-black/40 via-transparent to-background/90"
        )} />
        <img 
          src={variant.image} 
          alt="Bakery background" 
          className="w-full h-full object-cover object-center scale-105 animate-slow-zoom brightness-[0.85] contrast-[1.05]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20 pt-20">
        <div className="max-w-4xl space-y-10">
          <div className="space-y-4">
            <span className={cn(
              "inline-block px-4 py-1 text-[10px] font-bold tracking-[0.4em] uppercase rounded-none border-l-2",
              variant.isDark ? "border-accent text-accent" : "border-accent text-accent"
            )}>
              Est. 2018 · Crossings Republik
            </span>
            <h1 className={cn(
              "text-7xl md:text-9xl lg:text-[10rem] font-serif font-bold leading-[0.85] tracking-tighter text-white drop-shadow-2xl"
            )}>
              {variant.headline.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
          </div>
          
          <p className={cn(
            "text-xl md:text-3xl font-light max-w-xl leading-relaxed italic serif text-white/90"
          )}>
            {variant.subtext}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 pt-10">
            <Link 
              href={`/our-products?filter=${variant.filter}`}
              className={cn(
                "px-14 py-6 rounded-none text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-700 text-center hover:scale-105 active:scale-95 shadow-2xl",
                "bg-accent text-white hover:bg-white hover:text-foreground"
              )}
            >
              {variant.cta}
            </Link>
            <Link 
              href="/our-products"
              className={cn(
                "px-14 py-6 rounded-none text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-700 text-center border-white/20 text-white border hover:bg-white/10 hover:scale-105 active:scale-95 shadow-xl backdrop-blur-sm"
              )}
            >
              The Collection
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s linear infinite alternate;
        }
      `}</style>
    </section>
  )
}
