/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00f2fe',
          sky: '#4facfe',
          baby: '#38bdf8',
          blue: '#0ea5e9',
          darkBlue: '#0284c7',
          midnight: '#090d16',
          slateDark: '#0f172a',
          surfaceDark: '#131c31',
          surfaceCard: '#1a243b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Cairo', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'cyan-gradient': 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
        'blue-gradient': 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(0, 242, 254, 0.3)',
        'glow-md': '0 0 25px -5px rgba(0, 242, 254, 0.4)',
        'glow-lg': '0 0 35px -5px rgba(79, 172, 254, 0.5)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
