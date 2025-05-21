import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TOP 20 aut z USA do 90 000 zł – Tanie modele, import | VEHIX",
  description: "Najlepsze auta z USA do 90 000 zł z importem do Polski. Sprawdź ofertę VEHIX – realne oszczędności, wycena, szybki kontakt. Toyota, Camry, Outback, CX-5 i inne.",
};

export default function Top5Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main role="main" aria-label="TOP 20 samochodów z USA do 90 tys. zł">
      {children}
    </main>
  );
}
