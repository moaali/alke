const
  path              = require('path'),
  manifest          = require('../manifest'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new HtmlWebpackPlugin({
  template: path.join(manifest.paths.src, manifest.entries.html),
  path: manifest.paths.build,
  filename: manifest.outputFiles.html,
  minify: {
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    useShortDoctype: true,
  },
});
