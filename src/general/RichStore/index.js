import { combineReducers } from 'redux';

export class RichStore {

  /**
   * @param store - redux store
   */
  constructor(store) {
    this.rawStore = store;
  }

  injectReducers(reducers) {
    this.rawStore.replaceReducer(combineReducers(reducers));
  }
}
