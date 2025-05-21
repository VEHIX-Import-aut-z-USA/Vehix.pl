import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* === PRZYWRÓCONA PEŁNA TYPOGRAFIA === */
      fontSize: {
        xs:  "0.75rem",   // 12
        sm:  "0.875rem",  // 14
        base:"1rem",      // 16
        lg:  "1.125rem",  // 18
        xl:  "1.25rem",   // 20
        "2xl":"1.5rem",   // 24
        "3xl":"1.875rem", // 30
        "4xl":"2.25rem",  // 36
        "5xl":"3rem",     // 48
        "6xl":"3.75rem",  // 60
        "7xl":"4.5rem",   // 72
        "8xl":"6rem",     // 96
        "9xl":"8rem",     //128
      },

      /* === BRAND COLORS === */
      colors: {
        primary: {
          DEFAULT: "#002868",
          light:   "#1a3f7d",
          dark:    "#001d4d",
        },
        accent: {
          DEFAULT: "#BF0A30",
          light:   "#d42145",
          dark:    "#a00828",
        },
        background:        "var(--background)",
        foreground:        "var(--foreground)",
        muted:             "var(--muted)",
        "muted-foreground":"var(--muted-foreground)",
        border:            "var(--border)",
      },

      /* === ANIMATIONS === */
      animation: {
        "fade-in":     "fadeIn 0.5s ease-in-out forwards",
        "slide-up":    "slideUp 0.5s ease-in-out forwards",
        "slide-down":  "slideDown 0.5s ease-in-out forwards",
        "slide-left":  "slideLeft 0.5s ease-in-out forwards",
        "slide-right": "slideRight 0.5s ease-in-out forwards",
        "number-count":"numberCount 2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        slideDown: {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        slideLeft: {
          "0%": { transform: "translateX(50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        slideRight: {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        numberCount: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: "class",
};

export default config;
