import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Looking for a Bakery Near You in Ghaziabad? Heritage Oven Has You Covered",
  description: "Find fresh eggless cakes, pastries, artisan breads and more at Heritage Oven – the trusted cake shop near you in Crossings Republik, Ghaziabad.",
};

export default function BlogPostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Looking for a Bakery Near You in Ghaziabad? Heritage Oven Has You Covered",
    "datePublished": "2026-06-19",
    "author": { 
      "@type": "Organization", 
      "name": "Heritage Oven" 
    },
    "publisher": { 
      "@type": "Organization", 
      "name": "Heritage Oven", 
      "url": "https://heritageoven.in" 
    }
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <div className="pt-[120px] md:pt-[160px] min-h-screen bg-background">
        <div className="container mx-auto px-6 md:px-12 py-8 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span className="text-stone-300">/</span>
            <Link href="/blog" className="hover:text-accent transition-colors">
              Blog
            </Link>
            <span className="text-stone-300">/</span>
            <span className="text-accent truncate">Looking for a Bakery...</span>
          </nav>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-accent mb-4">
              <span>June 19, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
              <span>By Heritage Oven</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight tracking-tight text-balance">
              Looking for a Bakery Near You in Ghaziabad? Heritage Oven Has You Covered
            </h1>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[21/9] w-full rounded-lg overflow-hidden bg-stone-100 mb-12 shadow-sm border border-border/20">
            <Image
              src="/img/products/assets/heritage-display.jpg"
              alt="Heritage Oven bakery display in Ghaziabad"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Body */}
          <article className="max-w-3xl mx-auto">
            <div className="text-primary/80 text-base md:text-lg font-light leading-relaxed font-sans">
              <p className="mb-6">
                There is something deeply comforting about the aroma of freshly baked bread and warm sugar. If you find yourself searching for a welcoming <strong className="font-semibold text-primary">bakery near me</strong> to satisfy your sweet tooth or pick up daily essentials, Heritage Oven is here to welcome you. Nestled in the heart of the community, we are the go-to destination for anyone seeking a premium <strong className="font-semibold text-primary">cake shop near me</strong> in the neighborhood of <strong className="font-semibold text-primary">Crossings Republik Ghaziabad</strong>.
              </p>

              <p className="mb-8">
                At Heritage Oven, we believe baking is an art form that deserves time, care, and the finest ingredients. Whether you want a quick evening snack or are planning a grand celebration, our doors are open. We pride ourselves on creating a space that feels like home, serving treats baked fresh daily with professional mastery.
              </p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mt-12 mb-4 tracking-tight">
                Fresh Bakes Every Morning in Crossings Republik
              </h2>

              <p className="mb-6">
                Our ovens are fired up in the early hours of the morning so that when you search for a <strong className="font-semibold text-primary">bread bakery near me</strong>, you find nothing but the freshest, most wholesome loaves. We believe good bread takes time, and we never cut corners on quality.
              </p>

              <p className="mb-8">
                As a leading <strong className="font-semibold text-primary">bakery in Ghaziabad</strong>, we maintain the highest standards of food safety. Heritage Oven is FSSAI certified, providing peace of mind to our community. More importantly, we operate on a strict &quot;no preservatives&quot; policy. Every item is baked fresh daily, offering a wholesome option for health-conscious families who refuse to compromise on taste.
              </p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mt-12 mb-4 tracking-tight">
                Our Cakes – Made for Every Occasion
              </h2>

              <p className="mb-6">
                Celebrations are defined by the moments we share, and no party is complete without a stunning centerpiece. If you are searching for a trusted <strong className="font-semibold text-primary">cake shop near me</strong> that understands celebration baking, Heritage Oven is at your service. We specialize in crafting premium, handcrafted cakes that look beautiful and taste exceptional. Understanding the dietary preferences of our community, we specialize in 100% eggless cakes that retain all the moisture and rich flavor of traditional bakes.
              </p>

              <p className="mb-8">
                Whether you need a classic Pineapple cake for a family gathering, a rich Black Forest cake for a nostalgia-filled celebration, or a decadent KitKat Truffle cake to surprise a chocolate lover, we have a flavor to suit every palate. Beyond our daily menu, our bakers excel at creating custom birthday and anniversary cakes tailored to your unique themes. We work closely with you to bring your sweet vision to life.
              </p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mt-12 mb-4 tracking-tight">
                Beyond Cakes – Pastries, Breads & Savory Snacks
              </h2>

              <p className="mb-6">
                While our cakes steal the spotlight, our ovens produce a diverse range of delights designed to satisfy every craving. If you are looking for sweet individual portions, search no further for <strong className="font-semibold text-primary">pastries near me</strong>. Our display cases are stocked daily with premium pastries, including the velvety Red Velvet pastry, the intensely rich Dutch Truffle, and the refreshing Blueberry Cheesecake.
              </p>

              <p className="mb-6">
                For those who appreciate the rustic charm of traditional European baking, our artisan breads are a must-try. We are proud to be a dedicated <strong className="font-semibold text-primary">bread bakery near me</strong> that offers authentic, naturally leavened Sourdough bread. Perfect for morning toasts or gourmet sandwiches, our sourdough is baked to perfection.
              </p>

              <p className="mb-8">
                If you prefer savory to sweet, our menu features an array of freshly baked savory snacks. From flaky patties to seasoned local favorites, we provide the perfect accompaniment to your evening tea. When you visit our <strong className="font-semibold text-primary">pastry shop near me</strong>, you are guaranteed to find a balance of classic baking techniques and modern flavors.
              </p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mt-12 mb-4 tracking-tight">
                Why Families in Crossings Republik Trust Heritage Oven
              </h2>

              <p className="mb-6">
                In a fast-paced world, Heritage Oven stands as a beacon of traditional quality and local trust. Families across <strong className="font-semibold text-primary">Crossings Republik Ghaziabad</strong> choose us because we treat them like our own family. Our physical store is located at Shop-06, Assotech Hi-Street, Crossings Republik, Ghaziabad 201016, making it convenient for you to drop by, take in the warm aromas, and select your treats in person.
              </p>

              <p className="mb-8">
                Our commitment to quality is reflected in our FSSAI certification and our dedication to preservative-free baking. To accommodate your busy schedules, we are open daily till 9 PM, ensuring that you can always pick up a fresh loaf of sourdough for tomorrow&apos;s breakfast or a late-night pastry to unwind after a long day.
              </p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mt-12 mb-4 tracking-tight">
                How to Order (WhatsApp in 30 Seconds)
              </h2>

              <p className="mb-6">
                We understand that life can get busy, and you might not always have the time to visit us. That is why ordering your favorite treats with Heritage Oven is as simple as sending a quick message on WhatsApp.
              </p>

              <p className="mb-6">
                Whether you want to pre-order a custom birthday cake, reserve a fresh loaf of sourdough bread, or have a box of Dutch Truffle pastries ready for pickup, simply message us on WhatsApp at **8178769036**. We are open daily till 9 PM to take your orders and make your sweet cravings a reality.
              </p>

              <p className="mb-10">
                Ready to taste the difference of fresh, preservative-free baking? Click the button below to chat with us directly and place your order today!
              </p>
            </div>

            {/* CTA Button Block */}
            <div className="border-t border-stone-200/60 pt-10 mt-12 flex flex-col items-center text-center">
              <a
                href="https://wa.me/918178769036"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-wa-brand hover:bg-wa-hover text-white px-10 py-5 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 gap-3"
              >
                {/* WhatsApp SVG Icon */}
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Order Fresh Bakes via WhatsApp</span>
              </a>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-4">
                No complex forms. Simple & fast ordering.
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
