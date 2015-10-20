var gulp = require('gulp');

gulp.task('default', function() {
  console.log('Hellow World!');
});

gulp.task('copy', function() {
  return gulp.src('app/index.html')
             .pipe(gulp.dest('dist/'));
});
