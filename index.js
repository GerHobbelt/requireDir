// requireDir.js
// See README.md for details.

var _ = require('lodash');
var Path = require('path');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require("fs"));

// make a note of the calling file's path, so that we can resolve relative
// paths. this only works if a fresh version of this module is run on every
// require(), so important: we clear the require() cache each time!
var parent = module.parent;
var parentFile = parent.filename;
var parentDir = Path.dirname(parentFile);
delete require.cache[__filename];

function requireFile(dir, file, opts) {
    return require(Path.resolve(dir, file));
}

module.exports = function requireDir(dir, opts) {
    // default arguments:
    dir = dir || '.';
    opts = opts || {};

    // resolve the path to an absolute one:
    dir = Path.resolve(parentDir, dir);

    return Promise.all(fs.readdirAsync(dir))
        .filter(function(f) { 
            return _.has(require.extensions, Path.extname(f)); 
        })
        .map(function(m) { 
            return { file: m, contents: requireFile(dir, m) };
        });
};
