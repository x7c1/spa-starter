import React from 'react';
import { CoreLayout } from './index';
import { LazyLoader } from '../../general/LazyLoader';

export const onCoreLayout = loadPromise => props => {
  return (
    <CoreLayout>
      <LazyLoader
        loadPromise={loadPromise}
        beforeLoad={() => <div className='react-sample-area' />}
        afterLoad={Component => <Component />}
        onError={error => {
          console.error('onCoreLayout', '[unexpected]', error);
        }}
      />
    </CoreLayout>
  );
};
