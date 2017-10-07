const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('webpack-merge');
const paths = require('./project.paths');
const dist = paths.relative.dist;
const common = require('./webpack.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  output: {
    filename: dist.scripts('[name].[chunkhash].js'),

    // need to set chunkFilename to avoid naming problem
    // https://github.com/webpack/webpack/issues/4861
    chunkFilename: dist.scripts('[name].[chunkhash].js'),
  },
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
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
});
