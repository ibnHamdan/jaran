var gulp = require('gulp');
var panini = require('panini');

gulp.task('prototype:html', () => {
    return gulp.src('./prototype/pages/**/*.{html,hbs,handlebars,md}')
    .pipe(panini({
        root: 'prototype/pages/',
        layouts: 'prototype/layouts/',
        partials: 'prototype/partials/',
        helpers: 'prototype/helpers/',
        data: 'prototype/data/'
    }))
    .pipe(gulp.dest('./_build/'));
});