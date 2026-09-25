/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#131316', // Warm/Neutral Charcoal
        surface: '#202024',    // Neutral Surface
        // Deep plum brand color; too dark to read on the charcoal background,
        // so it's used for fills behind light text.
        brand: {
          DEFAULT: '#4D1F3B',
          hover: '#632A4D',
        },
        // Light tint of the brand hue for accents, lines and text on dark backgrounds.
        primary: {
          DEFAULT: '#D897BF',
          light: '#D897BF',
        },
        secondary: '#10B981',  // Emerald
        text: {
          primary: '#F8FAFC',  // Slate 50
          secondary: '#94A3B8', // Slate 400
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
