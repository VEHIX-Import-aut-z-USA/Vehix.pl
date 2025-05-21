"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const luxuryCars = [
  {
    model: "Cadillac Escalade Sport Platinum 2023",
    description: "Król amerykańskich SUV-ów – 7 miejsc, 38ʺ zakrzywiony OLED i audio AKG 36-głośników.",
    image: "https://cdn.motor1.com/images/mgl/Nqxw4e/s3/2023-cadillac-escalade-v.jpg",
    price: "od 449 000 zł",
    saving: "oszczędzasz: do 120 000 zł",
    features: ["6.2 V8 420 KM", "Super Cruise Hands-Free", "Magnetic Ride 4.0", "OLED 38ʺ"],
  },
  {
    model: "Lincoln Navigator Black Label 2022",
    description: "Pełnowymiarowy luksus z kabiną inspirowaną jachtem. Masaż 30-pozycyjnych foteli w standardzie.",
    image: "https://cdn.motor1.com/images/mgl/ervkZ/s3/2022-lincoln-navigator.jpg",
    price: "od 429 000 zł",
    saving: "oszczędzasz: do 110 000 zł",
    features: ["3.5 V6 EcoBoost 450 KM", "Revel 28-głoś.", "Active Glide 2.0", "4×4"],
  },
  {
    model: "Cadillac CT5-V Blackwing 2023",
    description: "Super-sedan z manualem! 668 KM i 0-100 km/h w 3,4 s – bez kompromisów w komforcie.",
    image: "https://cdn.motor1.com/images/mgl/3Yy1X/s3/2022-cadillac-ct5-v-blackwing.jpg",
    price: "od 379 000 zł",
    saving: "oszczędzasz: do 90 000 zł",
    features: ["6.2 V8 Supercharged", "Manual 6-bieg", "Carbon Pack", "Magnetic Ride 4.0"],
  },
  {
    model: "Jeep Grand Wagoneer Series III 2023",
    description: "Nowy flagowy Jeep – 3 rzędy, skóra Palermo i pół tuzina ekranów.",
    image: "https://cdn.motor1.com/images/mgl/b4Z1R/s3/2022-jeep-grand-wagoneer.jpg",
    price: "od 439 000 zł",
    saving: "oszczędzasz: do 100 000 zł",
    features: ["6.4 V8 471 KM", "McIntosh 1375 W", "Night Vision", "Quadra-Lift"],
  },
  {
    model: "GMC Yukon Denali Ultimate 2023",
    description: "Amerykański odpowiednik Klasy G w rozmiarze XXL – drewno Paldao i audio Bose 18-głoś.",
    image: "https://cdn.motor1.com/images/mgl/ORXnn/s3/2023-gmc-yukon-denali-ultimate.jpg",
    price: "od 415 000 zł",
    saving: "oszczędzasz: do 95 000 zł",
    features: ["6.2 V8 10-AT", "Super Cruise", "Air Ride", "HUD"],
  },
  {
    model: "Lucid Air Grand Touring 2023",
    description: "Limuzyna z Kalifornii – rekordowy zasięg 830 km i ładowanie 300 kW.",
    image: "https://cdn.motor1.com/images/mgl/0ANj6/s3/2023-lucid-air-grand-touring-performance.jpg",
    price: "od 625 000 zł",
    saving: "oszczędzasz: do 140 000 zł",
    features: ["819 KM", "0-100 km/h 2,9 s", "DreamDrive Pro", "Glass Canopy"],
  },
  {
    model: "Tesla Model S Plaid 2022",
    description: "Najbardziej futurystyczna limuzyna planety – 1020 KM i 0-100 km/h w 2,1 s.",
    image: "https://cdn.motor1.com/images/mgl/3AAZ13/s3/tesla-model-s-plaid.jpg",
    price: "od 515 000 zł",
    saving: "oszczędzasz: do 130 000 zł",
    features: ["1020 KM Tri-Motor", "Autopilot FSD", "Ładow. 250 kW", "Yoke"],
  },
  {
    model: "Rivian R1S Quad-Motor 2023",
    description: "Luksusowy 7-miejscowy SUV EV z genialnym off-roadem i 835 KM.",
    image: "https://cdn.motor1.com/images/mgl/Qq6p6/s3/rivian-r1s.jpg",
    price: "od 489 000 zł",
    saving: "oszczędzasz: do 120 000 zł",
    features: ["835 KM AWD", "Zasięg 510 km", "Camp Mode", "Gear Tunnel"],
  },
  {
    model: "Chevrolet Corvette C8 Z06 2023",
    description: "Atmosferyczne 5.5 V8 670 KM – pierwszy mid-engine Corvette. Supercar w cenie GT.",
    image: "https://cdn.motor1.com/images/mgl/8x8kJ/s3/2023-chevrolet-corvette-z06.jpg",
    price: "od 469 000 zł",
    saving: "oszczędzasz: do 100 000 zł",
    features: ["670 KM", "Carbon Wheels", "MagRide4", "0-100 km/h 2,7 s"],
  },
  {
    model: "Ford F-150 Raptor R 2023",
    description: "Najbardziej ekstremalny pick-up – 700 KM z Shelby GT500 i zawieszenie FOX 3.1 Live Valve.",
    image: "https://cdn.motor1.com/images/mgl/KP1oJ/s3/2023-ford-f-150-raptor-r.jpg",
    price: "od 379 000 zł",
    saving: "oszczędzasz: do 90 000 zł",
    features: ["5.2 V8 700 KM", "FOX 3.1", "One-Pedal Trail", "33-wideo-kamera"],
  },
  {
    model: "BMW X7 xDrive40i (US) 2023",
    description: "Flagowy SUV BMW w amerykańskiej specyfikacji – więcej opcji w niższej cenie.",
    image: "https://cdn.motor1.com/images/mgl/6K9Mo6/s3/2023-bmw-x7.jpg",
    price: "od 359 000 zł",
    saving: "oszczędzasz: do 85 000 zł",
    features: ["3.0 I6 MHEV", "Executive Lounge", "iDrive 8", "Parking Assistant Pro"],
  },
  {
    model: "Mercedes-Benz S580 4MATIC (US) 2022",
    description: "Ikona luksusu z pakietem AMG Line i nagłośnieniem Burmester 4D.",
    image: "https://cdn.motor1.com/images/mgl/bRR7Q/s3/2021-mercedes-benz-s580-4matic.jpg",
    price: "od 519 000 zł",
    saving: "oszczędzasz: do 125 000 zł",
    features: ["4.0 V8 MHEV", "E-Active Body Control", "OLED MBUX 12.8ʺ", "Rear Steer 10°"],
  },
  {
    model: "Audi e-tron GT Prestige (US) 2022",
    description: "Gran Turismo na prąd z designem studia Porsche – emocje i komfort bez kompromisów.",
    image: "https://cdn.motor1.com/images/mgl/0xZpK/s3/2022-audi-e-tron-gt.jpg",
    price: "od 425 000 zł",
    saving: "oszczędzasz: do 95 000 zł",
    features: ["530 KM Boost", "LED Matrix HD", "Ładow. 270 kW", "Quattro"],
  },
  {
    model: "Porsche Taycan 4S (US) 2021",
    description: "Sportowy EV z niższą amerykańską ceną i opcją Performance Battery Plus.",
    image: "https://cdn.motor1.com/images/mgl/0ANjR/s3/porsche-taycan-4s.jpg",
    price: "od 465 000 zł",
    saving: "oszczędzasz: do 105 000 zł",
    features: ["530 KM Overboost", "Air Suspension", "Sport Chrono", "Ładow. 270 kW"],
  },
  {
    model: "Range Rover SE P530 (US) 2023",
    description: "Brytyjski arystokrata w US-spec – V8 BMW 530 KM i wersja 7-miejscowa.",
    image: "https://cdn.motor1.com/images/mgl/WoR0Oq/s3/2023-range-rover.jpg",
    price: "od 589 000 zł",
    saving: "oszczędzasz: do 140 000 zł",
    features: ["4.4 V8 TwinTurbo", "Dynamic Response Pro", "Meridian 3D", "All-Wheel Steer"],
  },
  {
    model: "Lexus LX 600 F-Sport (US) 2023",
    description: "Najnowsze LX na platformie GA-F – luksus off-road z T-Mark niezawodności.",
    image: "https://cdn.motor1.com/images/mgl/2gkG4/s3/2022-lexus-lx-600-f-sport.jpg",
    price: "od 499 000 zł",
    saving: "oszczędzasz: do 120 000 zł",
    features: ["3.5 V6 TwinTurbo", "F-Sport Handling", "Mark Levinson 25-gł.", "Crawl Control"],
  },
  {
    model: "Cadillac Lyriq AWD 2023",
    description: "Pierwszy elektryczny Cadillac – wegańska skóra, LED 9K i Super Cruise 2.0.",
    image: "https://cdn.motor1.com/images/mgl/7Qo9w/s3/cadillac-lyriq.jpg",
    price: "od 359 000 zł",
    saving: "oszczędzasz: do 85 000 zł",
    features: ["500 KM AWD", "Ultium 102 kWh", "Ładow. 190 kW", "AKG 19-gł."],
  },
  {
    model: "Tesla Model X Plaid 2022",
    description: "Najbardziej futurystyczny SUV z drzwiami Falcon Wing i 1020 KM.",
    image: "https://cdn.motor1.com/images/mgl/Qr2bo/s3/tesla-model-x-plaid.jpg",
    price: "od 539 000 zł",
    saving: "oszczędzasz: do 135 000 zł",
    features: ["1020 KM Tri-Motor", "Zasięg 560 km", "Full Self-Driving", "Falcon Wings"],
  },
];

