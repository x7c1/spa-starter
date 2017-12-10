import { applyMiddleware, createStore } from 'redux'
import { seal } from 'general/redux-seal';
import { RichStore } from 'general/RichStore';

const endo = _ => _;

const initialState = {};

/**
 * @type {RichStore}
 */
export const sharedStore = new RichStore(createStore(
  endo,
  initialState,
  applyMiddleware(seal),
));
