"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Car, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section aria-labelledby="hero-heading" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <h1 id="hero-heading" className="sr-only">
        Import aut z USA – VEHIX
      </h1>

      {/* Background Image + Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="container-content relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5 w-full max-w-xl text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Twoje wymarzone auto z USA
            </h2>

            <ul className="space-y-2">
              <li className="text-2xl md:text-3xl font-bold">
                ✓ do 27 000 zł taniej niż w Polsce
              </li>
              <li className="text-[#FF3366] text-xl md:text-2xl font-semibold">
                ✓ z dostawą nawet w 45 dni – gwarantujemy
              </li>
            </ul>

            <p className="text-lg md:text-xl font-medium">
              Bez stresu, ukrytych kosztów i niespodzianek.
            </p>

            <p className="text-base md:text-lg text-white/90 leading-snug">
              Importujemy auta z USA kompleksowo – od wyboru modelu po rejestrację.  
              Działamy szybko, uczciwie i bez pośredników.
            </p>

            <p className="text-base md:text-lg font-semibold">
              Zostaw kontakt – oddzwonimy w 30 minut z wyceną Twojego importu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full md:w-auto">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/oferta"
                  aria-label="Zobacz ofertę importu aut"
                  className="btn-primary w-full sm:w-auto flex items-center justify-center"
                >
                  <Car className="mr-2 h-5 w-5" />
                  Sprawdź naszą ofertę
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/kontakt"
                  aria-label="Umów się na bezpłatną konsultację importu auta"
                  className="bg-white text-primary font-semibold px-6 py-3 rounded-md border border-primary hover:bg-primary hover:text-white transition w-full sm:w-auto flex items-center justify-center"
                >
                  <Phone className="inline mr-2 h-5 w-5" />
                  Bezpłatna konsultacja
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
