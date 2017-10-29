import _ from 'lodash';
import './index.scss';
import * as imageArea from './image-area';
import * as lazyArea from './lazy-area';

const debug = require('debug')('spa-starter:sample');

const createElement = () => {
  const element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'webpack'], ', ');
  return element;
};

export const render = () => {
  debug('[init] render');

  const contentArea = document.getElementById('sample-content');
  contentArea.innerHTML = [
    imageArea.getHtml(),
    lazyArea.getHtml(),
  ].join('\n');

  const element = createElement();
  document.body.insertBefore(element, document.body.firstChild);

  imageArea.render();
  lazyArea.render();
  debug('<- render');
};

export const clean = () => {
  debug('[init] clean');
  document.body.removeChild(document.body.firstChild);

  const area = document.getElementsByClassName('js-area')[0];
  area.removeChild(area.firstChild);

  const lazy = document.getElementById('sample-lazy-load');
  while (lazy.firstChild) {
    lazy.removeChild(lazy.firstChild);
  }
};
