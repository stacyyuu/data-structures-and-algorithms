"use strict";

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    if (this.isEmpty()) {
      this.top = new Node(value);
    } else {
      let newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  pop() {
    if (this.isEmpty()) {
      return;
    } else {
      let current = this.top;
      let temp = current;
      current = current.next;
      temp.next = null;
      return temp.value;
    }
  }

  peek(){
    if (this.isEmpty()){
      return;
    } else {
      let current = this.top;
      return current.value;
    }
  }

  isEmpty(){
    return this.top === null;
  }
}


module.exports = Stack;
