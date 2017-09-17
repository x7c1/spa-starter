const path = require('path');

const fromRoot = (...names) => {
  const root = path.resolve(__dirname, '..');
  const args = [root].concat(names);
  return path.resolve(...args);
};

module.exports = {
  root: {
    directory: fromRoot('.'),
  },
  dist: {
    directory: fromRoot('dist'),
  },
};
