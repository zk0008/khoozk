/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Beige palette named by role, so a future re-theme only touches these values.
      // Every text colour here passes WCAG AA (4.5:1) on both paper and surface.
      colors: {
        paper: "#F1EADB", // page background
        surface: "#F8F3E9", // cards and panels
        line: {
          DEFAULT: "#DDD2BE",
          strong: "#C4B79E",
        },
        ink: "#1F2A22", // primary text
        muted: "#525C4B", // secondary text
        subtle: "#656B5B", // labels and dates
        accent: {
          DEFAULT: "#45603A", // moss green
          hover: "#36502D",
        },
        ochre: "#8A5210",
      },
      fontFamily: {
        sans: ["Archivo", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        quart: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    },
  },
  plugins: [],
};
