/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ff6a00',
          50: '#fff5ed',
          100: '#ffe8d4',
          200: '#ffcfa8',
          300: '#ffaf70',
          400: '#ff8a3d',
          500: '#ff6a00',
          600: '#e85d00',
          700: '#c24a00',
          800: '#9c3d00',
          900: '#7f3500',
        },
        light: {
          bg: '#faf8f5',
          card: '#ffffff',
          text: '#1c1917',
          muted: '#68645e',
          border: '#e8e4de',
        },
        dark: {
          bg: '#0b0f19',
          card: '#131a29',
          text: '#f8fafc',
          muted: '#94a3b8',
          border: '#1e293b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
