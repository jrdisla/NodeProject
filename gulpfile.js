var gulp = require('gulp');
var hint = require('gulp-jshint');

var Files = ['*.js','src/**/*.js'];


gulp.task('style',function(){
    return gulp.src(Files)
    .pipe(hint());
});