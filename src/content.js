import _ from 'lodash';
import './index.css';
import './index.scss';
import owl from './assets/owl.png'

const debug = require('debug')('spa-starter:sample');

const createImage = () => {
  const image = new Image();
  image.src = owl;
  return image;
};

const createElement = () => {
  const element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'webpack'], ', ');
  return element;
};

const createButton = () => {
  const button = document.createElement('button');
  button.innerHTML = 'load scripts';
  button.onclick = event => {
    debug(event);
  };
  return button;
};

export const render = () => {
  debug('[init] render');

  const lazy = document.getElementById('sample-lazy-load');
  lazy.appendChild(createButton());

  const area = document.getElementsByClassName('js-area')[0];
  area.appendChild(createImage());

  const element = createElement();
  document.body.insertBefore(element, document.body.firstChild);
  debug('[done] render');
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
