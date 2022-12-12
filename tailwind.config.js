/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "hsl(26, 100%, 55%)",
          200: " hsl(25, 100%, 94%)",
        },
        accent: {
          100: "hsl(220, 13%, 13%)",
          200: "hsl(219, 9%, 45%)",
          300: "hsl(220, 14%, 75%)",
          400: "hsl(223, 64%, 98%)",
        },
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
