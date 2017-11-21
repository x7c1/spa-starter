import React from 'react';
import { Route } from 'react-router';
import { onCoreLayout } from '../../CoreLayout/onCoreLayout';

const setup = () => require.ensure([], require => {
  return require('./index').SamplePage;
}, 'sample-page');

export default () => (
  <Route
    path='/sample-page'
    exact
    component={onCoreLayout(setup)}
  />
);
