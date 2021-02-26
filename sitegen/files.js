const Task = require('./task');
const merge = require('merge-options');
const defaults = {
    pattern: '**',
    incremental: true
};

class Files extends Task {
    constructor(sitegen, options) {
        super(sitegen, merge(defaults, options));
    }
}

module.exports = Files;
