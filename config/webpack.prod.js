const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const merge = require('webpack-merge');
const paths = require('./project.paths');
const common = require('./webpack.common');

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin([
      paths.dist(),
    ], {
      root: paths.root(),
    }),
    new ExtractTextPlugin({
      filename: 'styles/[name].[contenthash].css',
      allChunks: true,
    }),
  ],
});
