'use strict';

var mocha = require('mocha');
var assert = require('chai').assert;

var CI = require('./lib/ci.js');

describe('CI', function() {
	describe('#Version()', function () {
		it('Should be 0.0.0 when run on the local system', function(){
			var version = new CI().GetVersion();
			assert.equal('0.0.0', version);
		});

		it('Should be 0.0.0 when run on the local system', function(){
			var version = new CI(undefined, undefined, undefined).GetVersion();
			assert.equal('0.0.0', version);
		});

		it('Should be 0.0.1 when non release build has a build number.', function(){
			var version = new CI('false', 'master', '1').GetVersion();
			assert.equal('0.0.1', version);
		});

		it('Should be 0.0.1 when non release build has a build number.', function(){
			var version = new CI(undefined, 'master', '1').GetVersion();
			assert.equal('0.0.1', version);
		});

		it('Should match release branch with 1 values.', function(){
			var version = new CI('false', 'release/0', '1').GetVersion();
			assert.equal('0.1.0', version);
		});

		it('Should match release branch with 2 values.', function(){
			var version = new CI('false', 'release/1.0', '1').GetVersion();
			assert.equal('1.0.1', version);
		});

		//versions with 4 digits are not supported.
		it('Should match release branch with 3 values.', function(){
			var version = new CI('false', 'release/2.0.3', '1').GetVersion();
			assert.equal('2.0.3', version);
		});
		
		it('Should be pull request based build number.', function(){
			var version = new CI('10', 'master', '1').GetVersion();
			assert.equal('0.10.1', version);
		});

		it('Should be pull request based build number.', function(){
			var version = new CI('10', 'release/1.0', '1').GetVersion();
			assert.equal('0.10.1', version);
		});

		it('Should be 0.0.1 when non release build has a build number.', function(){
			var version = new CI('false', 'refs/heads/master', '1').GetVersion();
			assert.equal('0.0.1', version);
		});

		it('Should be 0.0.1 when non release build has a build number.', function(){
			var version = new CI(undefined, 'refs/heads/master', '1').GetVersion();
			assert.equal('0.0.1', version);
		});

		it('Should match release branch with 1 values.', function(){
			var version = new CI('false', 'refs/heads/release/0', '1').GetVersion();
			assert.equal('0.1.0', version);
		});

		it('Should match release branch with 2 values.', function(){
			var version = new CI('false', 'refs/heads/release/1.0', '1').GetVersion();
			assert.equal('1.0.1', version);
		});

		//versions with 4 digits are not supported.
		it('Should match release branch with 3 values.', function(){
			var version = new CI('false', 'refs/heads/release/2.0.3', '1').GetVersion();
			assert.equal('2.0.3', version);
		});

		it('Should be pull request based build number.', function(){
			var version = new CI('10', 'refs/heads/master', '1').GetVersion();
			assert.equal('0.10.1', version);
		});
		
		it('Should be pull request based build number.', function(){
			var version = new CI('10', 'refs/heads/release/1.0', '1').GetVersion();
			assert.equal('0.10.1', version);
		});
	});
});
