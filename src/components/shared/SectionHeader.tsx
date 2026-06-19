import React from 'react'
import Link from 'next/link'

interface SectionHeaderProps {
  emoji?: string
  label?: string
  heading: string
  subtext?: string
  cta?: { text: string; href: string }
  align?: 'left' | 'center'
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  emoji,
  label,
  heading,
  subtext,
  cta,
  align = 'left',
  className = '',
}) => {
  return (
    <div className={`mb-8 md:mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {label && (
        <span className="inline-block px-4 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] uppercase bg-accent/10 text-accent rounded-none border-l-2 border-accent">
          {label}
        </span>
      )}
      <div className={`flex items-center gap-3 mb-2 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        {emoji && <span className="text-3xl md:text-4xl">{emoji}</span>}
        <h2 className="text-2xl md:text-5xl font-serif font-bold text-foreground leading-tight tracking-tighter">
          {heading}
        </h2>
      </div>
      
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4`}>
        {subtext && (
          <p className="max-w-2xl text-muted-foreground text-lg md:text-xl leading-relaxed serif italic">
            {subtext}
          </p>
        )}
        
        {cta && (
          <Link 
            href={cta.href}
            className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-accent hover:text-foreground transition-all group whitespace-nowrap"
          >
            {cta.text}
            <svg 
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}
