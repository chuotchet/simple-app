const chart = require('./chart');
const price = require('./price');

module.exports = (router) => {
  chart(router);
  price(router);

  router.route('/').get((req, res, next) => {
    res.send('index');
  });
}
