'use strict';

/**
 * @class
 * @description Node to be inserted into Binary Tree
 */
class BinaryTreeNode {
  constructor(val, left, right) {
    this.val = val || null;
    this.left = left || null;
    this.right = right || null;
  }
}

/**
 * @class
 * @description Binary Tree Class
 */
class BinaryTree {
  constructor(node) {
    this.root = node || null;
  }

  /**
   * @description Returns array of current nodes in tree in preOrder
   */
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

  /**
   * @description Returns array of current nodes in tree in inOrder
   */
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

  /**
   * @description Returns array of current nodes in tree in postOrder
   */
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

/**
 * @class
 * @description Binary Search Tree Class
 */
class BinarySearchTree {
  constructor(value) {
    this.root = new BinaryTreeNode(value);
    this.count = 0;
  }

  /**
   * @description Inserts new node in tree based on value
   * @param {*} value 
   */
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

  /**
   * @description Returns boolean if tree contains node
   * @param {*} value 
   */
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