import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './Main';

const root = {
  get node() {
    return document.getElementById('root');
  },
};

export const render = () => {
  ReactDOM.render(<Main />, root.node);
};

export const clean = () => {
  ReactDOM.unmountComponentAtNode(root.node);
};
