import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-content py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + opis + social */}
          <div>
            <Link href="/" aria-label="Strona główna">
              <div className="inline-flex items-center justify-center bg-white/90 group hover:bg-white transition-all duration-300 p-3 rounded-xl shadow-md mb-4">
                <Image
                  src="/Vehix-Logo-PNG.png"
                  alt="Vehix Logo"
                  width={140}
                  height={40}
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[1deg]"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-300 mt-4 leading-relaxed">
              Kompleksowa usługa importu aut z USA – od wyboru po rejestrację,
              z pełną przejrzystością kosztów i opieką po zakupie.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://facebook.com/vehixpl" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-red-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com/vehix.pl" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-red-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com/@vehixpl" target="_blank" rel="noopener" aria-label="YouTube" className="hover:text-red-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="https://www.tiktok.com/@vehixpl" target="_blank" rel="noopener" aria-label="TikTok" className="hover:text-red-500 transition-colors">
                <Image src="/icons/tiktok.svg" alt="TikTok" width={20} height={20} />
              </Link>
              <Link href="https://x.com/vehixpl" target="_blank" rel="noopener" aria-label="X (Twitter)" className="hover:text-red-500 transition-colors">
                <Image src="/icons/x.svg" alt="X (Twitter)" width={20} height={20} />
              </Link>
            </div>
          </div>

          {/* Nawigacja */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nawigacja</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-red-500 transition-colors">Strona główna</Link></li>
              <li><Link href="/o-nas" className="text-gray-300 hover:text-red-500 transition-colors">O nas</Link></li>
              <li><Link href="/oferta" className="text-gray-300 hover:text-red-500 transition-colors">Oferta</Link></li>
              <li><Link href="/proces-importu" className="text-gray-300 hover:text-red-500 transition-colors">Jak to działa?</Link></li>
              <li><Link href="/realizacje" className="text-gray-300 hover:text-red-500 transition-colors">Realizacje</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-red-500 transition-colors">FAQ</Link></li>
              <li><Link href="/kontakt" className="text-gray-300 hover:text-red-500 transition-colors">Kontakt</Link></li>
              <li><Link href="/polityka" className="text-gray-300 hover:text-red-500 transition-colors">Polityka Prywatności i RODO</Link></li>
            </ul>
          </div>

          {/* Oferta z TOP 5 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Oferta</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/oferta/top5" className="text-white font-bold hover:text-red-500 transition-colors">
                  TOP 5 modeli z USA – najczęściej wybierane przez klientów
                </Link>
              </li>
              <li><Link href="/oferta/muscle-cars" className="text-gray-300 hover:text-red-500 transition-colors">Muscle Cars i samochody sportowe</Link></li>
              <li><Link href="/oferta/suv-pickup" className="text-gray-300 hover:text-red-500 transition-colors">SUV-y i Pickupy</Link></li>
              <li><Link href="/oferta/luksusowe" className="text-gray-300 hover:text-red-500 transition-colors">Samochody luksusowe</Link></li>
              <li><Link href="/oferta/elektryczne" className="text-gray-300 hover:text-red-500 transition-colors">Samochody elektryczne i hybrydowe</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                <a href="tel:+48600928700" className="hover:text-red-500 transition-colors">+48 600 928 700</a>
              </li>
              <li className="pl-7 flex space-x-4">
                <Link href="https://wa.me/48600928700" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:scale-110 transition-transform">
                  <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
                </Link>
                <Link href="https://t.me/vehixpl" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:scale-110 transition-transform">
                  <Image src="/icons/telegram.svg" alt="Telegram" width={20} height={20} />
                </Link>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                <a href="mailto:info@vehix.pl" className="hover:text-red-500 transition-colors">info@vehix.pl</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                <a
                  href="https://www.google.com/maps?q=ul.+Okrężna+14,+62-081+Wysogotowo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors"
                >
                  ul. Okrężna 14<br />
                  62-081 Wysogotowo k/ Poznania
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Google mapa */}
      <div className="w-full">
        <iframe
          title="Mapa lokalizacji VEHIX"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2392.5226003291797!2d16.777109!3d52.4159347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470447c40444cecd%3A0xd969689e1f8055b8!2sAuta%20z%20USA%20%E2%80%94%20Import%2C%20Sprowadzenie%2C%20Serwis%20POZNEX!5e0!3m2!1spl!2spl!4v1715944330170!5m2!1spl!2spl"
          className="w-full h-[300px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Copyright i polityka */}
      <div className="container-content border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Vehix Sp. z o.o. Wszystkie prawa zastrzeżone.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 md:mt-0 text-sm">
          <Link href="/polityka-prywatnosci" className="text-gray-400 hover:text-red-500 transition-colors">
            Polityka prywatności
          </Link>
          <Link href="/regulamin" className="text-gray-400 hover:text-red-500 transition-colors">
            Regulamin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
