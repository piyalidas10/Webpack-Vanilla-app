const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',

  /**
   * 'css-loader' only reads CSS. It does NOT inject styles into DOM. To inject styles into the DOM, you need to use 'style-loader' in development mode. In production mode, you might want to extract CSS into separate files using plugins like MiniCssExtractPlugin.
   * 1) css-loader → reads CSS  2) style-loader → injects into <style> tag
   * In development mode, you can use both 'style-loader' and 'css-loader' together to read CSS files and inject them into the DOM. In production mode, you might want to use a plugin like MiniCssExtractPlugin to extract CSS into separate files for better performance and caching.
  */ 
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],

    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },

    runtimeChunk: 'single',
  },
});
