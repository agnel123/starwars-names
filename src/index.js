// this is commonjs syntax. This is the object that get's required in if moduleis used.

var unique = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');

// all, random - public API points.
module.exports = {
  all: starWarsNames,
  random: unique(starWarsNames);
};
