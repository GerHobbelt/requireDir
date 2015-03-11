// requireDir.js
// See README.md for details.

var _ = require('lodash');
var Path = require('path');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require("fs"));
var FS = require("fs");

// make a note of the calling file's path, so that we can resolve relative
// paths. this only works if a fresh version of this module is run on every
// require(), so important: we clear the require() cache each time!
var parent = module.parent;
var parentFile = parent.filename;
var parentDir = Path.dirname(parentFile);
delete require.cache[__filename];

module.exports = function requireDir(dir, opts) {
    // default arguments:
    dir = dir || '.';
    opts = opts || {};

    // resolve the path to an absolute one:
    dir = Path.resolve(parentDir, dir);

    // to prioritize between multiple files with the same basename, we'll
    // first derive all the basenames and create a map from them to files:
    var filesForBase = {};

    // read the directory's files:
    // note that this'll throw an error if the path isn't a directory.

    var files = FS.readdirSync(dir);

    var fp = Promise.all(FS.readdirAsync(dir)).then(function(allFiles) {
        var map = _.filter(allFiles, function(f) { 
            return _.has(require.extensions, Path.extname(f)); 
        });
        map = _.indexBy(map, function(f) {
            return Path.basename(f, Path.extname(f));
        });

        //console.log('filter:' + JSON.stringify(_.filter(allFiles, function(f) { return _.has(require.extensions, Path.extname(f)); })));
        //console.log('any:', _.any(require.extensions, String))
        //console.log('any:', _.has(require.extensions, '.js'));

        //console.log('map:' + JSON.stringify(map) || 'undefined');
        //for (ext in require.extensions) { console.log('require.extensions:' + ext); };
        //to-do: this require should be promisified as well
        return _.reduce(map, function(res, m, key) { res[key] = require(Path.resolve(dir, m)); return res; }, { });
    });

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var ext = Path.extname(file);
        var base = Path.basename(file, ext);

        (filesForBase[base] = filesForBase[base] || []).push(file);
    }

    // then we'll go through each basename, and first check if any of the
    // basenames' files are directories, since directories take precedence if
    // we're recursing and can be ignored if we're not. if a basename has no
    // directory, then we'll follow Node's own require() algorithm of going
    // through and trying the require.extension keys in order. in the process,
    // we create and return a map from basename to require()'d contents! and
    // if duplicates are asked for, we'll never short-circuit; we'll just add
    // to the map using the full filename as a key also.
    var map = {};

    for (var base in filesForBase) {
        // protect against enumerable object prototype extensions:
        if (!filesForBase.hasOwnProperty(base)) {
            continue;
        }

        // go through the files for this base and check for directories. we'll
        // also create a hash "set" of the non-dir files so that we can
        // efficiently check for existence in the next step:
        var files = filesForBase[base];
        var filesMinusDirs = {};

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var path = Path.resolve(dir, file);

            // ignore the calling file:
            if (path === parentFile) {
                continue;
            }

            if (FS.statSync(path).isDirectory()) {
                if (opts.recurse) {
                    map[base] = requireDir(path, opts);

                    // if duplicates are wanted, key off the full name too:
                    if (opts.duplicates) {
                        map[file] = map[base];
                    }
                }
            } else {
                filesMinusDirs[file] = path;
            }
        }

        // if we're recursing and we already encountered a directory for this
        // basename, we're done for this base if we're ignoring duplicates:
        if (map[base] && !opts.duplicates) {
            continue;
        }

        // otherwise, go through and try each require.extension key!
        for (ext in require.extensions) {
            // again protect against enumerable object prototype extensions:
            if (!require.extensions.hasOwnProperty(ext)) {
                continue;
            }

            // if a file exists with this extension, we'll require() it:
            var file = base + ext;
            var path = filesMinusDirs[file];

            if (path) {
                // if duplicates are wanted, key off the full name always, and
                // also the base if it hasn't been taken yet (since this ext
                // has higher priority than any that follow it). if duplicates
                // aren't wanted, we're done with this basename.
                if (opts.duplicates) {
                    map[file] = require(path);
                    if (!map[base]) {
                        map[base] = map[file];
                    }
                } else {
                    map[base] = require(path);
                    break;
                }
            }
        }
    }

    console.log('map:' + JSON.stringify(map));
    return fp;
};
