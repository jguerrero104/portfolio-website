/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4f4f4f',
          DEFAULT: '#1f1f1f',
          dark: '#0d0d0d'
        },
        secondary: {
          light: '#717171',
          DEFAULT: '#2c2c2c',
          dark: '#1a1a1a'
        },
        accent: '#e63946',
      },
    },
  },
  plugins: [],
}

