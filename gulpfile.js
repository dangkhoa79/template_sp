(function () {
  
  'use strict';

  //npm install -g gulp 
  
  var gulp = require('gulp'), sass = require('gulp-sass'), connect = require('gulp-connect');


  gulp.task('connect', function () {
    connect.server({
      root: 'sp',
      livereload: true,
      port: 8080
    });
  });

  // keeps gulp from crashing for scss errors
  gulp.task('sass', function () {
    return gulp.src('./sass/*.sass')
        .pipe(sass({ errLogToConsole: true }))
        .pipe(gulp.dest('./public/css'));
  });

  gulp.task('livereload', function () {
    gulp.src('./public/**/*').pipe(connect.reload());
  });

  gulp.task('watch', function () {
    gulp.watch('./sass/**/*.sass', ['sass']);
    gulp.watch('./public/**/*', ['livereload']);
  });

  gulp.task('default', ['connect', 'watch', 'sass']);

}());
