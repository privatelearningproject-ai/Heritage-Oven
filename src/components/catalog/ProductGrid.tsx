"use client"

import React, { useState, useMemo } from 'react'
import { Product } from '@/lib/products'
import { ProductCard } from '@/components/catalog/ProductCard'

interface ProductGridProps {
  products: Product[]
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [displayCount, setDisplayCount] = useState(20)

  const visibleProducts = useMemo(() => {
    return products.slice(0, displayCount)
  }, [products, displayCount])

  if (products.length === 0) {
    return (
      <div className="py-24 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-4">No products found</h3>
        <p className="text-muted-foreground mb-8">Try adjusting your filters to find what you're looking for.</p>
        <a href="/our-products" className="text-accent font-bold hover:underline">Clear all filters</a>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="flex justify-between items-center mb-8">
        <p className="text-sm font-bold text-muted uppercase tracking-widest">
          Showing {products.length} products
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {visibleProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            variant="standard" 
          />
        ))}
      </div>

      {displayCount < products.length && (
        <div className="mt-16 text-center">
          <button
            onClick={() => setDisplayCount(prev => prev + 20)}
            className="px-10 py-4 bg-muted/10 text-foreground rounded-full font-bold hover:bg-muted/20 transition-colors"
          >
            Load More Products
          </button>
        </div>
      )}
    </div>
  )
}
