var gulp = require('gulp');
var maps = require('../maps.js');

gulp.task('source:assets', () => {
    return gulp.src(maps.ASSETS)
    .pipe(gulp.dest('./_build/assets/'));
});