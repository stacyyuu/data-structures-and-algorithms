'use strict';
const treeIntersection = require('../tree-intersection');
const { BinaryTree, BTNode } = require('../../trees/trees');

describe('Tree Intersection Tests', () => {
  test('Returns values found in both trees', () => {
    const tree1 = new BinaryTree();
    tree1.root = new BTNode(2);
    tree1.root.left = new BTNode(6);
    tree1.root.left.left = new BTNode(12);
    tree1.root.left.right = new BTNode(16);
    tree1.root.right = new BTNode(4);

    const tree2 = new BinaryTree();
    tree2.root = new BTNode(3);
    tree2.root.left = new BTNode(9);
    tree2.root.right = new BTNode(6);
    tree2.root.right.left = new BTNode(12);
    tree2.root.right.right = new BTNode(18);
    expect(treeIntersection(tree1, tree2)).toEqual([12, 6]);
  });
  test('Returns empty if trees are empty', () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();

    expect(treeIntersection(tree1, tree2)).toEqual(([]));
  });
  test('Returns empty if no values match', () => {
    const tree1 = new BinaryTree();
    tree1.root = new BTNode(2);
    tree1.root.left = new BTNode(6);
    tree1.root.left.left = new BTNode(12);
    tree1.root.left.right = new BTNode(16);
    tree1.root.right = new BTNode(4);

    const tree2 = new BinaryTree();
    tree2.root = new BTNode(3);
    tree2.root.left = new BTNode(9);
    tree2.root.right = new BTNode(30);
    tree2.root.right.left = new BTNode(24);
    tree2.root.right.right = new BTNode(18);

    expect(treeIntersection(tree1, tree2)).toEqual(([]));
  });
  test('Returns values found in both smaller trees', () => {
    const tree1 = new BinaryTree();
    tree1.root = new BTNode(2);
    tree1.root.left = new BTNode(6);
    tree1.root.right = new BTNode(4);

    const tree2 = new BinaryTree();
    tree2.root = new BTNode(3);
    tree2.root.left = new BTNode(9);
    tree2.root.right = new BTNode(6);

    expect(treeIntersection(tree1, tree2)).toEqual([6]);
  });
});
