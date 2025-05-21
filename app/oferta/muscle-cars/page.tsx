"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { Car, ChevronRight, DollarSign, Award, Gauge } from "lucide-react";

const muscleCars = [
  {
    model: "Ford Mustang GT 5.0 V8 2023",
    description: "Nowy Mustang GT z silnikiem 5.0 V8, 450 KM, Performance Pack, adaptacyjne zawieszenie, aktywny wydech.",
    image: "https://cdn.motor1.com/images/mgl/oZlJ9/s3/2024-ford-mustang-gt.jpg",
    price: "od 199 000 zł",
    saving: "oszczędzasz: do 65 000 zł",
    features: ["450 KM", "Automat / Manual", "Aktywny wydech", "Line Lock"],
  },
  {
    model: "Dodge Challenger R/T Scat Pack 2023",
    description: "Ikona muscle car: V8 HEMI 6.4, Launch Control, szeroka buda Widebody, świetne prowadzenie.",
    image: "https://cdn.motor1.com/images/mgl/R9pZo/s3/2023-dodge-challenger-scat-pack-widebody.jpg",
    price: "od 229 000 zł",
    saving: "oszczędzasz: do 58 000 zł",
    features: ["485 KM", "HEMI V8 6.4", "Widebody", "Launch Control"],
  },
  {
    model: "Chevrolet Camaro SS 2022",
    description: "Kultowy Camaro SS z silnikiem V8 6.2, 0–100 km/h w 4 sekundy, Brembo brakes, sportowe fotele.",
    image: "https://cdn.motor1.com/images/mgl/9E99Z/s3/2022-chevrolet-camaro-ss.jpg",
    price: "od 209 000 zł",
    saving: "oszczędzasz: do 47 000 zł",
    features: ["455 KM", "0-100 km/h 4,0s", "Brembo brakes", "HUD"],
  },
  {
    model: "Dodge Charger SRT Hellcat 2022",
    description: "Najmocniejszy sedan świata – 717 KM, V8 Supercharged, 4 drzwi, luksus i bestialstwo w jednym.",
    image: "https://cdn.motor1.com/images/mgl/qwKZW/s3/2022-dodge-charger-srt-hellcat.jpg",
    price: "od 259 000 zł",
    saving: "oszczędzasz: do 61 000 zł",
    features: ["717 KM", "V8 Supercharged", "Launch Control", "Luksusowe wnętrze"],
  },
  {
    model: "Chevrolet Corvette C8 Stingray 2022",
    description: "Amerykański supercar – silnik centralny, 495 KM, jazda i styl z innej ligi.",
    image: "https://cdn.motor1.com/images/mgl/yWXwA/s3/2022-chevrolet-corvette-stingray.jpg",
    price: "od 389 000 zł",
    saving: "oszczędzasz: do 80 000 zł",
    features: ["495 KM", "0-100 km/h 2,9s", "Centralny silnik", "Zdejmowany dach"],
  },
  {
    model: "Ford Shelby GT500 2022",
    description: "Najmocniejszy seryjny Ford – 5.2 V8 Supercharged, karbonowe dodatki, wyścigowe zawieszenie.",
    image: "https://cdn.motor1.com/images/mgl/zxJNv/s3/2022-ford-mustang-shelby-gt500.jpg",
    price: "od 419 000 zł",
    saving: "oszczędzasz: do 99 000 zł",
    features: ["760 KM", "Karbon", "Launch Control", "Adaptive Suspension"],
  },
  {
    model: "Dodge Challenger SRT Hellcat 2023",
    description: "Słynny Hellcat: V8 6.2 Supercharged, ponad 700 KM, klasyka muscle carów.",
    image: "https://cdn.motor1.com/images/mgl/2gMyo/s3/2023-dodge-challenger-srt-hellcat.jpg",
    price: "od 299 000 zł",
    saving: "oszczędzasz: do 68 000 zł",
    features: ["717 KM", "V8 6.2 Supercharged", "Widebody", "Launch Assist"],
  },
  {
    model: "Ford Mustang Mach 1 2022",
    description: "Limitowana edycja – V8 5.0, podwozie z GT350, idealny balans na tor i ulicę.",
    image: "https://cdn.motor1.com/images/mgl/WAAyA/s3/2021-ford-mustang-mach-1.jpg",
    price: "od 239 000 zł",
    saving: "oszczędzasz: do 49 000 zł",
    features: ["460 KM", "Manual", "Performance Pack", "Active Exhaust"],
  },
  {
    model: "Chevrolet Camaro ZL1 2022",
    description: "Topowa wersja – V8 6.2 Supercharged, 650 KM, torowe zawieszenie i karbonowy pakiet.",
    image: "https://cdn.motor1.com/images/mgl/8zyL4/s3/2022-chevrolet-camaro-zl1.jpg",
    price: "od 329 000 zł",
    saving: "oszczędzasz: do 75 000 zł",
    features: ["650 KM", "Magnetic Ride", "Recaro", "Launch Control"],
  },
  {
    model: "Dodge Charger R/T 2023",
    description: "Muscle car dla rodziny – V8 HEMI 5.7, komfortowe wnętrze, agresywny wygląd.",
    image: "https://cdn.motor1.com/images/mgl/6znVg/s3/2023-dodge-charger-rt.jpg",
    price: "od 219 000 zł",
    saving: "oszczędzasz: do 41 000 zł",
    features: ["375 KM", "HEMI V8", "Komfort", "Uconnect 8.4"],
  },
  {
    model: "Chevrolet Corvette Z06 2023",
    description: "Najnowsza Z06, 670 KM wolnossący V8, wyczynowy pakiet, prawdziwa bestia na tor.",
    image: "https://cdn.motor1.com/images/mgl/Mb2gX/s3/2023-chevrolet-corvette-z06.jpg",
    price: "od 499 000 zł",
    saving: "oszczędzasz: do 110 000 zł",
    features: ["670 KM", "LT6 5.5 V8", "Flat Plane Crank", "Z07 Performance"],
  },
  {
    model: "Dodge Challenger R/T 2021",
    description: "Klasyczny muscle car z duszą retro: HEMI V8, klasyczne zegary, oldschoolowy charakter.",
    image: "https://cdn.motor1.com/images/mgl/G2K8r/s3/2021-dodge-challenger-rt.jpg",
    price: "od 199 000 zł",
    saving: "oszczędzasz: do 35 000 zł",
    features: ["375 KM", "HEMI V8", "Retro Design", "Performance Brakes"],
  },
  {
    model: "Ford Mustang Bullitt 2020",
    description: "Limitowana edycja inspirowana legendą kina. V8 5.0, zielony lakier, białe tarcze.",
    image: "https://cdn.motor1.com/images/mgl/9WJAm/s3/2020-ford-mustang-bullitt.jpg",
    price: "od 215 000 zł",
    saving: "oszczędzasz: do 39 000 zł",
    features: ["460 KM", "Manual", "Bullitt Edition", "White Dials"],
  },
  {
    model: "Chevrolet Camaro LT1 2022",
    description: "Przystępny muscle car z mocnym V8 i klasyczną linią. Świetny stosunek ceny do mocy.",
    image: "https://cdn.motor1.com/images/mgl/LJ9a4/s3/2022-chevrolet-camaro-lt1.jpg",
    price: "od 179 000 zł",
    saving: "oszczędzasz: do 29 000 zł",
    features: ["455 KM", "V8 6.2", "Manual/Automat", "Apple CarPlay"],
  },
  {
    model: "Dodge Challenger GT AWD 2022",
    description: "Muscle car z napędem AWD – jedyny taki, całoroczna frajda, świetny grip w każdych warunkach.",
    image: "https://cdn.motor1.com/images/mgl/nkYgz/s3/2022-dodge-challenger-gt-awd.jpg",
    price: "od 189 000 zł",
    saving: "oszczędzasz: do 27 000 zł",
    features: ["305 KM", "AWD", "8-biegowy automat", "Performance Hood"],
  },
  {
    model: "Ford Mustang EcoBoost 2023",
    description: "Turbo 2.3 o mocy 317 KM, świetny kompromis między osiągami a kosztami użytkowania.",
    image: "https://cdn.motor1.com/images/mgl/pwYmE/s3/2023-ford-mustang-ecoboost.jpg",
    price: "od 159 000 zł",
    saving: "oszczędzasz: do 23 000 zł",
    features: ["317 KM", "Turbo", "10-biegowy automat", "Apple CarPlay"],
  }
];

