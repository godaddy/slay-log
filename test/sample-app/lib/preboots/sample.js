'use strict';

var path    = require('path'),
    winston = require('winston');

/*
 * Defines a sample preboot for your application
 */
module.exports = function (app, options, callback) {

  app.log.info('Hello world!');

  //
  // Setup your config to load from (in-order):
  // 1. argv
  // 2. env
  //
  app.config
    .overrides(options)
    .use('argv')
    .use('env')
    .use('literal', { http: 8080 })
    .load(callback);
};
