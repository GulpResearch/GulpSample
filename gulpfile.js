'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var del = require('del');

var paths = {
  app:[
  'app/**/*.html',
  'app/**/*.js',
  'app/**/*.css',
  '!app/igunore.html'
],
dist: './dist/'};

// gulpの動作確認
gulp.task('default', function() {
  console.log('Hellow World!');
});

// app -> dist コピー
gulp.task('copy', function() {
  gulp.run('clean:dist');
  return gulp.src(paths.app)
    .pipe(gulp.dest(paths.dist));
});

// サーバー起動と変更監視
gulp.task('serve', function() {
  gulp.run('server');
  gulp.watch(paths.app, ['reload']);
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

gulp.task('clean:dist', function() {
  return del(paths.dist);
});
