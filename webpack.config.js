'use strict';

const path = require('path'),
      webpack = require('webpack');

let config = {
  entry: {
    app: './src/js/app.js'
  },
  output: {
    filename: 'app.js'
  },
  resolve: {
    root: [path.join(__dirname, 'node_modules')],
    extensions: ['', '.webpack.js', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};

module.exports = config;
