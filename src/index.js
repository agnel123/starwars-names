// this is commonjs syntax. This is the object that get's required in if moduleis used.

var unique = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');

// all, random - public API points.
module.exports = {
  all: starWarsNames,
  random: unique(starWarsNames);
};


/*
  Keep your npm version and Githib versions up-to-date
  by adding a git-tag to your repo.
  A tag points to a particular commit.

  Version conventions

  1.0.0
  1, would be changed to two if we make breaking changes like method name changes.
  first 0, is a minor release, new features, but no breaking changes.
  second 0, is for patch releases, bug fixes etc.
*/
