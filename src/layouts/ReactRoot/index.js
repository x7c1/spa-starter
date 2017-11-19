import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Home } from '../pages/Home';
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
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    );
  }
}
