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
        },
        fadein : {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeout : {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        blurin:{
          '0%': { filter: "blur(16px)" },
          '100%': { filter: "blur(0px)" },
        }

      },
      animation: {
        'down': 'down 450ms ease-in',
        'left': 'left 450ms ease-in',
        'left1': 'left 900ms ease-in-out',
        'fadein': 'fadein 900ms ease-in',
        'fadeout': 'fadeout 900ms ease-in',
        'blurin' : 'blurin 800ms ease-out',
        'blurinslow' : 'blurin 1100ms ease-out',
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

