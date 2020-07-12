module.exports = {
  purge: {
    content: ['./**/*.tsx'],
    whitelist: ['mode-dark'],
  },
  theme: {
    extend: {},
    filter: {
      'blur-1': 'blur(1px)',
      'blur-2': 'blur(2px)',
      'blur-3': 'blur(3px)',
      'blur-4': 'blur(4px)',
      'blur-5': 'blur(5px)',
      'blur-6': 'blur(6px)',
      'blur-7': 'blur(7px)',
      'blur-8': 'blur(8px)',
    },
    backdropFilter: {
      'blur-1': 'blur(1px)',
      'blur-2': 'blur(2px)',
      'blur-3': 'blur(3px)',
      'blur-4': 'blur(4px)',
      'blur-5': 'blur(5px)',
      'blur-6': 'blur(6px)',
      'blur-7': 'blur(7px)',
      'blur-8': 'blur(8px)',
    },
    minWidth: (theme) => ({
      '0': '0',
      ...theme('spacing'),
      full: '100%',
    }),
    maxWidth: (theme) => ({
      '0': '0',
      ...theme('spacing'),
      full: '100%',
      text: '80ch',
    }),
    minHeight: (theme) => ({
      '0': '0',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
      '4/5-screen': '80vh',
    }),
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'hover', 'responsive'],
    borderColor: ['dark'],
    textColor: ['dark'],
    typography: ['responsive'],
  },
  plugins: [require('tailwindcss-filters'), require('tailwindcss-dark-mode')()],
};
