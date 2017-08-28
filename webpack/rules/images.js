module.exports = {
  test    : /\.(png|gif|jpg|svg)$/i,
  exclude : /(node_modules|component.svg)/,
  use     : [{
    loader: 'file-loader',
    options: {
      outputPath: 'assets',
    },
  }],
};
