import { CounterState } from './CounterState';
import { INCREASE_COUNT } from './actions';

/**
 * @param {CounterState} state
 * @param {Object} action - see actions.js
 */
export const counterReducer = (state = CounterState.empty(), action) => {
  if (action.type === INCREASE_COUNT) {
    return state.increaseCountBy(action.number);
  }
  return state;
};
