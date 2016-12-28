var gulp = require('gulp');

var CNFIG = require('../congig.js');

// copies static assets
gulp.task('copy', function(){
    glp.src(CONFIG.ASSETS_FILES)
    .pipe(gulp.dest('_build/assets'));
});