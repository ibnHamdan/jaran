var gulp = require('gulp');

var CNFIG = require('../congig.js');

// copies Fonts files
gulp.task('copyFont', function(){
    glp.src(CONFIG.FONTS_FILES)
    .pipe(gulp.dest('_build/assets'));
});

// copy Images files
gulp.task('copyImg', function(){
    glp.src(CONFIG.IMG_FILES)
    .pipe(gulp.dest('_build/assets'));
});

