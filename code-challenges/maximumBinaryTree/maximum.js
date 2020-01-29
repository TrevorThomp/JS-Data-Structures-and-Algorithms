'use strict';

const {BinarySearchTree} = require('../../data-structures/tree/tree');

function maximum(tree) {
  if(!tree.root) {
    return null;
  }

  let currentNode = tree.root;

  while (currentNode.right) {
    currentNode = currentNode.right;
  }
  return currentNode.val;
}

module.exports = maximum;