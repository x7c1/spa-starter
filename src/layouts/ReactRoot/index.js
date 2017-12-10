import React from 'react';
import { Provider } from 'react-redux';
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
      <Provider store={this.props.store.rawStore}>
        <Router history={history}>
          {this.props.routes}
        </Router>
      </Provider>
    );
  }
}
