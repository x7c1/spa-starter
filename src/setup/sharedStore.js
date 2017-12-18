import { applyMiddleware, createStore } from 'redux'
import { capsule } from 'redux-capsule';
import { EnhancedStore } from 'general/EnhancedStore';

const endo = _ => _;

/**
 * @type {EnhancedStore}
 */
export const sharedStore = new EnhancedStore(createStore(
  endo,
  applyMiddleware(capsule),
));
