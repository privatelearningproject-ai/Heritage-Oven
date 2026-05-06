"use client";

import { ShoppingBag, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-[100] md:hidden">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="glass rounded-full p-2 flex items-center gap-2 shadow-2xl border border-white/40"
      >
        <Link
          href="https://wa.me/8178769036"
          className="flex-1 flex items-center justify-center gap-3 h-14 rounded-full bg-primary text-white text-[10px] font-bold tracking-[0.2em] uppercase shadow-lg transition-transform active:scale-95"
        >
          <MessageCircle size={16} fill="currentColor" />
          <span>Order Now</span>
        </Link>
        
        <Link
          href="/our-products"
          className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-white text-primary border border-black/5 shadow-sm transition-transform active:scale-95"
        >
          <ShoppingBag size={20} />
        </Link>
      </motion.div>
    </div>
  );
}
