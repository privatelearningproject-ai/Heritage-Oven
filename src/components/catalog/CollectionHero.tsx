import React from 'react'
import { cn } from '@/lib/utils'

interface CollectionHeroProps {
  title: string
  subtitle?: string
  emoji?: string
  count?: number
  bgClassName?: string
}

export const CollectionHero: React.FC<CollectionHeroProps> = ({
  title,
  subtitle,
  emoji,
  count,
  bgClassName = "bg-primary"
}) => {
  return (
    <section className={cn(
      "relative py-24 md:py-32 overflow-hidden text-white text-center",
      bgClassName
    )}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full opacity-50" />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto space-y-6">
          {emoji && <span className="text-5xl md:text-7xl block animate-bounce">{emoji}</span>}
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight">
              {title}
            </h1>
            {count !== undefined && (
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-[0.2em]">
                {count} Products
              </span>
            )}
          </div>

          {subtitle && (
            <p className="text-lg md:text-2xl text-stone-300 font-medium max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
