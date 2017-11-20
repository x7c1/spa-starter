const express = require('express');
const debug = require('debug')('spa-starter:dev');
const webpack = require('webpack');
const path = require('path');
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

// https://github.com/jantimon/html-webpack-plugin/issues/145#issuecomment-170554832
app.use('*', (request, response, next) => {
  const filename = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      next(err);
    } else {
      response.set('content-type', 'text/html');
      response.send(result);
      response.end();
    }
  });
});

app.listen(dev.server.port, () => {
  debug(`Server is now running at ${dev.server.url}.`);
});
