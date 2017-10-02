const debug = require('debug')('spa-starter:content-sample');

debug('content-sample.js has loaded!');

export const currentDate = () => {
  const date = new Date();
  debug('current...', date);
  return date;
};
