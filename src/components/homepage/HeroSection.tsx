"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Sparkles, ArrowRight, Sun, Coffee, Sunset, Moon, Utensils } from 'lucide-react'

interface HeroVariant {
  id: string
  start: number
  end: number
  label: string
  icon: React.ComponentType<{ className?: string }>
  emoji: string
  headline: string
  subtext: string
  cta: string
  filter: string
  bgTone: string
  image: string
  isDark?: boolean
}

const HERO_VARIANTS: HeroVariant[] = [
  {
    id: 'morning',
    start: 7,
    end: 11,
    label: "Breakfast",
    icon: Sun,
    emoji: "🌅",
    headline: "Fresh from the Oven",
    subtext: "Warm artisan breads, golden croissants, and morning treats baked fresh today.",
    cta: "Shop Breakfast",
    filter: "savory",
    bgTone: "bg-[#5C3E21]/20",
    image: "/img/carousel-1.webp",
    isDark: true
  },
  {
    id: 'lunch',
    start: 12,
    end: 15,
    label: "Quick Bites",
    icon: Utensils,
    emoji: "🌯",
    headline: "Hunger Rescue",
    subtext: "Warm patties, fresh rolls, and healthy munchies — ready for your lunchtime craving.",
    cta: "Grab a Snack",
    filter: "savory",
    bgTone: "bg-[#7C4D12]/20",
    image: "/img/carousel-2.webp",
    isDark: true
  },
  {
    id: 'tea',
    start: 16,
    end: 18,
    label: "4PM Tea",
    icon: Coffee,
    emoji: "☕",
    headline: "The 4PM Ritual",
    subtext: "Traditional desi ghee biscuits, crispy namkeens, and the perfect crunch for your evening chai.",
    cta: "Shop Tea-Time",
    filter: "tea-time",
    bgTone: "bg-[#451A03]/20",
    image: "/img/carousel-1.webp",
    isDark: true
  },
  {
    id: 'night',
    start: 19,
    end: 23,
    label: "Late Indulgence",
    icon: Moon,
    emoji: "🌙",
    headline: "Midnight Cravings",
    subtext: "Pastries, customized celebration cakes, and rich chocolate desserts to satisfy your sweet tooth.",
    cta: "Order Cravings",
    filter: "cakes",
    bgTone: "bg-black/40",
    image: "/img/carousel-2.webp",
    isDark: true
  },
  {
    id: 'signature',
    start: 0,
    end: 6,
    label: "Signature",
    icon: Sparkles,
    emoji: "✨",
    headline: "Pure Tradition Premium Baking",
    subtext: "Heritage Oven — Ghaziabad's favorite bakery serving artisan delicacies and bespoke cakes.",
    cta: "Explore All",
    filter: "all",
    bgTone: "bg-stone-950/30",
    image: "/img/carousel-1.webp",
    isDark: true
  }
]

export const HeroSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('signature')
  const [selectedVariant, setSelectedVariant] = useState<HeroVariant>(HERO_VARIANTS[4])

  useEffect(() => {
    const hour = new Date().getHours()
    const currentVariant = HERO_VARIANTS.find(v => hour >= v.start && hour <= v.end) || HERO_VARIANTS[4]
    setSelectedVariant(currentVariant)
    setActiveId(currentVariant.id)
  }, [])

  const handleSelectVariant = (variant: HeroVariant) => {
    setSelectedVariant(variant)
    setActiveId(variant.id)
  }

  // Animation variants
  const wordVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number]
      }
    })
  }

  return (
    <section className="relative h-[92vh] md:h-[95vh] flex items-center overflow-hidden bg-background">
      {/* Background Image Slideshow with AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedVariant.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30 z-10" />
            <div className={cn("absolute inset-0 transition-colors duration-1000 z-10", selectedVariant.bgTone)} />
            
            <img 
              src={selectedVariant.image} 
              alt={selectedVariant.headline} 
              className="w-full h-full object-cover object-center brightness-[0.7] contrast-[1.05]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20 pt-12">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedVariant.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Premium Est. Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full">
                <selectedVariant.icon className="w-3.5 h-3.5 text-accent animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/95">
                  {selectedVariant.label} Mode · Est. 2018
                </span>
              </div>

              {/* Staggered Word Reveal for Headline */}
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-heading font-extrabold leading-[0.9] tracking-tighter text-white drop-shadow-2xl">
                {selectedVariant.headline.split(' ').map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden mr-3 md:mr-6 pb-2">
                    <motion.span
                      variants={wordVariants}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>

              {/* Subtext */}
              <p className="text-lg md:text-2xl font-sans font-light max-w-xl leading-relaxed text-white/80">
                {selectedVariant.subtext}
              </p>

              {/* Animated Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6">
                <Link 
                  href={`/our-products?filter=${selectedVariant.filter}`}
                  className="group relative px-8 py-4 bg-accent text-white font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {selectedVariant.cta}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </Link>
                
                <Link 
                  href="/our-products"
                  className="px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all backdrop-blur-sm"
                >
                  The Collection
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Time-of-day mood controller widget */}
          <div className="mt-16 md:mt-24 pt-8 border-t border-white/10 max-w-2xl">
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/50 mb-4 flex items-center gap-2">
              <Clock className="w-3 h-3 text-accent" /> Explore the Daily Cycle
            </p>
            <div className="grid grid-cols-5 gap-2 bg-black/35 backdrop-blur-md p-1.5 border border-white/5 rounded-2xl">
              {HERO_VARIANTS.map((v) => {
                const Icon = v.icon
                const isActive = activeId === v.id
                return (
                  <button
                    key={v.id}
                    onClick={() => handleSelectVariant(v)}
                    className={cn(
                      "flex flex-col items-center justify-center py-2.5 rounded-xl transition-all duration-300 relative",
                      isActive 
                        ? "bg-accent/90 text-white shadow-lg scale-105" 
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5 mb-1" />
                    <span className="text-[9px] md:text-[10px] font-bold tracking-wider hidden sm:inline">
                      {v.label}
                    </span>
                    {isActive && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
