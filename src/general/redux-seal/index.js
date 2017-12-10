import { Sealer } from './Sealer';

export const seal = ({ dispatch, getState }) => next => action => {
  if (action.prototype instanceof Sealer) {
    return new action({ dispatch, getState });
  }
  return next(action);
};
