/**
 * Write an algorithm that takes two strings and returns a boolean value indicating
 *  if the strings are anagrams. What is the time complexity of this algorithm?
 */

function charSort(string) {
  let sortedString = string
    .toLowerCase()
    .replace(/\s/gi, '')
    .split('');
  for (let i = 1; i < sortedString.length; i++) {
    const currentChar = sortedString[i];
    let j = i - 1;
    while (j >= 0 && sortedString[j] > currentChar) {
      sortedString[j + 1] = sortedString[j];
      j--;
    }
    sortedString[j + 1] = currentChar;
  }
  return sortedString;
}

// Sort strings alphabetically and compare char for char to make sure sorted words are identical.
function anagramsBruteForce(str1, str2) {
  const sortedStr1 = charSort(str1);
  const sortedStr2 = charSort(str2);
  if (sortedStr1.length !== sortedStr2.length) return false;
  let isAnagram = true;
  for (let i = 0; i < sortedStr1.length; i++) {
    isAnagram = isAnagram && sortedStr1[i] === sortedStr2[i];
  }
  return isAnagram;
}

function buildCharCounter(string) {
  const charCounter = {};
  for (let i = 0; i < string.length; i++) {
    if (!charCounter[string[i]]) charCounter[string[i]] = 1;
    charCounter[string[i]]++;
  }
  return charCounter;
}
function anagrams(str1, str2) {
  const cleanStr1 = str1.toLowerCase().replace(/\s/gi, '');
  const charCounter1 = buildCharCounter(cleanStr1);
  const cleanStr2 = str2.toLowerCase().replace(/\s/gi, '');
  const charCounter2 = buildCharCounter(cleanStr2);

  const charCounter1Keys = Object.keys(charCounter1);

  const isAnagram = charCounter1Keys.reduce(
    (result, key) => result && charCounter1[key] === charCounter2[key],
    true
  );

  return isAnagram;
}

module.exports = {
  anagrams,
  anagramsBruteForce
};
