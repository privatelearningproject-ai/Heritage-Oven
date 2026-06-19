import React from 'react'
import { buildComboUrl } from '@/lib/whatsapp'
import { SectionHeader } from '@/components/shared/SectionHeader'

const COMBOS = [
  {
    title: "The Party Starter",
    items: ["Pineapple Cake", "Happy Bday Combo Set"],
    price: 529,
    badge: "Save with a Bundle",
    emoji: "🎉",
    bg: "bg-rose-tint",
    description: "Our best-selling cake paired with a complete decoration kit."
  },
  {
    title: "The Evening Rescue",
    items: ["Aloo Patty", "Amul Lassi", "Pudina Chips"],
    price: 134,
    badge: "Most Popular",
    emoji: "☕",
    bg: "bg-orange-tint",
    description: "The classic Crossing Republik snack combo. Hot, cold, and crunchy."
  },
  {
    title: "The Wellness Pack",
    items: ["3x Farmley Makhana packs (14g)"],
    price: 90,
    badge: "Healthy Pick",
    emoji: "🥗",
    bg: "bg-green-tint",
    description: "Mix and match any three flavors of our roasted makhana."
  }
]

export const ComboSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeader 
          label="✨ Better Together"
          heading="Perfect Pairings"
          subtext="Curated combinations designed to satisfy every craving. One tap to order the full set."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMBOS.map((combo, idx) => (
            <div key={idx} className={`${combo.bg} rounded-3xl p-8 flex flex-col hover:shadow-xl transition-all duration-300 group`}>
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl">{combo.emoji}</span>
                <span className="bg-white/60 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-foreground/70">
                  {combo.badge}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">{combo.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1">{combo.description}</p>
              
              <div className="space-y-3 mb-8">
                {combo.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                    <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-black/5 flex items-center justify-between gap-4">
                <span className="text-3xl font-bold text-foreground">₹{combo.price}</span>
                <a
                  href={buildComboUrl(combo.items)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-foreground text-background px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  Order Combo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
