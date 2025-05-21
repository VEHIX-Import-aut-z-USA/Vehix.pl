"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const realizations = [
  {
    image: "/images/realizacje/mustang.jpg",
    alt: "Ford Mustang GT 5.0",
    model: "Ford Mustang GT 5.0 (2021)",
    details: "Czas realizacji: 11 tygodni • Oszczędność: 74 000 PLN",
    quote: "„Dzięki VEHIX spełniłem marzenie! Wszystko dopięte na ostatni guzik.” – Marek z Warszawy",
  },
  {
    image: "/images/realizacje/tesla.jpg",
    alt: "Tesla Model Y",
    model: "Tesla Model Y Long Range (2022)",
    details: "Czas realizacji: 10 tygodni • Oszczędność: 62 000 PLN",
    quote: "„Zero stresu. Auto przyjechało gotowe do jazdy!” – Anna z Krakowa",
  },
  {
    image: "/images/realizacje/ram.jpg",
    alt: "RAM 1500",
    model: "RAM 1500 Laramie (2020)",
    details: "Czas realizacji: 12 tygodni • Oszczędność: 58 000 PLN",
    quote: "„Nigdy nie sądziłem, że będzie tak prosto.” – Tomasz z Poznania",
  },
];

export default function RealizacjePage() {
  return (
    <div className="relative z-0 scroll-pt-20 pt-[72px] bg-white">
      <header className="bg-primary text-white py-12 md:py-14">
        <div className="container-content text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nasze realizacje</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Zobacz prawdziwe auta sprowadzone przez VEHIX. Z konkretną oszczędnością i opinią klienta.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container-content">
          <SectionHeading
            title="Galeria sprowadzonych aut"
            subtitle="Przedstawiamy wybrane realizacje z ostatnich miesięcy. Każde z tych aut to spełnione marzenie naszego klienta – i nasza duma."
            centered
          />

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 mt-20">
            {realizations.map((car, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="rounded-xl overflow-hidden shadow-lg bg-white flex flex-col"
              >
                <div className="relative aspect-video">
                  <Image
                    src={car.image}
                    alt={car.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-1">{car.model}</h3>
                  <p className="text-sm text-gray-600 mb-3">{car.details}</p>
                  <p className="text-sm italic text-muted-foreground flex-1">{car.quote}</p>
                  <Link
                    href="/kontakt"
                    className="btn-primary mt-4 text-center"
                  >
                    Zamów podobne auto
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
