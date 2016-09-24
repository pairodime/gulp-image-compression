//get gulp node package
var gulp			= require('gulp'),
	tinypng 		= require('gulp-tinypng'),
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

gulp.task('tinypng', function () {
    gulp.src('images/raw/*')
        .pipe(tinypng('xxxxxxxxx'))
        .pipe(gulp.dest('images/web-ready'));
});