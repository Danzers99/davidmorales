/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F172A', // Slate 900
        surface: '#1E293B',    // Slate 800
        primary: '#F97316',    // Electric Orange
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
