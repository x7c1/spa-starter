import React from 'react';
import { Route } from 'react-router';
import { onCoreLayout } from '../../CoreLayout/onCoreLayout';

const setup = () => require.ensure([], require => {
  return require('./index').Home;
}, 'home');

export default () => (
  <Route
    path='/'
    exact
    component={onCoreLayout(setup)}
  />
);
