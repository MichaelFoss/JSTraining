const gulp = require('./.gulp')([
    'gt-uglify',
    'gt-sass',
    'gt-watch',
    'gt-browserSync',
    'gt-nodemon'
]);

const runSequence = require('run-sequence');

gulp.task('develop', ['gt-sass', 'gt-uglify'], () => {
    // Start server
    // @TODO
    // Do other stuff
    runSequence(
        'gt-nodemon',
        ['gt-browserSync', 'gt-watch']
    );
});
gulp.task('default', () => {
    runSequence(
        ['gt-sass', 'gt-uglify']
    );
});
