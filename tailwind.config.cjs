/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-001": "#111111",

        "orange-001": "#FFC85E",

        "gray-001": "#3F4E65",
        "gray-002": "#EDEDED",

        "green-001": "#1FD85D",
      },
      backgroundImage: {
        "orange-linear-001":
          "linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%)",
      },
      boxShadow: {
        "shadow-001": "0px 15px 70px -11px rgba(43, 28, 1, 0.04)",
      },
    },
  },
  plugins: [],
};
