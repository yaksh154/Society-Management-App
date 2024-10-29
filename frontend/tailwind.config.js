/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': 'rgba(240, 245, 251, 1)',
        'custom-border': 'hsla(216, 38%, 97%, 1)',
      },
    },
  },
  plugins: [],
}

