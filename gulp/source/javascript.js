var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var babelOnError = require('../util/babel-on-error.js');
var flatten = require('gulp-flatten');
var maps = require('../maps.js');

var Builder = require('systemjs-builder')


gulp.task('source:javascript', () => {
    return gulp.src(maps.JS)
    .pipe(babel()
    .on('error', babelOnError))
    .pipe(gulp.dest('./_build/js/'));
<<<<<<< HEAD
});
=======
});


gulp.task('sys:js', () => {
      var builder = new Builder()

      builder.config({
          baseURL: './_build/src/js',
          packages: {
                        './src/js': {
                                defaultExtension: 'js'
                        } 
                }            
          
      })

  builder
    .bundle('app.js', './_build/src/js/nameSearch-boundle.js')
})

>>>>>>> dbb4de685c59503063a6d6246ef114547f196b42
