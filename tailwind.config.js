/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base
        'base-white': '#F9F7F3',
        // Primary
        'mint-green': '#36D6B0',
        'deep-teal': '#0B8C7F',
        // Accent
        'sunrise-orange': '#FF7D4D',
        'berry-purple': '#9D5BDB',
        'sunshine-yellow': '#FFD166',
        // Neutral
        'charcoal': '#2D3047',
        'fog-gray': '#ADB5BD',
        'light-gray': '#E9ECEF',
        // Functional
        'success-green': '#40C463',
        'alert-red': '#E63946',
      },
      fontFamily: {
        // Define based on your import names (e.g., from Google Fonts)
        heading: ['Montserrat', 'sans-serif'], // Primary Font
        body: ['Nunito', 'sans-serif'],       // Secondary Font
        accent: ['Caveat', 'cursive'],       // Accent Font (if needed directly)
      },
      // Add typography configuration for prose
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.charcoal'), // Default text color
            fontFamily: theme('fontFamily.body').join(', '), // Default font
            a: {
              color: theme('colors.mint-green'),
              '&:hover': {
                color: theme('colors.deep-teal'),
              },
              textDecoration: 'none', // Optional: remove underline
            },
            h1: {
              color: theme('colors.deep-teal'),
              fontFamily: theme('fontFamily.heading').join(', '),
              fontWeight: '700', // Bold
            },
            h2: {
              color: theme('colors.deep-teal'),
              fontFamily: theme('fontFamily.heading').join(', '),
              fontWeight: '600', // Semi-bold
            },
            h3: {
              color: theme('colors.deep-teal'),
              fontFamily: theme('fontFamily.heading').join(', '),
              fontWeight: '600', // Semi-bold
            },
            h4: {
              color: theme('colors.deep-teal'),
              fontFamily: theme('fontFamily.heading').join(', '),
              fontWeight: '600', // Semi-bold
            },
            // Add other elements like blockquotes, code, etc. if needed
            blockquote: {
              color: theme('colors.charcoal'),
              borderLeftColor: theme('colors.mint-green'),
              fontStyle: 'normal',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              color: theme('colors.berry-purple'),
              backgroundColor: theme('colors.light-gray'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            // Ensure strong uses font-body semibold
            strong: {
              color: 'inherit', // Inherit color from parent
              fontWeight: theme('fontWeight.semibold'),
              fontFamily: theme('fontFamily.body').join(', '),
            },
          },
        },
      }),
    },
  },
  plugins: [
     require('@tailwindcss/typography'), // Ensure plugin is active
  ],
};
