'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  kthFromEnd(k){
    let length = 0;
    let current = this.head;
    while (current){
      current = current.next;
      length++;
    }
    if (k > length || k < 0){
      return undefined;
    }
    current = this.head;
    for (let i = 1; i < length - k + 1; i++){
      current = current.next;
      return current.value;
    }
  }
}

module.exports = LinkedList;
