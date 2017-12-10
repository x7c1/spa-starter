import { Sealer } from 'general/redux-seal/Sealer';
import { increase } from '../counter/actions';

export const counterButton = () => class CounterButton extends Sealer {

  onClick = () => {
    this.dispatch(increase(1));
  };

  get label() {
    return `increment counter : ${this._currentCount}`;
  }

  get _currentCount() {
    return this.state.sampleCounter.count;
  }
};
