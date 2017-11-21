import React from 'react';
import { Route } from 'react-router';
import { SamplePage } from './index';

export default () => (
  <Route
    path='/sample-page'
    exact
    component={SamplePage}
  />
);
