import React from 'react';
import { Route } from 'react-router';
import { Home } from './index';
import { CoreLayout } from '../../CoreLayout/index';

export default () => (
  <Route
    path='/'
    exact
    component={props => (
      <CoreLayout>
        <Home />
      </CoreLayout>
    )}
  />
);
