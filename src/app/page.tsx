import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { CategoryGrid } from "@/components/sections/category-grid";
import { SplitIntent } from "@/components/sections/split-intent";
import { TrustSection } from "@/components/sections/trust-section";
import { BakeryDisplay } from "@/components/sections/bakery-display";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* 1. Immersive Editorial Hero */}
      <Hero />
      
      {/* 2. Curated Product Collections */}
      <CategoryGrid />
      
      {/* 3. The Horizontal Display Case (User Experience) */}
      <BakeryDisplay />
      
      {/* 4. The Dual Path Split Journey */}
      <SplitIntent />
      
      {/* 5. Philosophy & Trust Section */}
      <TrustSection />
      
      {/* 6. Minimalistic Local Proof */}
      <section className="py-40 bg-white text-center">
        <div className="container mx-auto px-6">
          <p className="text-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-12">Proudly Ghaziabad</p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-20 max-w-4xl mx-auto leading-tight text-balance">
            Loved by local families. <br /> 
            Trusted for every celebration.
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
            {["FSSAI CERTIFIED", "EST. 2018", "CROSSINGS REPUBLIK", "PURE INGREDIENTS"].map(text => (
              <p key={text} className="text-[10px] font-bold tracking-[0.3em] uppercase">{text}</p>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
