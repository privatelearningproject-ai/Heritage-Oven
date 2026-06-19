"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'

export const Footer: React.FC = () => {
  const pathname = usePathname()
  const isPOS = pathname === '/pos'

  if (isPOS) return null

  return (
    <footer className="bg-foreground text-background pt-20 pb-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1 — Heritage Oven */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-serif font-bold tracking-tight text-white">
                HERITAGE OVEN
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-background/70">
              Bringing premium artisanal baking to the heart of Ghaziabad. 
              We believe in the slow way, the honest way, and the simple joy 
              of a perfect crust.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.783h-2.954v-3.429h2.954v-2.527c0-2.925 1.787-4.516 4.396-4.516 1.25 0 2.324.093 2.636.135v3.056h-1.809c-1.419 0-1.693.675-1.693 1.662v2.19h3.384l-.441 3.429h-2.943v8.783h5.86c.732 0 1.325-.593 1.325-1.325v-21.351c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Discover */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Discover</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/collections/celebration" className="hover:text-primary transition-colors">Signature Cakes</Link></li>
              <li><Link href="/collections/quick-bites" className="hover:text-primary transition-colors">Quick Bites</Link></li>
              <li><Link href="/collections/tea-time" className="hover:text-primary transition-colors">Tea-Time Essentials</Link></li>
              <li><Link href="/collections/wellness-pantry" className="hover:text-primary transition-colors">Wellness Pantry</Link></li>
              <li><Link href="/collections/birthday" className="hover:text-primary transition-colors">Birthday Boutique</Link></li>
              <li><Link href="/collections/under-99" className="hover:text-primary transition-colors">Under ₹99</Link></li>
            </ul>
          </div>

          {/* Col 3 — About */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">About</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Visit the Bakery</Link></li>
              <li className="text-background/40 pt-4">FSSAI: 22725692001172</li>
              <li className="text-background/40">EST. 2018</li>
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contact</h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <span className="text-primary text-lg">📍</span>
                <p>
                  Shop-06, Assotech HI-STREET, LGF,<br />
                  Crossings Republik, Ghaziabad UP 201016
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary text-lg">📞</span>
                <a href="tel:+918178769036" className="hover:text-primary transition-colors">+91 8178769036</a>
              </div>
            </div>
            <WhatsAppButton productName="General Inquiry" size="sm" className="w-full justify-center" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-background/30">
          <p>© {new Date().getFullYear()} Heritage Oven. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
