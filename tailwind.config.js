/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--brand-primary)',
          action: 'var(--brand-action)',
          bg: 'var(--brand-bg)',
          accent: 'var(--brand-accent)',
          white: 'var(--brand-white)',
        }
      }
    },
  },
  plugins: [],
}

