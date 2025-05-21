"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  MessageSquare,
  Search,
  Ship,
  FileCheck,
  Settings,
  Car,
} from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="h-8 w-8 text-white" />,
    title: "Krok 1 – Konsultacja przed importem auta z USA",
    description:
      "Ustalamy Twoje potrzeby, budżet i preferencje. Doradzamy, co najbardziej się opłaca.",
  },
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: "Krok 2 – Wyszukiwanie i selekcja auta z USA",
    description:
      "Wysyłamy najlepsze oferty z Copart, IAAI i sieci dealerów. Pomagamy wybrać najkorzystniejszą opcję.",
  },
  {
    icon: <Ship className="h-8 w-8 text-white" />,
    title: "Krok 3 – Zakup i transport auta z USA do Polski",
    description:
      "Zajmujemy się zakupem, płatnością, ubezpieczeniem i bezpiecznym transportem morskim.",
  },
  {
    icon: <FileCheck className="h-8 w-8 text-white" />,
    title: "Krok 4 – Odprawa celna i homologacja samochodu z USA",
    description:
      "Załatwiamy cło, VAT, akcyzę i dokumentację. Wszystkie formalności przejmujemy na siebie.",
  },
  {
    icon: <Settings className="h-8 w-8 text-white" />,
    title: "Krok 5 – Naprawa i przygotowanie techniczne auta z USA",
    description:
      "Nasz BODY SHOP przywraca pojazd do idealnego stanu — zgodnie z kosztorysem i Twoim życzeniem.",
  },
  {
    icon: <Car className="h-8 w-8 text-white" />,
    title: "Krok 6 – Rejestracja samochodu z USA i przekazanie auta",
    description:
      "Zamykamy cały proces. Auto jest zarejestrowane i gotowe do jazdy. Przekazujemy je z dokumentami i kluczykami.",
  },
];

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="section-alt" id="proces-importu" ref={ref}>
      <div className="container-content">
        <SectionHeading
          title="Jak wygląda import auta z USA krok po kroku?"
          subtitle="Zobacz cały proces sprowadzenia samochodu z USA – od pierwszej rozmowy do zarejestrowanego auta pod Twoim domem."
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-primary-dark rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary p-4 flex items-center">
                <div className="bg-accent rounded-full p-3 mr-3">
                  {step.icon}
                </div>
                <span className="text-white font-bold text-lg">
                  Krok {index + 1}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-lg font-semibold mb-4">
            Gotowy, żeby sprowadzić swój samochód z USA?
          </p>
          <Link
            href="/kontakt"
            className="btn-primary px-6 py-3 text-lg font-bold"
          >
            Umów darmową konsultację →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
