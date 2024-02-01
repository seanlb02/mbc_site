/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   
    extend: {
      keyframes: {
        down: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        left: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        }

      },
      animation: {
        'down': 'down 450ms ease-in',
        'left': 'left 450ms ease-in',
        'left1': 'left 900ms ease-in-out'
      },
      fontFamily: {'sans': ['Helvetica', 'Arial', 'sans-serif']},
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      cursor: {
        logo: 'url(/MBC_logo.png), logo',
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
}

