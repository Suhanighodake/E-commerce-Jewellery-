/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: ['0.8rem', { lineHeight: '1.25rem' }],
      sm: ['0.9rem', { lineHeight: '1.4rem' }],
      base: ['1.05rem', { lineHeight: '1.65rem' }],
      lg: ['1.15rem', { lineHeight: '1.75rem' }],
      xl: ['1.3rem', { lineHeight: '1.85rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.85rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.6rem', { lineHeight: '1' }],
      '7xl': ['4.3rem', { lineHeight: '1' }],
      '8xl': ['5.5rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        royal: {
          gold: '#D4AF37',
          'gold-light': '#F4E4BC',
          'gold-dark': '#AA8C2C',
          'gold-soft': 'rgba(212, 175, 55, 0.12)',
          purple: '#4B0082',
          'purple-light': '#6A0DAD',
          'purple-deep': '#2D0A4E',
          blue: '#1a237e',
          emerald: '#046307',
          burgundy: '#800020',
          rose: '#B76E79',
          cream: '#FFFFF0',
          ivory: '#FFFAF0',
          charcoal: '#0F0F0F',
          'charcoal-light': '#1A1A1A',
          'near-black': '#0a0a0a',
          'purple-soft': 'rgba(75, 0, 130, 0.08)',
          bg: '#ffffff',
        },
        brand: {
          teal: '#0D9488',
          'teal-light': '#5EEAD4',
          pink: '#EC4899',
          'pink-light': '#FBCFE8',
          'pink-soft': '#FDF2F8',
        },
        lux: {
          text: '#FFFAF0',
          'text-secondary': '#E8D5A3',
          muted: '#9E9E9E',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Montserrat', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      aspectRatio: {
        jewelry: '4 / 5',
      },
      boxShadow: {
        gold: '0 8px 32px rgba(212, 175, 55, 0.15)',
        royal: '0 16px 48px rgba(75, 0, 130, 0.25)',
        luxury: '0 24px 64px rgba(0, 0, 0, 0.5)',
        card: '0 2px 12px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      letterSpacing: {
        widest: '0.4em',
      },
      animation: {
        'gold-shimmer': 'gold-shimmer 4s linear infinite',
        'royal-shimmer': 'royal-shimmer 5s linear infinite',
        float: 'float 4s ease-in-out infinite',
        'royal-glow': 'royal-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'gold-shimmer': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'royal-shimmer': {
          '0%': { backgroundPosition: '300% center' },
          '100%': { backgroundPosition: '-300% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'royal-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)' },
        },
      },
      maxWidth: {
        luxury: '1600px',
        narrow: '1100px',
      },
    },
  },
  plugins: [],
}
