const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/index.js',

    output: {
      filename: isProd ? '[name].[contenthash].js' : 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true, // cleans dist folder
    },

    mode: isProd ? 'production' : 'development',

    devtool: isProd ? 'source-map' : 'inline-source-map',

    devServer: {
      static: './dist',
      port: 3000,
      open: true,
      hot: true,
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: 'asset/resource',
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),

      ...(isProd
        ? [
            new MiniCssExtractPlugin({
              filename: '[name].[contenthash].css',
            }),
          ]
        : []),
    ],

    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  };
};
