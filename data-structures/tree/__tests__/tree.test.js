/* eslint-disable no-unused-vars */
'use strict';

const {BinaryTreeNode} = require('../tree');
const {BinaryTree} = require('../tree');

describe('Binary Tree', () => {

  let tree;

  let nodeOne;
  let nodeTwo;
  let nodeThree;
  let nodeFour;
  let nodeFive;
  let nodeSix;

  beforeEach(() => {
    nodeOne = new BinaryTreeNode(1);
    nodeTwo = new BinaryTreeNode(2);
    nodeThree = new BinaryTreeNode(3);
    nodeFour = new BinaryTreeNode(4);
    nodeFive = new BinaryTreeNode(5);
    nodeSix = new BinaryTreeNode(6);
  });

  it('Instantiate empty tree', () => {
    tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });

  it('Inserts one root node', () => {
    tree = new BinaryTree(nodeTwo);
    expect(tree.root.val).toEqual(2);
  });

  it('Add left and right children to node', () => {
    tree = new BinaryTree(nodeOne);
    tree.root.left = nodeTwo;
    tree.root.right = nodeThree;
    expect(tree.root.left.val).toEqual(2);
    expect(tree.root.right.val).toEqual(3);
  });



})