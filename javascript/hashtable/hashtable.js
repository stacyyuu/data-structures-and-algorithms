'use strict';

class Hashtable {
  constructor() {
    this.table = new Array(10);
    this.size = 0;
  }

  set(key, value) {
    const index = this.hash(key);
    if (this.has(key)) {
      this.table[index][1] = value;
    } else {
      this.table[index] = [key, value];
      this.size++;
    }
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index][1];
  }

  has(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      return true;
    } else {
      return false;
    }
  }

  keys() {
    const keys = [];
    for (let bucket of this.table) {
      if (bucket) {
        keys.push(bucket[0]);
        // push item at index 0 of the key/value pairs, aka keys
      }
    }
    return keys;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
}

module.exports = Hashtable;
