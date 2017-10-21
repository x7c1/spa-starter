import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './Main';

export const render = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );
};
