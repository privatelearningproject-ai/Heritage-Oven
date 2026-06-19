import React from 'react'
import { getByCategory } from '@/lib/products'
import { ProductCard } from '@/components/catalog/ProductCard'
import { SectionHeader } from '@/components/shared/SectionHeader'

export const WellnessZone: React.FC = () => {
  const products = getByCategory('Healthy Snacks').slice(0, 6)

  return (
    <section className="py-24 bg-green-tint overflow-hidden border-y border-green-deep/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeader 
          label="🥗 Healthy Pantry"
          heading="Snack Smarter, Not Sadder"
          subtext="Roasted, not fried. Premium superfoods that actually taste like something. Discover our Farmley range."
          cta={{ text: "Explore Wellness", href: "/collections/wellness-pantry" }}
          className="text-green-text"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              variant="standard" 
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 border-t border-stone-200">
          {[
            { emoji: "💪", label: "High Protein" },
            { emoji: "🔥", label: "Roasted Not Fried" },
            { emoji: "🥬", label: "No Artificial Colour" },
            { emoji: "⚡", label: "Low Calorie" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
              <span className="text-xl">{item.emoji}</span>
              <span className="text-xs font-bold text-foreground uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
