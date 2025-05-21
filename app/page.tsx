import NewsletterPopup from "@/components/lead-capture/newsletter-popup";
import HeroSection from "@/components/home/hero-section";
import UspSection from "@/components/home/usp-section";
import TargetAudienceSection from "@/components/home/target-audience-section";
import ProcessSection from "@/components/home/process-section";
import StatsSection from "@/components/home/stats-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import CtaSection from "@/components/home/cta-section";

export const metadata = {
  title: "Import aut z USA – VEHIX bez stresu",
  description:
    "Sprowadź auto z USA nawet 30% taniej. VEHIX to pełna przejrzystość, stała cena i opieka po zakupie. Importujemy auta, jakbyśmy je kupowali dla siebie.",
  openGraph: {
    title: "Import aut z USA – VEHIX bez stresu",
    description:
      "Sprowadź auto z USA z VEHIX. Zaufaj ekspertom – kompleksowa obsługa, realne oszczędności i opieka po zakupie.",
    url: "https://vehix.pl",
    siteName: "VEHIX",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Import aut z USA z VEHIX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Import aut z USA – VEHIX bez stresu",
    description:
      "Zamów auto z USA z VEHIX – z pełną przejrzystością i opieką po zakupie. Import aut nigdy nie był tak prosty.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://vehix.pl/",
  },
};

export default function Home() {
  return (
    <main>
      {/* Główny nagłówek SEO + UX */}
      <h1 className="sr-only">
        VEHIX – Import aut z USA z przejrzystością, oszczędnością i opieką
      </h1>

      <section aria-labelledby="hero-heading">
        <HeroSection />
      </section>

      <section aria-labelledby="usp-heading">
        <h2 id="usp-heading" className="sr-only">Dlaczego warto zaufać VEHIX?</h2>
        <UspSection />
      </section>

      <section aria-labelledby="target-heading">
        <h2 id="target-heading" className="sr-only">Dla kogo jest VEHIX?</h2>
        <TargetAudienceSection />
      </section>

      <section aria-labelledby="process-heading">
        <h2 id="process-heading" className="sr-only">Jak działa import z USA?</h2>
        <ProcessSection />
      </section>

      <section aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">Nasze liczby mówią same za siebie</h2>
        <StatsSection />
      </section>

      <section aria-labelledby="testimonials-heading">
        <h2 id="testimonials-heading" className="sr-only">Opinie naszych klientów</h2>
        <TestimonialsSection />
      </section>

      <section aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="sr-only">Zamów darmową konsultację</h2>
        <CtaSection />
      </section>

      <NewsletterPopup />
    </main>
  );
}
