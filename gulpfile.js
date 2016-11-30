/* eslint no-process-env: 0 */
'use strict';

var gulp = require('gulp');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('gulp-test-style-guide')(gulp, {
  sourceFiles: 'index.js',
  unitTestFiles: 'test/*.test.js',
  lint: { files: ['index.js', 'test/*.js'] }
});

gulp.task('test', 'Run all the tests with code coverage', ['lint', 'unit-coverage']);
