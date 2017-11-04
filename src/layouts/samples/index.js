import { ImageArea } from './ImageArea';
import { LazyArea }  from './LazyArea';
import './index.scss';

const debug = require('debug')('spa-starter:sample');

const nodes = {
  get content() {
    return document.getElementById('webpack-samples');
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
