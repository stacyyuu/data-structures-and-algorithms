"use strict";

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

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this.head;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      return this.head;
    }
  }

  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    // check the head to see if it's our value
    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return this.head;
      } else {
        current = current.next;
      }
    }
    return this.head;
    // return list here
  }

  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;
    while (current) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return this.head;
      } else {
        current = current.next;
      }
    }
    return this.head;
    // return list here
  }
}

module.exports = LinkedList;
