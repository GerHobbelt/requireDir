var assert = require('assert');
var requireDir = require('..');
var Promise = require('bluebird');
var chai = require('chai');
chai.use(require('chai-as-promised'));
chai.should();

describe('Simple tests', function(){
	it('should import .js and .json files by default', function() {
		return Promise.all(requireDir('./simple')).then(function(actual) {
			actual.should.deep.equal([
				{file: 'a.js', contents: 'Content for file a.js'}, 
				{file: 'b.json', contents: 'These are the contents of file b.json'}]);
			return actual;
		});
	});
});

describe('Simple tests', function(){
	it('should include .coffee files if coffee-script has been required', function() {
		require('coffee-script');
		return Promise.all(requireDir('./simple')).then(function(actual) {
			actual.should.deep.equal([
				{file: 'a.js', contents: 'Content for file a.js'}, 
				{file: 'b.json', contents: 'These are the contents of file b.json'},
				{file: 'c.coffee', contents: 'c'}
			]);
			return actual;
		});
	});
});

