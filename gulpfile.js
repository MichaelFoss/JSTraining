const gulp = require('./.gulp')([
    'gt-uglify',
    'gt-sass'
]);


gulp.task('default', ['gt-sass', 'gt-uglify']);
