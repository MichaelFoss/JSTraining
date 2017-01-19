const browserSync = require('browser-sync');

module.exports = () => {
    browserSync.init(null, {
        proxy: 'http://localhost:3000/',
        files: ['www/**/*.*'],
        browser: 'google chrome'
    });
}
