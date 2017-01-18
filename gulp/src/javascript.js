var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var babelOnError = require('./util/babel-on-error.js');
var flatten = require('gulp-flatten');

gulp.task('source:javascript', () => {
    return gulp.src()
    .pipe(babel()
    .on('error', babelOnError)
    .pipe(gulp.dest('./build/src/js/'));
});