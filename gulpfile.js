const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const spritesmith = require('gulp.spritesmith');
const rimraf = require('rimraf');
const rename = require('gulp-rename');
// const uglify = require('gulp-uglify');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

//sass.compiler = require('node-sass');

// Static server
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			port: 9000,
			baseDir: "build"
		}
	});

	// 'build/**/*' - смотрит все папки внутри папки Билд и папки внутри этих папок
	// on('change', browserSync.reload); - событие которое реагирует на Изменение, и собственно перезагружает сервер
	gulp.watch('build/**/*').on('change', browserSync.reload);
});

/* ------------------ Pug compiling ----------------- */
gulp.task('templates:compile', function buildHTML() {
	return gulp.src('source/template/index.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('build'))
});

/* ------------ Styles(Sass) compile ------------- */
gulp.task('sass:compile', function () {
	return gulp.src('source/styles/main.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(rename("main.min.css")) // rename => переименует название файла
		.pipe(gulp.dest('build/css'));
});

/* ------------ JS ------------- */
gulp.task('js', function () {
	return gulp.src([
		'source/js/form.js',
		'source/js/navigation.js',
		'source/js/main.js'
	])
		.pipe(sourcemaps.init())
		.pipe(concat('main.min.js'))
		.pipe(terser())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/js'));
});

/* ------------ Sprite ------------- */
gulp.task('sprite', function(cb) {
	const spriteData = gulp.src('source/images/icons/*.png').pipe(spritesmith({
		imgName: 'sprite.png',
		imgPath: '../images/sprite.png',
		cssName: 'sprite.scss'
	}));

	spriteData.img.pipe(gulp.dest('build/images/'));
	spriteData.css.pipe(gulp.dest('source/styles/global/'));
	cb();
});

/* ------------ Delete (rimraf)------------- */
gulp.task('clean', function del(cb) {
	return rimraf('build', cb);
});

/* ------------ Copy fonts ------------- */
gulp.task('copy:fonts', function() {
	return gulp.src('./source/fonts/**/*.*')
		.pipe(gulp.dest('build/fonts'));
});

/* ------------ Copy images ------------- */
gulp.task('copy:images', function() {
	return gulp.src('./source/images/**/*.*')
		.pipe(gulp.dest('build/images'));
});

/* ------------ Copy ------------- */
gulp.task('copy', gulp.parallel('copy:fonts', 'copy:images'));

/* ------------ Watchers ------------- */
gulp.task('watch', function() {
	gulp.watch('source/template/**/*.pug', gulp.series('templates:compile'));
	gulp.watch('source/styles/**/*.scss', gulp.series('sass:compile'));
	gulp.watch('source/js/**/*.js', gulp.series('js'));
});

gulp.task('default', gulp.series(
	'clean',
	gulp.parallel('templates:compile', 'sass:compile', 'js','sprite', 'copy'),
	gulp.parallel('watch', 'browser-sync')
	)
);