const path = require('path');

module.exports = function(api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@constants': './src/constants',
            '@images': './src/images',
            '@modules': './src/modules',
            '@modals': './src/modals',
            '@pages': './src/pages',
            '@utils': './src/utils'
          }
        },
      ],
    ],
  };
};
