export const setupHome = () => require.ensure([], require => {
  return require('./index').Home;
}, 'home');
