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
*/
