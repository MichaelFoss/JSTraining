const gulp      = require('gulp');
const uglify    = require('gulp-uglify');
const concat    = require('gulp-concat');
const srcMaps   = require('gulp-sourcemaps');

module.exports = () => {
    gulp.src('./src/**/*.js')
        .pipe(srcMaps.init())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(srcMaps.write('./'))
        .pipe(gulp.dest('./public/js'));
}
