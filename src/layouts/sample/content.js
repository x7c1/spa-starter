import _ from 'lodash';
import './index.scss';
import * as imageArea from './image-area';

const debug = require('debug')('spa-starter:sample');

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
  contentArea.innerHTML = imageArea.getHtml();

  const lazy = document.getElementById('sample-lazy-load');
  lazy.appendChild(createButton({ onLoad: createListener(lazy) }));

  const element = createElement();
  document.body.insertBefore(element, document.body.firstChild);

  imageArea.render();
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
