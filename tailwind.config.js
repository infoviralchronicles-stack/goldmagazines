/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfbf7',
          100: '#fbf7ed',
          200: '#f5ebce',
          300: '#eedda8',
          400: '#e3bf5d',
          500: '#d4af37',
          600: '#b89025',
          700: '#926e1c',
          800: '#75551c',
          900: '#60451b',
          950: '#37250c',
        },
        editorial: {
          dark: '#0c0d0e',
          cardDark: '#141618',
          cardDarkBorder: '#24272b',
          subtle: '#1c1f24',
          light: '#faf9f6',
          grayText: '#64748b',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Merriweather', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
