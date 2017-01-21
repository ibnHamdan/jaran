var gulp = require('gulp');
var panini = require('panini');

gulp.task('prototype:html', () => {
    return gulp.src()
    .pipe(panini({

    }))
    .pipe(gulp.dest('./_build/pages/'));
});