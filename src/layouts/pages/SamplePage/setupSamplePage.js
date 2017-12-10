/**
 * @param {RichStore} store
 */
export const setupSamplePage = store => () => require.ensure([], require => {

  store.injectReducers({
    sampleCounter: require('./counter/counterReducer').counterReducer,
  });

  return require('./index').SamplePage;
}, 'sample-page');
