var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('js-watch', function (done) {
  browserSync.reload();
  done();
});

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./*.js', ['js-watch']);
  gulp.watch('./*.html', ['js-watch']);
  gulp.watch('./*.css', ['js-watch']);

});

gulp.task('default', ['serve']);
