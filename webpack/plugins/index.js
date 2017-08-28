module.exports = [
  require('./imageminPlugin'),
  require('./htmlPlugin'),
  ...(require('./internal')),
  require('./dashboardPlugin'),
  require('./extractPlugin'),
];
