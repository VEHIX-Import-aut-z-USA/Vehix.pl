import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samochody luksusowe - Vehix Import Samochodów z USA",
  description: "Sprowadzamy luksusowe samochody z USA: Cadillac, Lincoln, wyższe modele Forda i Chevroleta. Prestiż i najwyższa jakość dla wymagających klientów.",
};

export default function LuksusowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}