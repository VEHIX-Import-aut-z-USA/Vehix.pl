"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// bazowa ścieżka do obrazów (pliki .webp są w /public/images/oferta/top5)
const IMG_BASE = "/images/oferta/top5/";

// 20+ modeli z USA ≤ 90 000 zł do importu do Polski
const topModels = [
  {
    model: "Chrysler Pacifica 2021",
    alt: "Chrysler Pacifica 2021 z USA – komfortowy minivan rodzinny, import z VEHIX z oszczędnością do 25 000 PLN",
    description: "Rodzinny minivan z hybrydą plug-in. 7 miejsc, przesuwne drzwi, kamera 360°.",
    price: "od 89 000 zł",
    saving: "oszczędzasz: do 33 000 zł",
    image: `${IMG_BASE}chrysler-pacifica-2021.webp`,
    features: ["Hybryda PHEV", "Automat CVT", "Kamera 360°", "7 miejsc"],
  },
  {
    model: "Toyota Camry SE 2021",
    alt: "Toyota Camry SE 2021 – sedan klasy średniej z USA, oszczędność do 20 000 PLN z VEHIX",
    description: "Ekonomiczny sedan z dynamicznym stylem SE i kompletnym wyposażeniem LED.",
    price: "od 82 000 zł",
    saving: "oszczędzasz: do 24 000 zł",
    image: `${IMG_BASE}toyota-camry-se-2021.webp`,
    features: ["2.5 L Dynamic Force", "LED", "Automat 8-bieg", "Apple CarPlay"],
  },
  {
    model: "Volvo XC90 2018 Plug-In Hybrid T8",
    alt: "Volvo XC90 Plug-In Hybrid T8 z USA – luksusowy SUV hybrydowy z importu VEHIX",
    description: "Luksusowy SUV hybrydowy z importu VEHIX",
    price: "od 65 000 zł",
    saving: "oszczędzasz: do 33 000 zł",
    image: `${IMG_BASE}volvo-xc90-2018-plug-in-hybrid-t8-r-design.webp`,
    features: ["2.0 Plug-In Hybrid", "AWD", "Apple CarPlay", "7 miejsc"],
  },
  {
    model: "Ford Fusion Hybrid 2020",
    alt: "Ford Fusion Hybrid 2020 – ekologiczny sedan z USA, import pojazdu przez VEHIX",
    description: "Duży, wygodny sedan hybrydowy – oszczędny i świetnie wyposażony.",
    price: "od 79 000 zł",
    saving: "oszczędzasz: do 21 000 zł",
    image: `${IMG_BASE}ford-fusion-hybrid-2020.webp`,
    features: ["Hybryda FWD", "SYNC 3", "Kamera cofania", "Automat eCVT"],
  },
  {
    model: "Hyundai Sonata SEL 2021",
    alt: "Hyundai Sonata SEL 2021 z USA – nowoczesny sedan, sprowadzony przez VEHIX z gwarancją",
    description: "Nowoczesny sedan z kompletem asystentów i bardzo niskim spalaniem.",
    price: "od 77 000 zł",
    saving: "oszczędzasz: do 18 000 zł",
    image: `${IMG_BASE}hyundai-sonata-sel-2021.webp`,
    features: ["2.5 L 191 KM", "Lane Assist", "LED", "Android Auto"],
  },
  {
    model: "Nissan Altima SV 2021",
    alt: "Nissan Altima SV 2021 – komfortowy sedan z USA, import bez pośredników od VEHIX",
    description: "Komfortowy sedan z opcjonalnym napędem AWD i ekonomicznym silnikiem.",
    price: "od 85 000 zł",
    saving: "oszczędzasz: do 23 000 zł",
    image: `${IMG_BASE}nissan-altima-sv-2021.webp`,
    features: ["AWD", "2.5 L 188 KM", "ProPILOT Assist", "Kamera cofania"],
  },
  {
    model: "Kia Forte LXS 2021",
    alt: "Kia Forte LXS 2021 z USA – ekonomiczny wybór w ofercie VEHIX z pełną obsługą",
    description: "Kompakt o niskim spalaniu i świetnym stosunku cena/wypasażenie.",
    price: "od 71 000 zł",
    saving: "oszczędzasz: do 17 000 zł",
    image: `${IMG_BASE}kia-forte-lxs-2021.webp`,
    features: ["2.0 L 147 KM", "Lane Keep", "Apple CarPlay", "LED"],
  },
  {
    model: "Mazda 3 Hatch 2021",
    alt: "Mazda 3 Hatchback 2021 z USA – stylowe auto kompaktowe z importu przez VEHIX",
    description: "Zwinny hatchback z perfekcyjnym prowadzeniem i premium wnętrzem.",
    price: "od 88 000 zł",
    saving: "oszczędzasz: do 20 000 zł",
    image: `${IMG_BASE}mazda-3-hatch-2021.webp`,
    features: ["Skyactiv-G 2.0", "LED", "Bose", "Head-up"],
  },
  {
    model: "Chevrolet Malibu 2021",
    alt: "Chevrolet Malibu 2021 – komfortowy sedan z USA, oferta importowa VEHIX bez ukrytych kosztów",
    description: "Przestronny sedan turbo – idealny na dalekie trasy i miasto.",
    price: "od 76 000 zł",
    saving: "oszczędzasz: do 19 000 zł",
    image: `${IMG_BASE}chevrolet-malibu-2021.webp`,
    features: ["1.5 Turbo", "Automat CVT", "Wi-Fi Hotspot", "Apple CarPlay"],
  },
  {
    model: "Volkswagen Jetta 2021 (US spec)",
    alt: "Volkswagen Jetta 2021 z USA – sedan w specyfikacji amerykańskiej, import z VEHIX",
    description: "Niemiecka precyzja w amerykańskiej specyfikacji – więcej wyposażenia taniej.",
    price: "od 88 000 zł",
    saving: "oszczędzasz: do 22 000 zł",
    image: `${IMG_BASE}volkswagen-jetta-2021.webp`,
    features: ["1.4 TSI", "LED", "Klimat. auto", "Digital Cockpit"],
  },
  {
    model: "Honda Accord Sport 2021",
    alt: "Honda Accord Sport 2021 – sportowy sedan z USA w ofercie VEHIX, import z gwarancją",
    description: "Legendarny niezawodny sedan – 1.5 Turbo, łopatki zmiany biegów, sportowy look.",
    price: "od 89 000 zł",
    saving: "oszczędzasz: do 25 000 zł",
    image: `${IMG_BASE}honda-accord-sport-2021.webp`,
    features: ["1.5 Turbo", "Paddle Shift", "LED", "Honda Sensing"],
  },
  {
    model: "Subaru Outback Premium 2020",
    alt: "Subaru Outback Premium 2020 – niezawodny SUV AWD z USA, oszczędność do 30 000 PLN",
    description: "Kultowe kombi AWD – EyeSight, 8.7″ prześwit, gotowe na każdą pogodę.",
    price: "od 89 000 zł",
    saving: "oszczędzasz: do 28 000 zł",
    image: `${IMG_BASE}subaru-outback-premium-2020.webp`,
    features: ["AWD", "2.5 Boxer", "EyeSight", "Android Auto"],
  },
  {
    model: "Ford Escape SE 2020",
    alt: "Ford Escape SE 2020 – przestronny SUV z USA, sprowadzony z pełną obsługą przez VEHIX",
    description: "Kompaktowy crossover z EcoBoost i napędem AWD – ekonomia i praktyczność.",
    price: "od 85 000 zł",
    saving: "oszczędzasz: do 26 000 zł",
    image: `${IMG_BASE}ford-escape-se-2020.webp`,
    features: ["1.5 EcoBoost", "AWD", "SYNC 3", "LED"],
  },
  {
    model: "Toyota Corolla LE 2022 (US)",
    alt: "Toyota Corolla LE 2022 z USA – najchętniej wybierany sedan, import bez niespodzianek z VEHIX",
    description: "Ulubiony kompakt świata – super oszczędna i tania w utrzymaniu.",
    price: "od 78 000 zł",
    saving: "oszczędzasz: do 18 000 zł",
    image: `${IMG_BASE}toyota-corolla-le-2022.webp`,
    features: ["1.8 CVT", "Toyota Safety Sense", "LED", "Apple CarPlay"],
  },
  {
    model: "Chevrolet Equinox LT 2021",
    alt: "Chevrolet Equinox LT 2021 – import z USA, SUV rodzinny w ofercie VEHIX",
    description: "Praktyczny SUV segmentu C – turbo, AWD i bogaty pakiet bezpieczeństwa.",
    price: "od 90 000 zł",
    saving: "oszczędzasz: do 27 000 zł",
    image: `${IMG_BASE}chevrolet-equinox-lt-2021.webp`,
    features: ["1.5 Turbo", "AWD", "Wi-Fi", "LED"],
  },
  {
    model: "Hyundai Elantra SE 2022",
    alt: "Hyundai Elantra SE 2022 z USA – ekonomiczny sedan, import z VEHIX z gwarancją",
    description: "Nowoczesny, dynamiczny sedan, świetnie wyposażony i bardzo ekonomiczny.",
    price: "od 79 000 zł",
    saving: "oszczędzasz: do 17 000 zł",
    image: `${IMG_BASE}hyundai-elantra-se-2022.webp`,
    features: ["2.0 MPI", "Apple CarPlay", "LED", "Lane Keep Assist"],
  },
  {
    model: "Mazda CX-5 2020",
    alt: "Mazda CX-5 2020 – popularny SUV z USA, oszczędność przy imporcie przez VEHIX",
    description: "Popularny SUV klasy średniej – dynamiczny, komfortowy, ekonomiczny.",
    price: "od 89 000 zł",
    saving: "oszczędzasz: do 25 000 zł",
    image: `${IMG_BASE}mazda-cx-5-2020.webp`,
    features: ["2.5 Skyactiv-G", "AWD", "LED", "BOSE"],
  },
  {
    model: "Kia Soul 2021",
    alt: "Kia Soul 2021 – kompaktowy SUV z charakterem, import z USA bez pośredników",
    description: "Kompaktowy crossover z nietuzinkowym designem i bogatym wyposażeniem.",
    price: "od 78 000 zł",
    saving: "oszczędzasz: do 16 000 zł",
    image: `${IMG_BASE}kia-soul-2021.webp`,
    features: ["2.0 MPI", "Apple CarPlay", "LED", "Harman Kardon"],
  },
  {
    model: "Nissan Sentra SV 2021",
    alt: "Nissan Sentra SV 2021 – nowoczesny sedan z USA, sprowadzony przez VEHIX",
    description: "Bezpieczny, oszczędny sedan – świetny stosunek ceny do jakości.",
    price: "od 76 000 zł",
    saving: "oszczędzasz: do 16 000 zł",
    image: `${IMG_BASE}nissan-sentra-sv-2021.webp`,
    features: ["2.0 MPI", "Safety Shield 360", "LED", "Apple CarPlay"],
  },
  {
    model: "Ford EcoSport SE 2021",
    alt: "Ford EcoSport SE 2021 – import z USA przez VEHIX, oszczędność nawet 15 000 PLN",
    description: "Miejski crossover z napędem na przód lub AWD, bardzo ekonomiczny.",
    price: "od 73 000 zł",
    saving: "oszczędzasz: do 15 000 zł",
    image: `${IMG_BASE}ford-ecosport-se-2021.webp`,
    features: ["1.0 EcoBoost", "AWD", "LED", "SYNC 3"],
  },
  {
    model: "Jeep Compass 2022",
    alt: "Jeep Compass 2022 z USA – kompaktowy SUV z napędem 4×4, import przez VEHIX",
    description: "Kompaktowy SUV AWD – 180 KM, Apple CarPlay, idealny na miasto i lekki teren.",
    price: "od 89 000 zł",
    saving: "oszczędzasz: do 28 000 zł",
    image: `${IMG_BASE}jeep-compass-2022.webp`,
    features: ["AWD 4×4", "Uconnect 8.4″", "Kam. cofania", "Pakiet zimowy"],
  },
];

