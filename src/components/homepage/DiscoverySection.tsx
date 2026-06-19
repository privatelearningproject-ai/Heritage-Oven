import React from 'react'
import { Product } from '@/lib/products'
import { ProductCard } from '@/components/catalog/ProductCard'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { HorizontalScroller } from '@/components/shared/HorizontalScroller'

interface DiscoverySectionProps {
  title: string
  label?: string
  subtext?: string
  products: Product[]
  ctaHref: string
  ctaText?: string
  emoji?: string
  bgClassName?: string
}

export const DiscoverySection: React.FC<DiscoverySectionProps> = ({
  title,
  label,
  subtext,
  products,
  ctaHref,
  ctaText = "View All",
  emoji,
  bgClassName = "bg-background",
}) => {
  return (
    <section className={`py-20 overflow-hidden ${bgClassName}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeader 
          label={label}
          heading={title}
          subtext={subtext}
          emoji={emoji}
          cta={{ text: ctaText, href: ctaHref }}
        />
        
        <HorizontalScroller>
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              className="flex-shrink-0 w-[240px] md:w-[280px] snap-start"
            />
          ))}
        </HorizontalScroller>
      </div>
    </section>
  )
}
