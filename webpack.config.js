const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
 
module.exports = {
  // output is where the files should be sent when they've been bundled with webpack
  // it will take the src files, pass them through presets and loaders and create an output file
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js', // our overall react app code in this file
  },
  // the server webpack comes bundled with
  devServer: {
    port: 3010,
    watchContentBase: true, // watching for changes
    historyApiFallback: true
  },
  // webpack taking src files and compiling into a browser ready bundle
  module: {
    rules: [
      {
        // testing the file formats
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // what to do when you find one of these files
        use: {
          loader: 'babel-loader' // load into webpack using the babel-loader
        }
      },
      {
        // handling sass files outside of the babel-loader above
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin(), new Dotenv({
    systemvars: true,
  })],
};