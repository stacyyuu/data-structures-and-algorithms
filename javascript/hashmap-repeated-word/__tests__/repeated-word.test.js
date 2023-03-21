'use strict';
const repeatedWord = require('../repeated-word');

describe('Repeated Word Tests', () => {
  test('Returns the first repeated string', () => {
    expect(repeatedWord('I like you and you like me')).toEqual('you');
  });
  test('Returns empty if the string is empty', () => {
    expect(repeatedWord('')).toEqual();
  });
  test('Returns empty if there is no repeated word', () => {
    expect(repeatedWord('I dig it')).toEqual();
  });
  test('Returns the first repeated string', () => {
    expect(
      repeatedWord(
        'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'
      )
    ).toEqual('it');
  });
});
