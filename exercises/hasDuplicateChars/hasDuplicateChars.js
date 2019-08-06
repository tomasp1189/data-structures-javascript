/**
 * Write an algorithm which checks if there are duplicate characters in a string.
 * The method signature would look something like public boolean hasDuplicateChars(String s).
 * If we pass "anaconda" the method should return true (repeated char 'a').
 * If we pass 'great', the method should return false, because there are no
 * duplicate characters in the string. What is the time complexity of this algorithm?
 * If we know that the string contains ONLY ASCII characters, can we improve the algorithm?
 */

// O(nˆ2)
function hasDuplicateCharsBruteForce(word) {
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (i !== j && word[i] === word[j]) return true;
    }
  }
  return false;
}

// using object/dictionary/hash structure the algorithm is much faster
// O(n)
function hasDuplicateChars(word) {
  const charDictionary = {};
  for (let i = 0; i < word.length; i++) {
    // if its the first time the char has appeared we add a counter to the value and continue to the next
    if (!charDictionary[word[i]]) {
      charDictionary[word[i]] = 1;
      continue;
    }
    // if its the second time the char is found we return true;
    return true;
  }
  return false;
}

module.exports = { hasDuplicateCharsBruteForce, hasDuplicateChars };
