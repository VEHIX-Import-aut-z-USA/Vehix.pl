"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

// 20 modeli z USA ≤ 90 000 zł do importu do Polski
const topModels = [
  {
    model: "Chrysler Pacifica 2021",
    description: "Rodzinny minivan z hybrydą plug‑in. 7 miejsc, przesuwne drzwi, kamera 360°.",
    price: "od 89 000 zł",
    saving: "oszczędzasz: do 33 000 zł",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Chrysler_Pacifica_Hybrid_Touring-L.jpg",
    features: ["Hybryda PHEV", "Automat CVT", "Kamera 360°", "7 miejsc"],
  },
  {
    model: "Toyota Camry SE 2021",
    description: "Ekonomiczny sedan z dynamicznym stylem SE i kompletnym wyposażeniem LED.",
    price: "od 82 000 zł",
    saving: "oszczędzasz: do 24 000 zł",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/2021_Toyota_Camry_SE_Nightshade_in_Super_White%2C_front_left.jpg",
    features: ["2.5 L Dynamic Force", "LED", "Automat 8‑bieg", "Apple CarPlay"],
  },
  {
    model: "Jeep Compass 2022",
    description: "Kompaktowy SUV AWD – 180 KM, Apple CarPlay, idealny na miasto i lekki teren.",
    price: "od 89 000 zł",
    saving: "oszczędzasz: do 28 000 zł",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/2019_Jeep_Compass_Sport_front_5.28.19.jpg",
    features: ["AWD 4×4", "Uconnect 8.4″", "Kam. cofania", "Pakiet zimowy"],
  },
  {
    model: "Ford Fusion Hybrid 2020",
    description: "Duży, wygodny sedan hybrydowy – oszczędny i świetnie wyposażony.",
    price: "od 79 000 zł",
    saving: "oszczędzasz: do 21 000 zł",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/2017_Ford_Fusion_SE_front_4.4.18.jpg",
    features: ["Hybryda FWD", "SYNC 3", "Kamera cofania", "Automat eCVT"],
  },
  {
    model: "Hyundai Sonata SEL 2021",
    description: "Nowoczesny sedan z kompletem asystentów i bardzo niskim spalaniem.",
    price: "od 77 000 zł",
    saving: "oszczędzasz: do 18 000 zł",
    image: "https://cdn.motor1.com/images/mgl/JzqQJ/s3/hyundai-sonata.jpg",
    features: ["2.5 L 191 KM", "Lane Assist", "LED", "Android Auto"],
  },
  {
    model: "Nissan Altima SV 2021",
    description: "Komfortowy sedan z opcjonalnym napędem AWD i ekonomicznym silnikiem.",
    price: "od 85 000 zł",
    saving: "oszczędzasz: do 23 000 zł",
    image: "https://cdn.motor1.com/images/mgl/YB03y/s3/2021-nissan-altima.jpg",
    features: ["AWD", "2.5 L 188 KM", "ProPILOT Assist", "Kamera cofania"],
  },
  {
    model: "Kia Forte LXS 2021",
    description: "Kompakt o niskim spalaniu i świetnym stosunku cena/wypasażenie.",
    price: "od 71 000 zł",
    saving: "oszczędzasz: do 17 000 zł",
    image: "https://cdn.motor1.com/images/mgl/nk1kO/s3/2021-kia-forte.jpg",
    features: ["2.0 L 147 KM", "Lane Keep", "Apple CarPlay", "LED"],
  },
  {
    model: "Mazda 3 Hatch 2021",
    description: "Zwinny hatchback z perfekcyjnym prowadzeniem i premium wnętrzem.",
    price: "od 88 000 zł",
    saving: "oszczędzasz: do 20 000 zł",
    image: "https://cdn.motor1.com/images/mgl/YpmmA/s3/2021-mazda3.jpg",
    features: ["Skyactiv‑G 2.0", "LED", "Bose", "Head‑up"],
  },
  {
    model: "Chevrolet Malibu 2021",
    description: "Przestronny sedan turbo – idealny na dalekie trasy i miasto.",
    price: "od 76 000 zł",
    saving: "oszczędzasz: do 19 000 zł",
    image: "https://cdn.motor1.com/images/mgl/qE3e6/s3/2021-chevrolet-malibu.jpg",
    features: ["1.5 Turbo", "Automat CVT", "Wi‑Fi Hotspot", "Apple CarPlay"],
  },
  {
    model: "Volkswagen Jetta 2021 (US spec)",
    description: "Niemiecka precyzja w amerykańskiej specyfikacji – więcej wyposażenia taniej.",
    price: "od 88 000 zł",
    saving: "oszczędzasz: do 22 000 zł",
    image: "https://cdn.motor1.com/images/mgl/qBqbo/s3/2021-volkswagen-jetta.jpg",
    features: ["1.4 TSI", "LED", "Klimat. auto", "Digital Cockpit"],
  },
  {
    model: "Honda Accord Sport 2021",
    description: "Legendarny niezawodny sedan – 1.5 Turbo, łopatki zmiany biegów, sportowy look.",
    price: "od 89 000 zł",
    saving: "oszczędzasz: do 25 000 zł",
    image: "https://cdn.motor1.com/images/mgl/4moZb/s3/2021-honda-accord-sport.jpg",
    features: ["1.5 Turbo", "Paddle Shift", "LED", "Honda Sensing"],
  },
  {
    model: "Subaru Outback Premium 2020",
    description: "Kultowe kombi AWD – EyeSight, 8.7″ prześwit, gotowe na każdą pogodę.",
    price: "od 89 000 zł",
    saving: "oszczędzasz: do 28 000 zł",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/03/2020_Subaru_Outback_Premium_%28facelift%29_front_4.14.20.jpg",
    features: ["AWD", "2.5 Boxer", "EyeSight", "Android Auto"],
  },
  {
    model: "Ford Escape SE 2020",
    description: "Kompaktowy crossover z EcoBoost i napędem AWD – ekonomia i praktyczność.",
    price: "od 85 000 zł",
    saving: "oszczędzasz: do 26 000 zł",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/2020_Ford_Escape_Titanium_HEV_in_Rapid_Red%2C_front_left.jpg",
    features: ["1.5 EcoBoost", "AWD", "SYNC 3", "LED"],
  },
  {
    model: "Toyota Corolla LE 2022 (US)",
    description: "Ulubiony kompakt świata – super oszczędna i tania w utrzymaniu.",
    price: "od 78 000 zł",
    saving: "oszczędzasz: do 18 000 zł",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/2020_Toyota_Corolla_Le.jpg",
    features: ["1.8 CVT", "Toyota Safety Sense", "LED", "Apple CarPlay"],
  },
  {
    model: "Chevrolet Equinox LT 2021",
    description: "Praktyczny SUV segmentu C – turbo, AWD i bogaty pakiet bezpieczeństwa.",
    price: "od 90 000 zł",
    saving: "oszczędzasz: do 27 000 zł",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/2018_Chevrolet_Equinox_LT_front_6.5.18.jpg",
    features: ["1.5 Turbo", "AWD", "Wi‑Fi", "LED"],
  },
  {
    model: "Hyundai Elantra SE 2022",
    description: "Nowoczesny, dynamiczny sedan, świetnie wyposażony i bardzo ekonomiczny.",
    price: "od 79 000 zł",
    saving: "oszczędzasz: do 17 000 zł",
    image: "https://cdn.motor1.com/images/mgl/MpPPg/s3/2022-hyundai-elantra.jpg",
    features: ["2.0 MPI", "Apple CarPlay", "LED", "Lane Keep Assist"],
  },
  {
    model: "Mazda CX-5 2020",
    description: "Popularny SUV klasy średniej – dynamiczny, komfortowy, ekonomiczny.",
    price: "od 89 000 zł",
    saving: "oszczędzasz: do 25 000 zł",
    image: "https://cdn.motor1.com/images/mgl/7B2Gw/s3/2020-mazda-cx-5.jpg",
    features: ["2.5 Skyactiv-G", "AWD", "LED", "BOSE"],
  },
  {
    model: "Kia Soul 2021",
    description: "Kompaktowy crossover z nietuzinkowym designem i bogatym wyposażeniem.",
    price: "od 78 000 zł",
    saving: "oszczędzasz: do 16 000 zł",
    image: "https://cdn.motor1.com/images/mgl/9nRAV/s3/2021-kia-soul.jpg",
    features: ["2.0 MPI", "Apple CarPlay", "LED", "Harman Kardon"],
  },
  {
    model: "Nissan Sentra SV 2021",
    description: "Bezpieczny, oszczędny sedan – świetny stosunek ceny do jakości.",
    price: "od 76 000 zł",
    saving: "oszczędzasz: do 16 000 zł",
    image: "https://cdn.motor1.com/images/mgl/0ANj3/s3/2021-nissan-sentra.jpg",
    features: ["2.0 MPI", "Safety Shield 360", "LED", "Apple CarPlay"],
  },
  {
    model: "Ford EcoSport SE 2021",
    description: "Miejski crossover z napędem na przód lub AWD, bardzo ekonomiczny.",
    price: "od 73 000 zł",
    saving: "oszczędzasz: do 15 000 zł",
    image: "https://cdn.motor1.com/images/mgl/0ANj6/s3/2021-ford-ecosport.jpg",
    features: ["1.0 EcoBoost", "AWD", "LED", "SYNC 3"],
  },
  {
    model: "Chevrolet Trax LT 2021",
    description: "Niedrogi SUV miejski z automatem i dobrze wyposażonym wnętrzem.",
    price: "od 69 000 zł",
    saving: "oszczędzasz: do 14 000 zł",
    image: "https://cdn.motor1.com/images/mgl/0ANj1/s3/2021-chevrolet-trax.jpg",
    features: ["1.4 Turbo", "AWD", "Apple CarPlay", "LED"],
  },
];

export default function Top20Page() {
  return (
    <>
      <Head>
        <title>TOP 20 aut z USA do 90 000 zł – Import, ceny, kalkulacja | VEHIX</title>
        <meta
          name="description"
          content="Zobacz 20 najpopularniejszych modeli z USA do 90 000 zł – pełna oferta, kalkulacje, oszczędność i szybki import. Chrysler, Camry, Accord, Outback, CX-5 i inne."
        />
      </Head>
      <section className="section pt-24">
        <div className="container-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" id="top-aut-usa">
            TOP 20 samochodów z USA do 90 000 zł
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
                style={{ minHeight: "520px" }}
              >
                <div>
                  <div className="aspect-[4/3] w-full relative rounded-lg overflow-hidden mb-5">
                    <Image
                      src={car.image}
                      alt={car.model}
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