export default function TopLuxuryPage() {
  return (
    <>
      <Head>
        <title>Luksusowe samochody z USA – TOP 18 modeli | VEHIX</title>
        <meta
          name="description"
          content="Luksusowe auta z USA: Escalade, Navigator, Mercedes, Lucid, Tesla, Range Rover i więcej. Kompleksowa obsługa importu do Polski – oszczędzasz nawet 140 000 zł!"
        />
      </Head>

      {/* HERO */}
      <div className="bg-primary text-white py-20">
        <div className="container-content text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Luksusowe samochody z USA – Import do Polski
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Sprowadzamy najbardziej prestiżowe modele z rynku amerykańskiego – tańsze, lepiej wyposażone, z gwarancją obsługi „pod klucz”.
          </p>
        </div>
      </div>

      {/* LISTA */}
      <section className="section">
        <div className="container-content">
          <SectionHeading
            title="TOP 18 luksusowych modeli z USA"
            subtitle="Prestiżowe SUV-y, limuzyny i EV prosto z amerykańskiego rynku – z kompleksowym importem „pod klucz” do Polski."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {luxuryCars.map((car, idx) => (
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

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="container-content max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
            Szukasz konkretnego modelu lub masz pytania?
          </h2>
          <p className="text-xl mb-8">
            Skontaktuj się z naszym ekspertem, przygotujemy indywidualną wycenę, pokażemy przykładowe egzemplarze i przeprowadzimy przez cały proces importu luksusowego auta z USA.
          </p>
          <Link href="/kontakt" className="btn-accent inline-flex items-center text-lg">
            Zapytaj o wycenę importu
          </Link>
        </div>
      </section>
    </>
  );
}
