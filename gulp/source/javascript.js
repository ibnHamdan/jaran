var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var babelOnError = require('../util/babel-on-error.js');
var flatten = require('gulp-flatten');
var maps = require('../maps.js');

gulp.task('source:javascript', () => {
    return gulp.src(maps.JS)
    .pipe(babel()
    .on('error', babelOnError))
    .pipe(gulp.dest('./_build/src/js/'));
});