'use strict';

/**
 * Loops until end of tree returning maximum value
 * @param {object} tree 
 */
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