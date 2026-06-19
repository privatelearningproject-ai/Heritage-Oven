"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StoryPage() {
  return (
    <div className="pt-[100px] md:pt-[140px]">
      {/* 1. HERO STORY - IMMERSIVE OVERLAP */}
      <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6 z-10">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-10"
              >
                The Narrative
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-8xl font-heading font-bold leading-[0.9] tracking-tighter text-primary mb-12"
              >
                BORN FROM <br />
                <span className="serif italic font-normal text-accent">Patience.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-primary/60 text-lg md:text-2xl font-light leading-relaxed serif italic max-w-xl"
              >
                Heritage Oven isn&apos;t just a bakery. It&apos;s a tribute to the 
                slow way of doing things—where fire, flour, and time converge 
                to create something extraordinary.
              </motion.p>
            </div>
            
            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl"
              >
                <Image
                  src="/img/products/choco-vanilla-cake.jpeg"
                  alt="Choco Vanilla Cake"
                  fill
                  className="object-cover"
                />
              </motion.div>
              {/* Decorative Ornament */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE TIMELINE - EDITORIAL STRIP */}
      <section className="py-40 bg-[#FAF8F5]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-20">
              <div className="text-center">
                <span className="text-accent font-heading italic text-5xl mb-4 block">2018</span>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">The First Loaf</p>
              </div>
              <div className="w-px h-20 bg-black/5 hidden md:block" />
              <div className="text-center">
                <span className="text-accent font-heading italic text-5xl mb-4 block">100k+</span>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Stories Shared</p>
              </div>
              <div className="w-px h-20 bg-black/5 hidden md:block" />
              <div className="text-center">
                <span className="text-accent font-heading italic text-5xl mb-4 block">00</span>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Compromises Made</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CRAFT - VISUAL STORYTELLING */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-10 text-primary">The Alchemy of <br /> Simple Things.</h2>
              <p className="text-primary/60 text-lg leading-relaxed font-light mb-8">
                We source the richest cream from local dairy farms, premium 
                cocoa, and golden grains from the heartland of India to ensure 
                every bite feels like a celebration.
              </p>
              <p className="text-primary/60 text-lg leading-relaxed font-light">
                Every Paneer Tikka Roll, every soft Eggless Pastry, and every 
                freshly baked loaf is a tribute to the authentic flavors that 
                our community loves.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-[3/4] relative rounded-sm overflow-hidden mt-12 shadow-xl"
              >
                <Image src="/img/about-2.webp" fill className="object-cover" alt="Craft 1" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="aspect-[3/4] relative rounded-sm overflow-hidden shadow-xl"
              >
                <Image src="/img/carousel-1.webp" fill className="object-cover" alt="Craft 2" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
