"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

// 16+ modeli SUV i pickupów z rynku USA — realnie zamawiane w Polsce
const suvPickups = [
  {
    model: "Jeep Grand Cherokee L",
    description: "7-miejscowy SUV łączący luksus z terenowymi możliwościami. Flagowa wersja Summit Reserve.",
    price: "od 229 000 zł",
    saving: "oszczędzasz: do 50 000 zł",
    image: "https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/2022/grand-cherokee-l/desktop/2022-Jeep-Grand-Cherokee-L-Overview-Hero-Desktop.jpg",
    features: ["3.6 V6", "7 miejsc", "Quadra-Trac II", "Summit Reserve"]
  },
  {
    model: "Ford F-150 Limited",
    description: "Najpopularniejszy pickup USA, w wersji Limited: full LED, skóra, masywny ładunek.",
    price: "od 259 000 zł",
    saving: "oszczędzasz: do 55 000 zł",
    image: "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/f-150/2023/collections/3-2/23_FRD_F150_42406_C1_8x3.jpg",
    features: ["3.5 EcoBoost", "4x4", "Skóra", "Pneumatyka"]
  },
  {
    model: "Chevrolet Tahoe Premier",
    description: "Pełnowymiarowy, 7-osobowy SUV – luksus, przestrzeń i moc.",
    price: "od 285 000 zł",
    saving: "oszczędzasz: do 60 000 zł",
    image: "https://www.motortrend.com/uploads/sites/5/2020/12/2021-Chevrolet-Tahoe-High-Country-front-three-quarter-in-motion-1.jpg",
    features: ["5.3 V8", "Premier", "7 miejsc", "Napęd 4x4"]
  },
  {
    model: "Dodge RAM 1500 Limited",
    description: "Luksusowy pickup z powietrznym zawieszeniem i silnikiem HEMI.",
    price: "od 258 000 zł",
    saving: "oszczędzasz: do 52 000 zł",
    image: "https://www.ramtrucks.com/content/dam/fca-brands/na/ramtrucks/en_us/2022/ram-1500/vlp/desktop/2022-ram-1500-vlp-limited-10th-anniversary-edition.jpg",
    features: ["5.7 V8 HEMI", "Limited", "Air Suspension", "4x4"]
  },
  {
    model: "Ford Explorer Platinum",
    description: "Rodzinny SUV – 7 miejsc, AWD, nowoczesny system Sync 3.",
    price: "od 219 000 zł",
    saving: "oszczędzasz: do 38 000 zł",
    image: "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/explorer/2022/collections/3-2/22_FRD_EPR_41382_32.jpg",
    features: ["3.0 V6 EcoBoost", "7 miejsc", "AWD", "SYNC 3"]
  },
  {
    model: "GMC Sierra Denali Ultimate",
    description: "Topowy amerykański pickup – luksus, moc, system Super Cruise.",
    price: "od 309 000 zł",
    saving: "oszczędzasz: do 75 000 zł",
    image: "https://www.gmc.com/content/dam/gmc/na/us/english/index/vehicles/2023/trucks/sierra-1500-denali-ultimate/mov/2023-sierra-denali-ultimate-exterior-01.jpg?imwidth=960",
    features: ["6.2 V8", "Denali Ultimate", "Super Cruise", "Full opcja"]
  },
  {
    model: "Chevrolet Suburban",
    description: "Największy SUV na rynku USA – 8 miejsc, ogromny bagażnik, silnik V8.",
    price: "od 292 000 zł",
    saving: "oszczędzasz: do 68 000 zł",
    image: "https://media.ed.edmunds-media.com/chevrolet/suburban/2023/oem/2023_chevrolet_suburban_4dr-suv_high-country_fq_oem_1_1600.jpg",
    features: ["5.3 V8", "8 miejsc", "Napęd 4x4", "High Country"]
  },
  {
    model: "Toyota Tundra CrewMax",
    description: "Niezawodny, pełnowymiarowy pickup z legendarną trwałością.",
    price: "od 249 000 zł",
    saving: "oszczędzasz: do 48 000 zł",
    image: "https://www.toyota.com/imgix/responsive/images/gallery/photos-videos/2022/tundra/2022-tundra-crewmax-4x4-trdpro-004.jpg",
    features: ["i-FORCE 3.5", "CrewMax", "TRD Pro", "4x4"]
  },
  {
    model: "Lincoln Navigator Reserve",
    description: "Amerykański luksus w wydaniu XXL – komfort, skóra, masaże.",
    price: "od 369 000 zł",
    saving: "oszczędzasz: do 80 000 zł",
    image: "https://media.ed.edmunds-media.com/lincoln/navigator/2022/oem/2022_lincoln_navigator_4dr-suv_black-label_fq_oem_1_1600.jpg",
    features: ["3.5 V6 EcoBoost", "AWD", "Skóra", "Masaże"]
  },
  {
    model: "Ram 2500 Laramie",
    description: "Pickup klasy heavy-duty – potężny diesel, wytrzymałość, komfort.",
    price: "od 275 000 zł",
    saving: "oszczędzasz: do 60 000 zł",
    image: "https://www.ramtrucks.com/content/dam/fca-brands/na/ramtrucks/en_us/2022/ram-2500/vlp/desktop/2022-ram-2500-vlp-laramie-night-edition.jpg",
    features: ["6.7 Cummins Diesel", "Laramie", "4x4", "Mega Cab"]
  },
  {
    model: "Ford Expedition King Ranch",
    description: "Luksusowy, 8-osobowy SUV. Pełne wyposażenie, niezawodność Forda.",
    price: "od 319 000 zł",
    saving: "oszczędzasz: do 72 000 zł",
    image: "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/expedition/2022/collections/3-2/22_FRD_EDP_41867_32.jpg",
    features: ["3.5 EcoBoost", "8 miejsc", "King Ranch", "AWD"]
  },
  {
    model: "Chevrolet Silverado 1500 Trail Boss",
    description: "Przygodowy pickup – podniesione zawieszenie, silnik V8, off-road.",
    price: "od 245 000 zł",
    saving: "oszczędzasz: do 51 000 zł",
    image: "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2023/trucks/silverado-1500/mov/01-images/2023-silverado-1500-mov-ext-trail-boss-1.jpg",
    features: ["5.3 V8", "Trail Boss", "Z71 Off-Road", "4x4"]
  },
  {
    model: "Toyota Sequoia Capstone",
    description: "Najnowszy full-size SUV Toyoty – hybryda, 7 miejsc, mega wyposażenie.",
    price: "od 319 000 zł",
    saving: "oszczędzasz: do 60 000 zł",
    image: "https://www.toyota.com/imgix/responsive/images/gallery/photos-videos/2023/sequoia/2023-sequoia-capstone-001.jpg",
    features: ["3.5 V6 Hybrid", "7 miejsc", "Capstone", "AWD"]
  },
  {
    model: "Nissan Titan XD PRO-4X",
    description: "Rzadko spotykany pickup – siła, niezawodność, pełen pakiet off-road.",
    price: "od 234 000 zł",
    saving: "oszczędzasz: do 48 000 zł",
    image: "https://cdn.motor1.com/images/mgl/0ANjK/s3/2022-nissan-titan-xd.jpg",
    features: ["5.6 V8", "PRO-4X", "4x4", "Zaawansowane bezpieczeństwo"]
  },
  {
    model: "Cadillac Escalade ESV",
    description: "Najbardziej prestiżowy SUV segmentu full-size. 7 miejsc, 6.2 V8, audio AKG.",
    price: "od 449 000 zł",
    saving: "oszczędzasz: do 110 000 zł",
    image: "https://cdn.motor1.com/images/mgl/Nqxw4e/s3/2023-cadillac-escalade-v.jpg",
    features: ["6.2 V8", "ESV", "7 miejsc", "AKG Audio 36-gł."]
  },
  {
    model: "GMC Yukon XL Denali",
    description: "Flagowy SUV GMC – przestrzeń, prestiż, pełna opcja Denali.",
    price: "od 429 000 zł",
    saving: "oszczędzasz: do 100 000 zł",
    image: "https://cdn.motor1.com/images/mgl/ORXnn/s3/2023-gmc-yukon-denali-ultimate.jpg",
    features: ["6.2 V8", "XL Denali", "9 miejsc", "Full opcja"]
  }
];

