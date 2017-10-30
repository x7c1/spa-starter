import './index.scss';
import { imageArea } from './image-area';
import { lazyArea }  from './lazy-area';

const debug = require('debug')('spa-starter:sample');

const nodes = {
  get content() {
    return document.getElementById('sample-content');
  }
};

const area = imageArea.append(lazyArea);

export const render = () => {
  debug('-> render');

  area.onHtml(html => {
    nodes.content.innerHTML = html;
  });
  debug('<- render');
};

export const clean = () => {
  debug('-> clean');

  area.clean();
};
