'use strict';

const insertionSort = require('../insertionSort');

describe('Insertion Sort', () => {

  it('Should sort array', () => {
    const array = [8,4,23,42,16,15];
    const sortedArray = insertionSort(array);
    expect(sortedArray).toEqual([4,8,15,16,23,42]);
  });

  it('Returns error when no array', () => {
    const sortedArray = insertionSort();
    expect(sortedArray).toBe('Invalid Argument');
  });

  it('Returns error array is empty', () => {
    const array = [];
    const sortedArray = insertionSort(array);
    expect(sortedArray).toBe('Empty Array');
  });
});