describe('Selection Sort', () => {
  const expect = require('chai').expect;
  const sinon = require('sinon');
  const selectionSort = require('./selectionSort');
  it('should use default comparator method if none is provided to sort array correctly', () => {
    const unsortedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    const sortedArray = selectionSort(unsortedArray);
    expect(sortedArray).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it('should use comparator method provided in constructor', () => {
    const unsortedArray = [
      { value: 9 },
      { value: 8 },
      { value: 7 },
      { value: 6 },
      { value: 5 },
      { value: 4 },
      { value: 3 },
      { value: 2 },
      { value: 1 }
    ];
    const comparator = sinon.fake.returns(1);
    selectionSort(unsortedArray, comparator);
    // 8+7+6+5+4+3+2+1 = 36 comparisons
    expect(comparator.callCount).to.equal(36);
  });
});
