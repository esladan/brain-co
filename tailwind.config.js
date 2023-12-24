/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
    white : '#ffffff',
    light : '#D3D3D3',
    medium : '#101827',
    dark :  '#01060F',
    yelow : '#F9C514',
    orange : '#FF5511',
    red : '#FF5511',
    blue : '#4579FF',
    green : '#179941',
    lime : '#99E22F'
    },
  },
  plugins: [],
}
