'use strict';

const {BinarySearchTree} = require('../../../data-structures/tree/tree');
const maximum = require('../maximum');

describe('Maximum Value', () => {

  it('Returns maximum value in tree', () => {
    let BT = new BinarySearchTree(10);
    BT.add(6);
    BT.add(30);
    BT.add(9);
    BT.add(20);
    expect(maximum(BT)).toStrictEqual(30);
  });

  it('Returns null when no root', () => {
    let BT = new BinarySearchTree();
    expect(maximum(BT)).toBeNull();
  });

  it('Returns root as max value if no children', () => {
    let BT = new BinarySearchTree(6);
    expect(maximum(BT)).toStrictEqual(6);
  })

});