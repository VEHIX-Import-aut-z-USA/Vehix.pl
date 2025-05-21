import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zespół VEHIX – Eksperci od importu aut",
  description:
    "Poznaj nasz zespół i zobacz, kto sprowadza auta z USA z gwarancją ceny, serwisem i pełną przejrzystością.",
  openGraph: {
    title: "Zespół VEHIX – Eksperci od importu aut",
    description:
      "Zobacz, kto stoi za VEHIX. Realne oszczędności, własny serwis i setki zadowolonych klientów.",
    url: "https://vehix.pl/o-nas",
    siteName: "VEHIX",
    images: [
      {
        url: "https://vehix.pl/og/zespol-vehix.jpg",
        width: 1200,
        height: 630,
        alt: "Zespół VEHIX – auta z USA bez ryzyka",
      },
    ],
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="pt-20 pb-16">
      <Script
        id="schema-org-o-nas"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "VEHIX",
            url: "https://vehix.pl/o-nas",
            logo: "https://vehix.pl/Vehix-Logo-PNG.png",
            sameAs: [
              "https://www.facebook.com/vehixpolska",
              "https://www.instagram.com/vehixpolska"
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+48 600 928 700",
              contactType: "Customer Service"
            }
          })
        }}
      />

      {/* HERO */}
      <header className="bg-primary text-white py-14 md:py-20">
        <div className="container-content text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            VEHIX – Ludzie, którym możesz zaufać
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto font-medium">
            Poznaj nasz zespół. Sprowadzamy auta z USA tak, jakbyśmy robili to dla siebie – z pełną odpowiedzialnością, stałą ceną i własnym serwisem.
          </p>
          <a href="/kontakt" className="btn-accent mt-6">
            Umów bezpłatną konsultację
          </a>
        </div>
      </header>

      {/* STATYSTYKI */}
      <section className="bg-gray-50 dark:bg-primary-dark py-8">
        <div className="container-content grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            ["500+", "importów"],
            ["5 lat", "serwis BODY SHOP"],
            ["98%", "poleceń"],
            ["0 zł", "ukrytych kosztów"],
          ].map(([value, label], i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-accent">{value}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DLACZEGO VEHIX */}
      <section className="py-10">
        <div className="container-content grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Dlaczego klienci wybierają VEHIX?</h2>
            <ul className="space-y-3 text-sm leading-relaxed">
              {[
                ["Własny serwis i zespół", "100% odpowiedzialności po naszej stronie."],
                ["Stała cena i przejrzystość", "Znasz finalny koszt przed startem."],
                ["Obsługa pod klucz", "Ty wybierasz, my robimy resztę."],
                ["Oszczędności do 30%", "Bez kompromisów jakości."],
              ].map(([title, desc], i) => (
                <li key={i} className="flex">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-2" />
                  <span>
                    <strong>{title}</strong> – {desc}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-5 grid grid-cols-2 gap-2 text-xs font-medium">
              {["Muscle-car", "SUV/sedan", "Firmy/floty", "Tesla/EV"].map((seg) => (
                <div
                  key={seg}
                  className="bg-gray-100 dark:bg-primary-dark px-3 py-2 text-center rounded">
                  {seg}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <a href="/kalkulator" className="btn-accent text-base">
                Oblicz koszt importu
              </a>
              <a href="/kontakt" className="btn-primary text-base">
                Umów konsultację
              </a>
            </div>

            <blockquote className="mt-6 p-4 bg-white/80 dark:bg-gray-900 border-l-4 border-accent rounded-lg text-sm italic">
              “Myślałem, że import auta to koszmar. VEHIX zrobił wszystko za mnie – wybór Mustanga, transport, rejestracja. Zaoszczędziłem 52 000 zł i zero stresu.”
              <footer className="mt-2 text-xs text-gray-600 dark:text-gray-400">— Marek, Mustang GT 2022</footer>
            </blockquote>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative rounded-xl overflow-hidden shadow-lg border">
              <Image
                src="/vehix-dealer.jpg"
                alt="Zespół VEHIX z klientem"
                width={520}
                height={320}
                className="object-cover aspect-video"
                priority
              />
            </div>
            <span className="text-xs text-gray-500 mt-2">
              Zespół VEHIX i realny klient
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
