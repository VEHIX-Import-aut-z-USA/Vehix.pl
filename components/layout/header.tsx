"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Strona główna", href: "/" },
    {
      name: "Oferta",
      href: "/oferta",
      submenu: [
        { name: "🔝 TOP 5 modeli z USA", href: "/oferta/top5" },
        { name: "Muscle Cars i samochody sportowe", href: "/oferta/muscle-cars" },
        { name: "SUV-y i Pickupy", href: "/oferta/suv-pickup" },
        { name: "Samochody luksusowe", href: "/oferta/luksusowe" },
        { name: "Samochody elektryczne i hybrydowe", href: "/oferta/elektryczne" },
      ],
    },
    { name: "Jak to działa?", href: "/proces-importu" },
    { name: "Realizacje", href: "/realizacje" },
    { name: "FAQ", href: "/faq" },
    { name: "O nas", href: "/o-nas" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto w-full px-4 sm:px-6 flex items-center justify-between h-16">
        {/* LOGO */}
        <Link href="/" className="flex items-center" itemProp="url">
          <motion.div
            initial={{ scale: 1, y: 0 }}
            animate={scrolled ? { scale: 0.9, y: -2 } : { scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/Vehix-Logo-PNG.png"
              alt="Vehix Logo"
              width={140}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </motion.div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) =>
            link.submenu ? (
              <div key={link.name} className="relative group">
                <button
                  className={`px-4 py-2 rounded-md flex items-center text-sm font-medium transition-colors ${
                    pathname.startsWith(link.href) ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-white dark:bg-primary-dark overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 origin-top transition-all duration-200">
                  <div className="py-1">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted dark:hover:bg-primary transition-colors"
                        itemProp="url"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href ? "text-accent" : "text-foreground hover:text-accent"
                }`}
                itemProp="url"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/kontakt"
            className="bg-[#c70039] hover:bg-[#a9002f] text-white font-bold flex items-center gap-2 rounded-lg px-6 py-2.5 shadow-md hover:shadow-lg transition-all duration-200"
            itemProp="url"
          >
            <Phone className="h-4 w-4 shrink-0 animate-pulse" />
            <span>Bezpłatna konsultacja</span>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden z-50 p-3"
          onClick={toggleMenu}
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>

        {/* MOBILE NAV */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white overflow-y-auto h-screen lg:hidden"
          >
            <div className="flex flex-col h-[100dvh] pt-6 px-4 relative">
              <div className="flex items-center justify-between mb-6">
                <Link href="/" onClick={closeMenu} itemProp="url">
                  <Image
                    src="/Vehix-Logo-PNG.png"
                    alt="Vehix Logo"
                    width={120}
                    height={36}
                    className="h-9 w-auto"
                  />
                </Link>
                <button
                  onClick={closeMenu}
                  aria-label="Zamknij menu"
                  className="p-2 rounded-md"
                >
                  <X className="h-6 w-6 text-foreground" />
                </button>
              </div>

              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) =>
                  link.submenu ? (
                    <div key={link.name} className="space-y-2">
                      <div className="font-medium text-lg">{link.name}</div>
                      <div className="pl-4 space-y-2 border-l-2 border-accent">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            onClick={closeMenu}
                            className={`block ${sublink.name.includes("TOP") ? "font-semibold text-accent" : "text-foreground hover:text-accent"}`}
                            itemProp="url"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      className={`font-medium text-lg ${
                        pathname === link.href ? "text-accent" : "text-foreground hover:text-accent"
                      }`}
                      itemProp="url"
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </nav>

              <div className="mt-auto pt-6 px-2">
                <Link
                  href="/kontakt"
                  onClick={closeMenu}
                  className="btn-primary w-full flex justify-center items-center"
                  itemProp="url"
                >
                  <Phone className="mr-2 h-4 w-4 shrink-0" />
                  Bezpłatna konsultacja
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
