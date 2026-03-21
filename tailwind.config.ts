import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C878',
          dark: '#A07835',
          50: '#FDF8EC',
        },
        brand: {
          dark: '#0f0e17',
          darker: '#07070d',
          gray: '#2d2d2d',
          lightgray: '#f5f5f0',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
