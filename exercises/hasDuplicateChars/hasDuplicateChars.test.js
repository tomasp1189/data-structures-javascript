describe('hasDuplicateChars', () => {
  const expect = require('chai').expect;
  const {
    hasDuplicateChars,
    hasDuplicateCharsBruteForce
  } = require('./hasDuplicateChars');

  describe('Brute Force approach', () => {
    it('should return true is the string provided has a repeated char', () => {
      const hasDuplicateChar = hasDuplicateCharsBruteForce('anaconda');
      expect(hasDuplicateChar).equals(true);
    });
    it('should return false is the string provided has a repeated char', () => {
      const hasDuplicateChar = hasDuplicateCharsBruteForce('great');
      expect(hasDuplicateChar).equals(false);
    });
  });
  describe('Efficient approach', () => {
    it('should return true is the string provided has a repeated char', () => {
      const hasDuplicateChar = hasDuplicateChars('anaconda');
      expect(hasDuplicateChar).equals(true);
    });
    it('should return false is the string provided has a repeated char', () => {
      const hasDuplicateChar = hasDuplicateChars('great');
      expect(hasDuplicateChar).equals(false);
    });
  });
});
