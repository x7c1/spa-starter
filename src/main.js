import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './Root';

const root = {
  get node() {
    return document.getElementById('root');
  },
};

export const render = () => {
  ReactDOM.render(<Root />, root.node);
};

export const clean = () => {
  ReactDOM.unmountComponentAtNode(root.node);
};
