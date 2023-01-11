/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withPlugins = require('next-compose-plugins');
const optimizedImages = import('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
    optimizeImagesInDev: true,
    handleImages: ['jpeg', 'png']
  }],

  // your other plugins here

], nextConfig);