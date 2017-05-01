'use strict'
var gulp = require('gulp');
var merge2 = require('merge')

const FILES = ['./prototype/assets/**/*'];
const JS_FILES = ['./bower_components/jquery/dist/jquery.js'];


gulp.task('prototype:assets', () => {

    gulp.src(FILES)
    .pipe(gulp.dest('./_build/assets/'));
    // let merge = new merge2()

    // return merge.add(
    //     gulp.src('./prototype/assets/**/*')
    // .pipe(gulp.dest('./_build/assets/'))
    // ,
    // gulp.src('./node_modules/systemjs/dist/system.js')
    // .pipe(gulp.dest('./_build/assets/js'))
    // ,
    // gulp.src('./node_modules/systemjs/dist/system-csp-production.js')
    // .pipe(gulp.dest('./_build/assets/js'))
    // ,
    // gulp.src('./bower_components/jquery/dist/jquery.js')
    // .pipe(gulp.dest('./_build/assets/js'))
    // );
});

gulp.task('js:assets', () => {
    gulp.src(JS_FILES)
    .pipe(gulp.dest('./_build/assets/js'));
});