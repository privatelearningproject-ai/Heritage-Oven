"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Heart, Award, ShieldCheck } from "lucide-react";

export default function StoryPage() {
  // Easing function
  const easeTransition = [0.16, 1, 0.3, 1] as [number, number, number, number];

  return (
    <div className="pt-[100px] md:pt-[140px] bg-background overflow-hidden relative">
      {/* Background abstract gradient globs */}
      <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-40 right-[-10%] w-[600px] h-[600px] rounded-full bg-rose-deep/3 blur-[140px] pointer-events-none -z-10" />

      {/* 1. HERO STORY - IMMERSIVE OVERLAP */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 z-10 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeTransition }}
                className="inline-flex items-center gap-2 px-3.5 py-1 bg-accent/10 border border-accent/10 rounded-full"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent">
                  The Narrative
                </span>
              </motion.div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold leading-[0.85] tracking-tighter text-foreground">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: easeTransition }}
                  className="block"
                >
                  BORN FROM
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: easeTransition }}
                  className="block font-serif italic font-normal text-accent pt-2"
                >
                  Patience.
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: easeTransition }}
                className="text-foreground/70 text-lg md:text-2xl font-sans font-light leading-relaxed max-w-xl italic border-l-2 border-accent/20 pl-6"
              >
                Heritage Oven isn&apos;t just a bakery. It&apos;s a tribute to the 
                slow way of doing things—where fire, flour, and time converge 
                to create something extraordinary.
              </motion.p>
            </div>
            
            {/* Right Image Frame with luxury golden glow */}
            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: easeTransition }}
                className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 group"
              >
                <Image
                  src="/img/products/choco-vanilla-cake.jpeg"
                  alt="Choco Vanilla Cake"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-65" />
                
                {/* Visual Label */}
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/10 border border-white/15 px-6 py-4 rounded-2xl">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-white/60 uppercase block mb-1">Featured Craft</span>
                  <span className="text-sm font-bold text-white font-heading">Classic Eggless Choco-Vanilla</span>
                </div>
              </motion.div>

              {/* Floating golden particle elements */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/8 rounded-full blur-3xl -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE TIMELINE - EDITORIAL STRIP */}
      <section className="py-24 bg-[#FDFBF7]/60 border-y border-stone-200/40 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 items-center">
              
              {/* Stat 1 */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-3xl border border-stone-200/20 shadow-sm"
              >
                <span className="text-accent font-serif italic text-6xl md:text-7xl mb-2 block font-medium">2018</span>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-500 mb-2">The First Loaf</p>
                <p className="text-xs text-stone-400 max-w-[200px] mx-auto">Sourdough traditions ignited in Ghaziabad</p>
              </motion.div>

              <div className="w-px h-16 bg-stone-300/30 hidden md:block mx-auto" />

              {/* Stat 2 */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-3xl border border-stone-200/20 shadow-sm"
              >
                <span className="text-accent font-serif italic text-6xl md:text-7xl mb-2 block font-medium">100k+</span>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-500 mb-2">Stories Shared</p>
                <p className="text-xs text-stone-400 max-w-[200px] mx-auto">Delivered to celebrations across Crossings Republik</p>
              </motion.div>

              <div className="w-px h-16 bg-stone-300/30 hidden md:block mx-auto" />

              {/* Stat 3 */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-3xl border border-stone-200/20 shadow-sm"
              >
                <span className="text-accent font-serif italic text-6xl md:text-7xl mb-2 block font-medium">00</span>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-500 mb-2">Compromises Made</p>
                <p className="text-xs text-stone-400 max-w-[200px] mx-auto">No hydrogenated fats, only premium ingredients</p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CRAFT - VISUAL STORYTELLING */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Narrative Block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeTransition }}
              className="lg:col-span-6 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-rose-tint border border-rose-tint/20 rounded-full">
                <Heart className="w-3.5 h-3.5 text-rose-deep animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-rose-deep">
                  The Sourcing
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-foreground leading-[1.05] tracking-tight">
                The Alchemy of <br />
                <span className="serif italic font-normal text-accent font-serif">Simple Things.</span>
              </h2>
              
              <div className="space-y-6 text-foreground/75 text-base md:text-lg font-sans font-light leading-relaxed">
                <p>
                  We source the richest cream from local dairy farms, premium 
                  cocoa, and golden grains from the heartland of India to ensure 
                  every bite feels like a celebration.
                </p>
                <p>
                  Every Paneer Tikka Roll, every soft Eggless Pastry, and every 
                  freshly baked loaf is a tribute to the authentic flavors that 
                  our community loves.
                </p>
              </div>

              {/* Added value promises */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex gap-3 items-start">
                  <Award className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">FSSAI Certified</h4>
                    <p className="text-[11px] text-stone-400">Strict hygiene processes in every batch</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Pure Vegetarian</h4>
                    <p className="text-[11px] text-stone-400">100% eggless bakery & cake menu</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Masonry Images */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-6 items-start relative">
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeTransition }}
                className="aspect-[3/4] relative rounded-3xl overflow-hidden mt-12 shadow-xl border border-stone-100 group"
              >
                <Image 
                  src="/img/about-2.webp" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Bakery Crafting Process" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8, ease: easeTransition }}
                className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-xl border border-stone-100 group"
              >
                <Image 
                  src="/img/carousel-1.webp" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Fresh Breads" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              {/* Visual Frame Ornament */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-accent/20 rounded-tr-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-accent/20 rounded-bl-3xl -z-10" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
