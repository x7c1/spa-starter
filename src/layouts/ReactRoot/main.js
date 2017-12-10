import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';

import { ReactRoot } from './index';
import { onCoreLayout } from '../CoreLayout/onCoreLayout';
import { setupHome } from '../pages/Home/setupHome';
import { setupSamplePage } from '../pages/SamplePage/setupSamplePage';

const debug = require('debug')('spa-starter:main');

const root = {
  get node() {
    return document.getElementById('react-root');
  },
};

/**
 * @param {RichStore} store
 */
export const render = store => {
  debug('-> render');

  const routes = (
    <Switch>
      <Route
        path='/'
        exact
        component={onCoreLayout(setupHome(store))}
      />
      <Route
        path='/sample-page'
        exact
        component={onCoreLayout(setupSamplePage(store))}
      />
    </Switch>
  );
  ReactDOM.render(
    <ReactRoot {...{ routes, store }} />,
    root.node
  );
  debug('<- render');
};

export const clean = () => {
  debug('-> clean');
  ReactDOM.unmountComponentAtNode(root.node);
};
