'use strict';

var routes = {
  sample: require('./sample'),
  stacked: require('./stacked')
};

/*
 * Setup the ordering for all of our routing in
 * the application.
 */
module.exports = function (app, options, callback) {
  app.perform('actions', function (done) {
    app.log.info('Adding routes');
    routes.sample(app, options);
    routes.stacked(app, options);

    //
    // Future routes for your application go here.
    //

    done();
  });

  callback();
};
