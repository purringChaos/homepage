const sass = require('gulp-sass');

const defaults = {
    env: {
        stage: 0
    }
};

module.exports = function(options = {}) {
    options = Object.assign({}, defaults, options);
    return sass().on('error', sass.logError);
};
