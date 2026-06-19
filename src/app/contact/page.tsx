"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="pt-[100px] md:pt-[140px]">
      {/* 1. HEADER - CONCIERGE STYLE */}
      <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 bg-[#1A1714] text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-8"
          >
            Connect with us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-heading font-bold tracking-tighter mb-12"
          >
            VISIT <span className="serif italic font-normal text-accent">US.</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. CONTACT GRID - FUNCTIONAL LUXURY */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-20">
              <div>
                <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-10">The Location</h2>
                <div className="flex gap-6 items-start">
                  <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-primary">
                    Shop-06, Assotech HI-STREET, <br />
                    LGF, Crossings Republik, <br />
                    Ghaziabad, UP 201016
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-10">Business Hours</h2>
                <div className="flex gap-6 items-start">
                  <Clock className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div className="text-xl md:text-2xl font-light space-y-2 text-primary">
                    <p>Monday — Sunday</p>
                    <p>10:00 AM — 10:00 PM</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-10">Direct Lines</h2>
                <div className="space-y-8">
                  <div className="flex gap-6 items-center">
                    <Phone className="text-accent" size={20} />
                    <a href="tel:+918178769036" className="text-xl md:text-2xl font-light hover:text-accent transition-colors">+91 8178769036</a>
                  </div>
                  <div className="flex gap-6 items-center">
                    <MessageCircle className="text-accent" size={20} />
                    <a href="https://wa.me/8178769036" className="text-xl md:text-2xl font-light hover:text-accent transition-colors">Chat on WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Map Integration (Placeholder) */}
            <div className="lg:col-span-7 h-[600px] bg-white rounded-sm shadow-2xl overflow-hidden relative border border-black/5">
              {/* This would be a Google Map Embed in production */}
              <div className="absolute inset-0 bg-muted flex items-center justify-center grayscale">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 text-accent/40" size={40} />
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40">Map View Integrated Here</p>
                </div>
              </div>
              {/* For Demo, I'll add a beautiful bakery photo over it */}
              <Image 
                src="/img/about-1.jpg"
                alt="Storefront"
                fill
                className="object-cover opacity-20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CUSTOM CAKE CONSULTATION CTA */}
      <section className="py-40 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-10 text-primary">Planning a Celebration?</h2>
            <p className="text-primary/60 text-lg md:text-xl font-light leading-relaxed mb-16 serif italic">
              From grand weddings to intimate birthdays, we design cakes that 
              become the centerpiece of your story. Let&apos;s start the design 
              consultation today.
            </p>
            <Link 
              href="https://wa.me/8178769036?text=I'd like to book a custom cake consultation."
              className="inline-block px-12 py-6 bg-primary text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-accent transition-all duration-700"
            >
              Start Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
