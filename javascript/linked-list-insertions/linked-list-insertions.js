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

  append(value){
    let newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next){
      current = current.next;
    }
    current.next = newNode;
  }

  insertBefore(value, newValue){
    if (this.head === newValue){
      let current = new Node(value);
      current.next = this.head;
      this.head = current;
    } else {
      while (this.head !== null){
        if (this.head.value === newValue){
          let current = new Node(value);
          current.next = newValue.next;
          newValue.next = current;
        }
      }
    }
  }

  insertAfter(value, newValue){
    if (newValue === null){
      newValue = new Node(value);
      return;
    }

    let current = new Node(value);
    current.next = newValue.next;
    newValue.next = current;
  }
}
