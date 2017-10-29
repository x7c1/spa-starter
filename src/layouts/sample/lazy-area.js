import html from './lazy-area.html';
import './lazy-area.scss';

const debug = require('debug')('spa-starter:lazy-area');

const nodes = {
  get area() {
    return document.getElementById('sample-lazy-load');
  },
  get button() {
    return document.getElementById('lazy-load-button');
  },
};

const createButton = ({ onLoad }) => {
  nodes.button.onclick = event => {
    debug('clicked!', event);
    import(/* webpackChunkName: 'content-sample' */ './lazy-content').then(module => {
      onLoad({
        createdAt: new Date(),
        loadedAt: module.loadedDate,
      });
    });
  };
  return nodes.button;
};

const createListener = element => event => {
  const node = document.createElement('p');
  const diff = event.createdAt.getTime() - event.loadedAt.getTime();
  node.innerHTML = `elapsed msec: ${diff}`;
  element.appendChild(node);
};

export const getHtml = () => html;

export const render = () => {
  debug('-> render');

  nodes.area.appendChild(createButton({
    onLoad: createListener(nodes.area),
  }));
};

export const clean = () => {
  debug('-> clean');

  while(nodes.area.firstChild) {
    nodes.area.removeChild(nodes.area.firstChild);
  }
};
