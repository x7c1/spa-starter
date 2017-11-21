import React from 'react';
import { CoreLayout } from './index';
import { LazyLoader } from '../../general/LazyLoader';

export const onCoreLayout = loadPromise => props => {
  return (
    <CoreLayout>
      <LazyLoader
        beforeLoad={() => null}
        afterLoad={Component => <Component />}
        loadPromise={loadPromise}
      />
    </CoreLayout>
  );
};
