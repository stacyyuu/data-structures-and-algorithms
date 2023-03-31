'use strict';
const commonWord = require('../hashmap-common-word');

describe('Common Word Tests', () => {
  test('Returns the most common used string', () => {
    expect(commonWord('Taco cat ate a taco')).toEqual('taco');
  });
  test('Returns the first occurance if no common strings', () => {
    expect(commonWord('Cat ate a taco')).toEqual('cat');
  });
  test('Returns empty if string input is empty', () => {
    expect(commonWord('')).toEqual('');
  });
  test('Returns the most common used string', () => {
    expect(commonWord('In a galaxy far far away')).toEqual('far');
  });
});
