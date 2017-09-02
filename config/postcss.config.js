module.exports = context => {
  return {
    plugins: {
      cssnano: {
        autoprefixer: {
          add: true,
          remove: true,
          browsers: ['last 2 versions'],
        },
        discardComments: {
          removeAll: true,
        },

        /*
         discardUnused : false,
         mergeIdents   : false,
         reduceIdents  : false,
         this 'safe' option is almost same as above:
         */
        safe: true,
      },
    },
  };
};
