"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'
import { cn } from '@/lib/utils'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const isHomePage = pathname === '/'
  const isPOS = pathname === '/pos'
  const navSolid = !isHomePage || isScrolled

  if (isPOS) return null

  return (
    <nav 
      className={cn(
        "fixed left-0 w-full z-50 transition-all duration-700",
        isScrolled ? "top-0 bg-white/95 backdrop-blur-xl shadow-sm py-4" : "top-10 py-8",
        !isScrolled && navSolid ? "bg-white/95 backdrop-blur-xl shadow-sm py-4" : "",
        !isScrolled && !navSolid ? "bg-transparent py-8" : ""
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LEFT NAV: Editorial Contrast */}
        <div className="hidden md:flex items-center gap-10 flex-1">
          <Link 
            href="/about" 
            className={cn(
              "text-[10px] font-bold tracking-[0.25em] uppercase transition-colors hover:text-accent",
              navSolid ? "text-foreground" : "text-white"
            )}
          >
            Story
          </Link>
          <div 
            className="relative"
            onMouseEnter={() => setActiveMegaMenu('explore')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <Link 
              href="/our-products" 
              className={cn(
                "text-[10px] font-bold tracking-[0.25em] uppercase transition-colors hover:text-accent flex items-center gap-1",
                navSolid ? "text-foreground" : "text-white"
              )}
            >
              Explore
              <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            
            {/* MEGA MENU: Cinematic Overlay */}
            <div className={cn(
              "absolute top-full -left-10 w-[750px] bg-white shadow-2xl p-10 mt-6 grid grid-cols-3 gap-10 transition-all duration-500 border border-stone-50",
              activeMegaMenu === 'explore' ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
            )}>
              <div className="space-y-6">
                <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent border-b border-stone-100 pb-2">Celebrations</h4>
                <ul className="space-y-4 text-[11px] font-semibold text-foreground/80">
                  <li><Link href="/collections/celebration" className="hover:text-accent transition-colors">Signature Cakes</Link></li>
                  <li><Link href="/collections/birthday" className="hover:text-accent transition-colors">Birthday Boutique</Link></li>
                  <li><Link href="/our-products?filter=party" className="hover:text-accent transition-colors">Party Essentials</Link></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent border-b border-stone-100 pb-2">Daily Rituals</h4>
                <ul className="space-y-4 text-[11px] font-semibold text-foreground/80">
                  <li><Link href="/collections/quick-bites" className="hover:text-accent transition-colors">Quick Bites</Link></li>
                  <li><Link href="/collections/tea-time" className="hover:text-accent transition-colors">Tea-Time Ritual</Link></li>
                  <li><Link href="/collections/wellness-pantry" className="hover:text-accent transition-colors">Wellness Pantry</Link></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent border-b border-stone-100 pb-2">Collections</h4>
                <ul className="space-y-4 text-[11px] font-semibold text-foreground/80">
                  <li><Link href="/collections/best-sellers" className="hover:text-accent transition-colors">The Favorites</Link></li>
                  <li><Link href="/collections/under-99" className="hover:text-accent transition-colors">The Pantry Under ₹99</Link></li>
                  <li><Link href="/our-products" className="hover:text-accent transition-colors italic">Browse Full Catalog →</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <Link 
            href="/cakes" 
            className={cn(
              "text-[10px] font-bold tracking-[0.25em] uppercase transition-colors hover:text-accent",
              navSolid ? "text-foreground" : "text-white"
            )}
          >
            Cakes
          </Link>
          <Link 
            href="/breads" 
            className={cn(
              "text-[10px] font-bold tracking-[0.25em] uppercase transition-colors hover:text-accent",
              navSolid ? "text-foreground" : "text-white"
            )}
          >
            Breads
          </Link>
        </div>

        {/* CENTER: Premium Logo Treatment */}
        <div className="flex-none">
          <Link href="/" className="flex flex-col items-center group">
            <span className={cn(
              "text-2xl md:text-4xl font-serif font-bold tracking-tight transition-colors duration-500",
              navSolid ? "text-foreground" : "text-white"
            )}>
              HERITAGE OVEN
            </span>
            <span className={cn(
              "text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-bold -mt-1 transition-colors duration-500",
              navSolid ? "text-accent" : "text-accent/90"
            )}>
              Pure Tradition
            </span>
          </Link>
        </div>

        {/* RIGHT NAV: Sophisticated CTA */}
        <div className="hidden md:flex items-center gap-10 flex-1 justify-end">
          <Link 
            href="/blog" 
            className={cn(
              "text-[10px] font-bold tracking-[0.25em] uppercase transition-colors hover:text-accent",
              navSolid ? "text-foreground" : "text-white"
            )}
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            className={cn(
              "text-[10px] font-bold tracking-[0.25em] uppercase transition-colors hover:text-accent",
              navSolid ? "text-foreground" : "text-white"
            )}
          >
            Visit
          </Link>
          <WhatsAppButton 
            productName="General Inquiry" 
            variant="premium" 
            className={cn(
              "px-8 py-3.5",
              !navSolid && "bg-white text-foreground hover:bg-accent hover:text-white"
            )}
          />
        </div>

        {/* Mobile: Minimalist Hamburger */}
        <div className="md:hidden flex items-center gap-6">
          <button 
            className={cn(
              "p-2 transition-colors",
              navSolid ? "text-foreground" : "text-white"
            )}
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER: Editorial Style */}
      <div className={cn(
        "fixed inset-0 bg-foreground z-[60] transition-all duration-700 md:hidden",
        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <div className="h-full flex flex-col p-12">
          <div className="flex justify-between items-center mb-16">
            <span className="text-xl font-serif font-bold text-background tracking-tighter">HERITAGE OVEN</span>
            <button onClick={toggleMobileMenu} className="text-background/40">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 space-y-12">
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent/60">Discover</p>
              <ul className="space-y-8 text-4xl font-serif text-background italic leading-tight">
                <li><Link href="/about" onClick={toggleMobileMenu}>The Story</Link></li>
                <li><Link href="/our-products" onClick={toggleMobileMenu}>The Collection</Link></li>
                <li><Link href="/cakes" onClick={toggleMobileMenu}>Cakes</Link></li>
                <li><Link href="/breads" onClick={toggleMobileMenu}>Breads</Link></li>
                <li><Link href="/collections/wellness-pantry" onClick={toggleMobileMenu}>Wellness</Link></li>
                <li><Link href="/blog" onClick={toggleMobileMenu}>Blog</Link></li>
                <li><Link href="/contact" onClick={toggleMobileMenu}>Visit Us</Link></li>
              </ul>
            </div>
          </nav>

          <div className="mt-auto">
            <WhatsAppButton 
              productName="General Inquiry" 
              variant="premium" 
              className="w-full py-6 bg-background text-foreground hover:bg-accent hover:text-white" 
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
