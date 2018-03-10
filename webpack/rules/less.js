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
  // cssNext           = require('postcss-cssnext'),
  // prescss           = require('precss'),
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
  // {
  //   loader: 'postcss-loader',
  //   options: {
  //     sourceMap: manifest.IS_DEVELOPMENT,
  //     // plugins: () => [
  //     //   cssNext(),
  //     //   prescss(),
  //     // ],
  //   },
  // },
  {
    loader: 'less-loader',
    options: {
      sourceMap: manifest.IS_DEVELOPMENT,
      paths: [
        path.join(manifest.paths.src, 'app', 'shared', 'styles'),
        path.join(__dirname, '../../node_modules'),
      ],
    },
  },
];


// ---------------------------
// @Merging Production Loaders
// ---------------------------

if (manifest.IS_PRODUCTION) {
  Object.assign(rule, {
    test: /\.less$/,
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
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }].concat(loaders),
  });
}


// -----------------
// @Exporting Module
// -----------------

module.exports = rule;
