module.exports = {
  images: {
    unoptimized: false, // Enable image optimization
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
    optimizeFonts: true, // Enables font optimization for production builds
    scrollRestoration: true, // Maintains scroll position on navigation
    nextScriptWorkers: true, // Enables next.js script workers for improved performance
    images: {
      layout: 'fill', // Makes images fully responsive and prevents layout shift issues
    },
    metadataBase: 'https://jilikoni-tea.vercel.app/', // Set metadataBase for handling SEO and relative URLs correctly
  },
  productionBrowserSourceMaps: false, // Disable source maps in production for better performance
  favicon: '/public/icons/favicon.ico', // Ensure favicon.ico is served correctly from the public directory
};
