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
				{fileName: 'a.js', contents: 'Contents of file a.js'}, 
				{fileName: 'b.json', contents: 'Contents of file b.json'}]);
			return actual;
		});
	});
});

describe('Simple tests', function(){
	it('should include .coffee files if coffee-script has been required', function() {
		require('coffee-script');
		return Promise.all(requireDir('./simple')).then(function(actual) {
			actual.should.deep.equal([
				{fileName: 'a.js', contents: 'Contents of file a.js'}, 
				{fileName: 'b.json', contents: 'Contents of file b.json'},
				{fileName: 'c.coffee', contents: 'Contents of file c.coffee'}
			]);
			return actual;
		});
	});
});

