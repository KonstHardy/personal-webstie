const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');


const cssFiles = [
	'./src/css/swiper.min.css',
	'./src/css/styles.css',
]

const jsFiles = [
	'./src/js/swiper.min.js',
	'./src/js/jquery.inputmask.min.js',
	'./src/js/jquery.validate.min.js',
	'./src/js/script.js',
]


function styles() {
	// return gulp.src('./src/css/**/*.css')
	return gulp.src(cssFiles)
	.pipe(concat('styles.min.css'))
	// .pipe(autoprefixer({
	// 	cascade: false,
	// }))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('./build/css'))
}

function scripts() {
	// return gulp.src('./src/js/**/*.js')
	return gulp.src(jsFiles)
	.pipe(concat('scripts.min.js'))
	.pipe(uglify({
		toplevel:true,
	}))
	.pipe(gulp.dest('./build/js'))
}


gulp.task('styles', styles);
gulp.task('scripts', scripts);
