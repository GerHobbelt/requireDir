var assert = require('assert');
var requireDir = require('..');
var Promise = require('bluebird');
var chai = require('chai');
chai.use(require('chai-as-promised'));
chai.should();

describe('Simple tests', function(){
	it('should import .js and .json files by default', function() {
		return Promise.all(requireDir('./simple')).then(function(actual) {
			console.log('actual:' + JSON.stringify(actual));
			actual.should.have.members([
				'Content for file a.js', 
				'These are the contents of file b.json']);
			return actual;
		});
	});
});

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
