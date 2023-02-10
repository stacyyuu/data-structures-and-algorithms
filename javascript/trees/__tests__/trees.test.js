const { BinaryTree, BST, BTNode } = require('../trees');

describe('Binary Tree tests', () => {
  test('Can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree).toEqual({ root: null });
  });
  test('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinaryTree(2);
    expect(tree).toEqual({ root: 2 });
  });
  test('For BST, can successfully add a left child and right child properly to a node', () => {
    let bst = new BST();
    bst.add(10);
    bst.add(15);
    expect(bst.root).toEqual({
      value: 10,
      left: null,
      right: { value: 15, left: null, right: null },
    });
  });
  test('Can successfully return a collection from a preorder traversal', () => {
    const tree = new BinaryTree(new BTNode( 1, new BTNode(7, new BTNode(2), new BTNode(6, new BTNode(3), new BTNode(11))), new BTNode(9, undefined, new BTNode(9, new BTNode(5)))));
    expect(tree.preOrder()).toEqual([1, 7, 2, 6, 3, 11, 9, 9, 5]);
  });
  test('Can successfully return a collection from a inorder traversal', () => {
    const tree = new BinaryTree(new BTNode( 1, new BTNode(7, new BTNode(2), new BTNode(6, new BTNode(3), new BTNode(11))), new BTNode(9, undefined, new BTNode(9, new BTNode(5)))));
    expect(tree.inOrder()).toEqual([2, 7, 3, 6, 11, 1, 9, 5, 9]);
  });
  test('Can successfully return a collection from a postorder traversal', () => {
    const tree = new BinaryTree(new BTNode( 1, new BTNode(7, new BTNode(2), new BTNode(6, new BTNode(3), new BTNode(11))), new BTNode(9, undefined, new BTNode(9, new BTNode(5)))));
    expect(tree.postOrder()).toEqual([2, 3, 11, 6, 7, 5, 9, 9, 1]);
  });
  test('Returns true for the contains method, given an existing or non-existing node value', () => {
    let bst = new BST();
    bst.add(12);
    bst.add(18);
    bst.add(16);
    expect(bst.contains(18)).toEqual(true);
  });
  test('Returns false for the contains method, given an existing or non-existing node value', () => {
    let bst = new BST();
    bst.add(12);
    bst.add(18);
    bst.add(16);
    expect(bst.contains(15)).toEqual(false);
  });
  test('Finds the max value in a Binary Tree', () => {
    const tree = new BinaryTree(new BTNode( 1, new BTNode(7, new BTNode(2), new BTNode(6, new BTNode(3), new BTNode(11))), new BTNode(9, undefined, new BTNode(9, new BTNode(5)))));
    expect(tree.findMax()).toEqual(11);
  });
});
