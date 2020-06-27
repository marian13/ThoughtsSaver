const path = require('path');

module.exports = function(api) {
  api.cache(true);

  const rootImportOpts = {
    paths: [
      {
        root: __dirname,
        rootPathPrefix: '~/',
        rootPathSuffix: 'src',
      },
      {
        root: __dirname,
        rootPathPrefix: '#/',
        rootPathSuffix: 'spec',
      }
    ]
  };

  return {
    presets: ['babel-preset-expo'],
    plugins: [['babel-plugin-root-import', rootImportOpts]]
  };
};
