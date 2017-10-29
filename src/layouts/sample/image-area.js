import owl from './assets/owl.png'
import html from './image-area.html';
import './image-area.scss';

const debug = require('debug')('spa-starter:image-area');

const nodes = {
  get area() {
    return document.getElementsByClassName('image-area')[0];
  },
};

const createImage = () => {
  const image = new Image();
  image.src = owl;
  return image;
};

export const getHtml = () => html;

export const render = () => {
  debug('-> render');

  const area = document.getElementsByClassName('js-area')[0];
  area.appendChild(createImage());
};

export const clean = () => {
  debug('-> clean');

  while(nodes.area.firstChild) {
    nodes.area.removeChild(nodes.area.firstChild);
  }
};
