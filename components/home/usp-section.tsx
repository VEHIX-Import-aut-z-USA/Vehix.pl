"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShieldCheck, Truck, DollarSign, UserCheck, Wrench } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Samochód pod klucz",
    description: "Od zakupu do rejestracji – wszystko robimy za Ciebie. Ty wybierasz, my działamy.",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: "Zero ukrytych kosztów",
    description: "Z góry znasz wszystkie koszty – żadnych niespodzianek po drodze.",
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Pełna przejrzystość",
    description: "Śledzisz każdy etap – zdjęcia, transport, status napraw. Bez niedomówień.",
  },
  {
    icon: <UserCheck className="h-10 w-10 text-primary" />,
    title: "Osobista odpowiedzialność",
    description: "Jeden dedykowany opiekun prowadzi Twój import od A do Z. Bez infolinii.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: "Opieka po zakupie",
    description: "Nasz serwis BODY SHOP doradza i pomaga po odbiorze auta – realne wsparcie.",
  },
  {
    icon: (
      <svg
        className="h-10 w-10 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
      </svg>
    ),
    title: "Powiadomienia na każdym etapie",
    description:
   "Zanim zdążysz zapytać – my już wysyłamy powiadomienie. Aukcja, transport, odprawa, dostawa – wszystko trafia na Twój telefon.",
  },
];

const UspSection = () => {
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
    <section className="section-alt" ref={ref}>
      <div className="container-content">
        <SectionHeading
          title="Z nami sprowadzisz auto z USA bez ryzyka"
          subtitle="85% klientów trafia do nas z polecenia – bo oferujemy więcej niż tylko import. Sprawdź, co nas wyróżnia:"
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-primary-dark rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-red-100 dark:bg-white/10 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/proces-importu"
            className="btn-primary text-base font-semibold py-3 px-6 shadow-md hover:shadow-lg transition"
          >
            Zobacz jak to działa →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UspSection;
