var gulp = require('gulp');


gulp.task('prototype:assets', () => {
    return gulp.src('./prototype/assets/**/*')
    .pipe(gulp.dest('./_build/assets/'));
});