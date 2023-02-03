/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      invert: {
        25: ".25",
        50: ".5",
        75: ".75",
      },
      hueRotate: {
        "-270": "-270deg",
        270: "270deg",
        "-180": "-180deg",
        180: "180deg",
      },
      colors: {
        "my-blue": "#3C50E0",
        "my-red": "#FF5670",
        "my-yellow": "#FDB400",
        "my-gray": "#627193",
        "my-bg": "#282c4b"
      },
    },
  },
  plugins: [],
};
