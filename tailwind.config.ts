import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      animation: {
        'span3': 'span3 2s linear infinite',
      },
      animationDelay: {
        '3000': '3000ms',
      },
      keyframes: {
        span3: {
          '0%': { right: '-200px' },
          '50%': { right: 'calc(100% + 200px)' },
          '100%': { right: '-200px' },
        },
      },
      

      
      colors: {
        primary: "#0b2976" , 
        secondary: "#7a9e68",
        accent:"#787170",


      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-nunito)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      variants: {
        extend: {
          animationDelay: ['hover'],
        },
      },



    },
  },
  plugins: [],
}
export default config
