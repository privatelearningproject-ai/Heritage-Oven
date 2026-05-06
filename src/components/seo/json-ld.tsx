export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Heritage Oven",
    "image": "https://heritageoven.in/img/logo.png", // Ensure this exists or use a generic one
    "@id": "https://heritageoven.in",
    "url": "https://heritageoven.in",
    "telephone": "+918178769036",
    "priceRange": "₹80 - ₹2200",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop-06, Assotech HI-STREET, LGF, Crossings Republik",
      "addressLocality": "Ghaziabad",
      "postalCode": "201016",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6277, // Approximate for Crossings Republik
      "longitude": 77.4449,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "22:00",
    },
    "sameAs": [
      "https://www.facebook.com/heritageoven",
      "https://www.instagram.com/heritageoven",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
