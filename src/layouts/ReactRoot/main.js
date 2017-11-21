import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router';

import { ReactRoot } from './index';
const debug = require('debug')('spa-starter:main');

const root = {
  get node() {
    return document.getElementById('react-root');
  },
};

export const render = () => {
  debug('-> render');

  const routes = (
    <Switch>
      {require('../pages/Home/route').default()}
      {require('../pages/SamplePage/route').default()}
    </Switch>
  );
  ReactDOM.render(
    <ReactRoot {...{ routes }} />,
    root.node
  );
  debug('<- render');
};

export const clean = () => {
  debug('-> clean');
  ReactDOM.unmountComponentAtNode(root.node);
};
