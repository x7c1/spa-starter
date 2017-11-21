import React from 'react';

export const CoreLayout = props => {
  return (
    <div className='react-sample-area'>
      <h3>Hello, React!</h3>
      {props.children}
    </div>
  );
};
