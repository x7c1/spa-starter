export class CounterState {
  static empty() {
    return new CounterState({
      count: 0,
    });
  }

  constructor({ count }) {
    this.count = count;
  }

  increaseCountBy(number) {
    return new CounterState({
      count: this.count + number,
    });
  }
}
