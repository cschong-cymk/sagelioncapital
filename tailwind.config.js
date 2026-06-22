/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        // Warm charcoal "ink" for dark sections (from the logo: #433B38)
        ink: {
          DEFAULT: '#3E3631',
          900: '#2E2723',
          800: '#3E3631',
          700: '#4A413B',
          600: '#5C5049',
        },
        // Warm, deeper taupe for light sections (darkened further to reduce
        // contrast against the charcoal ink sections)
        cloud: {
          DEFAULT: '#C3B49C',
          100: '#FAF7F2',
          200: '#B0A088',
=======
        // Softened warm charcoal for dark sections (lifted from near-black so the
        // jump to the light sections is gentle; the gradient seams ease the rest)
        ink: {
          DEFAULT: '#564A40',
          900: '#463C34',
          800: '#564A40',
          700: '#645749',
          600: '#76685A',
        },
        // Clean warm off-white for light sections (readable, not muddy)
        cloud: {
          DEFAULT: '#E9E1D2',
          100: '#F3EEE4',
          200: '#D6CBB8',
>>>>>>> 7ccc5bbcb3a989da7d2d972f95eb502f0661dd83
        },
        // Brand orange (from the logo: #F15A25) — the single high-energy accent
        flame: {
          DEFAULT: '#F15A25',
<<<<<<< HEAD
          light: '#F6815A',
          dark: '#CC470F',
=======
          light: '#F88A57',
          dark: '#B23B0C',
>>>>>>> 7ccc5bbcb3a989da7d2d972f95eb502f0661dd83
        },
        // Reserved strictly for positive metrics
        mint: {
          DEFAULT: '#2FB888',
          dark: '#0F9E6E',
        },
        slate: {
<<<<<<< HEAD
          ink: '#2E2926',
          soft: '#6E665F',
=======
          ink: '#2C2722',
          soft: '#5C544B',
>>>>>>> 7ccc5bbcb3a989da7d2d972f95eb502f0661dd83
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '1180px',
      },
      boxShadow: {
<<<<<<< HEAD
        card: '0 1px 2px rgba(62,54,49,0.05), 0 12px 40px -12px rgba(62,54,49,0.20)',
        cardHover: '0 1px 2px rgba(62,54,49,0.05), 0 24px 60px -16px rgba(241,90,37,0.28)',
        cta: '0 10px 30px -8px rgba(241,90,37,0.50)',
=======
        card: '0 1px 2px rgba(86,74,64,0.05), 0 12px 40px -12px rgba(86,74,64,0.18)',
        cardHover: '0 1px 2px rgba(86,74,64,0.05), 0 24px 60px -16px rgba(241,90,37,0.26)',
        cta: '0 10px 30px -8px rgba(241,90,37,0.45)',
>>>>>>> 7ccc5bbcb3a989da7d2d972f95eb502f0661dd83
      },
      backgroundImage: {
        'transform-gradient':
          'linear-gradient(120deg, #F15A25 0%, #F89A4C 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
