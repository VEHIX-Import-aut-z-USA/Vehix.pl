"use client";

import { useState } from "react";

export default function KalkulatorKosztow() {
  const [carPrice, setCarPrice] = useState(1000);
  const [auctionFees, setAuctionFees] = useState(445);
  const [transportToPort, setTransportToPort] = useState(250);
  const [shippingCost, setShippingCost] = useState(995);
  const [serviceFee, setServiceFee] = useState(450);
  const [customsAgency, setCustomsAgency] = useState(500);

  const subtotal = carPrice + auctionFees + transportToPort + shippingCost + serviceFee;
  const duty = subtotal * 0.1;
  const vat = (subtotal + duty) * 0.23;
  const customsTotal = duty + vat + customsAgency;
  const totalCostEUR = ((subtotal + customsTotal) * 0.93).toFixed(0); // przy kursie 1 USD = 0.93 EUR

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-xl p-6 rounded-2xl space-y-6">
      <h2 className="text-3xl font-bold text-primary">Kalkulator kosztów importu</h2>

      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium">Cena zakupu auta (USD)</span>
          <input
            type="number"
            value={carPrice}
            onChange={(e) => setCarPrice(Number(e.target.value))}
            className="w-full border rounded p-2 mt-1"
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Opłaty aukcyjne</label>
            <input
              type="number"
              value={auctionFees}
              onChange={(e) => setAuctionFees(Number(e.target.value))}
              className="w-full border rounded p-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Transport do portu (USA)</label>
            <input
              type="number"
              value={transportToPort}
              onChange={(e) => setTransportToPort(Number(e.target.value))}
              className="w-full border rounded p-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Fracht morski do Rotterdamu</label>
            <input
              type="number"
              value={shippingCost}
              onChange={(e) => setShippingCost(Number(e.target.value))}
              className="w-full border rounded p-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Prowizja VEHIX</label>
            <input
              type="number"
              value={serviceFee}
              onChange={(e) => setServiceFee(Number(e.target.value))}
              className="w-full border rounded p-2 mt-1"
            />
          </div>
        </div>
      </div>

      <div className="border-t pt-4 text-sm text-gray-700 space-y-1">
        <p>💵 <strong>Suma kosztów przed cłem:</strong> ${subtotal.toFixed(2)}</p>
        <p>🧾 Cło (10%): ${duty.toFixed(2)}</p>
        <p>📈 VAT (23%): ${vat.toFixed(2)}</p>
        <p>📄 Agencja celna: ${customsAgency.toFixed(2)}</p>
        <p>💰 <strong>Łączny koszt w EUR (z cłem i VAT):</strong> €{totalCostEUR}</p>
      </div>
    </div>
  );
}
