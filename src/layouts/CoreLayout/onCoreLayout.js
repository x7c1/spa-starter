import React from 'react';
import { LazyLoader } from 'general/LazyLoader';
import { CoreLayout } from './index';

export const onCoreLayout = loadComponent => props => {
  return (
    <CoreLayout>
      <LazyLoader
        loadPromise={loadComponent}
        beforeLoad={() => <div className='react-sample-area' />}
        afterLoad={Component => <Component />}
        onError={error => {
          console.error('onCoreLayout', '[unexpected]', error);
        }}
      />
    </CoreLayout>
  );
};
