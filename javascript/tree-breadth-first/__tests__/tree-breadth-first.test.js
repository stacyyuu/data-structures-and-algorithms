'use strict';
const { BinaryTree, BTNode } = require('../tree-breadth-first');

describe('Breadth First Tests', () => {
  test('Can successfully return a collection from a breadthFirst traversal', () => {
    const tree = new BinaryTree(new BTNode( 1, new BTNode(7, new BTNode(2), new BTNode(6, new BTNode(3), new BTNode(11))), new BTNode(9, undefined, new BTNode(9, new BTNode(5)))));
    expect(tree.breadthFirst()).toEqual([1, 7, 9, 2, 6, 9, 3, 11, 5]);
  });
  test('Can successfully return a collection from a breadthFirst traversal', () => {
    const tree = new BinaryTree(new BTNode( 5, new BTNode(10, new BTNode(8), new BTNode(9)), new BTNode(7, undefined, new BTNode(6))));
    expect(tree.breadthFirst()).toEqual([5, 10, 7, 8, 9, 6]);
  });
});
