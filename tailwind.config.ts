/* eslint-disable global-require */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './comp/**/*.{js,ts,jsx,tsx,mdx}',
    './section/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './util/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mdDown: { max: '768px' },
      },
      colors: {
        pry: '#EC5C29',
        shade: {
          1: '#FEF8F4',
          2: '#D7DDEA',
          3: '#CED5E5',
          4: '#445564',
          5: '#223544',
          6: '#11202D',
          7: '#081017',
          8: '#0C2132',
          9: '#00213A',
        },
      },
      fontFamily: {
        sans: ['var(--font-roboto)'],
        pacifico: ['var(--font-pacifico)'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({
      nocompatible: true,
      preferredStrategy: 'pseudoelements',
    }),
  ],
};
export default config;

// background: linear-gradient(228.4deg, rgba(8, 16, 23, 0.3) 0%, rgba(8, 16, 23, 0.74) 18.66%, rgba(8, 16, 23, 0.82) 68.15%, rgba(8, 16, 23, 0.87) 85.82%, rgba(8, 16, 23, 0) 112.04%);
// box-shadow: 0px 2px 10px 2px rgba(34, 53, 68, 0.48);
// backdrop-filter: blur(16px);
// /* Note: backdrop-filter has minimal browser support */
// border-radius: 24px;
