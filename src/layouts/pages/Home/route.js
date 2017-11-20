import React from 'react';
import { Route } from 'react-router';
import { Home } from './index';

export default () => (
  <Route path='/' exact component={Home} />
);
