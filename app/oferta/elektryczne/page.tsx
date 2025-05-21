"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { DollarSign, Zap, Leaf, Battery, ChevronRight } from "lucide-react";

// 15+ modeli — możesz rozbudować dalej
const electricCars = [
  {
    model: "Tesla Model 3 2022",
    description: "Najpopularniejszy elektryczny sedan – świetny zasięg, Autopilot i wysoka wartość rezydualna.",
    image: "https://cdn.motor1.com/images/mgl/kXQZM/s1/2021-tesla-model-3.jpg",
    price: "od 219 000 zł",
    saving: "oszczędzasz: do 55 000 zł",
    features: ["Zasięg 580 km (WLTP)", "0‑100 km/h 3,3 s", "Autopilot", "Ładowanie 250 kW"]
  },
  {
    model: "Tesla Model Y 2023",
    description: "Kompaktowy SUV z ogromnym bagażnikiem i napędem AWD. Idealny dla rodzin.",
    image: "https://cdn.motor1.com/images/mgl/JmVR6/s1/tesla-model-y.jpg",
    price: "od 239 000 zł",
    saving: "oszczędzasz: do 60 000 zł",
    features: ["Zasięg 533 km", "0‑100 km/h 3,7 s", "Autopilot", "AWD"]
  },
  {
    model: "Ford Mustang Mach‑E 2022",
    description: "Sportowy charakter + praktyczność SUV‑a. Wersje RWD lub AWD.",
    image: "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/mustangmache/2022/collections/3-2/22_FRD_MCE_46398_32.jpg",
    price: "od 228 000 zł",
    saving: "oszczędzasz: do 45 000 zł",
    features: ["Zasięg 505 km", "SYNC 4A", "Panoramiczny dach", "One‑Pedal Drive"]
  },
  {
    model: "Chevrolet Bolt EV 2022",
    description: "Miejski hatchback z niskimi kosztami eksploatacji i szybkim ładowaniem.",
    image: "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2023/ev-electric/bolt-ev/01-images/2023-bolt-ev-1lt-gallery-exterior-01.jpg?imwidth=960",
    price: "od 159 000 zł",
    saving: "oszczędzasz: do 35 000 zł",
    features: ["Zasięg 416 km", "Ładowanie 100 kW", "One‑Pedal", "5‑letnia gwarancja baterii"]
  },
  {
    model: "Nissan Leaf Plus 2021",
    description: "Sprawdzone, niezawodne EV z większą baterią 62 kWh i ProPILOT Assist.",
    image: "https://cdn.motor1.com/images/mgl/1e22O/s3/2021-nissan-leaf.jpg",
    price: "od 139 000 zł",
    saving: "oszczędzasz: do 28 000 zł",
    features: ["Zasięg 385 km", "e‑Pedal", "ProPILOT", "Pompa ciepła"]
  },
  {
    model: "Hyundai Kona Electric 2022",
    description: "Kompaktowy crossover z baterią 64 kWh i bardzo niskim zużyciem energii.",
    image: "https://cdn.motor1.com/images/mgl/0xW0R/s1/2021-hyundai-kona-electric-facelift.jpg",
    price: "od 178 000 zł",
    saving: "oszczędzasz: do 32 000 zł",
    features: ["Zasięg 484 km", "Ładowanie 100 kW", "LED Matrix", "Bluelink"]
  },
  {
    model: "Kia Niro EV 2022",
    description: "Przestronny rodzinny crossover, cieszący się świetnymi opiniami użytkowników.",
    image: "https://cdn.motor1.com/images/mgl/VPkkm/s3/2022-kia-niro-ev.jpg",
    price: "od 182 000 zł",
    saving: "oszczędzasz: do 30 000 zł",
    features: ["Zasięg 460 km", "Heat Pump", "Lane Keep Assist", "Android Auto"]
  },
  {
    model: "Volkswagen ID.4 (US) 2022",
    description: "Produkcja Chattanooga – import bez cła na baterie. Świetna jakość i przestrzeń.",
    image: "https://cdn.motor1.com/images/mgl/8kWnm/s3/2021-volkswagen-id4-us.jpg",
    price: "od 199 000 zł",
    saving: "oszczędzasz: do 38 000 zł",
    features: ["Zasięg 522 km", "Ładowanie 135 kW", "Pompa ciepła", "Travel Assist"]
  },
  {
    model: "Tesla Model S Long Range 2021",
    description: "Luksusowa limuzyna, benchmark branży – kosmiczny zasięg & osiągi.",
    image: "https://cdn.motor1.com/images/mgl/P33NqL/s3/2022-tesla-model-s.jpg",
    price: "od 389 000 zł",
    saving: "oszczędzasz: do 70 000 zł",
    features: ["Zasięg 652 km", "0‑100 km/h 3,2 s", "Autopilot", "15” ekran"]
  },
  {
    model: "Tesla Model X 2020",
    description: "7‑miejscowy SUV z unikalnymi drzwiami Falcon Wings i ogromnym bagażnikiem.",
    image: "https://cdn.motor1.com/images/mgl/mr2BP/s3/2021-tesla-model-x-refresh.jpg",
    price: "od 410 000 zł",
    saving: "oszczędzasz: do 75 000 zł",
    features: ["Zasięg 580 km", "0‑100 km/h 3,9 s", "AWD", "Falcon Wings"]
  },
  {
    model: "Ford F‑150 Lightning 2023",
    description: "Pierwszy w pełni elektryczny pick‑up bestsellera segmentu – 11 kW power‑bank!",
    image: "https://cdn.motor1.com/images/mgl/lx6wj/s3/2022-ford-f-150-lightning.jpg",
    price: "od 299 000 zł",
    saving: "oszczędzasz: do 55 000 zł",
    features: ["Zasięg 515 km", "ProPower Onboard", "Frunk 400 l", "BlueCruise"]
  },
  {
    model: "Rivian R1T 2022",
    description: "Adventure pickup z czterema silnikami. Genialne prowadzenie i 835 KM.",
    image: "https://www.motortrend.com/uploads/sites/5/2021/12/2022-Rivian-R1T-front-three-quarter-2.jpg",
    price: "od 349 000 zł",
    saving: "oszczędzasz: do 60 000 zł",
    features: ["Zasięg 505 km", "0‑100 km/h 3,0 s", "4‑silnikowy AWD", "Sprzęt campingowy"]
  },
  {
    model: "Rivian R1S 2023",
    description: "7‑osobowy SUV na tej samej platformie co R1T. Luksus & off‑road w jednym.",
    image: "https://cdn.motor1.com/images/mgl/0ANZQ/s3/rivian-r1s.jpg",
    price: "od 359 000 zł",
    saving: "oszczędzasz: do 62 000 zł",
    features: ["Zasięg 510 km", "3 s do 100 km/h", "Adjust. zawieszenie", "Gear Tunnel"]
  },
  {
    model: "Lucid Air Pure 2023",
    description: "Limuzyna z Kalifornii z rekordowym zasięgiem i ultraszybkim ładowaniem 300 kW.",
    image: "https://cdn.motor1.com/images/mgl/yxvWE/s3/lucid-air-pure.jpg",
    price: "od 439 000 zł",
    saving: "oszczędzasz: do 80 000 zł",
    features: ["Zasięg 725 km", "Ładow. 300 kW", "0‑100 km/h 4,0 s", "Glass Canopy"]
  },
  {
    model: "Cadillac Lyriq 2023",
    description: "Elegancki, cichy i świetnie wykończony crossover klasy premium.",
    image: "https://cdn.motor1.com/images/mgl/qk8K6/s3/cadillac-lyriq.jpg",
    price: "od 289 000 zł",
    saving: "oszczędzasz: do 48 000 zł",
    features: ["Zasięg 502 km", "Ultium 80 kWh", "AKG Audio 19 głośników", "SuperCruise"]
  }
];

