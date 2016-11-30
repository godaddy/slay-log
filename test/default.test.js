/* eslint no-process-env: 0 */

'use strict';

var fs      = require('fs'),
    path    = require('path'),
    assume  = require('assume'),
    mkdirp  = require('mkdirp'),
    slay    = require('slay'),
    winston = require('winston');

var root = path.join(__dirname, 'sample-app');

describe('slay-config (simple)', function () {
  var logDir = root + path.sep + 'logs';
  var logFile = root + path.sep + 'logs' + path.sep + 'sample-app.log';

  before(function (done) {
    mkdirp(logDir, function (err) {
      assume(err).is.not.an('error');
      done();
    });
  });

  it('Custom transport (multiple transports)', function (done) {
    var app = new slay.App(root);
    app.start({
      http: 0,
      logger: {
        transports: [
          new (winston.transports.Console)(),
          new (winston.transports.File)({ filename: logFile })
        ]
      }
    }, function (err) {
      assume(err).is.not.an('error');
      assume(app.log).is.an('object');
      assume(app.log.transports).is.an('object');
      assume(app.log.transports.console).is.an('object');
      assume(app.log.transports.file).is.an('object');
      assume(app.log.transports.file.filename).equals('sample-app.log');
      assume(app.log.transports.file.dirname).equals(logDir);

      var filePath = app.log.transports.file.dirname + path.sep + app.log.transports.file.filename;
      // Check if the file exists
      fs.stat(filePath, function (statErr, stats) {
        assume(statErr).is.not.an('error');
        assume(stats).is.an('object');
        app.close(done);
      });
    });
  });
});
