/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#f6f1e6',
        charcoal: '#0f1116',
        onyx: '#161924',
        stone: '#b7b0a6',
        gold: {
          50: '#f6f2e5',
          100: '#eadfbe',
          500: '#bfa46d',
          600: '#a88e4f',
          700: '#8d7642',
        },
      },
      boxShadow: {
        luxe: '0 12px 40px -22px rgba(0, 0, 0, 0.85)',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'subtle-grid':
          'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      animation: {
        'float-slow': 'floatSlow 10s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
