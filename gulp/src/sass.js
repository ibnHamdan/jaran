var gulp = require('gulp');
var sass = require('gulp-sass');
var flatten = require('gulp-flatten');


gulp.task('source.task', () =>{
    return gulp.src()
    .pipe(sass().on('error', sass.logError))
    .pipe(flatten())
    .pipe(gulp.dst('./_build/src/css/'));
});