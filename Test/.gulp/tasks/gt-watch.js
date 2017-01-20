const gulp      = require('gulp');
const reload    = require('browser-sync').reload;

module.exports = () => {
    const src = {
        'sass': [
            'app/**/*.scss'
        ],
        'js': [
            'app/**/*.js'
        ],
        'pug': [
            'app/**/*.pug'
        ]
    }
    gulp.watch(src.sass, ['gt-sass']);
    gulp.watch(src.js, ['gt-uglify']);
    gulp.watch(src.pug, ['gt-pug']).on('change', reload);
}
