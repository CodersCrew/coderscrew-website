module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#292929',
      secondary: '#4B545C',
      'light-grey': '#9A9999',
      blue: '#1A90FF',
      PM: '#1BC55F',
      Marketing: '#F0656F',
      'Web-dev': '#0075FF',
      'UX-UI': '#FA8A43',
      'Data-science': '#AC6DE8',
      CodersCamp: '#FEC43D',
      white: '#FFF',
      'dark-white': '#FAFAFA',
      formInputs: 'rgba(196, 196, 196, 0.26)',
      formColor: '#9A9999',
      transparent: 'transparent'
    },
    spacing: {
      0: '0px',
      1: '8px',
      2: '12px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '28px',
      7: '32px',
      8: '36px',
      9: '40px',
      10: '44px',
      11: '48px',
      12: '52px',
    },
    clipPath: {
      hexPolygon: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)',
    },
    extend: {
      boxShadow: {
        button: '6px 6px 17px rgba(0, 117, 255, 0.25)',
        card: '17px 16px 33px rgba(0, 0, 0, 0.05)',
      },
      fontSize: {
        title: '32px',
      },
      dropShadow: {
        hex: ['15px 20px 17px rgba(50, 50, 0, 0.15)', '15px 20px 20px #1BC55F'],
      },
    },
  },
  plugins: [require('tailwind-clip-path')],
};
