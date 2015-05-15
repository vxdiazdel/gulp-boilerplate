var gulp 	= require('gulp'),
	uglify 	= require('gulp-uglify'),
	less 	= require('gulp-less')
	plumber = require('gulp-plumber'),
	prefix 	= require('gulp-autoprefixer');

// Scripts task
// Uglifies javascript files
gulp.task('scripts', function() {
	gulp.src('./src/js/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('./build/js'));
});	

// Styles task
// Compiles less and autoprefixes CSS
gulp.task('styles', function() {
	gulp.src('./src/less/main.less')
		.pipe(plumber())
		.pipe(less())
		.pipe(prefix())
		.pipe(gulp.dest('./build/css'));
});

// Watch task
gulp.task('watch', function() {
	gulp.watch('./src/js/*.js', ['scripts']);
	gulp.watch('./src/less/*.less', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);



	
