import { ReduxSealer } from './ReduxSealer';

export const seal = ({ dispatch, getState }) => next => action => {
  if (action.prototype instanceof ReduxSealer) {
    return new action({ dispatch, getState });
  }
  return next(action);
};
