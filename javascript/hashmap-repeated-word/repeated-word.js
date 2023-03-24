'use strict';

function repeatedWord(str) {
  const words = str.toLowerCase().split(' ');
  const wordMap = new Map();

  for (let i = 0; i < words.length; i++) {
    if (wordMap.has(words[i])) {
      return words[i];
    } else {
      wordMap.set(words[i], 1);
    }
  }
}

module.exports = repeatedWord;
