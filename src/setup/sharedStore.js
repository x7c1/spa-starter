import { createStore } from 'redux'
import { RichStore } from 'general/RichStore';

const rawStore = createStore(x => x);

/**
 * @type {RichStore}
 */
export const sharedStore = new RichStore(rawStore);
