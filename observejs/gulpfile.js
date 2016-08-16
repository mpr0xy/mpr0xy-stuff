var gulp = require('gulp');
var browserify = require('gulp-browserify');
var watch = require('gulp-watch');

// Basic usage
gulp.task('build', function() {
  // Single entry point to browserify
  gulp.src('src/main.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : true
    }))
    .pipe(gulp.dest('./build/'))
});

gulp.task('watch', function() {
  return watch('src/**/*', function() {
    gulp.start(['build']);
  });
});