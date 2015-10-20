import {expect} from 'chai';
import starWars from './index';

describe('starwars-namesey', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every((item) => {
          return typeof item == 'string';
        });
      }
    });

    it('should contain the name Luke Skywalker', () => {
      expect(starWars.all).to.include('Luke Skywalker');
    });
  });

  describe('random', () => {
    it('should return a random name from starwars.all', () => {
      var randomName = starWars.random();
      expect(starWars.all).to.include(randomName);
    });

    it('should return an array of items if passed a number', () => {
      var randomItems = starWars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach((item) => {
        expect(starWars.all).to.include(item);
      });
    });
  });
});
