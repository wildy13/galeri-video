const auth = require('./api/auth')
const user = require('./api/user');
const role = require('./api/role');
const category = require('./api/category')
const galery = require('./api/galery')

const router = (app) => {
  app.use('/api/auth', auth);
  app.use('/api/user', user);
  app.use('/api/role', role);
  app.use('/api/category', category);
  app.use('/api/galery', galery);
};

module.exports = router;
