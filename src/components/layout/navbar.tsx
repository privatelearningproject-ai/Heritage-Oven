"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Story", href: "/about" },
  { name: "Collection", href: "/our-products" },
  { name: "Visit", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
          isScrolled 
            ? "py-4 bg-white/80 backdrop-blur-xl border-b border-black/5" 
            : "py-10 bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand - Oversized & Minimal */}
          <Link href="/" className="group relative">
            <span className={cn(
              "text-2xl md:text-3xl font-heading font-bold tracking-tighter transition-colors duration-500",
              isScrolled ? "text-primary" : "text-white"
            )}>
              Heritage Oven
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full" />
          </Link>

          {/* Desktop Navigation - Spaced Out & Elegant */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:text-accent",
                  isScrolled ? "text-primary/60" : "text-white/60"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {/* The Signature CTA */}
            <Link
              href="https://wa.me/8178769036"
              className={cn(
                "px-8 py-3 text-[10px] font-bold tracking-[0.3em] uppercase border transition-all duration-700",
                isScrolled 
                  ? "border-primary text-primary hover:bg-primary hover:text-white" 
                  : "border-white/30 text-white hover:bg-white hover:text-primary"
              )}
            >
              Order Online
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-5">
              <span className={cn(
                "absolute h-[1.5px] w-full bg-current transition-all duration-500",
                isMobileMenuOpen ? "rotate-45 top-2" : "top-0",
                isScrolled ? "text-primary" : "text-white"
              )} />
              <span className={cn(
                "absolute h-[1.5px] w-full bg-current transition-all duration-500",
                isMobileMenuOpen ? "opacity-0" : "top-2",
                isScrolled ? "text-primary" : "text-white"
              )} />
              <span className={cn(
                "absolute h-[1.5px] w-full bg-current transition-all duration-500",
                isMobileMenuOpen ? "-rotate-45 top-2" : "top-4",
                isScrolled ? "text-primary" : "text-white"
              )} />
            </div>
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[90] bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-4xl font-heading font-bold text-primary hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link
                href="https://wa.me/8178769036"
                className="px-12 py-5 text-xs font-bold tracking-[0.3em] uppercase bg-primary text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Order Online
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
