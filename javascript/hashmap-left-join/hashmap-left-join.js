'use strict';

function leftJoin(hash1, hash2){
  let result = [];
  hash1.forEach((value, key) =>{
    if (hash2.has(key)){
      result.push([key, hash1.get(key), hash2.get(key)]);
    } else {
      result.push([key, hash1.get(key), null]);
    }
  });

  return result;
}

module.exports = leftJoin;
