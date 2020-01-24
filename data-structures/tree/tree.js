'use strict';

class BinaryTreeNode {
  constructor(val, left, right) {
    this.val = val || null;
    this.left = left || null;
    this.right = right || null;
  }
}

let node = new BinaryTreeNode();

class BinaryTree {
  constructor(node) {
    this.root = node || null;
  }

  preOrder() {
    let results = [];

    let recursive = node => {
      results.push(node.val);
      if (node.left) recursive(node.left);
      if (node.right) recursive(node.right);
    };
    recursive(this.root);
    return results;
  }

  inOrder() {
    let results = [];

    let recursive = node => {
      if (node.left) recursive(node.left);
      results.push(node.val);
      if (node.right) recursive(node.right);
    };
    recursive(this.root);
    return results;
  }

  postOrder() {
    let results = [];

    let recursive = node => {
      if (node.left) recursive(node.left);
      if (node.right) recursive(node.right);
      results.push(node.val);
    };
    recursive(this.root);
    return results;
  }

}


module.exports = {BinaryTreeNode, BinaryTree};