/* eslint no-process-env: 0, max-statements: [2, 20] */

'use strict';

var merge = require('lodash.merge');
var debug = require('diagnostics')('slay-log');

module.exports = function (defaults) {
  debug('scheduling with defaults { %j }', Object.keys(defaults || {}).join(', '));
  return function (app, options, done) {
    debug('execute `app.log.configure`');

    //
    // Merge the defaults passed to the preboot, and any `options.config`
    // passed to `app.start`.
    //
    var opts = options.log || options.logger || app.config.get('log') || app.config.get('logger') || {};
    app.log.configure(merge({}, defaults, opts));

    debug('executed `app.log.configure`');
    done();
  };
};
