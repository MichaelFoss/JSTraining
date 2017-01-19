const gulp      = require('gulp');

module.exports = () => {
    const src = {
        'sass': [
            'app/**/*.scss'
        ],
        'js': [
            'app/**/*.js'
        ]
    }
    gulp.watch(src.sass, ['gt-sass']);
    gulp.watch(src.js, ['gt-uglify']);
}
