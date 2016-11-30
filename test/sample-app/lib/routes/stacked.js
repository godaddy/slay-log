'use strict';

/*
 * Defines a sample route for your application
 */

module.exports = function (app, options) {
  app.log.info('Configuring /middleware route around "custom" stack.');
  app.routes.get('/middleware', app.stacks.custom.middleware(function (req, res, next) {
    res.end('middleware');
    next();
  }));
};
