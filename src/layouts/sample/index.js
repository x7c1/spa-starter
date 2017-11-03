import './index.scss';
import { ImageArea } from './ImageArea';
import { LazyArea }  from './LazyArea';

const debug = require('debug')('spa-starter:sample');

const nodes = {
  get content() {
    return document.getElementById('sample-content');
  }
};

const area = ImageArea.append(LazyArea);

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
