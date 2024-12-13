/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true 
  },
  webpack(config) {
    // Load the UnusedWebpackPlugin
    const UnusedWebpackPlugin = require('unused-webpack-plugin');

    if (!UnusedWebpackPlugin) {
      throw new Error('Failed to load UnusedWebpackPlugin. Please check if the package is installed correctly.');
    }

    config.plugins.push(
      new UnusedWebpackPlugin({
        patterns: ['src/**/*.{js,jsx,ts,tsx}'], // Specify the directories and file types you want to check
        exclude: ['!node_modules/**/*'], // Optionally exclude certain files
      })
    );

    return config;
  },
  head: {
    link: [
      { 
        rel: 'icon', 
        type: 'image/png', 
        href: '/icons/favicon.png' // Update this path to match your favicon file in the public/icons directory
      },
    ],
  },
};

module.exports = nextConfig;
