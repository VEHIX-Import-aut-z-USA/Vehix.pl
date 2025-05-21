"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Bezpłatna konsultacja z ekspertem",
    description:
      "Poznajemy Twoje potrzeby, budżet i oczekiwania. Dobieramy modele dopasowane do stylu życia i planu finansowego. Już na tym etapie znasz koszty — bez niespodzianek.",
    image: "/images/vehix/konsultacja.png",
    duration: "1–2 dni",
  },
  {
    title: "Wyszukiwanie auta na aukcjach w USA",
    description:
      "Szukamy tylko sprawdzonych ofert z historią (CARFAX, AutoCheck). Doradzamy technicznie i finansowo. Gdy pojawi się idealne auto — natychmiast informujemy.",
    image: "/images/vehix/wyszukiwanie.jpg",
    duration: "3–7 dni",
  },
  {
    title: "Zakup i bezpieczny transport do Polski",
    description:
      "Kupujemy auto w Twoim imieniu, zabezpieczamy i wysyłamy do Polski. Na każdym etapie (licytacja, załadunek) dostajesz powiadomienie.",
    image: "/images/vehix/transport.jpg",
    duration: "4–6 tygodni",
  },
  {
    title: "Odprawa celna, akcyza i formalności",
    description:
      "Zajmujemy się cłem, akcyzą, tłumaczeniami, badaniami. Informujemy o każdej zmianie statusu. Ty masz spokój — my działamy.",
    image: "/images/vehix/odprawa.jpg",
    duration: "1–2 tygodnie",
  },
  {
    title: "Przygotowanie techniczne w serwisie VEHIX",
    description:
      "Twój samochód trafia do nas na przegląd i przygotowanie do przepisów UE. Informujemy, co wymaga poprawy. Ty zatwierdzasz — my naprawiamy.",
    image: "/images/vehix/serwis.jpg",
    duration: "1–2 tygodnie",
  },
  {
    title: "Rejestracja i dostawa pod Twój dom",
    description:
      "Finalizujemy wszystko. Auto trafia pod Twój adres — gotowe do jazdy, z dokumentami i kluczykami. Powiadomimy Cię, gdy wyruszy.",
    image: "/images/vehix/przekazanie.jpg",
    duration: "3–5 dni",
  },
];

export default function ImportProcessPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <header className="bg-primary text-white py-12 md:py-14">
        <div className="container-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Jak to działa? — Import auta z USA krok po kroku
          </h1>
          <p className="text-xl max-w-3xl mb-2">
            To naprawdę proste. Sprowadzimy Twoje wymarzone auto z USA — bez
            stresu, z pełną przejrzystością i opieką na każdym etapie.
          </p>
        </div>
      </header>

      {/* Intro CTA */}
      <section className="bg-muted/80 py-10 md:py-12 border-y border-muted">
        <div className="container-content grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proces importu auta z USA?
              <br />
              <span className="text-accent">
                My robimy wszystko — Ty odbierasz kluczyki.
              </span>
            </h2>
            <p className="text-muted-foreground mb-4">
              Nie musisz znać się na aukcjach ani przepisach. Powiedz tylko,
              jakie auto chcesz, a my zajmiemy się resztą — od zakupu po
              rejestrację.
            </p>
            <Link
              href="#step-0"
              className="inline-block bg-accent text-white font-semibold px-6 py-3 rounded-full hover:bg-accent/90 transition"
              aria-label="Zobacz każdy krok procesu importu auta z USA"
            >
              Zobacz każdy krok procesu →
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/vehix/client-happy.jpg"
              alt="Zadowolony klient VEHIX odbiera auto"
              title="VEHIX – Import auta z USA bez stresu"
              width={800}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Etapy */}
      <section className="section pt-12 md:pt-14 pb-20">
        <div className="container-content">
          <SectionHeading
            title="Co dokładnie robimy — i kiedy?"
            subtitle="Zobacz każdy etap. Import auta nie musi być stresujący, gdy robi to VEHIX."
            centered
          />

          <div className="flex flex-wrap gap-4 justify-center mb-10">
            {steps.map((step, index) => (
              <a
                key={index}
                href={`#step-${index}`}
                className="text-sm font-medium text-accent hover:underline"
              >
                {index + 1}. {step.title}
              </a>
            ))}
          </div>

          <div className="space-y-16 mt-12">
            {steps.map((step, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });

              return (
                <div key={index} id={`step-${index}`} ref={ref}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`order-2 ${
                        index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="bg-muted rounded-lg overflow-hidden shadow-lg">
                        <div className="aspect-video relative">
                          <Image
                            src={step.image}
                            alt={`Import auta USA - ${step.title}`}
                            title={`Etap ${index + 1}: ${step.title}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className={`order-1 ${
                        index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="bg-white dark:bg-primary-dark rounded-lg shadow-md p-6 md:p-8 relative">
                        <div className="absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                          {index + 1}
                        </div>
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                          <p className="text-accent font-medium">
                            Czas trwania: {step.duration}
                          </p>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {step.description}
                        </p>
                        <Link
                          href="/kontakt"
                          className="mt-4 inline-block text-accent font-semibold hover:underline"
                          aria-label={`Zapytaj o wycenę dla etapu ${index + 1}`}
                        >
                          Chcę poznać wycenę tego etapu →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
