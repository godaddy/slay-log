'use strict';

/*
 * Defines a sample route for your application
 */
module.exports = function (app, options) {
  app.log.info('Configuring /hello route');
  app.routes.get('/hello', function (req, res) {
    res.json({ hello: 'world' });
  });
};
