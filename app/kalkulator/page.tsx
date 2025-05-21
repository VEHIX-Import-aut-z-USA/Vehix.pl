import KalkulatorKosztow from "@/components/KalkulatorKosztow/KalkulatorKosztow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalkulator kosztów importu auta z USA – VEHIX",
  description: "Oblicz koszt sprowadzenia samochodu z USA do Polski. Cło, VAT, fracht i prowizja VEHIX – wszystko w jednym miejscu.",
};

export default function KalkulatorPage() {
  return (
    <main className="pt-20 pb-24">
      <div className="container-content space-y-12">
        <h1 className="text-5xl font-bold text-primary">Kalkulator kosztów importu</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Wprowadź orientacyjne dane i zobacz, ile wyniesie całkowity koszt sprowadzenia samochodu z USA do Polski. Bez ukrytych kosztów – przejrzystość to nasz standard.
        </p>
        <KalkulatorKosztow />
      </div>
    </main>
  );
}
