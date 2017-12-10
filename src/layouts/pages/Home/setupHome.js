/**
 * @param {RichStore} store
 */
export const setupHome = store => () => require.ensure([], require => {
  return require('./index').Home;
}, 'home');
