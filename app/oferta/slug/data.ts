export interface Offer {
  slug: string;
  model: string;
  description: string;
  price: string;
  saving: string;
  image: string;
  features: string[];
  polandPrice: string;
  time: string;
  ctaPhone: string;
}

export const offers: Offer[] = [
  {
    slug: "ford-mustang-gt-2021",
    model: "Ford Mustang GT 2021",
    description:
      "Legendarne V8, ponad 450 KM, ryk silnika, który budzi emocje. Mustang to nie auto – to manifest wolności.",
    price: "od 178 000 zł",
    saving: "oszczędzasz: 42 000 zł",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/2021_Ford_Mustang_GT.jpg",
    features: ["V8 5.0L", "Automat 10 biegów", "450 KM", "Apple CarPlay"],
    polandPrice: "około 220 000 zł",
    time: "8–10 tygodni",
    ctaPhone: "+48 600 928 700",
  },
  // pozostałe oferty...
];
