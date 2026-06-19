import React from 'react'

export const InstagramStrip: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
        <div className="flex flex-col items-center gap-2 mb-12">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs">Join the Community</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Follow us @HeritageOven</h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 mb-12">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div 
              key={i} 
              className="aspect-square bg-muted/10 rounded-xl overflow-hidden relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-foreground/20 group-hover:opacity-0 transition-opacity duration-300" />
              <div className="w-full h-full flex items-center justify-center text-muted">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              {/* Instagram Feed Integration Point */}
              {/* <img src={feed[i].url} className="w-full h-full object-cover" /> */}
            </div>
          ))}
        </div>

        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-foreground font-bold hover:text-accent transition-colors"
        >
          <span>See what's baking on Instagram</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
