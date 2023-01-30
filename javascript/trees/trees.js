'use strict';

class BTNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  // root >> left >> right
  preOrder(root) {
    let orderedArray = [];
    traverse(root);
    function traverse(root) {
      let currentNode = root;
      if (currentNode) {
        orderedArray.push(currentNode.value);
      }
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
    }
    return orderedArray;
  }

  // left >> root >> right
  inOrder(root) {
    let orderedArray = [];
    traverse(root);
    function traverse(root) {
      let currentNode = root;
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode) {
        orderedArray.push(currentNode.value);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
    }
    return orderedArray;
  }

  // left >> right >> root
  postOrder(root) {
    let orderedArray = [];
    traverse(root);
    function traverse(root) {
      let currentNode = root;
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
      if (currentNode) {
        orderedArray.push(currentNode.value);
      }
    }
    return orderedArray;
  }
}

class BSTNode extends Node {
  add(value) {
    if (value === this.value) {
      // cannot contain same value
      return;
    } else if (value > this.value) {
      // check right, greater than goes on right
      if (!this.right) {
        this.right = new BSTNode(value);
      } else {
        this.right.add(value);
      }
    } else if (value < this.value) {
      // less than goes on left
      if (!this.left) {
        this.left = new BSTNode(value);
      } else {
        this.left.add(value);
      }
    }
  }

  // checks if tree contains value at least once
  contains(value) {
    if (value === this.value) {
      return true;
    } else if (value > this.value) {
      if (this.right) {
        this.right.contains(value);
      } else {
        return false;
      }
    } else if (value < this.value) {
      if (this.left) {
        this.left.contains(value);
      } else {
        return false;
      }
    }
  }
}
