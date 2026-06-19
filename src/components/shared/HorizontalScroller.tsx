import React from 'react'

interface HorizontalScrollerProps {
  children: React.ReactNode
  className?: string
  itemWidth?: string
}

export const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`relative group ${className}`}>
      <div 
        className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide gap-4 pb-6 px-4 -mx-4 md:px-0 md:mx-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>
      
      {/* Optional: Add gradient fades on edges if needed */}
      <div className="hidden md:block absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
      <div className="hidden md:block absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
    </div>
  )
}
