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
      'script': ['M PLUS 1 Code', 'monospace'],
      'mono': ['Sometype Mono', 'monospace'],
    },
    colors: {
      'logo': '#0E1E2E',
    }
  },
  plugins: [require('flowbite/plugin'),],
}