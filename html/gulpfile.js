var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');

gutil.log("Let's have it!");

gulp.task('default', function(){
	gulp.src('assets/css/scss/*.scss')
		.on('data', function(chunk){
			console.log("horse");
			console.log(chunk.path);
		});

	return gulp.src('assets/css/scss/minimal.scss')
		.pipe(sass()) // Using gulp-sass
		.pipe(gulp.dest('assets/css/'))
});

gulp.watch('assets/css/scss/*.scss', ['default']);
