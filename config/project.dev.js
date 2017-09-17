const server = (() => {
  const host = 'localhost';
  const port = 3000;
  const hmr = '/__webpack_hmr';
  const url = `http://${host}:${port}`;
  return {
    port,
    url,
    hmr: {
      path: hmr,
      url: `${url}${hmr}`
    },
  };
})();

module.exports = {
  server,
};
