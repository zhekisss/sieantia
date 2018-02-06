var gulp = require('gulp'),
    sass = require('gulp-sass'),
    miniCss = require('gulp-minify-css'),
    // sourceMaps = require('gulp-sourcemaps');
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    minijs = require('gulp-uglify');

var src = {
    main_sass: "sass/main.scss",
    sass: "content/themes/default/scss/**/*.scss",
    css: "src/css/**/*.css",
    js: "src/js/**/*.js",
    libs: "src/libs/**/*.js",
    static: "src/static/**",
    sprites: "src/sprites/*.*",
    tmp: "src/tmp"
};

gulp.task('default', ['watchSass']);

gulp.task('sass', function() {
    return gulp.src('sass/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('css'))
});

gulp.task('sassAdmin', function() {
    return gulp.src('sass/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('css'))
});

gulp.task('minicss', function() {
    return gulp.src('css/style.css')
        .pipe(plumber())
        // .pipe(sourceMaps.init())
        .pipe(miniCss({
            keepSpecialComments: 0,
            restructuring: false,
            processImport: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        // .pipe(sourceMaps.write())
        .pipe(gulp.dest('css'))

});

gulp.task('minicssAdmin', function() {
    return gulp.src('admin/Assets/css/style.css')
        .pipe(plumber())
        // .pipe(sourceMaps.init())
        .pipe(miniCss({
            keepSpecialComments: 0,
            restructuring: false,
            processImport: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        // .pipe(sourceMaps.write())
        .pipe(gulp.dest('admin/Assets/css/'));

});

// gulp.task('minijs', function() {
// return gulp.src('content/themes/default/js/main.js')
// .pipe(plumber())
// .pipe(minijs({
// ext: {
// src: '-debug.js',
// min: '.min.js'
// },
// exclude: ['tasks'],
// ignoreFiles: ['.combo.js', '.min.js']
// }))
// .pipe(gulp.dest('content/themes/default/js'))
// });

gulp.task('minijs', function() {
    return gulp.src('main.js')
        .pipe(plumber())
        .pipe(minijs())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('js'))
});

gulp.task('minijsAdmin', function() {
    return gulp.src('admin/Assets/js/main.js')
        .pipe(plumber())
        .pipe(minijs())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('admin/Assets/js'));
});

gulp.task('watchSass', function() {
    gulp.watch('sass/style.scss', ['sass', 'log'])
    gulp.watch('css/style.css', ['minicss', 'log'])
    gulp.watch('js/main.js', ['minijs', 'log'])

    gulp.watch('admin/Assets/css/style.css', ['minicssAdmin', 'log'])
    gulp.watch('admin/Assets/js/main.js', ['minijsAdmin', 'log'])
});
gulp.task('log', function() {
    console.log('OK');
});