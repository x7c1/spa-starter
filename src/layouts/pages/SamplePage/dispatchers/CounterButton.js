import { ReduxCapsule } from 'redux-capsule';
import { increase } from '../counter/actions';

export class CounterButton extends ReduxCapsule {

  onClick = () => {
    this.dispatch(increase(1));
  };

  get label() {
    return `increment counter : ${this._currentCount}`;
  }

  get _currentCount() {
    return this.state.sampleCounter.count;
  }
}
