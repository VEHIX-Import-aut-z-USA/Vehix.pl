"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedNumber from "@/components/ui/animated-number";
import { Car, Users, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: <Car className="h-10 w-10 text-accent" />,
    value: 500,
    label: "Sprowadzonych aut",
    suffix: "+",
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    value: 450,
    label: "Zadowolonych klientów",
    suffix: "+",
  },
  {
    icon: <Clock className="h-10 w-10 text-accent" />,
    value: 8,
    label: "Lat doświadczenia",
    suffix: "+",
  },
  {
    icon: <Award className="h-10 w-10 text-accent" />,
    value: 100,
    label: "Procent satysfakcji",
    suffix: "%",
  },
];

const StatsSection = () => {
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
    <section className="py-16 bg-primary text-white">
      <div className="container-content">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-white/10 rounded-full">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-white"
                />
              </div>
              <p className="text-lg text-gray-200">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;