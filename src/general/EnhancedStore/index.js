import { combineReducers } from 'redux';

export class EnhancedStore {

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
