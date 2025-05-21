"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Calendar, Loader2, Info } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Imię i nazwisko jest wymagane"),
  phone: z.string().min(9, "Wprowadź poprawny numer telefonu"),
  email: z.string().email("Wprowadź poprawny adres email"),
  preferredDate: z.string().min(1, "Wybierz datę i godzinę"),
  consultationType: z.string().min(1, "Wybierz formę konsultacji"),
  needs: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const ConsultationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getFieldState,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setFormError(null);
      } else {
        setFormError("Wystąpił problem z wysłaniem formularza. Spróbuj ponownie później.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError("Wystąpił błąd serwera przy próbie połączenia z Telegramem.");
    }
  };

  return (
    <div className="bg-white dark:bg-primary-dark rounded-lg shadow-lg p-6 md:p-8 scroll-mt-20">
      {!isSubmitted ? (
        <>
          <h3 className="text-3xl font-bold mb-4 text-center">
            Bezpłatna konsultacja – sprawdź, ile naprawdę kosztuje Twój import
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
            Zostaw kontakt – oddzwonimy w 30 minut z konkretną wyceną. Konsultacja bez zobowiązań.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Imię i nazwisko* <span title="np. Jan Kowalski"><Info className="inline h-4 w-4 text-gray-500 ml-1" /></span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jan Kowalski"
                  autoComplete="name"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
                    errors.name && getFieldState("name").isTouched ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("name")}
                />
                {errors.name && getFieldState("name").isTouched && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Telefon*
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+48 600 000 000"
                  autoComplete="tel"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
                    errors.phone && getFieldState("phone").isTouched ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("phone")}
                />
                {errors.phone && getFieldState("phone").isTouched && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="kontakt@vehix.pl"
                  autoComplete="email"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
                    errors.email && getFieldState("email").isTouched ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("email")}
                />
                {errors.email && getFieldState("email").isTouched && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium mb-1">
                  Preferowana data i godzina*
                </label>
                <input
                  id="preferredDate"
                  type="datetime-local"
                  lang="pl"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
                    errors.preferredDate && getFieldState("preferredDate").isTouched ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("preferredDate")}
                />
                {errors.preferredDate && getFieldState("preferredDate").isTouched && (
                  <p className="mt-1 text-sm text-red-500">{errors.preferredDate.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="consultationType" className="block text-sm font-medium mb-1">
                  Forma konsultacji*
                </label>
                <select
                  id="consultationType"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
                    errors.consultationType && getFieldState("consultationType").isTouched ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("consultationType")}
                >
                  <option value="">Wybierz...</option>
                  <option value="telefoniczna">Telefoniczna</option>
                  <option value="osobista">Osobista (na placu)</option>
                </select>
                {errors.consultationType && getFieldState("consultationType").isTouched && (
                  <p className="mt-1 text-sm text-red-500">{errors.consultationType.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="needs" className="block text-sm font-medium mb-1">
                Krótki opis potrzeb
              </label>
              <textarea
                id="needs"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                {...register("needs")}
              ></textarea>
            </div>

            <div className="flex items-start">
              <input id="privacyConsent" type="checkbox" className="w-5 h-5 mt-1 mr-2" required />
              <label htmlFor="privacyConsent" className="text-sm text-gray-600 dark:text-gray-300">
                Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{' '}
                <a href="/polityka-prywatnosci" className="text-accent hover:underline">
                  polityką prywatności
                </a>
                .*
              </label>
            </div>

            {formError && <p className="text-sm text-red-600 mt-2 text-center">{formError}</p>}

            <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
              {isSubmitting ? (
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
              ) : (
                <Calendar className="h-5 w-5 mr-2" />
              )}
              {isSubmitting ? "Wysyłanie..." : "Zarezerwuj bezpłatną wycenę"}
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">
              * Wszystkie pola obowiązkowe. Po wypełnieniu oddzwonimy w 30 minut z bezpłatną wyceną Twojego importu.
            </p>
          </form>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-8"
        >
          <div className="flex items-center justify-center mb-6 text-green-500">
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
          <h3 className="text-2xl font-bold mb-4">Konsultacja zarezerwowana!</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Dziękujemy za rezerwację terminu konsultacji. Nasz ekspert skontaktuje się z Tobą w celu potwierdzenia terminu.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="btn-secondary">
            Zarezerwuj kolejną konsultację
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ConsultationForm;
