export class Sealer {

  constructor({ dispatch, getState }) {
    this.dispatch = dispatch;
    this.getState = getState;
  }

  get state() {
    return this.getState();
  }
}
