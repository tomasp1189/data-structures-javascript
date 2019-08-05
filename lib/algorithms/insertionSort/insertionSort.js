let compare = require('../utils/compare');
// const swap = require('../utils/swap');

module.exports = function insertionSort(array, comparator) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    // shift the array one place to the right from index j and insert array[i]
    compare = comparator ? comparator : compare;
    while (j >= 0 && compare(array[j], current) === 1) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
};
// module.exports = function insertionSort(array, comparator) {
//   let sortedArray = [];
//   let spliceResult = [];
//   for (let i = 0; i < array.length; i++) {
//     let spliceIndex = 0;
//     for (let j = sortedArray.length - 1; j > -1; j--) {
//       // if (sortedArray.length === 0) sortedArray.push(array[i]);
//       const comparisonResult = comparator
//         ? comparator(array[i], sortedArray[j])
//         : compare(array[i], sortedArray[j]);
//       if (comparisonResult === 1) {
//         spliceIndex = j;
//       }
//     }
//     // shift the array one place to the right from index j and insert array[i]
//     spliceResult = sortedArray.splice(spliceIndex);
//     sortedArray.push(array[i]);
//     sortedArray = sortedArray.concat(spliceResult);
//   }
//   return sortedArray;
// };
