import owl from './assets/owl.png'
import html from './image-area.html';
import './image-area.scss';

const debug = require('debug')('spa-starter:image-area');

const nodes = {
  get content() {
    return document.getElementsByClassName('image-area')[0];
  },
  get imageArea() {
    return document.getElementsByClassName('js-area')[0];
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
  nodes.imageArea.appendChild(createImage());
};

export const clean = () => {
  debug('-> clean');

  while(nodes.content.firstChild) {
    nodes.content.removeChild(nodes.content.firstChild);
  }
};
