import React from 'react';
import { Route } from 'react-router';
import { SamplePage } from './index';
import { CoreLayout } from '../../CoreLayout/index';

export default () => (
  <Route
    path='/sample-page'
    exact
    component={props => (
      <CoreLayout>
        <SamplePage />
      </CoreLayout>
    )}
  />
);
