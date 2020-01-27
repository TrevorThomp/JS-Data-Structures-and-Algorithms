'use strict';

const {BinarySearchTree} = require('../../data-structures/tree/tree');



function fizzBuzz(val) {
  if (val % 15 === 0) {
    return 'FizzBuzz';
  } else if (val % 5 === 0) {
    return 'Buzz';
  } else if (val % 3 === 0) {
    return 'Fizz';
  } else {
    return val;
  }
}

function fizzBuzzTreeBuzz(tree) {
  let recursive = node => {
    if (node.left) recursive(node.left);
    node.val = fizzBuzz(node.val);
    if (node.right) recursive(node.right);
  };
  recursive(tree.root);
  return tree;
}

module.exports = fizzBuzzTreeBuzz;