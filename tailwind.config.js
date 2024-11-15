/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archivoBlack: ['"Archivo Black"', "sans-serif"],
        libreBaskerville: ['"Libre Baskerville"', "serif"],
        notoSansJP: ['"Noto Sans JP"', "sans-serif"],
      },
      colors: {
        primary: "#008080", // Custom primary color
        secondary: "#FF7F7F", // Custom secondary color
        ternary: "#35B5AC",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(255, 255, 255, 0.5)", // Small text shadow with complementary color
        md: "2px 2px 4px rgba(255, 127, 127, 0.5)", // Medium text shadow
        lg: "3px 3px 6px rgba(255, 127, 127, 0.5)", // Large text shadow
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
