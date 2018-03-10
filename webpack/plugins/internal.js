// ------------------
// @Table of Contents
// ------------------

/**
 * + @Loading Dependencies
 * + @Common Plugins
 * + @Merging Production Plugins
 * + @Merging Development Plugins
 * + @Exporting Module
 */


// ---------------------
// @Loading Dependencies
// ---------------------

const
  manifest = require('../manifest'),
  webpack  = require('webpack');


// ---------------
// @Common Plugins
// ---------------

const
  plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(manifest.NODE_ENV),
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: manifest.outputFiles.vendor,
      minChunks(module) {
        const context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),
  ];

// ---------------------------
// @Merging Production Plugins
// ---------------------------

// if (manifest.IS_PRODUCTION) {
//   plugins.push(
//     new webpack.optimize.UglifyJsPlugin({
//       comporess: {
//         warnings: true,
//       },
//     })
//   );
// }


// ----------------------------
// @Merging Development Plugins
// ----------------------------

if (manifest.IS_DEVELOPMENT) {
  plugins.push(
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  );
}


// -----------------
// @Exporting Module
// -----------------

module.exports = plugins;
