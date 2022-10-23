module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vat: ["PEACE-SANS"],
      },
      colors: {
        vat: {
          header_background: '#FFFFFF',
          header_text: '#f2bc28',
          background: '#ffffff',
          bigtext: '#008037',
          smalltext: '#008037',
          subtext: '#f2bc28',
          button: '#f2bc28',
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