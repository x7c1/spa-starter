import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './Root';
const debug = require('debug')('spa-starter:main');

const root = {
  get node() {
    return document.getElementById('root');
  },
};

export const render = () => {
  debug('-> render');
  ReactDOM.render(<Root />, root.node);
  debug('<- render');
};

export const clean = () => {
  debug('-> clean');
  ReactDOM.unmountComponentAtNode(root.node);
};
