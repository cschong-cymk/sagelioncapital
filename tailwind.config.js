/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep indigo-plum "ink" for dark sections
        ink: {
          DEFAULT: '#1A1530',
          900: '#120E22',
          800: '#1A1530',
          700: '#251D43',
          600: '#332857',
        },
        cloud: {
          DEFAULT: '#F7F6FB',
          100: '#FFFFFF',
          200: '#EEECF6',
        },
        violet: {
          DEFAULT: '#6D28D9',
          light: '#8B5CF6',
          dark: '#5B21B6',
        },
        // Warm coral CTA — the single high-contrast accent
        coral: {
          DEFAULT: '#FB6F47',
          dark: '#E85A33',
          light: '#FF8B68',
        },
        // Mint reserved strictly for positive metrics
        mint: {
          DEFAULT: '#34D399',
          dark: '#10B981',
        },
        slate: {
          ink: '#2D2A3A',
          soft: '#6B6680',
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
        card: '0 1px 2px rgba(26,21,48,0.04), 0 12px 40px -12px rgba(26,21,48,0.18)',
        cardHover: '0 1px 2px rgba(26,21,48,0.04), 0 24px 60px -16px rgba(109,40,217,0.28)',
        cta: '0 10px 30px -8px rgba(251,111,71,0.55)',
      },
      backgroundImage: {
        'transform-gradient':
          'linear-gradient(120deg, #6D28D9 0%, #8B5CF6 45%, #FB6F47 100%)',
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
