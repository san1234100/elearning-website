/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FBA834",
        darkBlue: "#333A73",
        midBlue: "#387ADF",
        lightBlue: "#50C4ED",
      },
    },
  },
  plugins: [],
};