export default function Top20Page() {
  return (
    <>
      <Head>
        <title>TOP 20 aut z USA do 90 000 zł – Import, ceny, kalkulacja | VEHIX</title>
        <meta
          name="description"
          content="Zobacz 20 najpopularniejszych modeli z USA do 90 000 zł – pełna oferta, kalkulacje, oszczędność i szybki import. Chrysler, Camry, Accord, Outback, CX-5 i inne."
        />
      </Head>

      <section className="section pt-24">
        <div className="container-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" id="top-aut-usa">
            TOP 20 samochodów z USA do 90 000 zł
          </h1>

          <h2 className="text-xl mb-12 text-center text-muted-foreground font-semibold">
            Najlepszy wybór, konkretne oszczędności i bogate wyposażenie – sprawdź, które modele realnie sprowadzisz do Polski.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {topModels.map((car, idx) => (
              <motion.article
                key={car.model}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-2xl shadow-md flex flex-col justify-between h-full px-6 pt-6 pb-7"
                style={{ minHeight: 520 }}
              >
                <div>
                  <div className="aspect-[4/3] w-full relative rounded-lg overflow-hidden mb-5">
                    <Image
                      src={car.image}
                      alt={car.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{car.model}</h3>
                  <p className="text-gray-700 text-sm mb-3">{car.description}</p>
                  <ul className="mb-5 text-sm grid grid-cols-2 gap-y-1 gap-x-2 text-muted-foreground">
                    {car.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-primary font-bold text-lg mb-1">{car.price}</div>
                  <div className="text-green-600 font-medium mb-5">{car.saving}</div>
                  <Link
                    href="/kontakt"
                    className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-semibold py-3 rounded-xl transition-all text-base"
                  >
                    Zamów ten model
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/kontakt">
              <button className="btn-primary text-lg px-8 py-4">
                Zamów bezpłatną wycenę importu auta z USA
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
