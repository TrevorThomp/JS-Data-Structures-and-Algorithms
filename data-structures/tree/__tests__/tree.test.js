/* eslint-disable no-unused-vars */
'use strict';

const {BinaryTreeNode} = require('../tree');
const {BinaryTree} = require('../tree');
const {BinarySearchTree} = require('../tree');

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

  it('Returns preOrder array', () => {
    tree = new BinaryTree(nodeOne);
    tree.root.left = nodeTwo;
    tree.root.right = nodeThree;
    tree.root.left.left = nodeFour;
    tree.root.left.left.left = nodeFive;
    expect(tree.preOrder()).toEqual([1, 2, 4, 5, 3]);
  });

  it('Returns inOrder array', () => {
    tree = new BinaryTree(nodeOne);
    tree.root.left = nodeTwo;
    tree.root.right = nodeThree;
    tree.root.left.left = nodeFour;
    tree.root.left.left.left = nodeFive;
    expect(tree.inOrder()).toEqual([5, 4, 2, 1, 3]);
  });

  it('Returns postOrder array', () => {
    tree = new BinaryTree(nodeOne);
    tree.root.left = nodeTwo;
    tree.root.right = nodeThree;
    tree.root.left.left = nodeFour;
    tree.root.left.left.left = nodeFive;
    expect(tree.postOrder()).toEqual([5, 4, 2, 3, 1]);
  });
});

describe('Binary Search Tree', () => {

  it('Can insert value depending on value', () => {
    let BST = new BinarySearchTree(15);
    BST.add(13);
    expect(BST.root.left.val).toEqual(13);
    BST.add(17);
    expect(BST.root.right.val).toEqual(17);
  });

  it('Returns boolean if value is in tree', () => {
    let BST = new BinarySearchTree(15);
    BST.add(13);
    expect(BST.contains(13)).toBe(true);
    BST.add(17);
    expect(BST.contains(17)).toBe(true);
  });
});