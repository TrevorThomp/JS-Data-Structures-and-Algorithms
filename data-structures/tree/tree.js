'use strict';

class BinaryTreeNode {
  constructor(val, left, right) {
    this.val = val || null;
    this.left = left || null;
    this.right = right || null;
  }
}

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

class BinarySearchTree {
  constructor(value) {
    this.root = new BinaryTreeNode(value);
    this.count = 0;
  }

  add(value) {
    this.count++;

    let newNode = new BinaryTreeNode(value);

    const searchTree = node => {
      if(value < node.val) {
        if(!node.left) {

          node.left = newNode;
        } 
        else {
          searchTree(node.left);
        }   
      }
  
      else if (value > node.val) {
        if (!node.right) {
          node.right = newNode;
        }
        else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.val) {
        return true;
      }
      if (value < currentNode.val) {
        currentNode = currentNode.left;
      }
      else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

}

module.exports = {BinaryTreeNode, BinaryTree, BinarySearchTree};