module.exports = {
  test: /component.svg/,
  exclude : /node_modules/,
  use: [{
    loader: 'babel-loader',
  }, {
    loader: 'react-svg-loader',
    options: {
      svgo: {
        plugins: [{
          removeTitle: true,
        }],

        floatPrecision: 2,
      },
    },
  }],
};
