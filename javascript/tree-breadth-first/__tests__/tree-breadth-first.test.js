'use strict';
const BinaryTree = require('../tree-breadth-first');

describe('Breadth First Tests', () => {
  test('Can successfully return a collection from a inorder traversal', () => {
    const tree = new BinaryTree(new BTNode( 1, new BTNode(7, new BTNode(2), new BTNode(6, new BTNode(3), new BTNode(11))), new BTNode(9, undefined, new BTNode(9, new BTNode(5)))));
    expect(tree.breadthFirst()).toEqual();
  });
});
