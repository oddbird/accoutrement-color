/* eslint-env node */

'use strict';

var gulp = require('gulp');
var sassdoc = require('sassdoc');

gulp.task('sassdoc', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sassdoc());
});
