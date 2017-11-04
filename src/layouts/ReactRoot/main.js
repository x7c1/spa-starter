import React from 'react';
import ReactDOM from 'react-dom';
import { ReactRoot } from './index';
const debug = require('debug')('spa-starter:main');

const root = {
  get node() {
    return document.getElementById('react-root');
  },
};

export const render = () => {
  debug('-> render');
  ReactDOM.render(<ReactRoot />, root.node);
  debug('<- render');
};

export const clean = () => {
  debug('-> clean');
  ReactDOM.unmountComponentAtNode(root.node);
};
