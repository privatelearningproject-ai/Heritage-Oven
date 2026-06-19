import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#FDFCF8]">
      {/* Background with optimized overlays */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-15" />
        <img 
          src="/img/carousel-1.webp" 
          alt="Artisanal Bakery Heritage Oven"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="container relative z-20 px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-accent text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase">
            Est. Ghaziabad
          </p>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-5xl md:text-8xl font-heading text-white mb-10 max-w-5xl mx-auto leading-[0.95] tracking-tighter"
        >
          The Ultimate <br className="hidden md:block" />
          <span className="italic font-light">Artisanal</span> Baking
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white/80 text-base md:text-xl font-light mb-14 max-w-2xl mx-auto leading-relaxed text-balance"
        >
          Indulge in handcrafted cakes, freshly baked savories, and traditional treats perfected over generations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="bg-accent text-white px-12 py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-primary transition-all duration-500 flex items-center gap-3 w-full md:w-auto shadow-2xl">
            Order for Today <ArrowRight size={14} />
          </button>
          <button className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-12 py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white/20 transition-all duration-500 w-full md:w-auto">
            The Collection
          </button>
        </motion.div>
      </div>

      {/* Refined Trust Badge */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-auto md:right-12 md:translate-x-0 z-20 flex items-center gap-4 group"
      >
        <div className="w-px h-12 bg-white/20 hidden md:block" />
        <div className="text-center md:text-left">
          <p className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-1">Top Rated</p>
          <p className="text-xs font-heading font-medium text-white/60 tracking-widest uppercase italic">Crossings Republik</p>
        </div>
      </motion.div>
    </section>
  );
};
