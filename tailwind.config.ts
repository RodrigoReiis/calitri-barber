/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    important: true,
    theme: {
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
        },
    },
    darkMode: false,
    variants: {
        extend: {},
    },
    plugins: [],
    content: [
        "./components/**/*.{vue,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
      ],
}