import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności i RODO - VEHIX Import Aut z USA",
  description:
    "Zapoznaj się z naszą polityką prywatności i zasadami RODO. Dowiedz się, jak przetwarzamy Twoje dane osobowe i jak dbamy o Twoje bezpieczeństwo na stronie vehix.pl",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-20 pb-24">
      <div className="container-content space-y-8">
        <h1 className="text-4xl font-bold text-primary">Polityka Prywatności i RODO</h1>
        <p>Ostatnia aktualizacja: 18.05.2025</p>
        <p>
          Administratorem danych osobowych jest <strong>POZNEX Aliaksandr Yakauchuk</strong>, NIP: 7811931581, z siedzibą przy ul. Okrężna 14, 62-081 Wysogotowo.
          Kontakt: <a href="mailto:info@vehix.pl" className="text-accent underline">info@vehix.pl</a> lub tel. <a href="tel:+48600928700" className="text-accent underline">+48 600 928 700</a>.
        </p>

        <h2 className="text-2xl font-semibold">1. Jakie dane przetwarzamy?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Dane kontaktowe (np. imię, email, numer telefonu, zapytania)</li>
          <li>Dane techniczne (adres IP, cookies, dane przeglądarki, geolokalizacja)</li>
          <li>Dane marketingowe (za Twoją wyraźną zgodą)</li>
        </ul>

        <h2 className="text-2xl font-semibold">2. Podstawa i cel przetwarzania</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Art. 6 ust. 1 lit. a RODO – zgoda (kontakt, marketing, formularze)</li>
          <li>Art. 6 ust. 1 lit. b RODO – wykonanie umowy (np. import samochodu)</li>
          <li>Art. 6 ust. 1 lit. c RODO – obowiązek prawny (księgowość, faktury)</li>
          <li>Art. 6 ust. 1 lit. f RODO – uzasadniony interes (remarketing, bezpieczeństwo danych)</li>
        </ul>

        <h2 className="text-2xl font-semibold">3. Odbiorcy danych</h2>
        <p>
          Twoje dane mogą być przekazywane zaufanym podmiotom: firmom transportowym, agencjom celnym, serwisowi IT, dostawcom systemów CRM, platformom reklamowym (Meta, Google), księgowości – tylko jeśli to niezbędne do realizacji usług.
        </p>

        <h2 className="text-2xl font-semibold">4. Czas przechowywania danych</h2>
        <p>
          Dane są przetwarzane do momentu cofnięcia zgody lub przez okres wymagany przepisami prawa (np. do celów podatkowych – 5 lat), albo do czasu wygaśnięcia roszczeń.
        </p>

        <h2 className="text-2xl font-semibold">5. Twoje prawa</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Prawo do dostępu do danych</li>
          <li>Prawo do ich poprawienia lub usunięcia</li>
          <li>Prawo do ograniczenia przetwarzania i przenoszenia danych</li>
          <li>Prawo do cofnięcia zgody</li>
          <li>Prawo wniesienia skargi do Prezesa UODO</li>
        </ul>

        <h2 className="text-2xl font-semibold">6. Pliki cookies</h2>
        <p>
          Strona używa cookies w celu:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>zapewnienia prawidłowego działania strony</li>
          <li>analizy ruchu i statystyk (np. Google Analytics)</li>
          <li>marketingu i remarketingu (Meta Pixel, TikTok Pixel, Google Ads)</li>
          <li>zapamiętywania preferencji użytkownika (język, formularze)</li>
        </ul>
        <p>
          Możesz zarządzać cookies w ustawieniach swojej przeglądarki. Ograniczenie cookies może wpłynąć na działanie niektórych funkcji strony.
        </p>

        <h2 className="text-2xl font-semibold">7. Zgoda marketingowa</h2>
        <p>
          Zgodnie z art. 6 ust.1 lit. a) RODO wyrażam zgodę na przetwarzanie moich danych osobowych przez VEHIX
          w celu kontaktu, przygotowania oferty, marketingu produktów i usług drogą elektroniczną oraz telefoniczną.
        </p>

        <h2 className="text-2xl font-semibold">8. Zmiany polityki</h2>
        <p>
          Zastrzegamy sobie prawo do zmian w niniejszej polityce. Aktualna wersja zawsze znajduje się na stronie <strong>vehix.pl/polityka</strong>.
        </p>
      </div>
    </main>
  );
}
