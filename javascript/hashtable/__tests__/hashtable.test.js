'use strict';
const Hashtable = require('../hashtable');

describe('Hashtable Tests', () =>{
  let hashtable = new Hashtable();
  test('Sets a key/value to a hashtable', () => {
    hashtable.set('Maru', 1);
    hashtable.set('Stacy', 28);
    hashtable.set('Stacy', 29);
    expect(hashtable.size).toEqual(2);
  });
  test('Retrieves based on a key and returns value stored', () => {
    expect(hashtable.get('Maru')).toEqual(1);
  });
  test('Returns null for a key that does not exist in hashtable', () => {
    expect(hashtable.has('Miso')).toEqual(false);
  });
  test('Returns a list of all unique keys that exist in hashtable', () => {
    expect(hashtable.keys()).toEqual(['Maru', 'Stacy']);
  });
  test('Successfully handle a collision within hashtable', () => {
    hashtable.set('Reuben', 29);
    hashtable.set('Reuben', 30);
    expect(hashtable.get('Reuben')).toEqual(30);
    expect(hashtable.size).toEqual(3);
  });
  test('Successfully hash a key to an in-range value', () => {
    expect(hashtable.hash('Nori')).toEqual(8);
    expect(hashtable.hash('Bunny')).toEqual(4);
  });
});
