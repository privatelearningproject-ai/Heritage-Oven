"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: "/img/carousel-1.webp",
    tagline: "Baked Fresh Daily",
    title: "PURE",
    accentTitle: "Tradition.",
    description: "Soft, oven-fresh breads and artisanal loaves, baked every morning with no preservatives. The perfect start to your family breakfast.",
    cta: "The Bread Collection"
  },
  {
    image: "/img/carousel-2.webp",
    tagline: "Celebration Masterpieces",
    title: "GRAND",
    accentTitle: "Moments.",
    description: "Every birthday and anniversary deserves a masterpiece. Indulge in our signature Dutch Truffle and custom-designed Eggless celebration cakes.",
    cta: "The Cake Gallery"
  },
  {
    image: "/img/service-1.webp",
    tagline: "The Evening Chai Ritual",
    title: "SAVORY",
    accentTitle: "Delights.",
    description: "Spicy Paneer Tikka rolls and buttery, flaky patties that turn your evening chai into a daily ritual of comfort and joy.",
    cta: "Explore Savories"
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0F0D0C]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0"
        >
          {/* Enhanced Background with subtle vignette and deep contrast */}
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt="Premium Bakery"
              fill
              className="object-cover brightness-[0.7] contrast-[1.1]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>

          {/* Editorial Content Layout */}
          <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col justify-center">
            <div className="max-w-4xl">
              
              {/* Floating Vertical Year Accents (High Fashion Style) */}
              <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden xl:block">
                <p className="text-[8px] font-bold tracking-[1em] uppercase text-accent/40 vertical-text py-20 border-l border-accent/20 pl-4">
                  Est. 2018 — Heritage Oven
                </p>
              </div>

              {/* Tagline with animated line */}
              <div className="flex items-center gap-6 mb-12">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-px bg-accent"
                />
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="text-accent text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase"
                >
                  {slides[current].tagline}
                </motion.p>
              </div>

              {/* Main Headline - Overlapping & Bold */}
              <div className="relative">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                  className="text-[12vw] md:text-[9rem] font-heading font-bold text-white leading-[0.85] tracking-tighter"
                >
                  {slides[current].title} <br />
                  <span className="text-accent italic font-normal serif opacity-90 block mt-4 ml-[0.2em]">
                    {slides[current].accentTitle}
                  </span>
                </motion.h1>
              </div>

              {/* Description - Editorial Serif */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="mt-16 md:mt-20 max-w-lg md:ml-12"
              >
                <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed serif italic border-l-2 border-accent/20 pl-8">
                  {slides[current].description}
                </p>
                
                {/* CTA - Underlined Minimal */}
                <div className="mt-16">
                  <Link 
                    href="/our-products" 
                    className="group inline-flex flex-col text-white text-[10px] font-bold tracking-[0.3em] uppercase"
                  >
                    <span className="mb-2 transition-colors group-hover:text-accent">{slides[current].cta}</span>
                    <div className="w-12 h-px bg-accent transition-all duration-700 group-hover:w-full" />
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modern Navigation (Side Numbers) */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-12 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="group flex items-center gap-6 text-right"
          >
            <span className={cn(
              "text-[10px] font-bold transition-all duration-500",
              current === i ? "text-accent scale-150" : "text-white/20 group-hover:text-white/60"
            )}>
              0{i + 1}
            </span>
            <div className={cn(
              "w-px transition-all duration-700",
              current === i ? "h-12 bg-accent" : "h-4 bg-white/10 group-hover:bg-white/30"
            )} />
          </button>
        ))}
      </div>

      {/* Manual Arrow Controls (Bottom Right) */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-30">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center border border-white/10 text-white/40 hover:border-accent hover:text-accent transition-all rounded-full"
        >
          <span className="sr-only">Prev</span>
          ←
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center border border-white/10 text-white/40 hover:border-accent hover:text-accent transition-all rounded-full"
        >
          <span className="sr-only">Next</span>
          →
        </button>
      </div>

      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
}
