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
          bg: '#ffffff',
          card: '#f9fafb',
          text: '#111827',
          muted: '#6b7280',
          border: '#e5e7eb',
        },
        dark: {
          bg: '#000000',
          card: '#111111',
          text: '#f9fafb',
          muted: '#9ca3af',
          border: '#333333',
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
