import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/contact/contact-form";
import ConsultationForm from "@/components/contact/consultation-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – VEHIX | Import aut z USA",
  description:
    "Zostaw swoje dane – oddzwonimy w 30 minut i przygotujemy darmową wycenę importu auta z USA. VEHIX – bezpieczny import samochodów z USA do Polski.",
};

export default function ContactPage() {
  return (
    <main role="main" aria-label="Strona kontaktowa VEHIX" className="pt-20">
      {/* HERO */}
      <header className="bg-primary text-white py-16">
        <div className="container-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Skontaktuj się z nami — oddzwonimy w 30 minut
          </h1>
          <p className="text-xl max-w-3xl">
            Chcesz sprowadzić auto z USA? Zostaw swoje dane – przygotujemy darmową wycenę i odpowiemy na wszystkie pytania. Bez zobowiązań.
          </p>
        </div>
      </header>

      {/* SEKCJA GŁÓWNA */}
      <section className="py-16" aria-labelledby="kontakt-heading">
        <div className="container-content">
          <h2 id="kontakt-heading" className="sr-only">Dane kontaktowe i formularze</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEWA KOLUMNA */}
            <section
              aria-labelledby="dane-heading"
              className="lg:col-span-1 bg-white dark:bg-primary-dark rounded-lg shadow-lg p-6 md:p-8 h-full"
            >
              <h3 id="dane-heading" className="text-2xl font-bold mb-6">Dane kontaktowe</h3>

              <div className="space-y-6">
                {/* Adres */}
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Adres</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      VEHIX Import z USA<br />
                      ul. Okrężna 14<br />
                      62-081 Wysogotowo k. Poznania
                    </p>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Telefon</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="tel:+48600928700" className="hover:underline">
                        +48 600 928 700
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="mailto:info@vehix.pl" className="hover:underline">
                        info@vehix.pl
                      </a>
                    </p>
                  </div>
                </div>

                {/* Godziny otwarcia */}
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Godziny otwarcia</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Pon.–Pt.: 9:00–18:00<br />
                      Sobota: 10:00–14:00<br />
                      Niedziela: Zamknięte
                    </p>
                  </div>
                </div>
              </div>

              {/* Serwis */}
              <div className="mt-8">
                <h4 className="font-bold text-lg mb-4">Plac i serwis TSK POZNEX</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  ul. Okrężna 14, 62-081 Wysogotowo<br />
                  (15 minut od centrum Poznania)
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Czynne: pon.–pt. 9:00–18:00
                </p>
              </div>
            </section>

            {/* FORMULARZE */}
            <section aria-labelledby="formularze-heading" className="lg:col-span-2">
              <h3 id="formularze-heading" className="sr-only">Formularze kontaktowe</h3>
              <div className="grid grid-cols-1 gap-8">
                <ContactForm />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  📞 Oddzwaniamy w ciągu 30 minut (pon.–pt., godz. 9:00–18:00). Możesz też od razu umówić darmową konsultację:
                </p>
                <ConsultationForm />
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
