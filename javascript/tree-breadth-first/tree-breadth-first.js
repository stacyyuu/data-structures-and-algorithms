'use strict';
const Queue = require('../queues/queues');

class BTNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  breadthFirst(){
    if (!this.root) return;
    let queue = new Queue();
    let result = [];
    let node;

    queue.enqueue(this.root);

    while(!queue.isEmpty()){
      node = queue.dequeue();
      result.push(node.value);

      if(node.left) queue.enqueue(node.left);
      if(node.right) queue.enqueue(node.right);
    }
    return result;
  }
}

module.exports = {
  BinaryTree,
  BTNode
};
