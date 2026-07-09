"use client"

import React, { useState, useMemo } from 'react'
import { buildComboUrl } from '@/lib/whatsapp'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Plus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react'

interface PartyItem {
  name: string
  price: number
  emoji: string
}

const CAKES: PartyItem[] = [
  { name: "Pineapple Cake", price: 450, emoji: "🍍" },
  { name: "Black Forest", price: 500, emoji: "🍒" },
  { name: "Brownie Cake", price: 600, emoji: "🍫" },
  { name: "Choco Vanilla", price: 500, emoji: "🍦" },
]

const SNACKS: PartyItem[] = [
  { name: "Paneer Tikka Roll", price: 80, emoji: "🌯" },
  { name: "Aloo Patty", price: 30, emoji: "🥐" },
  { name: "Paneer Kulcha", price: 60, emoji: "🥯" },
  { name: "Samosa", price: 20, emoji: "🥟" },
]

const DECOR: PartyItem[] = [
  { name: "Happy Bday Combo Set", price: 79, emoji: "🎈" },
  { name: "Party Poppers", price: 79, emoji: "🎉" },
  { name: "Sparkling Candle", price: 79, emoji: "✨" },
  { name: "Bunny Balloons", price: 79, emoji: "🐰" },
]

export const PartyBuilder: React.FC = () => {
  const [selectedCake, setSelectedCake] = useState<PartyItem | null>(null)
  const [selectedSnacks, setSelectedSnacks] = useState<PartyItem[]>([])
  const [selectedDecor, setSelectedDecor] = useState<PartyItem[]>([])

  const toggleSnack = (item: PartyItem) => {
    if (selectedSnacks.some(i => i.name === item.name)) {
      setSelectedSnacks(selectedSnacks.filter(i => i.name !== item.name))
    } else {
      setSelectedSnacks([...selectedSnacks, item])
    }
  }

  const toggleDecor = (item: PartyItem) => {
    if (selectedDecor.some(i => i.name === item.name)) {
      setSelectedDecor(selectedDecor.filter(i => i.name !== item.name))
    } else {
      setSelectedDecor([...selectedDecor, item])
    }
  }

  const clearSelection = () => {
    setSelectedCake(null)
    setSelectedSnacks([])
    setSelectedDecor([])
  }

  const selectedItemsList = useMemo(() => {
    const list: PartyItem[] = []
    if (selectedCake) list.push(selectedCake)
    list.push(...selectedSnacks)
    list.push(...selectedDecor)
    return list
  }, [selectedCake, selectedSnacks, selectedDecor])

  const totalPrice = useMemo(() => {
    return selectedItemsList.reduce((acc, curr) => acc + curr.price, 0)
  }, [selectedItemsList])

  const handleOrder = () => {
    if (selectedItemsList.length === 0) return
    const names = selectedItemsList.map(i => i.name)
    const url = buildComboUrl(names)
    window.open(url, '_blank')
  }

  return (
    <section id="party-builder" className="py-24 bg-gradient-to-b from-stone-50 to-stone-100/50 relative overflow-hidden">
      {/* Abstract background glowing shapes */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-rose-deep/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative">
        <SectionHeader 
          label="🎉 Bundle & Celebrate"
          heading="Build Your Party Box"
          subtext="The ultimate celebration planner. Pick a cake, load up snacks, add decor, and order together in one tap."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          {/* Steps Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Step 1: Cake */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-stone-200/60 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-2xl bg-accent text-white flex items-center justify-center font-bold font-serif text-lg">1</span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Select Celebration Cake</h3>
                    <p className="text-xs text-muted-foreground">Pick a fresh, eggless center-piece cake</p>
                  </div>
                </div>
                {selectedCake && (
                  <button 
                    onClick={() => setSelectedCake(null)}
                    className="text-xs font-bold text-rose-deep hover:underline flex items-center gap-1"
                  >
                    Clear
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {CAKES.map(cake => {
                  const isSelected = selectedCake?.name === cake.name
                  return (
                    <motion.button
                      key={cake.name}
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedCake(cake)}
                      className={cn(
                        "p-5 rounded-2xl border-2 transition-all text-left flex flex-col justify-between h-40 relative overflow-hidden",
                        isSelected 
                          ? "border-accent bg-accent/5 ring-4 ring-accent/10" 
                          : "border-stone-100 bg-white hover:border-accent/30"
                      )}
                    >
                      <span className="text-4xl block mb-2">{cake.emoji}</span>
                      <div>
                        <p className="text-sm font-bold text-foreground leading-tight mb-1">{cake.name}</p>
                        <p className="text-xs font-semibold text-accent">₹{cake.price}</p>
                      </div>
                      
                      {/* Selection Checkmark */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.span 
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute top-3 right-3 bg-accent text-white p-1 rounded-full"
                          >
                            <Check className="w-3 h-3" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>

            {/* Step 2: Snacks */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-stone-200/60 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-2xl bg-accent text-white flex items-center justify-center font-bold font-serif text-lg">2</span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Add Delicious Savories</h3>
                    <p className="text-xs text-muted-foreground">Pick as many snacks and hot rolls as you need</p>
                  </div>
                </div>
                {selectedSnacks.length > 0 && (
                  <button 
                    onClick={() => setSelectedSnacks([])}
                    className="text-xs font-bold text-rose-deep hover:underline"
                  >
                    Clear
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {SNACKS.map(snack => {
                  const isSelected = selectedSnacks.some(i => i.name === snack.name)
                  return (
                    <motion.button
                      key={snack.name}
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleSnack(snack)}
                      className={cn(
                        "p-5 rounded-2xl border-2 transition-all text-left flex flex-col justify-between h-40 relative overflow-hidden",
                        isSelected 
                          ? "border-accent bg-accent/5 ring-4 ring-accent/10" 
                          : "border-stone-100 bg-white hover:border-accent/30"
                      )}
                    >
                      <span className="text-4xl block mb-2">{snack.emoji}</span>
                      <div>
                        <p className="text-sm font-bold text-foreground leading-tight mb-1">{snack.name}</p>
                        <p className="text-xs font-semibold text-accent">₹{snack.price}</p>
                      </div>
                      
                      <span className={cn(
                        "absolute top-3 right-3 p-1 rounded-full transition-all",
                        isSelected ? "bg-accent text-white" : "bg-stone-50 border border-stone-200 text-stone-400 hover:text-foreground"
                      )}>
                        {isSelected ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                      </span>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>

            {/* Step 3: Decor */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-stone-200/60 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-2xl bg-accent text-white flex items-center justify-center font-bold font-serif text-lg">3</span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Balloons & Party Supplies</h3>
                    <p className="text-xs text-muted-foreground">Select decoration kits and sparkling candles</p>
                  </div>
                </div>
                {selectedDecor.length > 0 && (
                  <button 
                    onClick={() => setSelectedDecor([])}
                    className="text-xs font-bold text-rose-deep hover:underline"
                  >
                    Clear
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {DECOR.map(item => {
                  const isSelected = selectedDecor.some(i => i.name === item.name)
                  return (
                    <motion.button
                      key={item.name}
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleDecor(item)}
                      className={cn(
                        "p-5 rounded-2xl border-2 transition-all text-left flex flex-col justify-between h-40 relative overflow-hidden",
                        isSelected 
                          ? "border-accent bg-accent/5 ring-4 ring-accent/10" 
                          : "border-stone-100 bg-white hover:border-accent/30"
                      )}
                    >
                      <span className="text-4xl block mb-2">{item.emoji}</span>
                      <div>
                        <p className="text-sm font-bold text-foreground leading-tight mb-1">{item.name}</p>
                        <p className="text-xs font-semibold text-accent">₹{item.price}</p>
                      </div>
                      
                      <span className={cn(
                        "absolute top-3 right-3 p-1 rounded-full transition-all",
                        isSelected ? "bg-accent text-white" : "bg-stone-50 border border-stone-200 text-stone-400"
                      )}>
                        {isSelected ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                      </span>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>

          </div>

          {/* Party Box Summary Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <motion.div 
              layout
              className="bg-foreground text-background p-8 rounded-[2rem] shadow-xl border border-stone-800 relative overflow-hidden"
            >
              {/* Gold dust backdrop effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-bold tracking-tight">Your Party Box</h3>
                </div>
                {selectedItemsList.length > 0 && (
                  <button 
                    onClick={clearSelection}
                    className="text-xs font-semibold text-white/50 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Clear Box
                  </button>
                )}
              </div>

              {/* Items List */}
              <div className="space-y-4 min-h-[160px] max-h-[320px] overflow-y-auto pr-2 scrollbar-hide">
                <AnimatePresence initial={false}>
                  {selectedItemsList.length === 0 ? (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-[160px] flex flex-col items-center justify-center text-center text-white/40"
                    >
                      <span className="text-3xl mb-2">🎁</span>
                      <p className="text-xs font-medium">Your celebration box is empty.</p>
                      <p className="text-[10px] max-w-[180px] mt-1">Select items on the left to customize your party set.</p>
                    </motion.div>
                  ) : (
                    selectedItemsList.map((item) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex items-center justify-between bg-white/5 px-4 py-3 rounded-xl border border-white/5"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{item.emoji}</span>
                          <span className="text-xs font-semibold text-white/90 truncate max-w-[120px] md:max-w-[160px]">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-accent">₹{item.price}</span>
                          <button 
                            onClick={() => {
                              if (selectedCake?.name === item.name) setSelectedCake(null)
                              else setSelectedSnacks(selectedSnacks.filter(i => i.name !== item.name))
                              setSelectedDecor(selectedDecor.filter(i => i.name !== item.name))
                            }}
                            className="text-white/45 hover:text-rose-deep p-0.5"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>

              {/* Total Price and Order CTA */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold tracking-widest text-white/60">Estimated Total</span>
                  <motion.span 
                    key={totalPrice}
                    initial={{ scale: 0.95, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-2xl font-black text-white"
                  >
                    ₹{totalPrice}
                  </motion.span>
                </div>

                <button
                  onClick={handleOrder}
                  disabled={selectedItemsList.length === 0}
                  className={cn(
                    "w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group",
                    selectedItemsList.length === 0
                      ? "bg-white/10 text-white/30 cursor-not-allowed border border-white/5"
                      : "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-xl hover:shadow-[#25D366]/20"
                  )}
                >
                  <span className="text-sm font-bold uppercase tracking-wider">Order Box on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Quality Badges */}
              <div className="mt-6 flex justify-around text-[9px] font-bold text-accent/80 uppercase tracking-widest border-t border-white/5 pt-4">
                <span>✓ Eggless Only</span>
                <span>✓ Baked Today</span>
                <span>✓ Same Day</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
