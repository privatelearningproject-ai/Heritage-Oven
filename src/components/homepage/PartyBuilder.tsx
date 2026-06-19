"use client"

import React, { useState } from 'react'
import { buildComboUrl } from '@/lib/whatsapp'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { cn } from '@/lib/utils'

const CAKES = [
  { name: "Pineapple Cake", price: 450, emoji: "🍍" },
  { name: "Black Forest", price: 500, emoji: "🍒" },
  { name: "Brownie Cake", price: 600, emoji: "🍫" },
  { name: "Choco Vanilla", price: 500, emoji: "🍦" },
]

const SNACKS = [
  { name: "Paneer Tikka Roll", price: 80, emoji: "🌯" },
  { name: "Aloo Patty", price: 30, emoji: "🥐" },
  { name: "Paneer Kulcha", price: 60, emoji: "🥯" },
  { name: "Samosa", price: 20, emoji: "🥟" },
]

const DECOR = [
  { name: "Happy Bday Combo Set", price: 79, emoji: "🎈" },
  { name: "Party Poppers", price: 79, emoji: "🎉" },
  { name: "Sparkling Candle", price: 79, emoji: "✨" },
  { name: "Bunny Balloons", price: 79, emoji: "🐰" },
]

export const PartyBuilder: React.FC = () => {
  const [selectedCake, setSelectedCake] = useState<string | null>(null)
  const [selectedSnacks, setSelectedSnacks] = useState<string[]>([])
  const [selectedDecor, setSelectedDecor] = useState<string[]>([])

  const toggleItem = (name: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.includes(name)) {
      setList(list.filter(i => i !== name))
    } else {
      setList([...list, name])
    }
  }

  const handleOrder = () => {
    const items = [
      selectedCake,
      ...selectedSnacks,
      ...selectedDecor
    ].filter(Boolean) as string[]
    
    if (items.length === 0) return
    
    const url = buildComboUrl(items)
    window.open(url, '_blank')
  }

  return (
    <section id="party-builder" className="py-24 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeader 
          label="🎉 Bundle & Save"
          heading="Build Your Party"
          subtext="The ultimate celebration engine. Pick a cake, add snacks, and grab decor in one tap."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Step 1: Cake */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-accent/10">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">1</span>
              <h3 className="text-xl font-bold text-foreground">Pick a Cake</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {CAKES.map(cake => (
                <button
                  key={cake.name}
                  onClick={() => setSelectedCake(cake.name)}
                  className={cn(
                    "p-4 rounded-2xl border-2 transition-all text-left",
                    selectedCake === cake.name 
                      ? "border-accent bg-accent/5 ring-2 ring-accent/20" 
                      : "border-stone-100 hover:border-accent/20"
                  )}
                >
                  <span className="text-2xl mb-2 block">{cake.emoji}</span>
                  <p className="text-xs font-bold text-foreground leading-tight mb-1">{cake.name}</p>
                  <p className="text-[10px] text-muted-foreground">₹{cake.price}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Snacks */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-accent/10">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">2</span>
              <h3 className="text-xl font-bold text-foreground">Add Snacks</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {SNACKS.map(snack => (
                <button
                  key={snack.name}
                  onClick={() => toggleItem(snack.name, selectedSnacks, setSelectedSnacks)}
                  className={cn(
                    "p-4 rounded-2xl border-2 transition-all text-left",
                    selectedSnacks.includes(snack.name)
                      ? "border-accent bg-accent/5 ring-2 ring-accent/20" 
                      : "border-stone-100 hover:border-accent/20"
                  )}
                >
                  <span className="text-2xl mb-2 block">{snack.emoji}</span>
                  <p className="text-xs font-bold text-foreground leading-tight mb-1">{snack.name}</p>
                  <p className="text-[10px] text-muted-foreground">₹{snack.price}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Decor */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-accent/10">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">3</span>
              <h3 className="text-xl font-bold text-foreground">Decor & Extras</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {DECOR.map(item => (
                <button
                  key={item.name}
                  onClick={() => toggleItem(item.name, selectedDecor, setSelectedDecor)}
                  className={cn(
                    "p-4 rounded-2xl border-2 transition-all text-left",
                    selectedDecor.includes(item.name)
                      ? "border-accent bg-accent/5 ring-2 ring-accent/20" 
                      : "border-stone-100 hover:border-accent/20"
                  )}
                >
                  <span className="text-2xl mb-2 block">{item.emoji}</span>
                  <p className="text-xs font-bold text-foreground leading-tight mb-1">{item.name}</p>
                  <p className="text-[10px] text-muted-foreground">₹{item.price}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <button
            onClick={handleOrder}
            disabled={!selectedCake && selectedSnacks.length === 0 && selectedDecor.length === 0}
            className={cn(
              "px-12 py-5 rounded-full text-lg font-bold shadow-xl transition-all active:scale-95 flex items-center gap-3",
              (!selectedCake && selectedSnacks.length === 0 && selectedDecor.length === 0)
                ? "bg-stone-300 text-stone-500 cursor-not-allowed"
                : "bg-[#25D366] text-white hover:bg-green-600"
            )}
          >
            <span>Order Full Party on WhatsApp</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </button>
          
          <div className="flex gap-4 text-xs font-bold text-accent uppercase tracking-widest">
            <span>✓ Eggless Cakes</span>
            <span>✓ Freshly Baked</span>
            <span>✓ Same Day Delivery</span>
          </div>
        </div>
      </div>
    </section>
  )
}
