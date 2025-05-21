"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

const faqs = [
  {
    question: "Jak długo trwa cały proces importu samochodu z USA?",
    answer:
      "Średni czas realizacji to 8–12 tygodni. Transport morski trwa 4–6 tygodni, odprawa celna i przygotowanie techniczne 2–4 tygodnie. Transport lotniczy jest szybszy, ale droższy.",
  },
  {
    question: "Czy sprowadzacie samochody powypadkowe?",
    answer:
      "Tak, sprowadzamy pojazdy z kategorią Salvage lub Rebuilt. Dostarczamy pełną dokumentację, a naprawy wykonujemy w naszym BODY SHOPie.",
  },
  {
    question: "Jakie są całkowite koszty importu auta z USA?",
    answer:
      "Koszty zależą od ceny auta, transportu, cła, akcyzy i przygotowania technicznego. Sprawdź nasz kalkulator lub zapytaj o bezpłatną wycenę.",
  },
  {
    question: "Czy mogę sam wybrać auto z aukcji?",
    answer:
      "Tak! Możesz wskazać pojazd z Copart, IAAI lub innego źródła. Sprawdzimy historię i kupimy auto w Twoim imieniu.",
  },
  {
    question: "Jakie dokumenty otrzymam przy odbiorze auta?",
    answer:
      "Otrzymasz fakturę, tytuł własności, tłumaczenia, odprawę celną i protokół przeglądu technicznego.",
  },
  {
    question: "Czy muszę samodzielnie załatwiać odprawę celną?",
    answer:
      "Nie – zajmujemy się wszystkim w Twoim imieniu. Ty otrzymujesz auto gotowe do rejestracji.",
  },
  {
    question: "Czy auta z USA mają gwarancję?",
    answer:
      "Tak, oferujemy opcjonalną gwarancję do 12 miesięcy na wybrane elementy pojazdu po odbiorze w Polsce.",
  },
  {
    question: "Czy mogę zarejestrować auto jako zabytkowe?",
    answer:
      "Tak, jeśli auto ma minimum 30 lat, jest oryginalne i uzyska opinię rzeczoznawcy – pomagamy w formalnościach.",
  },
  {
    question: "Jak wygląda serwis po odbiorze auta?",
    answer:
      "Możesz korzystać z naszego serwisu – oferujemy przeglądy, naprawy i pakiet opieki posprzedażowej.",
  },
  {
    question: "Czy oferujecie finansowanie?",
    answer:
      "Tak – leasing, kredyt, raty. Współpracujemy z bankami i firmami finansowymi.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main role="main" aria-label="Najczęstsze pytania o import auta z USA" className="pt-20 faq-page">
      {/* ✅ JSON-LD dla Google (FAQPage schema) */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <header className="bg-primary text-white py-16">
        <div className="container-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Najczęściej zadawane pytania
          </h1>
          <p className="text-xl max-w-3xl">
            Masz wątpliwości przed sprowadzeniem auta z USA? Tu znajdziesz odpowiedzi. A jeśli nie —{" "}
            <Link href="/kontakt" className="underline text-accent font-semibold">
              skontaktuj się z nami
            </Link>
            .
          </p>
        </div>
      </header>

      {/* LISTA FAQ */}
      <section className="py-16" aria-labelledby="faq-section-heading">
        <div className="container-content max-w-3xl mx-auto space-y-6">
          <h2 id="faq-section-heading" className="sr-only">Lista pytań i odpowiedzi FAQ</h2>

          {faqs.map((faq, index) => (
            <article key={index} className="bg-white dark:bg-primary-dark rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left group"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 text-accent mr-3" />
                  <h2 className="text-lg font-semibold group-hover:text-accent transition-colors">
                    {faq.question}
                  </h2>
                </div>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform ${
                    openIndex === index ? "rotate-180 text-accent" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-300">
                      <p>{faq.answer}</p>
                      <Link
                        href="/kontakt"
                        className="inline-block mt-4 text-sm text-accent hover:underline"
                        aria-label={`Skontaktuj się w sprawie pytania: ${faq.question}`}
                      >
                        Masz podobne pytanie? Skontaktuj się z nami →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          ))}

          {/* CTA */}
          <aside
            role="complementary"
            className="mt-12 bg-muted dark:bg-primary-dark/50 rounded-lg p-6 text-center"
            aria-label="Kontakt w razie dalszych pytań"
          >
            <h2 className="text-2xl font-bold mb-4">Nie znalazłeś odpowiedzi?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Zostaw swoje pytanie — odpowiemy w ciągu 30 minut i przygotujemy indywidualną ofertę.
            </p>
            <Link
              href="/kontakt"
              className="btn-primary"
              aria-label="Skontaktuj się z VEHIX"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Skontaktuj się z nami
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
