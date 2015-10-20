'use strict';

var gulp = require('gulp');

gulp.task('default', function() {
  console.log('Hellow World!');
});

gulp.task('copy', function() {
  var paths = [
    'app/**/*.html',
    'app/**/*.js',
    'app/**/*.css'
  ];
  return gulp.src(paths)
             .pipe(gulp.dest('dist/'));
});
