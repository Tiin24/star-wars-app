/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern":
          "url('https://mcdn.wallpapersafari.com/medium/96/60/ZBf0Im.jpg')",
      }),
      fontFamily: {
        custom: ["StarWars"],
      },
      boxShadow: {
        "custom-shadow-red": "0px -2px 28px -2px red",
        "custom-shadow-blue": "0px -2px 28px -2px blue",
      },
    },
  },
  plugins: [],
};
