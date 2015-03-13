[![Build Status](https://travis-ci.org/dclucas/require-dir-promise.svg?branch=master)](https://travis-ci.org/dclucas/require-dir-promise)

[![Coverage Status](https://coveralls.io/repos/dclucas/require-dir-promise/badge.svg)](https://coveralls.io/r/dclucas/require-dir-promise)

# require-dir-promise

A promise-based `require` for directories, heavily inpired by [require-dir]
(https://github.com/aseemk/requireDir).

Iterates (non-recursively for now) through a directory and requires all 
"requirable" files. Unline most synchronous modules, `require-dir-promise` 
returns a collection of promises that can be chained in `.then()`, `.all()`
and other promise calls.

## Example

Given this directory structure:

```
dir
+ a.js
+ b.json
+ c.coffee
+ d.txt
```

`requireDir('./dir')` will return promises with the following contents:

```js
{file: 'a.js', contents: 'Content for file a.js'}, 

{file: 'b.json', contents: 'Contents of file b.json'}

```

And if CoffeeScript was registered, `{file: 'c.coffee', contents: 'Contents of file c.coffee'}` 
will also be returned.

## Installation

```
npm install require-dir-promise
```

## Usage

Iterating over the loaded files

```js
var requireDir = require('require-dir-promise');
requireDir('./path/to/dir').map(function(f) {
    console.log(f.fileName);
});
```


## License

MIT.
