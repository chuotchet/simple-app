module.exports = (router) => {
  router.route('/chart').get((req, res, next) => {
    res.send('chart');
  });
}
