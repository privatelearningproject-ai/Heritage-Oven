"use client"

import React from 'react'
import { usePathname } from 'next/navigation'

export const AnnouncementBar: React.FC = () => {
  const pathname = usePathname()
  const isPOS = pathname === '/pos'

  if (isPOS) return null

  return (
    <div className="bg-background text-foreground/80 py-2 px-4 border-b border-foreground/5 text-center relative z-[60]">
      <div className="max-w-7xl mx-auto">
        <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.15em] flex items-center justify-center gap-8">
          <span className="flex items-center gap-2">✨ Free delivery on orders above ₹299</span>
          <span className="hidden md:inline h-3 w-px bg-foreground/10" />
          <a href="tel:+918178769036" className="hover:text-accent transition-colors flex items-center gap-2">
            📞 Call +91 8178769036 to order
          </a>
          <span className="hidden md:inline h-3 w-px bg-foreground/10" />
          <span className="hidden md:inline uppercase flex items-center gap-2">📍 Crossings Republik, Ghaziabad</span>
        </p>
      </div>
    </div>
  )
}

