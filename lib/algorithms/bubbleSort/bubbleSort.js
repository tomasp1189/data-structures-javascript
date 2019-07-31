const compare = require('../utils/compare');
const swap = require('../utils/swap');

/**
 * [9, 8, 7, 6, 5, 4, 3, 2, 1];
 *  i, j => i > j => swap
 * [8, 9, 7, 6, 5, 4, 3, 2, 1];
 *     i, j
 **/

module.exports = function bubbleSort(array, comparator) {
  for (let i = 0; i < array.length - 1; i++) {
    let swaps = 0;
    for (let j = 0; j < array.length - 1 - i; j++) {
      let compared = !!comparator
        ? comparator(array[j], array[j + 1])
        : compare(array[j], array[j + 1]);
      if (compared > 0) {
        swap(array, j, j+1);
        swaps++;
      }
    }
    // for optimization purposes:  if no swaps where made it means
    // that the array is sorted at this point.
    if (swaps === 0) break;
  }
  return array;
};
