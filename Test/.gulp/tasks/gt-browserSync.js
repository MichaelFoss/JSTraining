const browserSync = require('browser-sync');

module.exports = () => {
    browserSync.init(null, {
        proxy: 'http://localhost:8080/',
        files: ['www/**/*.*'],
        browser: 'google chrome'
    });
}
