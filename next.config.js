/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
// const optimizedImages = import('next-optimized-images');

module.exports = withPlugins([
  // [
  //   optimizedImages,
  //   {
  //     /* config for next-optimized-images */
  //     handleImages: ['jpeg', 'png']
  //   }
  // ],
  {
    reactStrictMode: true,
    // next/image WITH 3rd party image optimization
    // images: {
    //   loader: 'custom',
    //   loaderFile: './loader.js',
    // },
    // next/image WITH unoptimized
    images: {
      unoptimized: true,
    },
    // next/image WITH fake loader
    // images: {
    //   loader: 'custom',
    // },
    // To make sub_directory deploy works(for css, js files)
    // assetPrefix: '/next',


  }
]);