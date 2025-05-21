// app/oferta/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { offers } from "./data";
import ClientPage from "./ClientPage";
import Script from "next/script"; // ✅ DODANE

type Params = {
  params: {
    slug: string;
  };
};

// 🧠 Dynamiczne metadane na podstawie oferty
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const offer = offers.find((o) => o.slug === params.slug);
  if (!offer) return {
    title: "Oferta nie znaleziona | VEHIX",
    description: "Sprawdź inne modele importowane z USA przez VEHIX",
  };

  return {
    title: `${offer.model} - Import z USA | VEHIX`,
    description: offer.description,
  };
}

// 🧱 Główna strona oferty
export default function Page({ params }: Params) {
  const offer = offers.find((o) => o.slug === params.slug);
  if (!offer) return notFound();

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Strona główna",
                "item": "https://vehix.pl/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Oferta",
                "item": "https://vehix.pl/oferta"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": offer?.model ?? "Oferta",
                "item": `https://vehix.pl/oferta/${params.slug}`
              }
            ]
          }),
        }}
      />
      <ClientPage offer={offer} />
    </>
  );
}
