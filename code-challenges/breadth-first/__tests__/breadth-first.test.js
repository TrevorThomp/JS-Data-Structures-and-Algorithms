'use strict';

const {BinarySearchTree} = require('../../../data-structures/tree/tree');
// const {Queue} = require('../../../data-structures/stacksAndQueues/stacks-and-queues');
const breadthFirst = require('../breadth-first');

describe('Breadth First', () => {

  it('Should return items in order', () => {
    let tree = new BinarySearchTree(3);
    tree.add(2);
    tree.add(1);
    tree.add(3);
    tree.add(4);
    expect(breadthFirst(tree)).toEqual([3,2,4,1]);
  });

  it('Returns null if no tree', () => {
    let tree = new BinarySearchTree();
    expect(breadthFirst(tree)).toEqual([null]);
  });

  it('Returns value of a single node', () => {
    let tree = new BinarySearchTree(1);
    expect(breadthFirst(tree)).toEqual([1]);
  });


});