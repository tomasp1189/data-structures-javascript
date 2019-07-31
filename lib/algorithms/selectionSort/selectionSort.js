const compare = require('../utils/compare');
const swap = require('../utils/swap');

module.exports = function selectionSort(array, comparator) {
  for (let i = 0; i < array.length; i++) {
    let smallestIndex = i;
    for (let j = i; j < array.length - 1; j++) {
      const comparisonResult = comparator
        ? comparator(array[j], array[j + 1])
        : compare(array[j], array[j + 1]);
      if (comparisonResult === 1) {
        smallestIndex = j + 1;
      }
    }
    if (i !== smallestIndex) swap(array, i, smallestIndex);
  }

  return array;
};
