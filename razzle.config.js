/* eslint-disable no-unused-expressions */
const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
    modifyWebpackConfig({
        env: {
          target, // the target 'node' or 'web'
          dev, // is this a development build? true or false
        },
        webpackConfig, // the created webpack config
        webpackObject, // the imported webpack node module
        options: {
          razzleOptions, // the modified options passed to Razzle in the `options` key in `razzle.config.js` (options: { key: 'value'})
          webpackOptions, // the modified options that will be used to configure webpack/ webpack loaders and plugins
        },
        paths, // the modified paths that will be used by Razzle.
      }) {
        if (target === 'web') {
          // client only;
          webpackConfig.plugins =  [
              ...webpackConfig.plugins,
              new LoadablePlugin({
                writeToDisk: true
              })
          ];
          webpackConfig.output.filename = dev ?
          'static/js/[name].js' :
          'static/js/[name].[contenthash:8].chunk.js';
          // eslint-disable-next-line no-sequences
          webpackConfig.resolve.fallback = { fs: 'empty' }
        }
        if (target === 'node') {
          // server only
        }
        if (dev) {
          // dev only
        } else {
          // prod only
        }
        // Do some stuff...
        return webpackConfig;
      },
};