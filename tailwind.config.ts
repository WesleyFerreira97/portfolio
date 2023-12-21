import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '600px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
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
        'primary': '#ED1755',
        'secondary': '#090D1F',
        'secondaryAlt': '#313552',
        'lightGray': '#C4C4CC',
        'gray': '#8D8D99',
        'dark-gray': '#323238',
      },
      animation: {
        'homeSlideInLeft': 'slideInLeft 1s ease 1s forwards',
        'homeSlideInRight': 'slideInRight 1s ease 1s forwards',
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

export default config
