// this is commonjs syntax. This is the object that get's required in if moduleis used.

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var _starwarsNamesJson = require('./starwars-names.json');

var _starwarsNamesJson2 = _interopRequireDefault(_starwarsNamesJson);

var getRandomItem = (0, _uniqueRandomArray2['default'])(_starwarsNamesJson2['default']);

// all, random - public API points.
module.exports = {
  all: _starwarsNamesJson2['default'],
  random: random
};

function random(number) {
  if (!number) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
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
