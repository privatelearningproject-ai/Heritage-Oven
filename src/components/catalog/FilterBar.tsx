"use client"

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Cakes 🎂', value: 'cakes' },
  { label: 'Pastries', value: 'pastries' },
  { label: 'Savory Bites ⚡', value: 'savory' },
  { label: 'Tea-Time ☕', value: 'tea-time' },
  { label: 'Healthy 🥗', value: 'healthy' },
  { label: 'Party 🎉', value: 'party' },
  { label: 'Drinks', value: 'drinks' },
  { label: 'Desserts', value: 'desserts' },
  { label: 'Under ₹99', value: 'under99' },
  { label: 'Best Sellers ★', value: 'bestsellers' },
]

export const FilterBar: React.FC = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeFilter = searchParams.get('filter') || 'all'

  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === 'all') {
      params.delete('filter')
    } else {
      params.set('filter', value)
    }
    router.push(`/our-products?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="sticky top-[104px] md:top-[116px] z-40 bg-white/80 backdrop-blur-md border-b border-stone-100 py-4 overflow-x-auto scrollbar-hide">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex gap-3 whitespace-nowrap">
        {FILTERS.map((filter) => (
          <button
            key={filter.value}
            onClick={() => handleFilterChange(filter.value)}
            className={cn(
              "px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 border",
              activeFilter === filter.value
                ? "bg-accent border-accent text-white shadow-md scale-105"
                : "bg-white border-stone-200 text-stone-600 hover:border-accent hover:text-accent"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  )
}
