var gulp = require('gulp');
var sass = require('gulp-sass');
var flatten = require('gulp-flatten');
var maps = require('../maps.js');


gulp.task('source:sass', () =>{
    return gulp.src(maps.SCSS)
    .pipe(sass().on('error', sass.logError))
    .pipe(flatten())
    .pipe(gulp.dest('./_build/css/'));
});