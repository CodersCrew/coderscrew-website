/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      primary: '#292929',
      secondary: '#4B545C',
      tetriary: '#9A9999',
      quaternary: '#1A90FF',
      pm: '#1BC55F',
      marketing: '#F0656F',
      webDev: '#0075FF',
      ux: '#FA8A43',
      hr: '#AC6DE8',
      codersCamp: '#FEC43D',
      formField: '#d6d3d1',
      black: '#000000',
      white: '#FFFFFF',
      grey: '#E0E0E0',
      darkWhite: '#FAFAFA',
      dotIndicator: '#666666',
      additional: {
        white: '#FFFFFF',
        darkWhite: '#FAFAFA'
      },
      transparent: 'transparent',
      eerieBlack: '#1C1C1C',
      linkWater: '#D1E9FF',
      lightGrey: '#F5F5F5',
      darkGrey: '#383838'
    },
    spacing: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      4.5: '18px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '52px',
      14: '56px',
      15: '60px',
      16: '64px',
      17: '68px',
      18: '72px',
      19: '76px',
      20: '80px',
      21: '84px',
      22: '88px',
      23: '92px',
      24: '96px',
      25: '100px',
      26: '104px',
      27: '108px',
      28: '112px',
      29: '116px',
      30: '120px',
      31: '124px',
      32: '128px',
      33: '132px',
      34: '136px',
      35: '140px',
      36: '144px',
      37: '148px',
      38: '152px',
      39: '156px',
      40: '160px',
      41: '164px',
      42: '168px',
      70: '280px'
    },
    clipPath: {
      hexPolygon: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)'
    },
    extend: {
      boxShadow: {
        button: '6px 6px 17px rgba(0, 117, 255, 0.25)',
        card: '17px 16px 33px rgba(0, 0, 0, 0.05)'
      },
      fontSize: {
        '3.5xl': '2rem'
      },
      dropShadow: {
        hex: ['15px 20px 17px rgba(50, 50, 0, 0.15)', '15px 20px 20px #1BC55F']
      },
      lineHeight: {
        tight: '1.2'
      },
      screens: {
        xs: '425px'
      }
    }
  },
  plugins: [require('tailwind-clip-path'), require('@tailwindcss/forms')]
};
