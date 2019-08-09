describe('anagrams', () => {
  const expect = require('chai').expect;
  const { anagrams, anagramsBruteForce } = require('../anagrams/anagrams');

  describe('Brute Force approach', () => {
    it('should return true if the strings provided are anagrams', () => {
      let areAnagrams = anagramsBruteForce('listen', 'silent');
      expect(areAnagrams).equals(true);
      areAnagrams = anagramsBruteForce('fried', 'fired');
      expect(areAnagrams).equals(true);
      areAnagrams = anagramsBruteForce('gainly', 'laying');
      expect(areAnagrams).equals(true);
      areAnagrams = anagramsBruteForce('anagram', 'nag a ram');
      expect(areAnagrams).equals(true);
    });
    it('should return false if the strings provided are not anagrams', () => {
      let areAnagrams = anagramsBruteForce('great', 'laying');
      expect(areAnagrams).equals(false);
      areAnagrams = anagramsBruteForce('cheat', 'treat');
      expect(areAnagrams).equals(false);
    });
  });
  describe('Efficient approach', () => {
    it('should return true if the strings provided are anagrams', () => {
      let areAnagrams = anagrams('listen', 'silent');
      expect(areAnagrams).equals(true);
      areAnagrams = anagrams('fried', 'fired');
      expect(areAnagrams).equals(true);
      areAnagrams = anagrams('gainly', 'laying');
      expect(areAnagrams).equals(true);
      areAnagrams = anagramsBruteForce('anagram', 'nag a ram');
      expect(areAnagrams).equals(true);
    });
    it('should return false if the strings provided are not anagrams', () => {
      let areAnagrams = anagrams('great', 'laying');
      expect(areAnagrams).equals(false);
      areAnagrams = anagrams('cheat', 'treat');
      expect(areAnagrams).equals(false);
    });
  });
});
