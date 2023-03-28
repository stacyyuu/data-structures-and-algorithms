'use strict';

const leftJoin = require('../hashmap-left-join');

describe('Left Join Tests', () => {
  test('Returns an array with the combined key and corresponding values', () => {
    let hash1 = new Map();
    hash1.set('preserve', 'maintain');
    hash1.set('encourage', 'motivate');

    let hash2 = new Map();
    hash2.set('preserve', 'abolish');
    hash2.set('encourage', 'dissuade');

    expect(leftJoin(hash1, hash2)).toEqual([
      ['preserve', 'maintain', 'abolish'],
      ['encourage', 'motivate', 'dissuade'],
    ]);
  });
  test('Returns an array with the combined key and corresponding values or null if a key is not matching', () => {
    let hash1 = new Map();
    hash1.set('preserve', 'maintain');
    hash1.set('encourage', 'motivate');

    let hash2 = new Map();
    hash2.set('guide', 'follow');
    hash2.set('encourage', 'dissuade');

    expect(leftJoin(hash1, hash2)).toEqual([
      ['preserve', 'maintain', null],
      ['encourage', 'motivate', 'dissuade'],
    ]);
  });
  test('Returns an array with the combined null key and corresponding null values', () => {
    let hash1 = new Map();

    let hash2 = new Map();

    expect(leftJoin(hash1, hash2)).toEqual([]);
  });
});
