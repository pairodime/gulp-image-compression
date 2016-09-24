//get gulp node package
var gulp			= require('gulp'),
	imagemin 		= require('gulp-imagemin'),
	pngquant 		= require('imagemin-pngquant');

gulp.task('images', function () {
    return gulp.src('images/raw/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('images/web-ready'));
});