var assert = require('assert');
var requireDir = require('..');
var chai = require('chai');
chai.use(require('chai-as-promised'));
chai.should();

describe('Simple tests', function(){
	it('should import .js and .json files by default', function() {
		var p = requireDir('./simple');
		return p.should.eventually.deep.equal({
		    a: 'a',
		    b: 'b',
		});
	});
});
/*
assert.deepEqual(requireDir('./simple'), {
    a: 'a',
    b: 'b',
});
*/

// now register CoffeeScript and do it again:
// note that CoffeeScript shouldn't be used by any other tests! we can't rely
// on ordering of tests, and require.extensions and require.cache are global.
/*
require('coffee-script');
assert.deepEqual(requireDir('./simple'), {
    a: 'a',
    b: 'b',
    c: 'c',
});
*/
