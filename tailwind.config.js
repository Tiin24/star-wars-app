import image from './src/assets/images/ZBf0Im.jpg'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('https://mcdn.wallpapersafari.com/medium/96/60/ZBf0Im.jpg')"
      })
    }
  },
  plugins: [],
}