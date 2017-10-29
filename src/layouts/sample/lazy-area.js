import html from './lazy-area.html';
import './lazy-area.scss';

const debug = require('debug')('spa-starter:lazy-area');

const createButton = ({ onLoad }) => {
  const button = document.createElement('button');
  button.innerHTML = 'get or load content';
  button.onclick = event => {
    debug('clicked!', event);
    import(/* webpackChunkName: 'content-sample' */ './lazy-content').then(module => {
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

export const getHtml = () => html;

export const render = () => {
  debug('-> render');
  const lazy = document.getElementById('sample-lazy-load');
  lazy.appendChild(createButton({ onLoad: createListener(lazy) }));
};
