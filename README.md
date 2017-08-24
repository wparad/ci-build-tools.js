# CI Build Tools
Node NPM build tools library.

[![npm version](https://badge.fury.io/js/ci-build-tools.svg)](https://badge.fury.io/js/ci-build-tools) [![Build Status](https://travis-ci.org/wparad/ci-build-tools.js.svg?branch=master)](https://travis-ci.org/wparad/ci-build-tools.js)

## Support:
* Travis-CI
* JenkinsCI (Stash integration environment variables)

### Usage

```javascript
var ci = require('ci-build-tools')(process.env.GIT_TAG_PUSHER);

//Get the current version based on the branch name:
var version = ci.GetVersion();

//Automatically publish a tag with the current version to the git repository.
ci.PublishGitTag();

//Or
ci.PublishGitTag('tag-name.1.0.0-sha1');

//Automatically merge downstream branches (`release/*` or `master`) if the current branch is `release`.
ci.MergeDownstream('release/', 'master');
```

### Development
* Get Node:
	* `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash`
	* `nvm install [version]`
	* `npm install ci-build-tools`


### For Travis Integration
Update .travis.yml keys (replacing git_api_key and deployment_key)

* `apt-get install ruby-dev`
* `gem install travis`
* Setup [Travis-CI](https://travis-ci.org/profile/) build on the repository.
* (replace *git_api_key* with the key): `travis encrypt --add env.global GIT_TAG_PUSHER=git_api_key`
   * Create a Github api access key with the following access:
     * repo_deployment
     * public_repo
* (replace *deployment_key* with the key): `travis encrypt --add deploy.api_key deployment_key`
