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
        primary: {
          DEFAULT: '#794EC2', // ShyftOff Purple
          light: '#A98BE0',   // Purple tint for text on dark backgrounds
          dark: '#673FAB',    // Hover state
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