export default function TopElectricPage() {
  return (
    <>
      <Head>
        <title>TOP 15 samochodów elektrycznych z USA – import do Polski</title>
        <meta
          name="description"
          content="Zobacz 15 najchętniej sprowadzanych elektryków z USA. Realne ceny po imporcie do Polski, najlepsze zasięgi i pełna obsługa „pod klucz”. Zamów bezpłatną wycenę!"
        />
      </Head>

      {/* HERO */}
      <div className="bg-primary text-white py-20">
        <div className="container-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl leading-tight">
            Samochody elektryczne z USA → Polska
          </h1>
          <p className="text-xl max-w-3xl">
            Importujemy najnowsze Tesle, Riviany, Fordy Lightning i wiele innych. Zyskaj nawet 25 % w stosunku do cen europejskich i ciesz się większym zasięgiem.
          </p>
        </div>
      </div>

      {/* LISTA MODELI */}
      <section className="section">
        <div className="container-content">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" id="top-elektrykow">
            TOP 15 modeli EV do importu
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Wybrane przez naszych klientów. Wiesz, czego szukasz? Znajdziemy to auto dla Ciebie.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {electricCars.map((car, idx) => (
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
        </div>
      </section>

      {/* BENEFITY */}
      <section className="section-alt py-16">
        <div className="container-content grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6">Dlaczego właśnie import z USA?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="p-2 bg-primary/10 rounded-full mr-4 mt-1"><DollarSign className="h-6 w-6 text-accent" /></span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Cena &lt; Europa</h3>
                  <p className="text-muted-foreground text-sm">Średnio o 20–25% taniej niż w polskich salonach – mimo transportu i podatków.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="p-2 bg-primary/10 rounded-full mr-4 mt-1"><Zap className="h-6 w-6 text-accent" /></span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Nowości szybciej</h3>
                  <p className="text-muted-foreground text-sm">USA otrzymuje premiery wcześniej – sprowadzamy wersje niedostępne w Europie.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="p-2 bg-primary/10 rounded-full mr-4 mt-1"><Battery className="h-6 w-6 text-accent" /></span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Większy zasięg</h3>
                  <p className="text-muted-foreground text-sm">Wersje US mają często większe baterie i mocniejsze ładowarki pokładowe – realnie dalej zajedziesz.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="p-2 bg-primary/10 rounded-full mr-4 mt-1"><Leaf className="h-6 w-6 text-accent" /></span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Zero emisyjności</h3>
                  <p className="text-muted-foreground text-sm">Jedziesz bezemisyjnie i zyskujesz darmowe parkowanie, bus‑pasy oraz inne miejskie benefity.</p>
                </div>
              </div>
            </div>
            <Link href="/kontakt" className="btn-primary mt-8 inline-flex items-center">
              Skontaktuj się z nami <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video relative">
              <Image
                src="https://www.motortrend.com/uploads/sites/5/2021/02/2021-Tesla-Model-3-vs-2021-Ford-Mustang-Mach-E-2.jpg"
                alt="Porównanie Tesla Model 3 vs Ford Mustang Mach‑E"
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
            Gotowy na własny samochód elektryczny z USA?
          </h2>
          <p className="text-xl mb-8">
            Nasi eksperci przeprowadzą Cię przez cały proces – od wyszukania pojazdu po rejestrację w Polsce.
          </p>
          <Link href="/kontakt" className="btn-accent inline-flex items-center">
            Rozpocznij import <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
