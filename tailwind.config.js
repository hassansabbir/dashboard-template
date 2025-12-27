/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F5E81",
        secondary: "#597e9a",
        base: "#4E4E4E",
      },
    },
  },
  plugins: [],
};
