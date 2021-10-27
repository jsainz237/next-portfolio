const withTM = require('next-transpile-modules')([
  'three/examples/jsm/loaders/GLTFLoader',
  'd3-geo',
])

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
})
