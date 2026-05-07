"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const displayItems = [
  { 
    name: "Butter Croissants", 
    price: "₹85", 
    image: "/img/products/butter-croissant.jpg",
    tag: "Flaky & Golden"
  },
  { 
    name: "Dutch Truffle", 
    price: "₹500", 
    image: "/img/products/dark-choco-truffle-pastry.jpeg",
    tag: "Celebration Favorite"
  },
  { 
    name: "Artisanal Sourdough", 
    price: "₹150", 
    image: "/img/service-2.webp",
    tag: "Heritage Recipe"
  },
  { 
    name: "Red Velvet Pastry", 
    price: "₹85", 
    image: "/img/products/red-velvet-pastry.jpg",
    tag: "Classic Delight"
  },
  { 
    name: "Paneer Kulcha", 
    price: "₹60", 
    image: "/img/products/paneer-kulcha.jpeg",
    tag: "Savory Favorite"
  },
];

export function BakeryDisplay() {
  return (
    <section className="py-40 bg-[#FAF8F5] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-6"
            >
              Fresh from our Ovens
            </motion.p>
            <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tight">
              The <span className="serif italic font-normal text-accent">Display Case.</span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/our-products" className="text-[10px] font-bold tracking-[0.2em] uppercase border-b border-accent pb-3 hover:text-accent transition-all">
              View All Delights
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Display with improved spacing and interaction */}
      <div className="flex gap-12 px-6 md:px-[10%] overflow-x-auto no-scrollbar pb-24">
        {displayItems.map((item, i) => (
          <motion.div 
            key={item.name}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="flex-shrink-0 w-[320px] md:w-[450px] group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-white mb-10 shadow-sm group-hover:shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]">
              <Image 
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 320px, 450px"
                className="object-cover transition-transform duration-[2.5s] cubic-bezier(0.23,1,0.32,1) group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-1000" />
              
              {/* Animated Floating Label */}
              <div className="absolute top-6 left-6 overflow-hidden">
                <motion.span className="inline-block bg-white/90 backdrop-blur-md px-3 py-1 text-[8px] font-bold tracking-[0.2em] uppercase text-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700">
                  {item.tag}
                </motion.span>
              </div>

              {/* Glass Info Card - Refined */}
              <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/10 backdrop-blur-xl border border-white/20 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
                <div className="flex justify-between items-center text-white">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Quick Add</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-2xl font-heading font-bold group-hover:text-accent transition-colors duration-500">{item.name}</h3>
              <span className="text-base font-bold text-accent">{item.price}</span>
            </div>
            <div className="w-12 h-[1px] bg-accent/30 group-hover:w-full transition-all duration-700" />
          </motion.div>
        ))}
        
        {/* End Spacer */}
        <div className="flex-shrink-0 w-32 h-full" />
      </div>
    </section>
  );
}
