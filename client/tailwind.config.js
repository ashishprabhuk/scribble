/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'pacifico': ['Pacifico', 'cursive'],
      'lex': ['Lexend', 'sans-serif'],
      'mono': ['Sometype Mono', 'monospace'],
      'noto': ['Noto Sans', 'sans-serif'],
      'pop': ['Poppins', 'sans-serif'],
    },
    colors: {
      'logo': '#0E1E2E',
    }
  },
  plugins: [require('flowbite/plugin'),],
}