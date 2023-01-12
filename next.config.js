/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const optimizedImages = import('next-optimized-images');

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
      handleImages: ['jpeg', 'png']
    }
  ],
  {
    reactStrictMode: true,
  }
]);