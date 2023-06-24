/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation : {
        'fade-in' : 'fade-in forwards cubic-bezier(0.11, 0, 0.5, 0)',
        'fade-out' : 'fade-out forwards cubic-bezier(0.11, 0, 0.5, 0)',
      },
      keyframes : {
        'fade-in': {
          '100%': {opacity: 1, filter: "blur(0)"},
        },
        'fade-out' : {
          '100%': {opacity: 0, filter: "blur(1)"},
        },
      },
      colors : {
        'gradient-color' : 'hsl(224, 32%, 12%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-background' : 
          'conic-gradient(from 0deg at 50% 50%,gray,black,black,gray)'
      },
      gradientColorStops : {
        45 : '45%',
      }
    },
  },
  plugins: [],
}
