import owl from './assets/owl.png'
import html from './ImageArea.html';
import copyright from './copyright.html';
import { SampleArea } from '../SampleArea';
import './ImageArea.scss';

const debug = require('debug')('spa-starter:image-area');

const nodes = {
  label: 'image-area',

  get content() {
    return document.getElementsByClassName(this.label)[0];
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

const render = () => {
  debug('-> render');
  nodes.imageArea.appendChild(createImage());
  debug(copyright);
};

export const ImageArea = SampleArea.from(nodes, { html, render });
