var gulp = require('gulp');
var browser = rquire('browser-sync');
var requireDir = require('require-dir');

requireDir('./gulp');

gulp.task('default', ['server', 'watch']);

// Builds the files
gulp.task('build', ['clean']);

// Starts a browerSync instance
gulp.task('server', ['build'], function(){
    browser.init({
        server: './_build',
         port: process.env.SERVER_PORT || 3000
        });
});

gulp.task('source', ['clean', 'source:sass', 'source:javascript','source:assets']);

gulp.task('prototype',['clean', 'prototype:html', 'prototype:assets']);


// watch files for changes
gulp.task('watch', function(){
    gulp.watch('',[]);
});

