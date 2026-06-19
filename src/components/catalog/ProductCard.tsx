import React from 'react'
import Image from 'next/image'
import { Product } from '@/lib/products'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'

interface ProductCardProps {
  product: Product
  variant?: 'standard' | 'compact' | 'featured'
  className?: string
}

const getCategoryEmoji = (category: string) => {
  switch (category) {
    case 'Cakes': return '🎂'
    case 'Pastries': return '🍰'
    case 'Savory Snacks': return '🥐'
    case 'Traditional Snacks':
    case 'Namkeen & Chips': return '🍿'
    case 'Cookies & Biscuits': return '🍪'
    case 'Healthy Snacks': return '🥗'
    case 'Party Supplies': return '🎉'
    case 'Beverages': return '🥤'
    case 'Ice Cream/Desserts': return '🍦'
    default: return '🥐'
  }
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  variant = 'standard',
  className = '',
}) => {
  const emoji = getCategoryEmoji(product.category)
  const displayPrice = Math.round(product.price)

  if (variant === 'compact') {
    return (
      <div className={`flex-shrink-0 w-[140px] md:w-[160px] snap-start bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-md transition-shadow duration-200 ${className}`}>
        <div className="relative h-[100px] md:h-[120px] bg-stone-50 flex items-center justify-center text-4xl">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.clean_name}
              fill
              className="object-cover"
            />
          ) : (
            emoji
          )}
        </div>
        <div className="p-3">
          <h3 className="text-xs font-semibold text-foreground truncate mb-1">
            {product.premium_title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
              Only ₹{displayPrice}
            </span>
            <WhatsAppButton 
              productName={product.premium_title} 
              variant="icon" 
              className="scale-75 origin-right" 
            />
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'featured') {
    return (
      <div className={`group bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-lg transition-all duration-300 ${className}`}>
        <div className="relative h-[260px] bg-stone-50 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-500">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.clean_name}
              fill
              className="object-cover"
            />
          ) : (
            emoji
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white leading-tight">
              {product.premium_title}
            </h3>
          </div>
        </div>
        <div className="p-4">
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {product.short_description}
          </p>
          <div className="flex items-center justify-between gap-4">
            <span className="text-2xl font-bold text-foreground">₹{displayPrice}</span>
            <WhatsAppButton 
              productName={product.premium_title} 
              className="flex-1" 
            />
          </div>
        </div>
      </div>
    )
  }

  // Standard Variant
  return (
    <div className={`group bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-md transition-shadow duration-200 ${className}`}>
      <div className="relative h-[200px] bg-stone-100 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500 overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.clean_name}
            fill
            className="object-cover"
          />
        ) : (
          emoji
        )}
        {product.classification === 'Premium' && (
          <span className="absolute top-3 left-3 bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow-sm">
            Premium
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground line-clamp-2 mb-1 min-h-[3rem]">
          {product.premium_title}
        </h3>
        <p className="text-xs text-muted-foreground mb-4 truncate">
          {product.short_description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-foreground">₹{displayPrice}</span>
          <WhatsAppButton 
            productName={product.premium_title} 
            size="sm"
          />
        </div>

        {product.cross_sell.length > 0 && (
          <div className="pt-3 border-t border-stone-50">
            <p className="text-[10px] text-stone-400 font-medium">
              Pairs well with: <span className="text-stone-600">{product.cross_sell[0]}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
