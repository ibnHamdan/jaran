var gulp = require('gulp');
var browser = require('browser-sync').create();
var requireDir = require('require-dir');
var map = require('./gulp/maps.js');

requireDir('./gulp', { recurse: true });

gulp.task('default', ['server', 'watch']);

// Builds the files
gulp.task('build', ['prototype']);

gulp.task('source', [ 'source:sass', 'source:javascript','source:assets']);

gulp.task('prototype',['source', 'prototype:html', 'prototype:assets', 'js:assets']);

// Starts a browerSync instance
gulp.task('server', ['build'], function(){
    browser.init({
        server: {
            baseDir : './_build',
        },
         port: process.env.SERVER_PORT || 3000
        });
});


// watch files for changes
gulp.task('watch', function(){
    gulp.watch([map.SCSS], ['source:sass', browser.reload]);
    gulp.watch([map.JS], ['source:javascript', browser.reload]);
    gulp.watch(['./prototype/{layouts,partials,helpers,pages,data}/**/*'], ['prototype:html', browser.reload]);
    gulp.watch(['./prototype/assets/**/*'], ['prototype:assets', browser.reload]);
});