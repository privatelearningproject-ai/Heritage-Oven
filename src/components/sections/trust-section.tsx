"use client";

import { ShieldCheck, Leaf, Truck, Star } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Leaf,
    title: "Pure Ingredients",
    description: "Finest locally sourced flour and farm-fresh dairy.",
  },
  {
    icon: ShieldCheck,
    title: "Baked Fresh",
    description: "Oven-to-table in under 24 hours, guaranteed.",
  },
  {
    icon: Star,
    title: "Heritage Recipes",
    description: "Generational secrets for an authentic flavor.",
  },
  {
    icon: Truck,
    title: "White-Glove Delivery",
    description: "Delicate handling for your most precious bakes.",
  },
];

export function TrustSection() {
  return (
    <section className="py-32 bg-[#F3F0EC] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 w-full text-left">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent font-medium tracking-[0.2em] uppercase text-xs mb-6 block"
            >
              Our Philosophy
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight"
            >
              A Heartfelt Tradition <br />
              in <span className="italic font-normal serif">Every Batch.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg mb-12 leading-relaxed max-w-xl font-light"
            >
              We believe baking is an art form that shouldn&apos;t be rushed. 
              By combining slow fermentation with the highest grade ingredients, 
              we create a taste that reminds you of home.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent shadow-sm">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-primary tracking-wide text-sm uppercase">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] md:aspect-square rounded-sm overflow-hidden shadow-2xl"
            >
              <img
                src="/img/about-1.jpg"
                alt="A premium bakery display"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 border-[20px] border-white/10" />
            </motion.div>
            
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-10 -right-4 md:-right-10 bg-primary p-8 md:p-12 rounded-sm shadow-2xl"
            >
              <p className="text-5xl md:text-7xl font-heading font-bold text-accent mb-2">100+</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold">
                Local Families Served
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
