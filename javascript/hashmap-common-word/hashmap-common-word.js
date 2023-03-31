'use strict';

function commonWord(str) {
  const words = str.toLowerCase().split(' ');
  const wordMap = new Map();
  let max = 0;
  let result;

  for (let i = 0; i < words.length; i++) {
    if (wordMap.has(words[i])) {
      wordMap.set(words[i], wordMap.get(words[i]) + 1);
    } else {
      wordMap.set(words[i], 1);
    }
  }

  for (let i = 0; i < words.length; i++) {
    let current = wordMap.get(words[i]);
    if (current > max) {
      max = current;
      result = words[i];
    }
  }

  return result;
}

module.exports = commonWord;
