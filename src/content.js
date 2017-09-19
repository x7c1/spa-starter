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

export const render = () => {
  debug('[init] render');
  const element = createElement();

  const area = document.getElementsByClassName('js-area')[0];
  area.appendChild(createImage());

  document.body.insertBefore(element, document.body.firstChild);
  debug('[done] render');
};

export const clean = () => {
  debug('[init] clean');
  document.body.removeChild(document.body.firstChild);
  const area = document.getElementsByClassName('js-area')[0];
  area.removeChild(area.firstChild);
};
