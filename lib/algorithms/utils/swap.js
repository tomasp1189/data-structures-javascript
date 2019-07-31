module.exports = function swap(array, x, y) {
  let temp = array[y];
  array[y] = array[x];
  array[x] = temp;
};
