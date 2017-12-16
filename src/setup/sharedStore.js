import { applyMiddleware, createStore } from 'redux'
import { capsule } from 'redux-capsule';
import { RichStore } from 'general/RichStore';

const endo = _ => _;

/**
 * @type {RichStore}
 */
export const sharedStore = new RichStore(createStore(
  endo,
  applyMiddleware(capsule),
));
