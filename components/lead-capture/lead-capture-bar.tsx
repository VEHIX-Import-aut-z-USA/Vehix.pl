"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LeadCaptureBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-primary shadow-lg border-t border-gray-200 dark:border-gray-800"
        >
          <div className="container-content py-3 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-3 sm:mb-0">
              <Phone className="h-5 w-5 text-accent mr-2" />
              <span className="text-sm sm:text-base">
                Masz pytania? Zadzwoń: <strong>+48 600 928 700</strong>
              </span>
            </div>
            <div className="flex space-x-3">
              <Link href="/kontakt" className="btn-primary text-sm py-2 px-4">
                Wyślij zapytanie
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadCaptureBar;