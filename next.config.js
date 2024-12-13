module.exports = {
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  webpack(config) {
    const UnusedWebpackPlugin = require('unused-webpack-plugin');

    if (!UnusedWebpackPlugin) {
      throw new Error('Failed to load UnusedWebpackPlugin. Please check if the package is installed correctly.');
    }

    config.plugins.push(
      new UnusedWebpackPlugin({
        patterns: ['src/**/*.{js,jsx,ts,tsx}'],
        exclude: ['!node_modules/**/*'],
      })
    );

    return config;
  },
  experimental: {
    metadataBase: 'http://localhost:3000', // Update this with your Next.js development server URL
  },
};
