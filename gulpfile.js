'use strict';

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

// Imagemim
function img() {
  return gulp
    .src('tmp/img/**/*')
    .pipe(
      imagemin({
        progressive: true,
      })
    )
    .pipe(gulp.dest('assets/img'));
}

// Watch files
function watchFiles() {
  gulp.watch('./tmp/img/*', img);
}

const build = gulp.series(gulp.parallel(img));

exports.default = build;
