const path = require('path');

const fromRoot = (...names) => {
  const root = path.resolve(__dirname, '..');
  const args = [root].concat(names);
  return path.resolve(...args);
};

const from = name => {
  return fromRoot.bind(null, name);
};

module.exports = {
  root: from('.'),
  src: from('src'),
  dist: from('dist'),
};
