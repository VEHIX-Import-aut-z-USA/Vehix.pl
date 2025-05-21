"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Imię i nazwisko jest wymagane"),
  email: z.string().email("Wprowadź poprawny adres email"),
  phone: z.string().min(9, "Wprowadź poprawny numer telefonu"),
  carModel: z.string().optional(),
  budget: z.string().optional(),
  preferredContact: z.string().optional(),
  message: z.string().min(10, "Wiadomość jest wymagana (min. 10 znaków)"),
  marketingConsent: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
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
    defaultValues: {
      marketingConsent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
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
      setFormError("Błąd serwera. Spróbuj ponownie lub skontaktuj się telefonicznie.");
    }
  };

  return (
    <div className="bg-white dark:bg-primary-dark rounded-lg shadow-lg p-6 md:p-8">
      {!isSubmitted ? (
        <>
          <h3 className="text-2xl font-bold mb-6">Wyślij zapytanie</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Imię i nazwisko*</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jan Kowalski"
                  autoComplete="name"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${errors.name && getFieldState("name").isTouched ? "border-red-500" : "border-gray-300"}`}
                  {...register("name")}
                />
                {errors.name && getFieldState("name").isTouched && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email*</label>
                <input
                  id="email"
                  type="email"
                  placeholder="kontakt@vehix.pl"
                  autoComplete="email"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${errors.email && getFieldState("email").isTouched ? "border-red-500" : "border-gray-300"}`}
                  {...register("email")}
                />
                {errors.email && getFieldState("email").isTouched && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Telefon*</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+48 600 000 000"
                  autoComplete="tel"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${errors.phone && getFieldState("phone").isTouched ? "border-red-500" : "border-gray-300"}`}
                  {...register("phone")}
                />
                {errors.phone && getFieldState("phone").isTouched && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
              </div>

              <div>
                <label htmlFor="carModel" className="block text-sm font-medium mb-1">Interesujący Cię model samochodu</label>
                <input
                  id="carModel"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  {...register("carModel")}
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-1">Budżet</label>
                <input
                  id="budget"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  {...register("budget")}
                />
              </div>

              <div>
                <label htmlFor="preferredContact" className="block text-sm font-medium mb-1">Preferowany sposób kontaktu</label>
                <select
                  id="preferredContact"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  {...register("preferredContact")}
                >
                  <option value="">Wybierz...</option>
                  <option value="telefon">Telefon</option>
                  <option value="email">Email</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Wiadomość*</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Napisz wiadomość..."
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${errors.message && getFieldState("message").isTouched ? "border-red-500" : "border-gray-300"}`}
                {...register("message")}
              ></textarea>
              {errors.message && getFieldState("message").isTouched && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
            </div>

            <div className="flex items-start">
              <input id="marketingConsent" type="checkbox" className="w-5 h-5 mt-1 mr-2" {...register("marketingConsent")}/>
              <label htmlFor="marketingConsent" className="text-sm text-gray-600 dark:text-gray-300">
                Wyrażam zgodę na otrzymywanie informacji marketingowych od Vehix Sp. z o.o. drogą elektroniczną.
              </label>
            </div>

            <div className="flex items-start">
              <input id="privacyConsent" type="checkbox" className="w-5 h-5 mt-1 mr-2" required />
              <label htmlFor="privacyConsent" className="text-sm text-gray-600 dark:text-gray-300">
                Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{' '}
                <a href="/polityka-prywatnosci" className="text-accent hover:underline">polityką prywatności</a>.*
              </label>
            </div>

            {formError && <p className="text-sm text-red-600 mt-2 text-center">{formError}</p>}

            <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
              {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : <Send className="h-5 w-5 mr-2" />}
              {isSubmitting ? "Wysyłanie..." : "Wyślij zapytanie"}
            </button>
          </form>
        </>
      ) : (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center py-8">
          <div className="flex items-center justify-center mb-6 text-green-500">
            <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">Dziękujemy za wiadomość!</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Twoje zapytanie zostało wysłane. Odpowiemy najszybciej jak to możliwe, zazwyczaj w ciągu 24 godzin w dni robocze.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="btn-secondary">
            Wyślij kolejne zapytanie
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;