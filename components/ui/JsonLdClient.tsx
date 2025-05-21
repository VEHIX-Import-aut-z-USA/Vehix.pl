'use client';

import Script from "next/script";

export default function JsonLdClient() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "AutoDealer",
      name: "Vehix",
      url: "https://vehix.pl/o-nas",
      logo: "https://vehix.pl/Vehix-Logo-PNG.png",
      image: "https://vehix.pl/og-image.jpg",
      description:
        "Eksperci od importu aut z USA. Stała cena, kompleksowa obsługa, 300+ zadowolonych klientów.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Okrężna 14",
        addressLocality: "Wysogotowo",
        postalCode: "62-081",
        addressCountry: "PL",
      },
      telephone: "+48 600 928 700",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Import aut z USA – VEHIX",
      url: "https://vehix.pl",
      description:
        "Sprowadzamy auta z USA – bez stresu, po stałej cenie i z gwarancją jakości. VEHIX to kompleksowy import aut pod klucz."
    }
  ];

  return (
    <Script
      id="vehix-jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
