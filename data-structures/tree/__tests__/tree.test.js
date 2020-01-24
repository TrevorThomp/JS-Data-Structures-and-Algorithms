/* eslint-disable no-unused-vars */
'use strict';

const {BinaryTreeNode} = require('../tree');
const {BinaryTree} = require('../tree');

describe('Binary Tree', () => {

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
    let tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });

  it('Inserts one root node', () => {
    // let node = new BinaryTreeNode(1);
    let tree = new BinaryTree(nodeTwo);
    expect(tree.root.val).toEqual(2);
  });





})