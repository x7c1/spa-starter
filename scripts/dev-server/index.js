const express = require('express');
const debug = require('debug')('spa-starter:dev');
const config = require('../../config/webpack.dev');
const webpack = require('webpack');

const app = express();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: '/',
  stats: {
    colors: true,
  },
}));

app.use(require('webpack-hot-middleware')(compiler, {
  path: '/__webpack_hmr',
}));

app.listen(3000);

debug(`Server is now running at http://localhost:3000.`);
