/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--primary-font)'],
        secondary: ['var(--secondary-font)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'pqp': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      animation: {
        'homeSlideInLeft': 'slideInLeft 1s ease 1s forwards',
        'homeSlideInRight': 'slideInRight 1s ease 1s forwards',
        'fodase': 'transform: rotate(45deg)'
      },
      transitions: {
        'fast': '0.3s ease-in-out',
        'slow': '1s ease-in-out',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translate3d(0%, 0, 0)' },
          '100%': { transform: 'rotate(-35deg) translate3d(-45%, 0, 0)' },
        },
        slideInRight: {
          '0%': { transform: 'translate3d(0%, 0, 0)' },
          '100%': { transform: 'rotate(-35deg) translate3d(45%, 0, 0)' },
        },
      },
    },
  },
  plugins: [],
}
