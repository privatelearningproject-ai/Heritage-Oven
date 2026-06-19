import React from 'react'
import { getUnder99 } from '@/lib/products'
import { ProductCard } from '@/components/catalog/ProductCard'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { HorizontalScroller } from '@/components/shared/HorizontalScroller'

export const ImpulseRow: React.FC = () => {
  const products = getUnder99().slice(0, 10)

  return (
    <section className="py-16 bg-orange-tint overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeader 
          label="⚡ Quick Adds"
          heading="Under ₹99"
          subtext="Low price, high joy. Add these to your order without thinking twice."
          cta={{ text: "View All", href: "/collections/under-99" }}
          className="text-orange-text"
        />
        
        <HorizontalScroller>
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              variant="compact" 
            />
          ))}
        </HorizontalScroller>
      </div>
    </section>
  )
}
