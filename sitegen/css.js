const Task = require('./task');
const TaskFork = require('./task-fork');
const defaults = {
    base: 'css',
    watchPattern: '**/*.scss',
    pattern: '*.scss'
};

class CssFork extends TaskFork {
    sass(options) {
        return this.exec('sass', options);
    }
}

class Css extends Task {
    constructor(sitegen, options) {
        super(sitegen, defaults);
    }
    sass(options) {
        options = options || {};
        options.sitegen = this.sitegen;
        return this.pipe(require('./plugins/sass')(options));
    }
}

module.exports = Css;
