const express = require('express');
const debug = require('debug')('spa-starter:dev');
const config = require('../../config/webpack.config');
const webpack = require('webpack');

const app = express();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: '/',
}));

app.listen(3000);

debug(`Server is now running at http://localhost:3000.`);
