import _ from 'lodash';
import './index.scss';
import owl from './assets/owl.png'
import imageArea from './image-area.html';
import './image-area.scss';

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

const createButton = ({ onLoad }) => {
  const button = document.createElement('button');
  button.innerHTML = 'click me!';
  button.onclick = event => {
    debug('clicked!', event);
    import(/* webpackChunkName: 'content-sample' */ './content-sample').then(module => {
      onLoad({
        createdAt: new Date(),
        loadedAt: module.loadedDate,
      });
    });
  };
  return button;
};

const createListener = element => event => {
  const node = document.createElement('p');
  const diff = event.createdAt.getTime() - event.loadedAt.getTime();
  node.innerHTML = `elapsed msec: ${diff}`;
  element.appendChild(node);
};

export const render = () => {
  debug('[init] render');

  const contentArea = document.getElementById('sample-content');
  contentArea.innerHTML = imageArea;

  const lazy = document.getElementById('sample-lazy-load');
  lazy.appendChild(createButton({ onLoad: createListener(lazy) }));

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
