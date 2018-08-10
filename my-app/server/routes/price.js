module.exports = (router) => {
  router.route('/price').get((req, res, next) => {
    res.send('price');
  });
}
