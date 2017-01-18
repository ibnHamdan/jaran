var gulp = require('gulp');

gulp.task('source:assets', () => {
    return gulp.src()
    .pipe(gulp.des('./_build/assets/'));
});