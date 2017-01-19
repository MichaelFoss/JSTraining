const gulp      = require('gulp');
const sass      = require('gulp-sass');
const concat    = require('gulp-concat');
const srcMaps   = require('gulp-sourcemaps');
const reload    = require('browser-sync').reload;

module.exports = () => {
    return gulp.src('./app/views/**/*.scss')
        .pipe(concat('style.css'))
        .pipe(srcMaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(srcMaps.write('.'))
        .pipe(gulp.dest('./www/css'))
        .pipe(reload({
            stream: true
        }));
}
