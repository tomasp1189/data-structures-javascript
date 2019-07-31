module.exports = function compare(value1, value2) {
  if (value1 === value2) return 0;
  if (value1 > value2) return 1;
  return -1;
}