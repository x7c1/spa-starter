import html from './lazy-area.html';
import './lazy-area.scss';
import { Area } from './Area';

const debug = require('debug')('spa-starter:lazy-area');

const nodes = {
  label: 'sample-lazy-load',

  get content() {
    return document.getElementById(this.label);
  },
  get button() {
    return document.getElementById('lazy-load-button');
  },
};

const onClickListener = ({ onLoad }) => event => {
  debug('clicked!', event);
  import(/* webpackChunkName: 'lazy-content' */ './lazy-content').then(module => {
    onLoad({
      createdAt: new Date(),
      loadedAt: module.loadedDate,
    });
  });
};

const onLoadListener = element => event => {
  const node = document.createElement('p');
  const diff = event.createdAt.getTime() - event.loadedAt.getTime();
  node.innerHTML = `elapsed msec: ${diff}`;
  element.appendChild(node);
};

const render = () => {
  debug('-> render');
  nodes.button.onclick = onClickListener({
    onLoad: onLoadListener(nodes.content),
  });
  nodes.content.appendChild(nodes.button);
};

export const lazyArea = Area.from(nodes, { html, render });
