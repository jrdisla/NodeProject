var gulp = require('gulp');
var hint = require('gulp-jshint');

var Files = ['*.js','src/**/*.js'];


gulp.task('style',function(){
    return gulp.src(Files)
    .pipe(hint());
});

gulp.task('inject',function(){
   
   var wire = require('wiredep').stream;
   var options ={
       bowerJson: require('./bower.json'),
       directory: './bower_components'
       }
   return gulp.src('.src/views/*.html')
   .pipe(wire(options))
   .pipe(gulp.dest('./src/views'));
   ;
});