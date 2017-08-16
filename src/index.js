import _ from 'lodash';
import './index.scss';
import owl from './assets/owl.png'

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

const render = () => {
  const element = createElement();

  const area = document.getElementsByClassName('sample-image-area')[0];
  area.insertBefore(createImage(), area.firstChild);

  document.body.insertBefore(element, document.body.firstChild);
};

render();
