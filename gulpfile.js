var gulp = require('gulp');
var browser = rquire('browser-sync');
var requireDir = require('require-dir');
var port = process.env.SERVER_PORT || 3000;

requireDir('./gulp/tasks');

// Builds the files
gulp.task('build', ['clean', 'copy', 'sass', 'javascript']);

// Starts a browerSync instance
gulp.task('server', ['build'], function(){
    browser.init({server: './_build', port: port});
});

// watch files for changes
gulp.task('watch', function(){
    gulp.watch('',[]);
});

gulp.task('default', ['server', 'watch']);