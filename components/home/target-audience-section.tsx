"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { Gauge, DollarSign, Briefcase, Leaf, Users } from "lucide-react";

const audiences = [
  {
    icon: <Users className="h-12 w-12 text-accent" />,
    title: "Auto rodzinne lub codzienne do 100 tys. zł?",
    description:
      "Sprowadzamy najpopularniejsze modele – Pacifica, Camry, Fusion, Grand Cherokee. Bezpieczne, oszczędne i bogato wyposażone. Dla rodziny, pracy i codziennego komfortu.",
    cta: "Zobacz 5 najczęściej wybieranych modeli",
    link: "/oferta/top5",
    image: "https://cdn.motor1.com/images/mgl/O99Om/s3/2021-toyota-camry-xse-hybrid.jpg",
  },
  {
    icon: <Gauge className="h-12 w-12 text-accent" />,
    title: "Muscle car, Mustang lub V8 z USA?",
    description:
      "Sprowadzimy auto z USA dokładnie takie, o jakim marzysz. Mustang, Camaro, Charger – z historią i bez ryzyka. Klasyka amerykańskiej motoryzacji w idealnym stanie, gotowa do rejestracji.",
    cta: "Zobacz popularne modele sportowe",
    link: "/oferta/muscle-cars",
    image: "https://wallup.net/wp-content/uploads/2016/01/268717-Ford_Mustang_GT_Apollo_Edition-car-muscle_cars.jpg",
  },
  {
    icon: <DollarSign className="h-12 w-12 text-accent" />,
    title: "Tanie auto z USA – nawet 30% taniej?",
    description:
      "Amerykański rynek oferuje samochody w lepszym stanie, z niższym przebiegiem i bogatszym wyposażeniem niż europejskie odpowiedniki. Pokażemy Ci, jak opłaca się sprowadzić auto z USA.",
    cta: "Sprawdź opłacalność importu",
    link: "/oferta/suv-pickup",
    image: "https://media.ed.edmunds-media.com/jeep/grand-cherokee-l/2022/oem/2022_jeep_grand-cherokee-l_4dr-suv_limited_fq_oem_1_1280.jpg",
  },
  {
    icon: <Briefcase className="h-12 w-12 text-accent" />,
    title: "Auto z USA na firmę z pełną fakturą VAT?",
    description:
      "Sprowadzamy auta premium na firmę – z leasingiem, pełną fakturą 23% i obsługą księgową. Cadillac, Lincoln, RAM? Doradzimy i zajmiemy się wszystkim za Ciebie.",
    cta: "Oferta dla firm",
    link: "/oferta/luksusowe",
    image: "https://autodiscoveries.com/wp-content/uploads/2022/07/2022-Cadillac-Escalade-Long-New-Luxury-SUV-By-Larte-Design-scaled.jpg",
  },
  {
    icon: <Leaf className="h-12 w-12 text-accent" />,
    title: "Tesla lub elektryk z USA szybciej niż w Europie?",
    description:
      "Sprowadzamy nowoczesne auta elektryczne i hybrydowe z USA. Tesla Model Y, Ford Mach-E, Rivian – w lepszej wersji i dostępności niż w Europie. Zyskaj przewagę technologiczną.",
    cta: "Sprawdź modele EV i hybrydowe",
    link: "/oferta/elektryczne",
    image: "https://i.iheart.com/v3/re/new_assets/5a6b8a3c3aac127b85cf4cf6",
  },
];

const TargetAudienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="section" ref={ref}>
      <div className="container-content">
        <SectionHeading
          title="Sprowadzamy amerykańskie auta dla różnych potrzeb"
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`order-2 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="bg-muted rounded-lg overflow-hidden shadow-lg">
                  <div
                    className="aspect-video bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${audience.image})`,
                    }}
                  />
                </div>
              </div>

              <div
                className={`order-1 ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    {audience.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{audience.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {audience.description}
                </p>
                <Link href={audience.link} className="btn-primary">
                  {audience.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
