import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ – Import aut z USA | VEHIX",
  description:
    "Masz pytania o import auta z USA? Zobacz odpowiedzi na najczęstsze wątpliwości – koszty, czas, dokumenty i gwarancje.",
  alternates: {
    canonical: "https://vehix.pl/faq",
  },
};

export default function Head() {
  return (
    <>
      <link rel="canonical" href="https://vehix.pl/faq" />
    </>
  );
}
