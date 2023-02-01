const { BinaryTree, BST }= require('../trees');
// const tree = new BinaryTree(new Node( 1, new Node(7, new Node(2), new Node(6, new Node(3), new Node(11))), new Node(9, undefined, new Node(9, new Node(5)))));
// Can successfully instantiate an empty tree
// Can successfully instantiate a tree with a single root node
// For a Binary Search Tree, can successfully add a left child and right child properly to a node
// Can successfully return a collection from a preorder traversal
// Can successfully return a collection from an inorder traversal
// Can successfully return a collection from a postorder traversal
// Returns true	false for the contains method, given an existing or non-existing node value

describe('Binary Tree tests', () => {
  test('Can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree).toEqual({root: null});
  });
  test('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinaryTree(2);
    expect(tree).toEqual({root: 2});
  });
  test('For BST, can successfully add a left child and right child properly to a node', () => {
    let bst = new BST();
    bst.add(10);
    bst.add(15);
    expect(bst.root).toEqual({value: 10, left: null, right: { value: 15, left: null, right: null }});
  });
  test('Can successfully return a collection from a preorder traversal', () => {
    const tree = new BinaryTree({value: 10, left: { value: 8, right: { value: 15, left: { value: 12, left: null, right: null} }}, right: { value: 16, left: null, right: null}});
    expect(tree.preOrder()).toEqual([10, 8, 15, 12, 16]);
  });
  test('Can successfully return a collection from a inorder traversal', () => {
    const tree = new BinaryTree({value: 10, left: { value: 8, right: { value: 15, left: { value: 12, left: null, right: null} }}, right: { value: 16, left: null, right: null}});
    expect(tree.inOrder()).toEqual([8, 12, 15, 10, 16]);
  });
  test('Can successfully return a collection from a postorder traversal', () => {
    const tree = new BinaryTree({value: 10, left: { value: 8, right: { value: 15, left: { value: 12, left: null, right: null} }}, right: { value: 16, left: null, right: null}});
    expect(tree.postOrder()).toEqual([12, 15, 8, 16, 10]);
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
});