export default function MuscleCarPage() {
  return (
    <>
      <Head>
        <title>Muscle Cars z USA – TOP 16 modeli do importu | VEHIX</title>
        <meta
          name="description"
          content="Mustang, Camaro, Challenger, Corvette, Shelby, Charger i inne muscle cars z USA. Kompleksowa obsługa importu do Polski – oszczędzasz do 110 000 zł!"
        />
      </Head>
      {/* HERO */}
      <div className="bg-primary text-white py-20">
        <div className="container-content text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Muscle Cars i sportowe legendy z USA – Import do Polski
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Sprowadzamy na zamówienie Forda Mustanga, Dodge'a Challengera, Camaro, Corvettę, Shelby oraz unikatowe limitowane edycje – zawsze z gwarancją „pod klucz”.
          </p>
        </div>
      </div>
      {/* LISTA MODELI */}
      <section className="section">
        <div className="container-content">
          <SectionHeading
            title="TOP 16 muscle cars z rynku USA"
            subtitle="Najmocniejsze, najciekawsze i najbardziej kultowe modele dostępne od ręki. Jeśli chcesz coś innego – napisz, znajdziemy każde auto!"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {muscleCars.map((car, idx) => (
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
                  {car.saving && (
                    <div className="text-green-600 font-medium mb-5">{car.saving}</div>
                  )}
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
            <h2 className="text-2xl font-bold mb-6">Dlaczego muscle car z USA?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="p-2 bg-primary/10 rounded-full mr-4 mt-1">
                  <DollarSign className="h-6 w-6 text-accent" />
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Najlepsza cena na rynku</h3>
                  <p className="text-muted-foreground text-sm">
                    Sprowadzisz muscle cara z USA taniej niż z Europy – nawet po wszystkich opłatach.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="p-2 bg-primary/10 rounded-full mr-4 mt-1">
                  <Award className="h-6 w-6 text-accent" />
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Unikatowe wersje i lepsze wyposażenie</h3>
                  <p className="text-muted-foreground text-sm">
                    USA to rynek limitowanych edycji i bogatych pakietów – często niedostępnych w Europie.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="p-2 bg-primary/10 rounded-full mr-4 mt-1">
                  <Gauge className="h-6 w-6 text-accent" />
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Maksimum mocy i emocji</h3>
                  <p className="text-muted-foreground text-sm">
                    Muscle cars to bezkompromisowa moc i dźwięk – żaden elektryk nie daje takich wrażeń!
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="p-2 bg-primary/10 rounded-full mr-4 mt-1">
                  <Car className="h-6 w-6 text-accent" />
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Gwarancja oryginalności</h3>
                  <p className="text-muted-foreground text-sm">
                    Importując muscle cara z USA, masz pewność autentyczności, historii i dostępności części.
                  </p>
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
                src="https://www.motortrend.com/uploads/sites/5/2020/06/2020-Ford-Mustang-Shelby-GT500-vs-Chevrolet-Camaro-ZL1-vs-Dodge-Challenger-SRT-Hellcat-Redeye-1.jpg"
                alt="Porównanie muscle cars"
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
            Marzysz o własnym muscle carze?
          </h2>
          <p className="text-xl mb-8">
            Nasi eksperci znajdą dla Ciebie unikalny egzemplarz, załatwią transport, cło i rejestrację. Zacznij dziś!
          </p>
          <Link href="/kontakt" className="btn-accent inline-flex items-center text-lg">
            Zacznij import <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