export default function SuvPickupPage() {
  return (
    <>
      <Head>
        <title>SUV-y i pickupy z USA – import do Polski | VEHIX</title>
        <meta
          name="description"
          content="Import SUV-ów i pickupów z USA do Polski. Jeep Grand Cherokee, Ford F-150, RAM 1500, Chevrolet Tahoe, Suburban, Toyota Tundra – realne ceny, kompleksowa obsługa pod klucz!"
        />
      </Head>
      {/* HERO */}
      <div className="bg-primary text-white py-20">
        <div className="container-content text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            SUV-y i pickupy z USA – import do Polski
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Sprowadzamy najpopularniejsze SUV-y i pickupy amerykańskie – większe, wygodniejsze, tańsze niż w Europie. Pełna obsługa: wycena, transport, serwis.
          </p>
        </div>
      </div>
      {/* LISTA MODELI */}
      <section className="section">
        <div className="container-content">
          <SectionHeading
            title="TOP 16 SUV-ów i pickupów z rynku USA"
            subtitle="Każdy z tych modeli sprowadzamy regularnie dla klientów z Polski. Szukasz czegoś innego? Znajdziemy dla Ciebie dowolny model lub wersję wyposażenia."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {suvPickups.map((car, idx) => (
              <motion.article
                key={car.model}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-2xl shadow-md flex flex-col justify-between h-full px-6 pt-6 pb-7"
                style={{ minHeight: "540px" }}
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
                  <h2 className="text-xl font-bold mb-1">{car.model}</h2>
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
        </div>
      </section>
      {/* BENEFITY */}
      <section className="section-alt py-16">
        <div className="container-content grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6">Dlaczego warto postawić na amerykańskiego SUV-a lub pickupa?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="p-2 bg-primary/10 rounded-full mr-4 mt-1">🚙</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Niższa cena zakupu</h3>
                  <p className="text-muted-foreground text-sm">
                    SUV-y i pickupy z USA są często tańsze niż europejskie odpowiedniki – nawet po doliczeniu cła i transportu.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="p-2 bg-primary/10 rounded-full mr-4 mt-1">📦</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Większa przestrzeń i komfort</h3>
                  <p className="text-muted-foreground text-sm">
                    Amerykańskie auta są większe, mają więcej miejsca na bagaż i pasażerów oraz bogatsze wyposażenie w standardzie.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="p-2 bg-primary/10 rounded-full mr-4 mt-1">💪</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Wytrzymałość i moc</h3>
                  <p className="text-muted-foreground text-sm">
                    Silniki V8, napęd 4x4 i zaawansowane technologie gwarantują niezawodność na lata.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="p-2 bg-primary/10 rounded-full mr-4 mt-1">🦾</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Prestiż i unikalność</h3>
                  <p className="text-muted-foreground text-sm">
                    Tego typu samochody wyróżniają się na drodze, dają poczucie wyjątkowości i klasy premium.
                  </p>
                </div>
              </div>
            </div>
            <Link href="/kontakt" className="btn-primary mt-8 inline-flex items-center text-lg">
              Zapytaj o wycenę importu SUV-a lub pickupa
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video relative">
              <Image
                src="https://media.ed.edmunds-media.com/chevrolet/suburban/2023/oem/2023_chevrolet_suburban_4dr-suv_high-country_fq_oem_1_1600.jpg"
                alt="Chevrolet Suburban - SUV full-size z USA"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container-content max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Gotowy na amerykański SUV lub pickup z USA?
          </h2>
          <p className="text-xl mb-8">
            Nasi eksperci doradzą, wycenia i przeprowadzą przez cały proces – od znalezienia auta po rejestrację w Polsce.
          </p>
          <Link href="/kontakt" className="btn-accent inline-flex items-center text-lg">
            Zamów bezpłatną konsultację
          </Link>
        </div>
      </section>
    </>
  );
}
