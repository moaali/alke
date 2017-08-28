// ------------------
// @Table of Contents
// ------------------

/**
 * + @Loading Dependencies
 * + @Common Loaders
 * + @Merging Production Loaders
 * + @Merging Development Loaders
 * + @Exporting Module
 */


// ---------------------
// @Loading Dependencies
// ---------------------

const
  manifest          = require('../manifest'),
  path              = require('path'),
  cssNext           = require('postcss-cssnext'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');


// ---------------
// @Common Loaders
// ---------------

const rule = {};

const loaders = [
  {
    loader: 'css-loader',
    options: {
      sourceMap : manifest.IS_DEVELOPMENT,
      minimize  : manifest.IS_PRODUCTION,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: manifest.IS_DEVELOPMENT,
      plugins: () => [
        cssNext(),
      ],
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: manifest.IS_DEVELOPMENT,
      includePaths: [
        path.join(manifest.paths.src, 'app', 'shared', 'styles'),
      ],
    },
  },
];


// ---------------------------
// @Merging Production Loaders
// ---------------------------

if (manifest.IS_PRODUCTION) {
  Object.assign(rule, {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      use: loaders,
    }),
  });
}


// ----------------------------
// @Merging Development Loaders
// ----------------------------

if (manifest.IS_DEVELOPMENT) {
  Object.assign(rule, {
    test: /\.scss$/,
    use: [{
      loader: 'style-loader',
    }].concat(loaders),
  });
}


// -----------------
// @Exporting Module
// -----------------

module.exports = rule;
