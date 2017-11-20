import React from 'react';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './ReactRoot.scss';

const history = createBrowserHistory();

const debug = require('debug')('spa-starter:ReactRoot');

export class ReactRoot extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    debug('-> render');
    return (
      <Router history={history}>
        {this.props.routes}
      </Router>
    );
  }
}
