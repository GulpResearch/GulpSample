'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var paths = [
  'app/**/*.html',
  'app/**/*.js',
  'app/**/*.css',
  '!app/igunore.html'
];

// gulpの動作確認
gulp.task('default', function() {
  console.log('Hellow World!');
});

// app -> dist コピー
gulp.task('copy', function() {
  return gulp.src(paths)
    .pipe(gulp.dest('dist/'));
});

// サーバー起動と変更監視
gulp.task('serve', function() {
  gulp.run('server');
  gulp.watch(paths, ['reload']);
});

// サーバー機能
gulp.task('server', function() {
  browserSync({
    server: {
      baseDir: './app/'
    }
  });
});

// live reload機能
gulp.task('reload', function() {
  gulp.src(paths)
    .pipe(browserSync.reload());
});
