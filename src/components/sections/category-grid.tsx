"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    title: "Signature Cakes",
    category: "The Art of Celebration",
    image: "/img/products/kitkat-truffle.jpeg",
    href: "/our-products#cakes",
  },
  {
    title: "Artisanal Breads",
    category: "Daily Rituals",
    image: "/img/carousel-1.webp",
    href: "/our-products#breads",
  },
  {
    title: "Savory Bakes",
    category: "The Tea Hour",
    image: "/img/service-2.webp",
    href: "/our-products#snacks",
  },
];

export function CategoryGrid() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header - Balanced & Minimal */}
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-6"
          >
            The Permanent Collection
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-heading font-bold leading-tight"
          >
            Baked with <span className="serif italic font-normal text-accent">Intent.</span>
          </motion.h2>
        </div>

        {/* Inline Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {collections.map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={item.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted rounded-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
                </div>
                <div className="mt-8 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-2">{item.category}</p>
                    <h3 className="text-2xl font-heading font-bold group-hover:text-accent transition-colors duration-500">{item.title}</h3>
                  </div>
                  <ArrowUpRight size={18} className="text-black/20 group-hover:text-accent transition-colors duration-500" />
                </div>
                <div className="mt-4 w-full h-[1px] bg-black/5 group-hover:bg-accent/30 transition-colors duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
