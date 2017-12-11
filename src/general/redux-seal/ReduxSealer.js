export class ReduxSealer {

  constructor({ dispatch, getState }) {
    this.dispatch = dispatch;
    this.getState = getState;
  }

  get state() {
    return this.getState();
  }
}
