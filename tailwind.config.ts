import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-albert-sans)'],
        mono: ['var(--font-roboto-mono)'],
        heading: ['var(--font-albert-sans)'],
      },
    },
  },
  plugins: [],
};

export default config; 