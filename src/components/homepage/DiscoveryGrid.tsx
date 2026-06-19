"use client"

import React, { useState, useEffect } from 'react'
import { allProducts, Product } from '@/lib/products'
import { ProductCard } from '@/components/catalog/ProductCard'
import { SectionHeader } from '@/components/shared/SectionHeader'

export const DiscoveryGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // Shuffle and pick 16 items, trying to mix categories
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random())
    
    // Simple mixing logic: group by category and pick round-robin
    const groups: Record<string, Product[]> = {}
    shuffled.forEach(p => {
      if (!groups[p.category]) groups[p.category] = []
      groups[p.category].push(p)
    })
    
    const mixed: Product[] = []
    const categories = Object.keys(groups)
    let i = 0
    while (mixed.length < 16 && mixed.length < shuffled.length) {
      const cat = categories[i % categories.length]
      const prod = groups[cat].shift()
      if (prod) mixed.push(prod)
      i++
    }
    setProducts(mixed)
  }, [])

  if (products.length === 0) return null

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeader 
          label="✨ Endless Discovery"
          heading="Everything We Make"
          subtext="From signature cakes to everyday snacks, explore our full artisanal range."
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              variant="standard" 
            />
          ))}
        </div>

        <div className="text-center pt-8">
          <a 
            href="/our-products"
            className="inline-flex items-center gap-2 bg-accent text-white px-10 py-5 rounded-full font-bold hover:bg-gold-deep transition-all active:scale-95 shadow-lg"
          >
            Browse All 170+ Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
