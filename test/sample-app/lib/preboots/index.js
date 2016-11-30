'use strict';

/*
 * Setup the ordering for all of our prebooting in
 * the application.
 */
module.exports = function (app, options, callback) {
  app.preboot(require('./sample'));
  app.preboot(require('./stacks'));

  /* Add the logger */
  app.preboot(require('../../../../')());

  //
  // Future preboots for your application go here.
  //

  callback();
};
