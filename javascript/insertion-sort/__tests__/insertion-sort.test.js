'use strict';

const insertionSort = require('../insertion-sort');

describe('Insertion Sort Tests', () => {
  test('Returns an array sorted in numerical order', () => {
    expect(insertionSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
  });
  test('Returns empty if array is empty', () => {
    expect(insertionSort([])).toEqual([]);
  });
  test('Returns an array sorted in numerical order with negatives', () => {
    expect(insertionSort([-10, 45, 33, 23, 55, -5])).toEqual([-10, -5, 23, 33, 45, 55]);
  });
});
