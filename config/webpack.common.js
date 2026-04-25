const path = require('path');

/**
 * HtmlWebpackPlugin
 * Generates an HTML file automatically
 * Injects your bundled JS into <script> tag
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { // This exports your configuration object. Webpack reads this file when you run:
  entry: {
    main: './src/index.js', // Entry Point (Starting Point) for your application. Webpack will start building the dependency graph from this file and include all the modules and dependencies that are imported in this file.
  },

  // Output configuration tells Webpack where to emit the bundles it creates and how to name them. In this case, it will output the bundled files to a directory named 'dist' and use content hashing for the filenames to enable better caching.
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js', // This option specifies the naming convention for the output files. [name] will be replaced with the name of the entry point (in this case, 'main'), and [contenthash] will be replaced with a unique hash based on the content of the file. This helps with cache busting, ensuring that browsers load the new version of the file when it changes.
    assetModuleFilename: 'assets/[hash][ext][query]', // This option specifies the naming convention for asset modules (like images). It will place them in an 'assets' directory and use a hash for the filename to ensure uniqueness and cache busting.
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // This rule tells Webpack to use Babel to transpile JavaScript files. It tests for files that end with .js, excluding those in the node_modules directory, and applies the babel-loader to them. This allows you to use modern JavaScript features while ensuring compatibility with older browsers.
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        type: 'asset/resource', // This rule tells Webpack how to handle image files. It tests for files with the specified extensions (png, jpg, svg, gif) and treats them as asset resources. This means that Webpack will emit these files to the output directory and return their public URL. The assetModuleFilename option in the output configuration will determine how these files are named and where they are placed in the output directory.
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // starting point for the HTML template
    }),
  ],

  resolve: {
    extensions: ['.js'],
  },
};
