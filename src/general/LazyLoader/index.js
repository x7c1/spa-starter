import React, { PropTypes } from 'react';

/**
 * render a component given by:
 *   beforeLoad if loadPromise not completed.
 *   afterLoad if loadPromise completed.
 */
export class LazyLoader extends React.Component {

  constructor() {
    super();
    this._isMounted = false;
  }

  componentWillMount() {
    this._startLoading();
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentDidUpdate() {
    this._startLoading();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return this._loaded ?
      this.props.afterLoad(this.state.result) :
      this.props.beforeLoad();
  }

  get _loaded() {
    return this.state && ('result' in this.state);
  }

  _startLoading() {
    if (this._loaded) {
      return;
    }
    this.props.loadPromise()
      .then(result => {
        this._updateLoadedValue(result);
      })
      .catch(error => {
        this.props.onError(error);
      });
  }

  _updateLoadedValue(result) {
    if (!this._isMounted) {
      return;
    }
    if (this._loaded) {
      return;
    }
    this.setState({ result });
  }
}
