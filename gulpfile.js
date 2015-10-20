'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var paths = [
  'app/**/*.html',
  'app/**/*.js',
  'app/**/*.css',
  '!app/igunore.html'
];

gulp.task('default', function() {
  console.log('Hellow World!');
});


gulp.task('copy', function() {
  return gulp.src(paths)
    .pipe(gulp.dest('dist/'));
});

gulp.task('serve', function() {
  gulp.run('server');
  gulp.watch(paths, ['reload']);
});

gulp.task('server', function() {
  browserSync({
    server: {
      baseDir: './app/'
    }
  });
});

gulp.task('reload', function() {
  gulp.src(paths)
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});
