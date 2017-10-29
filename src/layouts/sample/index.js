import './index.scss';
import * as imageArea from './image-area';
import * as lazyArea from './lazy-area';

const debug = require('debug')('spa-starter:sample');

const content = {
  get node() {
    return document.getElementById('sample-content');
  }
};

export const render = () => {
  debug('-> render');

  const contents = [
    imageArea.getHtml(),
    lazyArea.getHtml(),
  ];
  content.node.innerHTML = contents.join('\n');

  imageArea.render();
  lazyArea.render();

  debug('<- render');
};

export const clean = () => {
  debug('-> clean');

  imageArea.clean();
  lazyArea.clean();
};
