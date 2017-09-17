const express = require('express');
const debug = require('debug')('spa-starter:dev');
const webpack = require('webpack');
const config = require('../../config/webpack.dev');
const dev = require('../../config/project.dev');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: '/',
  stats: {
    colors: true,
  },
}));

app.use(require('webpack-hot-middleware')(compiler, {
  path: dev.server.hmr.path,
}));

app.listen(dev.server.port);
debug(`Server is now running at ${dev.server.url}.`);
