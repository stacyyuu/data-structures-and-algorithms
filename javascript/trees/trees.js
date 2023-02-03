'use strict';

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

  // root >> left >> right
  preOrder() {
    let result = [];

    // helper function
    let _walk = (node) => {
      // process node in some way
      result.push(node.value);

      // check left side
      if (node.left) _walk(node.left);

      // check right side
      if (node.right) _walk(node.right);
      return;
    };

    _walk(this.root);
    return result;
  }

  // left >> root >> right
  inOrder() {
    let result = [];

    // helper function
    let _walk = (node) => {
      // check left side
      if (node.left) _walk(node.left);

      // process node in some way
      result.push(node.value);

      // check right side
      if (node.right) _walk(node.right);
      return;
    };

    _walk(this.root);
    return result;
  }

  // left >> right >> root
  postOrder() {
    let result = [];

    // helper function
    let _walk = (node) => {
      // check left side
      if (node.left) _walk(node.left);

      // check right side
      if (node.right) _walk(node.right);

      // process node in some way
      result.push(node.value);
      return;
    };

    _walk(this.root);
    return result;
  }

  findMax() {
    if (!this.root) {
      return;
    }

    let max = this.root.value;

    let _walk = (node) => {
      if (node.value > max) {
        max = node.value;
      }

      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    return max;
  }
}

class BST extends BinaryTree {
  constructor(root) {
    super(root);
  }

  add(value) {
    let newNode = new BTNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      // traverse bst - currentNode, newNode
      _walk(this.root, newNode);
    }
    // helper function
    function _walk(current, newNode) {
      if (newNode.value < current.value) {
        // if we have left, check that node value
        if (current.left) _walk(current.left, newNode);
        // if not, put the node there
        else current.left = newNode;
      }
      if (newNode.value > current.value) {
        // if we have right, check that node value
        if (current.right) _walk(current.right, newNode);
        // if not, put the node there
        else current.right = newNode;
      }
      return;
    }
  }

  // checks if tree contains value at least once
  contains(value) {
    if (!this.root) return false;
    return _walk(this.root, value);

    function _walk(current, number) {
      if (number === current.value) {
        return true;
      }
      if (number > current.value) {
        if (current.right) {
          return _walk(current.right, number);
        } else {
          return false;
        }
      }
      if (number < current.value) {
        if (current.left) {
          return _walk(current.left, number);
        } else {
          return false;
        }
      }
    }
  }
}

module.exports = {
  BinaryTree,
  BST,
  BTNode,
};
