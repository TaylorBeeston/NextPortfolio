const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [
    withPWA,
    {
      pwa: {
        dest: 'public',
      },
    },
  ],
  [optimizedImages, {}],
]);
