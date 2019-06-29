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
   
});





gulp.task('bower', function () {
var wiredep = require('wiredep').stream;
var inject =  require('gulp-inject'); 
var injectSrc = gulp.src(['./public/css/*.css','./public/js/*.js']);
var injectOptions = {
    ignorePath: '/public/'
}
 return gulp.src('./src/views/index.html')
    .pipe(wiredep({
       bowerJson: require('./bower.json'),
       directory: './bower_components',
       ignorePath: '../../bower_components'
    }))
    .pipe(inject(injectSrc,injectOptions))
    .pipe(gulp.dest('./src/views'));
});