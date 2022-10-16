module.exports = {
  theme: {
    extend: {
      colors: {
        vat: {
          header_background: '#E5F9FA',
          header_text: '#4260d6',
          background: '#F5F5F5',
          bigtext: '#b81534',
          smalltext: '#008037',
          subtext: '#14b8a8',
          button: '#5a3e12',
          button_hover: '#d69e42',
          button_text: '#ffffff',
        },
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: '#D69E2E',
          darker: '#975A16'
        }
      }
    }
  },
  variants: {},
  plugins: []
};

// hsl(207, 73%, 57%) is the default color for the primary color
// hsl(207, 73%, 52%) is the lighter color for the primary color
// hsl(207, 73%, 44%) is the darker color for the primary color