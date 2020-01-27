'use strict';

const fizzBuzz = require('../fizz-buzz-tree');
const {BinarySearchTree} = require('../../../data-structures/tree/tree');

describe('Fizz Buzz Tree', () => {

  let BST;

  beforeEach(() => {
    BST = new BinarySearchTree(6);
  })

  it('Should replace value divisible by 3 to Fizz', () => {
    let fizz = fizzBuzz(BST);
    expect(fizz.root.val).toBe('Fizz');
  });

  it('Should replace value divisible by 5 to Buzz', () => {
    BST.add(10);
    let fizz = fizzBuzz(BST);
    expect(fizz.root.right.val).toBe('Buzz');
  });

  it('Should replace value divisible by both with FizzBuzz', () => {
    let FizzTree = new BinarySearchTree(15);
    let fizz = fizzBuzz(FizzTree);
    expect(fizz.root.val).toBe('FizzBuzz')
  });
})