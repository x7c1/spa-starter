import React from 'react';
const debug = require('debug')('spa-starter:Root');

export class Root extends React.Component {
  render() {
    debug('-> render');
    return (
      <span>hello, react</span>
    );
  }
}
