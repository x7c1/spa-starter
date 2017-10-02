const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('webpack-merge');
const paths = require('./project.paths');
const dist = paths.relative.dist;
const common = require('./webpack.common');

module.exports = merge(common, {
  output: {
    filename: dist.scripts('[name].[chunkhash].js'),
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
  ],
});
