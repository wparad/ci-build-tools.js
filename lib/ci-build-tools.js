#!/usr/bin/env node
'use strict';

var CI = require('./ci.js');
var Builder = require('./builder.js')


function GetTravis(builder) {
	return new CI(process.env.TRAVIS_PULL_REQUEST, process.env.TRAVIS_BRANCH, process.env.TRAVIS_BUILD_NUMBER, builder)
};

function GetJenkinsAndStash(builder) {
	return new CI(process.env.STASH_PULL_REQUEST, process.env.TRAVIS_BRANCH, process.env.BUILD_NUMBER, builder)
};

module.exports = function(service_user){
	var builder = new Builder(service_user || process.env.USER);
	if(process.env.TRAVIS) {
		return GetTravis(builder);
	}
	else if (process.env.STASH_REF) {
		return GetJenkinsAndStash(builder);
	}
	else {
		return new CI();
	}
};