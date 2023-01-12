"use strict";

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    let newNode = new Node(value);
    if (this.isEmpty()){
      this.front = newNode;
      this.rear = newNode;
      return;
    }
    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue(){
    if (this.isEmpty()){
      return;
    } else {
      let current = this.front;
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
      return this.front.value;
    }
  }

  isEmpty(){
    return this.front === null;
  }
}


module.exports = Queue;
