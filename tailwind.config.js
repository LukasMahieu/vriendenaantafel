module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vat: ["PEACE-SANS", "sans-serif"],
        vat_smalltext: ["GLACIAL-INDIFFERENCE", "sans-serif"],
      },
      colors: {
        vat: {
          header_background: '#FFFFFF',
          header_text: '#f2bc28',
          background: '#ffffff',
          bigtext: '#008037',
          smalltext: '#414141',
          subtext: '#f2bc28',
          button: '#f2bc28',
          button_hover: '#face1b',
          button_text: '#ffffff',
        },
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: '#D69E2E',
          darker: '#975A16'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'colors-opacity': 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity',
        'transform-colors': 'transform, color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 20px rgba(242, 188, 40, 0.3)',
        'glow-green': '0 0 20px rgba(0, 128, 55, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    }
  },
  variants: {
    extend: {
      scale: ['hover', 'focus', 'group-hover'],
      transform: ['hover', 'focus', 'group-hover'],
      opacity: ['hover', 'focus', 'group-hover'],
      shadow: ['hover', 'focus'],
    }
  },
  plugins: []
};

// hsl(207, 73%, 57%) is the default color for the primary color
// hsl(207, 73%, 52%) is the lighter color for the primary color
// hsl(207, 73%, 44%) is the darker color for the primary color