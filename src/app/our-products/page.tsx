"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { menuCategories } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function OurProducts() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <Navbar />
      
      {/* 1. ATMOSPHERIC HEADER */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-[#0F0D0C]">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <Image 
            src="/img/carousel-2.webp" 
            fill
            className="object-cover"
            alt="Bakery Atmosphere"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-8"
          >
            Curated with Heart
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-heading font-bold text-white tracking-tighter"
          >
            THE <span className="serif italic font-normal text-accent">CATALOG.</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. CATEGORY NAVIGATION */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-black/5 py-6">
        <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex justify-center gap-12 min-w-max">
            {menuCategories.map((cat) => (
              <a 
                key={cat.id} 
                href={`#${cat.id}`}
                className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/40 hover:text-accent transition-colors"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 3. VISUAL CATALOG GRID */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          {menuCategories.map((category, catIndex) => (
            <div key={category.id} id={category.id} className="mb-40 scroll-mt-48">
              {/* Category Header */}
              <div className="flex flex-col md:flex-row items-baseline gap-6 mb-20 border-l-4 border-accent pl-8">
                <span className="text-accent font-heading italic text-4xl">0{catIndex + 1}</span>
                <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tight text-primary">
                  {category.name}
                </h2>
              </div>

              {/* Product Visual Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {category.items.map((item, i) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group"
                  >
                    <Link href={`https://wa.me/8178769036?text=I'd like to order ${item.name}`} className="block">
                      <div className="relative aspect-square overflow-hidden bg-white mb-8 rounded-sm shadow-sm group-hover:shadow-2xl transition-all duration-700">
                        {item.image ? (
                          <Image 
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-muted text-6xl">
                            {item.emoji}
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-1000" />
                        
                        {/* Emoji Overlay - Fun Premium Detail */}
                        <div className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                          <span className="text-xl">{item.emoji}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-heading font-bold group-hover:text-accent transition-colors duration-500">
                            {item.name}
                          </h3>
                          <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-black/20 mt-2">
                            Freshly Prepared
                          </p>
                        </div>
                        <span className="text-base font-bold text-accent">{item.price}</span>
                      </div>
                      
                      <div className="mt-6 flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-accent opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                        <span>Request via WhatsApp</span>
                        <ChevronRight size={14} />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
