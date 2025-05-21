"use client";

import Image from "next/image";
import Link from "next/link";
import type { Offer } from "./data";

export default function ClientPage({ offer }: { offer: Offer }) {
  return (
    <section className="section pt-24">
      <div className="container-content grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Image
            src={offer.image}
            alt={offer.model}
            width={800}
            height={600}
            className="rounded-2xl object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{offer.model}</h1>
          <p className="text-lg text-muted-foreground mb-4">{offer.description}</p>

          <ul className="mb-4 space-y-1">
            {offer.features.map((f, i) => (
              <li key={i} className="text-sm">✅ {f}</li>
            ))}
          </ul>

          <div className="bg-zinc-100 p-4 rounded-xl mb-4">
            <p className="text-lg font-semibold text-primary">{offer.price}</p>
            <p className="text-green-600 text-sm">{offer.saving}</p>
            <p className="text-sm text-muted-foreground mt-2">
              Porównywalne auto w Polsce: <span className="line-through">{offer.polandPrice}</span>
            </p>
          </div>

          <p className="text-sm mb-4">
            Średni czas realizacji importu: <strong>{offer.time}</strong>
          </p>

          <Link href="/kontakt" className="btn-primary inline-block text-center w-full">
            Zamów bezpłatną wycenę
          </Link>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Lub zadzwoń: <a href={`tel:${offer.ctaPhone}`} className="underline text-primary">{offer.ctaPhone}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
