module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '992px',
      lg: '1200px',
      xl: '1440px',
      '2xl': '1920px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      black: '#000000',
      white: '#ffffff',
      dark: '#272242',
      light: '#F0EDEA',
      primary: '#3D3664',
    },
    spacing: {
      0: '0',
      1: '0.1rem',
      2: '0.2rem',
      4: '0.4rem',
      8: '0.8rem',
      12: '1.2rem',
      16: '1.6rem',
      24: '2.4rem',
      32: '3.2rem',
      40: '4rem',
      48: '4.8rem',
      64: '6.4rem',
      96: '9.6rem',
    },
    fontFamily: {
      display: [''],
      body: ['var(--font-inter)', ...require('tailwindcss/defaultTheme').fontFamily.sans],
    },
    fontSize: {
      base: '2rem',
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      normal: '1.5',
    },
    // tracking: {},
    borderRadius: {
      none: '0',
      sm: '10px',
      DEFAULT: '15px',
      lg: '25px',
      full: '9999px',
    },
    borderWidth: {
      none: '0',
      sm: '1px',
      DEFAULT: '2px',
      lg: '4px',
    },
    extend: {
      // aspectRatio: {
      //   '4/3': '4 / 3',
      //   '3/4': '3 / 4',
      // },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(1, 0, 0, 1)',
        'in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
        'in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        'in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
        'in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        'in-sine': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
        'in-back': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
        'out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        'out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'out-sine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
        'out-back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        'in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
        'in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
        'in-out-sine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
        'in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
        'in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        'in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'swift-out': 'cubic-bezier(0.55, 0, 0.1, 1)',
      },
    },
  },
  safelist: [
    // {
    //   pattern: /bg-.+/,
    // },
  ],
  plugins: [],
}
