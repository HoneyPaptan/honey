/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "fig": ["Figtree", "san-serif"],
        "robo": ["Roboto Mono", "monospace"],
      }
    },
  },
  plugins: [],
}
