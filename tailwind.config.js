/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: 'class', // or 'media'
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0e1b2c',
        surface: '#101c2c',
        primary: '#00ffe0',
        secondary: '#0070f3',
        accent: '#1e90ff',
        warning: '#ff6b6b',
        success: '#3ceabb',
        neutral: '#9ca3af',
        glass: 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        heading: ['Bebas Neue', 'Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 15px rgba(0, 255, 255, 0.5)',
        glow: '0 0 10px rgba(0, 255, 255, 0.4), 0 0 20px rgba(0, 255, 255, 0.2)',
        glass: '0 4px 30px rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(0, 255, 255, 0)' },
          '50%': { boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        glowTrail: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'pulseGlow 3s ease-in-out infinite',
        flicker: 'flicker 2s infinite',
        glowTrail: 'glowTrail 3s ease-in-out infinite',
      },
      transitionProperty: {
        width: 'width',
        spacing: 'margin, padding',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

module.exports = config

