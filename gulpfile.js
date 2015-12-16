var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');

gulp.task('default', ['connect', 'sass', 'watch']);

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('sass', function () {
  gulp.src('./src/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets'))
    .pipe(livereload());
});

gulp.task('html', function() {
  gulp.src('./index.html')
    .pipe(livereload());
})

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('./src/**/*.scss', ['sass']);
  gulp.watch('./**/*.html', ['html']);
});
