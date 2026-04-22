const path = require('path');
module.exports = {
  entry: './src/index.js',   // starting point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};
