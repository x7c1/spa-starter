export const setupSamplePage = () => require.ensure([], require => {
  return require('./index').SamplePage;
}, 'sample-page');
