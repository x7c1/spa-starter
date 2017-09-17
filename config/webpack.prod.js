const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin([
      path.resolve(__dirname, '..', 'dist'),
    ], {
      root: path.resolve(__dirname, '..'),
    }),
    new ExtractTextPlugin({
      filename: 'styles/[name].[contenthash].css',
      allChunks: true,
    }),
  ],
});
