/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        harry: ["Harry"],
        bluu: ["Bluu"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Harry",
          fontWheight: "400",
          src: "url(./assets/harrypotter.TTF)",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": { 
          fontFamily: "Bluu",
          fontWheight: "700",
          src: "url(./assets/Bluu.otf)",
        },
      });
    }),
  ],
};
