const gulp      = require('gulp');
const pug       = require('gulp-pug');

module.exports = () => {
    gulp.src('./src/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./www'));
}
