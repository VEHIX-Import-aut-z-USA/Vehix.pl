"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  {
    title: "Top 5 modeli",
    description:
      "Najczęściej wybierane przez naszych klientów auta – szybki import, niska cena całkowita, wysoka wartość odsprzedaży. Idealne na pierwszy raz.",
    bullets: [
      "Najlepszy stosunek ceny do jakości",
      "Gotowe kalkulacje kosztów",
      "Szybki termin dostawy – nawet 5 tygodni",
    ],
    image:
      "https://cdn.motor1.com/images/mgl/O99Om/s3/2021-toyota-camry-xse-hybrid.jpg",
    link: "/oferta/top5",
  },
  {
    title: "Muscle Cars",
    description:
      "Ford Mustang, Chevrolet Camaro, Dodge Challenger – legendy amerykańskiej motoryzacji. Tańsze niż w Europie i dostępne z pełnym pakietem dokumentów.",
    bullets: [
      "Silniki V8 i V6 z USA – taniej o 30–40 tys. zł",
      "Oryginalne wersje Performance",
      "Sprowadzamy auta do tuningu i klasyków",
    ],
    image:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/ford-mustang-gt-chevrolet-camaro-ss-vladyslav-shapovalenko.jpg",
    link: "/oferta/muscle-cars",
  },
  {
    title: "SUV-y i Pickupy",
    description:
      "Duże, komfortowe i niezniszczalne. Jeep Grand Cherokee, RAM 1500, Ford F-150 i inne – idealne do jazdy po mieście i na działkę.",
    bullets: [
      "Wersje 4x4 z USA nawet o 25% taniej",
      "Pełna historia pojazdu (Carfax, AutoCheck)",
      "Możliwość importu wersji z gazem (LPG)",
    ],
    image:
      "https://medias.fcacanada.ca/specs/jeep/grandcherokee/year-2021/media/images/gallery/2021-jeep-grand-cherokee-gallery-capability-trailhawk-driving-down-dirt-road_644496bee8159a2fea2d1d3d23bcc6f8-1920x1280.jpg",
    link: "/oferta/suv-pickup",
  },
  {
    title: "Samochody luksusowe",
    description:
      "Cadillac Escalade, Lincoln Navigator, luksusowe Fordy i Chevrolety – pełen pakiet wyposażenia, mniej przejechanych km, ogromna oszczędność.",
    bullets: [
      "Oszczędność nawet do 100 000 zł",
      "Importujemy z gwarancją i opieką posprzedażową",
      "Własny serwis TSK Poznex w Poznaniu",
    ],
    image:
      "https://st.automobilemag.com/uploads/sites/10/2016/05/2016-cadillac-escalade-awd-luxury-suv-front-view.png",
    link: "/oferta/luksusowe",
  },
  {
    title: "Elektryczne & hybrydowe",
    description:
      "Tesla Model 3/Y, Ford Mach-E, Chevrolet Bolt – taniej, bezpiecznie i z pomocą w dotacjach. Instalujemy stacje ładowania.",
    bullets: [
      "Do 30% taniej niż w Europie",
      "Doradzamy w programach dopłat (Mój Elektryk)",
      "Pomagamy w ładowarce i Wallboxie",
    ],
    image:
      "https://images.hgmsites.net/hug/2021-ford-mustang-mach-e_100781477_h.jpg",
    link: "/oferta/elektryczne",
  },
];

export default function OfferPage() {
  return (
    <>
      <Head>
        <title>Oferta importu aut z USA – kategorie i kalkulacje | VEHIX</title>
        <meta
          name="description"
          content="Wybierz kategorię auta z USA: Top 5, Muscle Cars, SUV-y, luksusowe, elektryczne. Z VEHIX importujesz szybciej, taniej i bez ryzyka – zobacz kalkulacje kosztów!"
        />
      </Head>
      <main role="main" aria-label="Oferta importu samochodów z USA">
        {/* HERO */}
        <header className="bg-primary text-white py-16">
          <div className="container-content text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nasza oferta</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Z VEHIX importujesz dokładnie to, czego szukasz — taniej, bez stresu i z gwarancją ceny. Wybierz kategorię auta, a resztą zajmiemy się my.
            </p>
          </div>
        </header>

        {/* KATEGORIE */}
        <section className="py-16" aria-labelledby="oferta-heading">
          <div className="container-content">
            <h2 id="oferta-heading" className="sr-only">
              Kategorie importowanych aut
            </h2>
            <SectionHeading
              title="Wybierz kategorię"
              subtitle="Zobacz kalkulacje kosztów, przykładowe modele, porównania z cenami w Polsce i oszczędzaj od pierwszego kontaktu."
              centered
            />

            <div className="grid gap-20 mt-16">
              {categories.map((cat, i) => {
                const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
                const reverse = i % 2 === 1;

                return (
                  <article
                    key={cat.title}
                    ref={ref}
                    className="grid gap-12 items-start lg:grid-cols-2"
                  >
                    {/* Obraz */}
                    <motion.div
                      initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6 }}
                      className={reverse ? "lg:order-2" : ""}
                    >
                      <div className="shadow-lg overflow-hidden rounded-lg">
                        <div className="aspect-video relative">
                          <Image
                            src={cat.image}
                            alt={cat.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Tekst */}
                    <motion.div
                      initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className={reverse ? "lg:order-1" : ""}
                    >
                      <h2 className="text-2xl font-bold mb-4">{cat.title}</h2>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{cat.description}</p>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
                        {cat.bullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                      <Link
                        href={cat.link}
                        className="btn-primary"
                        aria-label={`Zobacz ofertę: ${cat.title}`}
                      >
                        Sprawdź modele
                      </Link>
                    </motion.div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
