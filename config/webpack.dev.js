const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  entry: {
    app: [
      `webpack-hot-middleware/client?path=/__webpack_hmr`,
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    // HMR not supported by extract-text-webpack-plugin
    // https://github.com/webpack-contrib/extract-text-webpack-plugin/blob/master/README.md#usage
    new ExtractTextPlugin({ disable: true }),
  ],
});
