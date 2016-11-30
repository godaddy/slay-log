'use strict';

/**
 * Configures a basic middleware stack for this
 * application.
 */
module.exports = function (app, options, done) {
  app.stack({
    name: 'custom',
    before: [function (req, res, next) {
      console.log('before 1');
      next();
    }, function (req, res, next) {
      console.log('before 2');
      next();
    }],
    after: [function (req, res, next) {
      console.log('after 1');
      next();
    }]
  });

  done();
};
