/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gov-blue": "#2563eb",
        "gov-blue-dark": "#1d4ed8",
        "gov-green": "#10b981",
        "gov-purple": "#8b5cf6",
        "gov-orange": "#f59e0b",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
