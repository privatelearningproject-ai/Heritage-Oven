"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SplitIntent() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden flex flex-col md:flex-row border-y border-black/5">
      
      {/* Path 1: The Oven (Warm/Premium) */}
      <Link href="/our-products#cakes" className="group relative flex-1 overflow-hidden flex items-center justify-center">
        <Image 
          src="/img/carousel-2.webp"
          alt="The Oven"
          fill
          className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-[#2C241E]/40 group-hover:bg-[#2C241E]/20 transition-colors duration-700" />
        
        <div className="relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/80 text-[10px] font-bold tracking-[0.4em] uppercase mb-4"
          >
            The Artisan Path
          </motion.p>
          <h3 className="text-white text-5xl md:text-7xl font-heading font-bold mb-8">THE OVEN</h3>
          <div className="inline-flex items-center gap-4 text-white text-[10px] font-bold tracking-[0.2em] uppercase">
            <span>Explore Bakes</span>
            <div className="w-8 h-[1px] bg-white group-hover:w-16 transition-all duration-700" />
          </div>
        </div>
      </Link>

      {/* Path 2: The Pantry (Cool/Everyday) */}
      <Link href="/our-products#snacks" className="group relative flex-1 overflow-hidden flex items-center justify-center">
        <Image 
          src="/img/service-1.webp"
          alt="The Pantry"
          fill
          className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-[#B08E6B]/40 group-hover:bg-[#B08E6B]/20 transition-colors duration-700" />
        
        <div className="relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/80 text-[10px] font-bold tracking-[0.4em] uppercase mb-4"
          >
            The Daily Ritual
          </motion.p>
          <h3 className="text-white text-5xl md:text-7xl font-heading font-bold mb-8">THE PANTRY</h3>
          <div className="inline-flex items-center gap-4 text-white text-[10px] font-bold tracking-[0.2em] uppercase">
            <span>Explore Snacks</span>
            <div className="w-8 h-[1px] bg-white group-hover:w-16 transition-all duration-700" />
          </div>
        </div>
      </Link>

      {/* The Center "VS" or Divider Ornament */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-px h-full bg-white/20 hidden md:block" />
    </section>
  );
}
