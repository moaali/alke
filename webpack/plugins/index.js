module.exports = [
  require('./imageminPlugin'),
  require('./htmlPlugin'),
  ...(require('./internal')),
  require('./caseSensitivePlugin'),
  require('./dashboardPlugin'),
  require('./extractPlugin'),
  // require('./bundleAnalyzer'),
];
