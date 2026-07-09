"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { buildComboUrl } from "@/lib/whatsapp"
import { ShoppingBag, Sparkles, Coffee, Heart, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface MenuItem {
  name: string
  price: number
  image: string
  desc?: string
  brand?: string
}

const MENU: Record<string, MenuItem[]> = {
  bakes: [
    { name: "Biscoff Cheese Cake", price: 180, desc: "Lotus biscoff base · cream cheese · eggless", image: "/img/products/assets/Biscoff Cheesecake  .jpeg" },
    { name: "Belgium Devil Pastry", price: 210, desc: "Dark Belgian chocolate · eggless", image: "/img/products/assets/dark-choco-truffle-pastry.jpeg" },
    { name: "Brownie Pastry", price: 85, desc: "Fudgy walnut slice · eggless", image: "/img/products/assets/choco-brownie-pastry.jpeg" },
    { name: "Red Velvet", price: 85, desc: "Cream cheese frosting · eggless", image: "/img/products/assets/red-velvet-pastry.jpg" },
    { name: "Pineapple Pastry", price: 85, desc: "Light & tropical · eggless", image: "/img/products/assets/images/Pineapple Cake.jpg.webp" },
    { name: "WhiteForest Pastry", price: 85, desc: "Whipped cream & cherry · eggless", image: "/img/products/assets/images/BlackForestCake.jpg.webp" },
  ],
  cakes: [
    { name: "Pineapple Cake", price: 450, desc: "Serves 6–8", image: "/img/products/assets/pineapple-cake.webp" },
    { name: "Black Forest", price: 500, desc: "Whipped cream & cherries", image: "/img/products/assets/black-forest-cake.webp" },
    { name: "Brownie Cake", price: 600, desc: "Dense chocolate fudge", image: "/img/products/assets/images/Rocky Road Cake.jpeg" },
    { name: "Choco Vanilla", price: 500, desc: "Classic layered sponge", image: "/img/products/assets/choco-vanilla-cake.jpeg" },
  ],
  snacks: [
    { name: "Farmley Makhana Peri Peri", price: 30, brand: "Farmley", image: "/img/products/assets/Farmley Makhanna.jpeg" },
    { name: "Farmley Date Bites", price: 480, brand: "Farmley", image: "" },
    { name: "Pudina Chips", price: 79, brand: "Local", image: "" },
    { name: "Beetroot Chips", price: 79, brand: "Local", image: "" },
    { name: "Halka Fulka Mix", price: 79, brand: "Local", image: "" },
    { name: "Malai Sev", price: 125, brand: "Local", image: "" },
    { name: "Bingo Tedhe Medhe", price: 20, brand: "Bingo", image: "" },
    { name: "Max Pro Protein Chips", price: 20, brand: "Max Pro", image: "" },
  ],
  namkeen: [
    { name: "Nutcracker Namkeen", price: 165, image: "" },
    { name: "Bhavnagri Gathiya", price: 125, image: "" },
    { name: "Aloo Lacha", price: 105, image: "" },
    { name: "Ragi Chips", price: 79, image: "" },
    { name: "Banana Chips", price: 99, image: "" },
    { name: "Moong Dal", price: 160, image: "" },
  ],
  icecream: [
    { name: "Rabri Kulfi", price: 25, image: "" },
    { name: "Mini Bar", price: 10, image: "" },
    { name: "Cone Butter Scotch", price: 35, image: "" },
    { name: "Sandwich Slice", price: 30, image: "/img/products/assets/sandwich.jpg" },
    { name: "Cone Double Magic", price: 25, image: "" },
    { name: "Vanilla Cup", price: 10, image: "" },
  ],
  drinks: [
    { name: "Hell Energy Can", price: 60, image: "/img/products/assets/Hell.jpeg" },
    { name: "Starbucks Caramel RTD", price: 300, image: "" },
    { name: "Coca Cola Can", price: 30, image: "/img/products/assets/Coca-Cola.jpeg" },
    { name: "Diet Coke Can", price: 30, image: "" },
    { name: "Fanta", price: 20, image: "/img/products/assets/Fanta.jpeg" },
    { name: "Amul Lassi", price: 25, image: "/img/products/assets/Amul Lassi.jpeg" },
    { name: "Bisleri 500ml", price: 10, image: "/img/products/assets/Bisleri.jpeg" },
  ],
  party: [
    { name: "Balloon Pack (assorted)", price: 79, image: "/img/products/assets/Balooon.jpeg" },
    { name: "Sparkling Candles", price: 79, image: "/img/products/assets/Birthday Candles & Sparkling Candles  .jpeg" },
    { name: "Birthday Banner Premium", price: 79, image: "/img/products/assets/Happy Birthday Banner  .jpeg" },
    { name: "Silver Tiara", price: 110, image: "/img/products/assets/Silver Curtain.jpeg" },
    { name: "Number Candles (per digit)", price: 10, image: "/img/products/assets/Birthday Candles & Sparkling Candles  .jpeg" },
    { name: "Balloon Pump", price: 70, image: "/img/products/assets/Balloon Pump.jpeg" },
    { name: "Pull Flower Ribbon", price: 79, image: "/img/products/assets/Pull Flower Ribbon.jpeg" },
  ],
}

const SECTIONS = [
  { id: "bakes", title: "Fresh Bakes", items: MENU.bakes, emoji: "🎂" },
  { id: "cakes", title: "Whole Cakes", items: MENU.cakes, emoji: "🍰" },
  { id: "snacks", title: "Curated Snacks", items: MENU.snacks, emoji: "🥨" },
  { id: "namkeen", title: "Namkeen", items: MENU.namkeen, emoji: "🍪" },
  { id: "icecream", title: "Ice Cream", items: MENU.icecream, emoji: "🍦" },
  { id: "drinks", title: "Refreshments", items: MENU.drinks, emoji: "🥤" },
  { id: "party", title: "Party Essentials", items: MENU.party, emoji: "🎈" },
]

export default function OurProductsPage() {
  const [activeSection, setActiveSection] = useState("bakes")

  const handleOrder = (name: string) => {
    const url = buildComboUrl([name])
    window.open(url, '_blank')
  }

  return (
    <div className="bg-[#FAF8F5] text-[#2C241E] min-h-screen font-sans pt-[90px] md:pt-[110px] pb-24 relative overflow-hidden">
      
      {/* Dynamic Background glowing blobs */}
      <div className="absolute top-40 right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-60 left-[-15%] w-[600px] h-[600px] rounded-full bg-rose-deep/3 blur-[140px] pointer-events-none -z-10" />

      {/* Floating Glassmorphic Sub-Navigation */}
      <nav className="sticky top-[72px] md:top-[90px] z-40 bg-white/70 backdrop-blur-md border-b border-stone-200/40 flex gap-3 overflow-x-auto px-6 py-4 scrollbar-hide">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id
          return (
            <button
              key={sec.id}
              onClick={() => {
                setActiveSection(sec.id)
                const element = document.getElementById(sec.id)
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "center" })
                }
              }}
              className={cn(
                "flex-shrink-0 text-xs px-5 py-2.5 rounded-full transition-all duration-300 font-bold uppercase tracking-wider relative flex items-center gap-1.5",
                isActive 
                  ? "bg-accent text-white shadow-md scale-105" 
                  : "bg-white/80 border border-stone-200/20 text-[#2C241E]/70 hover:text-foreground hover:bg-stone-50"
              )}
            >
              <span>{sec.emoji}</span>
              <span>{sec.title}</span>
            </button>
          )
        })}
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 space-y-20">
        {SECTIONS.map((sec) => (
          <section key={sec.id} id={sec.id} className="scroll-mt-40 space-y-6">
            
            {/* Stately Section Heading */}
            <div className="border-b border-stone-200/60 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{sec.emoji}</span>
                <h2 className="text-xl md:text-2xl font-heading font-extrabold uppercase tracking-[0.2em] text-[#2C241E]">
                  {sec.title}
                </h2>
              </div>
            </div>

            {/* Product Grid - Premium cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {sec.items.map((item, index) => (
                <motion.div
                  key={`${sec.id}-${index}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="group bg-white rounded-3xl border border-stone-200/20 overflow-hidden shadow-sm hover:shadow-xl hover:border-accent/10 transition-all duration-500 flex flex-col h-full relative"
                >
                  {/* Image container: Aspect-ratio 1:1, custom hover scales */}
                  <div className="aspect-square overflow-hidden bg-stone-50 relative">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 brightness-[0.98] group-hover:brightness-100"
                      />
                    ) : (
                      <div className="w-full h-full bg-stone-100 flex flex-col items-center justify-center text-[10px] uppercase font-bold tracking-widest text-stone-400 gap-1.5">
                        <Coffee className="w-5 h-5 text-accent opacity-50" />
                        <span>Freshly Prepared</span>
                      </div>
                    )}

                    {/* Gold overlay glow */}
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>

                  {/* Text Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {item.brand && (
                        <span className="inline-block text-[8px] uppercase tracking-[0.25em] text-[#C2955A] font-bold mb-1 px-2 py-0.5 bg-stone-100 rounded">
                          {item.brand}
                        </span>
                      )}
                      
                      <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-accent transition-colors duration-300">
                        {item.name}
                      </h3>
                      
                      {item.desc && (
                        <p className="text-[11px] text-stone-400 mt-1.5 leading-relaxed font-light font-sans">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    
                    {/* Price and Action Row */}
                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between mt-auto">
                      <p className="text-sm font-extrabold text-[#2C241E]">
                        ₹{item.price}
                      </p>
                      
                      <button
                        onClick={() => handleOrder(item.name)}
                        className="p-2.5 rounded-full bg-stone-100 hover:bg-[#25D366] text-stone-600 hover:text-white transition-all duration-300 relative group/btn"
                        title="Order on WhatsApp"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <motion.span 
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          className="absolute bottom-full mb-2 right-1/2 translate-x-1/2 bg-stone-900 text-white text-[9px] font-bold uppercase tracking-wider py-1 px-2 rounded-md whitespace-nowrap pointer-events-none shadow-md hidden group-hover/btn:block"
                        >
                          Quick Order
                        </motion.span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
