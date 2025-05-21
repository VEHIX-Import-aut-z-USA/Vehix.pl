"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Marek Kowalski",
    role: "Entuzjasta amerykańskiej motoryzacji",
    image: "/opinie/marek.jpg",
    content:
      "Zawsze marzyłem o Mustangu, ale ceny w Polsce mnie zabijały. Z VEHIX wszystko poszło gładko – auto przyszło z USA dokładnie takie, jak chciałem. Gdyby nie oni, pewnie dalej bym tylko marzył. Teraz mam Mustanga GT w garażu – i banana na twarzy.",
    rating: 5,
  },
  {
    name: "Anna Nowak",
    role: "Pragmatyczna łowczyni okazji",
    image: "/opinie/anna.jpg",
    content:
      "Nie interesowały mnie auta po przejściach. VEHIX dokładnie mi wyjaśnił, co biorę, pokazał raporty i pomógł wszystko ogarnąć. SUV przyszedł bez niespodzianek, z pełną dokumentacją i oszczędnością ponad 30 000 zł. Polecam każdemu, kto liczy każdy grosz, ale nie chce ryzykować.",
    rating: 5,
  },
  {
    name: "Tomasz Wiśniewski",
    role: "Przedsiębiorca",
    image: "/opinie/tomasz.jpg",
    content:
      "Potrzebowałem luksusowego auta do firmy. VEHIX załatwił mi Cadillaca Escalade z pełną fakturą VAT. Obsługa jak w hotelu – krok po kroku, z opieką, bez stresu. A co najlepsze – oszczędziłem ponad 70 000 zł względem oferty w Polsce.",
    rating: 5,
  },
  {
    name: "Michał Zieliński",
    role: "Innowator i eco-entuzjasta",
    image: "/opinie/michal.jpg",
    content:
      "Chciałem Teslę, ale nie za europejską cenę. Dzięki VEHIX mam Model 3 Long Range, oszczędziłem 50 000 zł i dostałem wsparcie przy instalacji ładowarki. Wszystko online, prosto i transparentnie. Polecam każdemu, kto myśli nowocześnie.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="section" ref={ref}>
      <div className="container-content">
        <SectionHeading
          title="Co mówią o nas klienci?"
          subtitle="Nie wierz nam na słowo – posłuchaj klientów, którzy już odebrali swoje wymarzone auta z USA."
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white dark:bg-primary-dark rounded-lg shadow-lg p-8">
                    <div
                      className="flex flex-col md:flex-row items-center md:items-start gap-6"
                      itemScope
                      itemType="https://schema.org/Review"
                    >
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={`Zdjęcie ${testimonial.name}`}
                          width={128}
                          height={128}
                          className="rounded-full object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                          ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 italic mb-4" itemProp="reviewBody">
                          "{testimonial.content}"
                        </p>
                        <div itemProp="author" itemScope itemType="https://schema.org/Person">
                          <h4 className="font-bold text-lg" itemProp="name">{testimonial.name}</h4>
                          <p className="text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                        </div>
                        <meta itemProp="reviewRating" content="5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? "bg-accent" : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Przejdź do opinii ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white dark:bg-primary-dark rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-primary transition-colors"
            aria-label="Poprzednia opinia"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white dark:bg-primary-dark rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-primary transition-colors"
            aria-label="Następna opinia"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
