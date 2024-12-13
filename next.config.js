module.exports = {
  images: {
    unoptimized: true, // Disable image optimization to keep images unoptimized
    formats: ['image/png'], // Specify only PNG format to avoid conversion
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable linting during builds
  },
  output: 'standalone', // Set the output mode to standalone for full static export
  webpack(config, options) {
    const UnusedWebpackPlugin = require('unused-webpack-plugin');

    if (!UnusedWebpackPlugin) {
      throw new Error('Failed to load UnusedWebpackPlugin. Please check if the package is installed correctly.');
    }

    config.plugins.push(
      new UnusedWebpackPlugin({
        patterns: ['src/**/*.{js,jsx,ts,tsx}'], // Patterns to search for unused files
        exclude: ['!node_modules/**/*'], // Exclude node_modules directory from the check
      })
    );

    return config;
  },
  experimental: {
    scrollRestoration: true, // Maintains scroll position on navigation
    nextScriptWorkers: true, // Enables next.js script workers for improved performance
  },
  head: {
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }, // Specify favicon link for the site
    ],
  },
};
