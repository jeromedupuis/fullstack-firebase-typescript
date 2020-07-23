const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  target: 'server',
  distDir: '../../functions/next',
  typescript: {
    ignoreDevErrors: false,
    ignoreBuildErrors: false,
  },
  webpack: (config, options) => {
    config.plugins = config.plugins.filter(plugin => {
      return plugin.constructor.name !== "ForkTsCheckerWebpackPlugin";
    });

    config.plugins.push(
      new ForkTsCheckerWebpackPlugin({
        reportFiles: ["./**/*.{ts,tsx}"],
      }),
    );
    return config;
  }
}
