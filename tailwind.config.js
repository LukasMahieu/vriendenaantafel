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
          orange: '#f9b479',             // Warm orange
          red: '#a81a1a',               // Deep red
          green: '#67ab58',             // Fresh green
          lightgreen: '#d0e1ab',        // Light green
          purple: '#8d8ac1',            // Soft purple
          yellow: '#f8ea48',            // Bright yellow
          // Updated mappings using your new colors
          header_background: '#ffffff',  // White background
          header_text: '#67ab58',        // Fresh green
          background: '#ffffff',         // White background
          bigtext: '#a81a1a',           // Deep red for main headings
          mediumtext: '#67ab58',        // Fresh green for subheadings
          smalltext: '#000000',         // Black for body text
          subtext: '#f9b479',           // Warm orange for accents
          linktext: '#67ab58',          // Fresh green for links
          button: '#67ab58',            // Fresh green for buttons
          button_hover: '#a81a1a',      // Deep red for button hover
          button_text: '#ffffff',       // White text on buttons
        },
        primary: {
          lighter: '#d0e1ab',           // Light green
          default: '#67ab58',           // Fresh green
          darker: '#a81a1a'             // Deep red
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
        'glow': '0 0 20px rgba(27, 94, 32, 0.3)',         // Deep green glow
        'glow-orange': '0 0 20px rgba(255, 111, 0, 0.3)',   // Orange accent glow
        'glow-green': '0 0 20px rgba(76, 175, 80, 0.3)',    // Fresh green glow
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