"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email("Wprowadź poprawny adres email"),
  name: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    // Check if popup was already shown
    const popupShown = localStorage.getItem("newsletterPopupShown");
    
    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 30000); // 30 seconds
      
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem("newsletterPopupShown", "true");
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        reset();
        // Close popup after 3 seconds
        setTimeout(() => {
          closePopup();
        }, 3000);
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-primary rounded-lg shadow-xl max-w-md w-full relative overflow-hidden"
          >
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
              aria-label="Zamknij"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="p-6">
              {!isSubmitted ? (
                <>
                  <div className="flex items-center justify-center mb-4 text-accent">
                    <FileText className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">
                    Odbierz darmowy poradnik
                  </h3>
                  <h4 className="text-lg font-semibold text-center mb-4">
                    "Jak bezpiecznie kupić samochód z USA"
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Zostaw swój adres email, a wyślemy Ci kompleksowy poradnik zawierający:
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 mb-6 space-y-1 list-disc pl-5">
                    <li>Na co zwracać uwagę przy wyborze auta z USA</li>
                    <li>Jak sprawdzić historię pojazdu</li>
                    <li>Jakich pułapek unikać</li>
                    <li>Kalkulację wszystkich kosztów</li>
                  </ul>
                  
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                      <div>
                        <input
                          type="email"
                          placeholder="Twój adres email*"
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                          {...register("email")}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Imię (opcjonalnie)"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                          {...register("name")}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full"
                      >
                        {isSubmitting ? "Wysyłanie..." : "Odbierz poradnik"}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="flex items-center justify-center mb-4 text-green-500">
                    <svg
                      className="h-16 w-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Dziękujemy!</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Poradnik został wysłany na Twój adres email.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;