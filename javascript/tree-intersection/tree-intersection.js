'use strict';

function treeIntersection(tree1, tree2) {
  let result = [];
  const treeMap = new Map();

  let _walk = (node) => {
    if (node === null) return;
    if (node.left) _walk(node.left);

    if (treeMap.has(node.value)) {
      result.push(node.value);
    } else {
      treeMap.set(node.value, 1);
    }

    if (node.right) _walk(node.right);
  };

  _walk(tree1.root);
  _walk(tree2.root);
  
  return result;
}

module.exports = treeIntersection;
