import React from 'react';
import './ReactRoot.scss';

const debug = require('debug')('spa-starter:ReactRoot');

export class ReactRoot extends React.Component {
  render() {
    debug('-> render');
    return (
      <div className='react-sample-area'>
        <h3>Hello, React!</h3>
        <span>sample text</span>
      </div>
    );
  }
}
