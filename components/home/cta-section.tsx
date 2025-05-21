"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, MessageSquare, ShieldCheck, Clock, Car } from "lucide-react";

const CtaSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-16 px-4 bg-gradient-to-r from-primary to-primary-dark text-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container-content max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Zrób pierwszy krok do swojego auta z USA
        </h2>

        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          Zamów darmową wycenę i dowiedz się, ile naprawdę kosztuje import Twojego wymarzonego samochodu — bez ryzyka i bez zobowiązań.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Link
            href="/kontakt"
            className="flex items-center gap-2 bg-red-700 text-white border-2 border-red-700 hover:bg-white hover:text-red-700 px-6 py-3 rounded-lg shadow-md transition-all font-semibold"
          >
            <Car className="w-5 h-5" />
            Sprawdź naszą ofertę
          </Link>
          <Link
            href="/kontakt"
            className="flex items-center gap-2 border-2 border-primary-light text-white bg-white/10 hover:bg-white hover:text-primary px-6 py-3 rounded-lg shadow-md transition-all font-semibold"
          >
            <Phone className="w-5 h-5" />
            Bezpłatna konsultacja
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-5 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-green-400" />
            100% legalny import i gwarancja ceny
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-yellow-400" />
            Odpowiedź w 30 minut w godzinach 9–18
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
