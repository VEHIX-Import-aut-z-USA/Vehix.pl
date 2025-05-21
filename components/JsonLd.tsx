export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoDealer",
          name: "Vehix",
          url: "https://vehix.pl/o-nas",
          logo: "https://vehix.pl/logo.png",
          image: "https://vehix.pl/og-image.jpg",
          description: "Eksperci od importu aut z USA. Stała cena, kompleksowa obsługa, 300+ zadowolonych klientów.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Okrężna 14",
            addressLocality: "Wysogotowo",
            postalCode: "62-081",
            addressCountry: "PL",
          },
          telephone: "+48 600 928 700",
        }),
      }}
    />
  );
}
