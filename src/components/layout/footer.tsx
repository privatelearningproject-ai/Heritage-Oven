import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1714] text-white/90 py-32 selection:bg-accent selection:text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
          
          {/* Brand & Mission */}
          <div className="md:col-span-6">
            <h2 className="text-4xl font-heading font-bold tracking-tighter mb-10">Heritage Oven</h2>
            <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-md italic serif mb-12">
              Bringing premium artisanal baking to the heart of Ghaziabad. 
              We believe in the slow way, the honest way, and the simple joy 
              of a perfect crust.
            </p>
            <div className="flex gap-10">
              <Link href="#" className="text-[10px] font-bold tracking-[0.3em] uppercase hover:text-accent transition-colors">Instagram</Link>
              <Link href="#" className="text-[10px] font-bold tracking-[0.3em] uppercase hover:text-accent transition-colors">Facebook</Link>
              <Link href="#" className="text-[10px] font-bold tracking-[0.3em] uppercase hover:text-accent transition-colors">Twitter</Link>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-3">
            <p className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-10">Explore</p>
            <ul className="space-y-6">
              <li><Link href="/about" className="text-sm font-light hover:text-accent transition-colors">The Story</Link></li>
              <li><Link href="/our-products" className="text-sm font-light hover:text-accent transition-colors">The Collection</Link></li>
              <li><Link href="/contact" className="text-sm font-light hover:text-accent transition-colors">Visit Us</Link></li>
              <li><Link href="/pos" target="_blank" className="text-sm font-light hover:text-accent transition-colors">Terminal</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3">
            <p className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-10">Connect</p>
            <div className="space-y-10">
              <div className="flex gap-4 items-start">
                <MapPin className="text-accent flex-shrink-0" size={16} />
                <p className="text-sm font-light leading-relaxed text-white/60">
                  Shop-06, Assotech HI-STREET, <br />
                  LGF, Crossings Republik, <br />
                  Ghaziabad, UP 201016
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="text-accent flex-shrink-0" size={16} />
                <a href="tel:+918178769036" className="text-sm font-light hover:text-accent transition-colors">+91 8178769036</a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Fine Print */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-8">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/20">
            © {new Date().getFullYear()} Heritage Oven. All Rights Reserved.
          </p>
          <div className="flex gap-10">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/20">FSSAI: 22725692001172</p>
            <Link href="#" className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/20 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
