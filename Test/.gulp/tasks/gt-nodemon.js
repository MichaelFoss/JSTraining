const nodemon = require('gulp-nodemon');

module.exports = () => {
    nodemon({
        script: 'app/server.js'
    })
}
