'use strict';
const Hashtable = require('../hashtable/hashtable');

function repeatedWord(str) {
  const words = str.toLowerCase().split(' ');
  const wordMap = new Map();

  for (let i = 0; i < words.length; i++) {
    if (wordMap.has(words[i])) {
      return words[i];
    } else {
      wordMap.set(words[i], i);
    }
  }
}

module.exports = repeatedWord;
