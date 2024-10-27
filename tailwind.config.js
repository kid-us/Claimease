/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#14365a",
        "bg-secondary": "#f8f9fa",
      },
    },
  },
  plugins: [],
};
