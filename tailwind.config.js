/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FFFEF9',
          100: '#FFFCF2',
          200: '#FFF9E6',
          300: '#FFF5D6',
          400: '#FFF0C2',
        },
        rose: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        burgundy: {
          500: '#722F37',
          600: '#63272E',
          700: '#541F25',
        },
        ink: {
          100: '#4A4A4A',
          200: '#3D3D3D',
          300: '#2D2D2D',
        }
      },
      fontFamily: {
        handwritten: ['"Caveat"', '"Dancing Script"', 'cursive'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
