// ------------------
// @Table of Contents
// ------------------

/**
 * + @Loading Dependencies
 * + @Entry Point Setup
 * + @Hot Loader Setup
 * + @Path Resolving
 * + @Exporting Module
 */


// ---------------------
// @Loading Dependencies
// ---------------------

const
  path      = require('path'),
  manifest  = require('./manifest'),
  devServer = require('./devServer'),
  rules     = require('./rules'),
  plugins   = require('./plugins');


// ------------------
// @Entry Point Setup
// ------------------

const
  entry = [
    path.join(manifest.paths.src, manifest.entries.js),
  ];


// -----------------
// @Hot Loader Setup
// -----------------

if (manifest.IS_DEVELOPMENT) {
  rules[0].use.unshift('react-hot-loader/webpack');
  entry.unshift('react-hot-loader/patch');
}


// ---------------
// @Path Resolving
// ---------------

const resolve = {
  extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
  modules: [
    path.join(__dirname, '../node_modules'),
    path.join(manifest.paths.src, 'app'),
  ],
};


// -----------------
// @Exporting Module
// -----------------

module.exports = {
  devtool: manifest.IS_PRODUCTION ? false : 'cheap-eval-source-map',
  context: path.join(manifest.paths.src, manifest.entries.js),
  watch: !manifest.IS_PRODUCTION,
  entry,
  output: {
    path: manifest.paths.build,
    publicPath: '/',
    filename: manifest.outputFiles.bundle,
  },
  module: {
    rules,
  },
  resolve,
  plugins,
  devServer,
};
