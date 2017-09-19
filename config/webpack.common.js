const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./project.paths');

module.exports = {
  entry: {
    app: [
      paths.src('index.js'),
    ],
  },
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: paths.dist(),
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',

          // required in order to locate css files to sub-directory
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
      template: paths.src('index.html'),
    }),
  ]
};
