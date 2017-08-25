var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../', 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          publicPath: '../',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,

                // rf. https://github.com/webpack-contrib/css-loader#importloaders
                importLoaders: 1,
              }
            }, {
              loader: 'postcss-loader',
              options: {
                sourceMap: 'inline',
                config: {
                  path: 'config/postcss.config.js',
                },
              }
            },
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          publicPath: '../',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,

                // rf. https://github.com/webpack-contrib/css-loader#importloaders
                importLoaders: 2,
              }
            }, {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: {
                  path: 'config/postcss.config.js',
                },
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              }
            },
          ]
        })
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // limit: 8192,
              limit: 1024,

              // used by file-loader if image-size > limit
              name: 'media/[name].[hash].[ext]',
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'styles/[name].[contenthash].css',
      allChunks: true,
    })
  ]
};
