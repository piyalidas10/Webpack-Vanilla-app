const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'eval-cheap-module-source-map',

  devServer: {
    static: './dist',
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },

  /**
   * 'css-loader' only reads CSS. It does NOT inject styles into DOM. To inject styles into the DOM, you need to use 'style-loader' in development mode. In production mode, you might want to extract CSS into separate files using plugins like MiniCssExtractPlugin.
   * 1) css-loader → reads CSS  2) style-loader → injects into <style> tag
   * In development mode, you can use both 'style-loader' and 'css-loader' together to read CSS files and inject them into the DOM. In production mode, you might want to use a plugin like MiniCssExtractPlugin to extract CSS into separate files for better performance and caching.
  */ 
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
