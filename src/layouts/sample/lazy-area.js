import html from './lazy-area.html';
import './lazy-area.scss';

const debug = require('debug')('spa-starter:lazy-area');

const nodes = {
  get content() {
    return document.getElementById('sample-lazy-load');
  },
  get button() {
    return document.getElementById('lazy-load-button');
  },
};

const createButton = ({ onLoad }) => {
  nodes.button.onclick = event => {
    debug('clicked!', event);
    import(/* webpackChunkName: 'lazy-content' */ './lazy-content').then(module => {
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

  nodes.content.appendChild(createButton({
    onLoad: createListener(nodes.content),
  }));
};

export const clean = () => {
  debug('-> clean');

  while(nodes.content.firstChild) {
    nodes.content.removeChild(nodes.content.firstChild);
  }
};
