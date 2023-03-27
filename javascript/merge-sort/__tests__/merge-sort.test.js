'use strict';

const mergeSort = require('../merge-sort');

describe('Merge Sort Tests', () => {
  test('Returns a sorted array', () => {
    expect(mergeSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
  });
  test('Returns empty if array is empty', () => {
    expect(mergeSort([])).toEqual([]);
  });
  test('Returns an array sorted in numerical order with negatives', () => {
    expect(mergeSort([-10, 45, 23, 55, -5])).toEqual([-10, -5, 23, 45, 55]);
  });
});
